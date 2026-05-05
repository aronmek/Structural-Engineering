import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { marked } from 'marked';
import renderMathInElement from 'katex/contrib/auto-render';
import { BookOpen, Menu, Moon, Printer, Search, Sun } from 'lucide-react';
import { bookFiles, buildChapterIndex, slugify, stripMarkdown, type Chapter } from './content';
import { ChapterExam } from './ChapterExam';
import { GeometryVisuals } from './GeometryVisuals';
import { findMathEntries, type MathGlossaryEntry } from './mathGlossary';
import { WhyPanels } from './WhyPanels';
import { ShabbosOverlay, useShabbosMode } from './ShabbosOverlay';

marked.use({
  gfm: true,
  breaks: false,
  renderer: {
    heading(token: any, level?: number, raw?: string) {
      const text = typeof token === 'string' ? token : token.text || token.raw || '';
      const rawText = typeof token === 'string' ? raw || text : token.raw || text;
      const depth = typeof token === 'string' ? level || 2 : token.depth || 2;
      const id = slugify(rawText || text);
      return `<h${depth} id="${id}">${text}</h${depth}>`;
    },
  },
});

function chapterMarkdown(fileId: string, slug: string) {
  const file = bookFiles.find(item => item.id === fileId) ?? bookFiles[0];
  if (!slug) return file.markdown;
  const lines = file.markdown.replace(/\r\n?/g, '\n').split('\n');
  const headingIndex = lines.findIndex(line => /^#{1,2}\s+/.test(line) && slugify(line.replace(/^#{1,2}\s+/, '')) === slug);
  if (headingIndex < 0) return file.markdown;
  const level = lines[headingIndex].match(/^#+/)?.[0].length ?? 2;
  const nextIndex = lines.findIndex((line, index) => index > headingIndex && /^#{1,2}\s+/.test(line) && (line.match(/^#+/)?.[0].length ?? 2) <= level);
  return lines.slice(headingIndex, nextIndex < 0 ? undefined : nextIndex).join('\n');
}

function groupedChapters(chapters: Chapter[]) {
  return chapters.reduce<Record<string, Chapter[]>>((groups, chapter) => {
    groups[chapter.part] = groups[chapter.part] || [];
    groups[chapter.part].push(chapter);
    return groups;
  }, {});
}

type MarkdownSection = {
  anchor: string;
  html: string;
};

type MathTooltipState = {
  entries: MathGlossaryEntry[];
  left: number;
  top: number;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderMarkdown(markdown: string) {
  const mathSpans: string[] = [];
  const protectedMarkdown = markdown.replace(/\$\$[\s\S]+?\$\$|\$(?:\\.|[^$\n])+?\$/g, match => {
    const token = `@@MATH${mathSpans.length}@@`;
    mathSpans.push(match);
    return token;
  });
  let html = marked.parse(protectedMarkdown) as string;
  mathSpans.forEach((math, index) => {
    html = html.replace(`@@MATH${index}@@`, escapeHtml(math));
  });
  return html;
}

function markdownSections(markdown: string): MarkdownSection[] {
  const sections: Array<{ anchor: string; markdown: string }> = [];
  const lines = markdown.replace(/\r\n?/g, '\n').split('\n');
  let buffer: string[] = [];
  let anchor = 'chapter-opening';

  function flush() {
    if (!buffer.length) return;
    sections.push({ anchor, markdown: buffer.join('\n') });
  }

  for (const line of lines) {
    const sectionHeading = line.match(/^###\s+(.+)$/);
    if (sectionHeading) {
      flush();
      anchor = slugify(stripMarkdown(sectionHeading[1]));
      buffer = [line];
    } else {
      buffer.push(line);
    }
  }
  flush();

  return sections.map((section) => ({
    anchor: section.anchor,
    html: renderMarkdown(section.markdown),
  }));
}

export function App() {
  const chapters = useMemo(() => buildChapterIndex(), []);
  const firstChapter = chapters[0];
  const [current, setCurrent] = useState<Chapter>(firstChapter);
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('se-theme') || 'light');
  const contentRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const tooltipHideTimerRef = useRef<number | undefined>(undefined);
  const [mathTooltip, setMathTooltip] = useState<MathTooltipState | null>(null);
  const shabbos = useShabbosMode();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('se-theme', theme);
  }, [theme]);

  const markdown = useMemo(() => chapterMarkdown(current.fileId, current.slug), [current]);
  const sections = useMemo(() => markdownSections(markdown), [markdown]);

  function cancelMathTooltipHide() {
    if (tooltipHideTimerRef.current !== undefined) {
      window.clearTimeout(tooltipHideTimerRef.current);
      tooltipHideTimerRef.current = undefined;
    }
  }

  function scheduleMathTooltipHide() {
    cancelMathTooltipHide();
    tooltipHideTimerRef.current = window.setTimeout(() => setMathTooltip(null), 180);
  }

  function showMathTooltip(entries: MathGlossaryEntry[], anchor: HTMLElement) {
    cancelMathTooltipHide();
    const rect = anchor.getBoundingClientRect();
    const width = 320;
    const height = Math.min(340, 122 * entries.length + 24);
    let left = rect.left;
    let top = rect.bottom + 8;
    if (left + width > window.innerWidth - 12) left = window.innerWidth - width - 12;
    if (top + height > window.innerHeight - 12) top = rect.top - height - 8;
    setMathTooltip({ entries, left: Math.max(12, left), top: Math.max(12, top) });
  }

  useLayoutEffect(() => {
    const content = contentRef.current;
    if (!content) return;
    const controller = new AbortController();

    renderMathInElement(content, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
      ],
      throwOnError: false,
    });

    for (const element of content.querySelectorAll<HTMLElement>('.katex')) {
      const latex = element.querySelector('annotation[encoding="application/x-tex"]')?.textContent?.trim() || '';
      const entries = findMathEntries(latex, current.slug, chapters);
      if (!entries.length) continue;
      element.dataset.mathTooltip = 'true';
      element.dataset.tooltipName = entries[0].name;
      element.tabIndex = 0;
      element.addEventListener('mouseenter', () => showMathTooltip(entries, element), { signal: controller.signal });
      element.addEventListener('mouseleave', scheduleMathTooltipHide, { signal: controller.signal });
      element.addEventListener('focus', () => showMathTooltip(entries, element), { signal: controller.signal });
      element.addEventListener('blur', scheduleMathTooltipHide, { signal: controller.signal });
    }

    mainRef.current?.scrollTo({ top: 0, left: 0 });
    setMathTooltip(null);

    return () => {
      controller.abort();
      setMathTooltip(null);
    };
  }, [chapters, current.slug, sections]);

  const groups = useMemo(() => groupedChapters(chapters), [chapters]);
  const searchResults = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return [];
    return chapters
      .filter(chapter => chapter.title.toLowerCase().includes(needle) || chapter.fileTitle.toLowerCase().includes(needle))
      .slice(0, 12);
  }, [chapters, query]);

  function navigate(chapter: Chapter) {
    setCurrent(chapter);
    setQuery('');
    setMenuOpen(false);
  }

  return (
    <div className="app-shell">
      <aside className={menuOpen ? 'sidebar open' : 'sidebar'}>
        <div className="brand">
          <BookOpen size={22} />
          <div>
            <strong>Structural Engineering & ETABS</strong>
            <span>Self-study React SPA</span>
          </div>
        </div>
        <nav>
          {Object.entries(groups).map(([part, partChapters]) => (
            <section className="nav-part" key={part}>
              <h2>{part}</h2>
              {partChapters.map(chapter => (
                <button
                  className={chapter.slug === current.slug ? 'chapter-link active' : 'chapter-link'}
                  key={`${chapter.fileId}-${chapter.slug}`}
                  onClick={() => navigate(chapter)}
                >
                  {chapter.title}
                </button>
              ))}
            </section>
          ))}
        </nav>
      </aside>

      <header className="topbar">
        <button className="icon-button mobile-only" onClick={() => setMenuOpen(value => !value)} aria-label="Toggle menu">
          <Menu size={18} />
        </button>
        <div className="crumbs">{current.part} / {current.title}</div>
        <div className="search-box">
          <Search size={16} />
          <input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search chapters" />
          {searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map(result => (
                <button key={`${result.fileId}-${result.slug}`} onClick={() => navigate(result)}>{result.title}</button>
              ))}
            </div>
          )}
        </div>
        <button className="icon-button" onClick={() => window.print()} aria-label="Print">
          <Printer size={18} />
        </button>
        <button className="icon-button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </header>

      <main className="main" ref={mainRef}>
        <article className="chapter-card">
          <div ref={contentRef} className="markdown-body">
            {sections.map((section, index) => (
              <section className="markdown-section" key={`${current.slug}-${section.anchor}-${index}`}>
                <div dangerouslySetInnerHTML={{ __html: section.html }} />
                <WhyPanels slug={current.slug} anchor={section.anchor} />
              </section>
            ))}
          </div>
          <GeometryVisuals slug={current.slug} />
          <ChapterExam slug={current.slug} />
        </article>
      </main>

      <ShabbosOverlay state={shabbos} />
      {mathTooltip && (
        <div
          className="math-tooltip"
          onMouseEnter={cancelMathTooltipHide}
          onMouseLeave={scheduleMathTooltipHide}
          role="tooltip"
          style={{ left: mathTooltip.left, top: mathTooltip.top }}
        >
          {mathTooltip.entries.map(entry => (
            <div className="math-tooltip-entry" key={entry.name}>
              <span className="math-tooltip-symbol">{entry.symbol}</span>
              <small>{entry.pronounce}</small>
              <strong>{entry.name}</strong>
              <p>{entry.desc}</p>
              <p className="math-tooltip-reminder">{entry.firstUse}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
