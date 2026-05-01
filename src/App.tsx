import { useEffect, useMemo, useRef, useState } from 'react';
import { marked } from 'marked';
import renderMathInElement from 'katex/contrib/auto-render';
import { BookOpen, Menu, Moon, Printer, Search, Sun } from 'lucide-react';
import { bookFiles, buildChapterIndex, slugify, type Chapter } from './content';
import { GeometryVisuals } from './GeometryVisuals';
import { WhyPanels } from './WhyPanels';
import { ShabbosOverlay, useShabbosMode } from './ShabbosOverlay';

marked.use({
  gfm: true,
  breaks: false,
  renderer: {
    heading(token: any) {
      const text = typeof token === 'string' ? token : token.text || token.raw || '';
      const raw = typeof token === 'string' ? token : token.raw || text;
      const depth = typeof token === 'string' ? 2 : token.depth || 2;
      const id = slugify(raw || text);
      return `<h${depth} id="${id}">${text}</h${depth}>`;
    },
  },
});

function chapterMarkdown(fileId: string, slug: string) {
  const file = bookFiles.find(item => item.id === fileId) ?? bookFiles[0];
  if (!slug) return file.markdown;
  const lines = file.markdown.split('\n');
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

export function App() {
  const chapters = useMemo(() => buildChapterIndex(), []);
  const firstChapter = chapters[0];
  const [current, setCurrent] = useState<Chapter>(firstChapter);
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('se-theme') || 'light');
  const contentRef = useRef<HTMLDivElement>(null);
  const shabbos = useShabbosMode();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('se-theme', theme);
  }, [theme]);

  const markdown = useMemo(() => chapterMarkdown(current.fileId, current.slug), [current]);
  const html = useMemo(() => marked.parse(markdown) as string, [markdown]);

  useEffect(() => {
    if (!contentRef.current) return;
    renderMathInElement(contentRef.current, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
      ],
      throwOnError: false,
    });
    contentRef.current.scrollIntoView({ block: 'start' });
  }, [html]);

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

      <main className="main">
        {shabbos.loading && <div className="status-pill">Checking Shabbos mode...</div>}
        {!shabbos.loading && shabbos.message && !shabbos.active && <div className="status-pill muted">{shabbos.message}</div>}
        <article className="chapter-card">
          <div ref={contentRef} className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
          <GeometryVisuals slug={current.slug} />
          <WhyPanels slug={current.slug} />
        </article>
      </main>

      <ShabbosOverlay state={shabbos} />
    </div>
  );
}
