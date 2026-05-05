# Teaching Principles — Copilot Instructions

These rules apply whenever Copilot creates or edits **educational content**: technical tutorials, courses, textbooks, coding guides, language courses, or any material where a reader needs to build genuine understanding from limited prior knowledge. They are domain-agnostic — they apply equally to engineering, programming, mathematics, science, language, or music.

---

## The Core Commitment

A concept is not considered taught until the reader has:

1. Seen a real problem that **needs** it
2. Understood it in **plain language** without symbols
3. Seen what goes **wrong** without it — with specific numbers and consequences
4. **Applied** it to a concrete worked example with real inputs

A definition in a table is not teaching. A formula without context is not teaching. Teaching is the journey from *"I don't know why I need this"* to *"I can use this confidently."*

---

## Section Template — A through I

Every major teaching section must contain these parts, **in order**:

| Label | Name | What It Does |
|-------|------|-------------|
| **A** | **Achievement** | One concrete observable thing the reader can DO after this section. Must be specific — not "understand X" but "calculate X for real inputs" or "configure X in the software." |
| **B** | **The Situation** | A real problem that creates the need for this concept **before** the concept is named. The reader should feel the itch before they see the scratch. |
| **C** | **The Intuition** | Plain-language explanation. No symbols, no jargon. Use analogy, diagram, or concrete numbers. If you can't explain it without symbols first, the intuition isn't ready. |
| **D** | **Failure Case** | A specific, realistic example — with actual numbers and real consequences — of what goes wrong **without** the concept. Not a vague warning: *"mistakes happen."* A specific failure: *"the result was 12× too large, the column was undersized, the building collapsed."* |
| **E** | **The Rule** | The shortest accurate statement of the principle, now that the reader understands **why** it matters. One or two sentences maximum. |
| **F** | **The Formal Shorthand** | Symbols, notation, and formulas introduced as **compression** for the idea already in the reader's head. Never the first place a concept appears. |
| **G** | **Full Worked Example** | The promised Achievement from section A, solved with real inputs, every step shown, units tracked throughout. |
| **H** | **Practice Task** | A scenario the reader solves independently. Worked solution included immediately after — not at the end of the book. |
| **I** | **What You Now Know** | Summary table + one-line preview of what this section unlocks next. |

---

## The No-Repeat Rule

**A concept is taught exactly once** — at the earliest chapter where a real problem genuinely needs it. When the concept reappears in a later chapter, use a tooltip and a chapter reference. Never re-explain inline.

### Tooltip Format

```html
<abbr title="[→ Ch4] Units multiply and cancel like algebra — write the unit next to every number">dimensional analysis</abbr>
```

**Rules:**
- Title always starts with `[→ ChN]` — the chapter number where the concept was first taught
- Followed by a **one-sentence** reminder of the original definition or method
- Use tooltips for: technical terms, Greek symbols, acronyms, and any term not in everyday non-technical language
- Do **not** use tooltips for: terms explained in the same section, common words, items already in a reference table the reader has just seen
- A tooltip is a **reminder cue**, not a re-teaching. If more than one sentence is needed, the original chapter must be revisited.

---

## Ordering Principles

1. **Problem before concept.** The real need comes first. The concept is the answer to a problem the reader already feels.
2. **Intuition before formalism.** Plain language always precedes symbols. Symbols are compression for ideas already understood.
3. **Failure before success.** Show the cost of ignorance before the benefit of understanding.
4. **Prerequisites travel with the problem.** A tool is introduced in the chapter where it is first genuinely needed — not in a separate "prerequisites" section ahead of time.
5. **Concepts group by engineering task, not by academic subject.** If two ideas — one geometric, one algebraic — are both needed to solve the same structural problem, they belong in the same chapter.

---

## Language Rules

| Forbidden | Why |
|-----------|-----|
| "Obviously" | Signals that confusion is shameful |
| "Simply" / "Just" | Minimises difficulty the reader may genuinely feel |
| "As you know" | Assumes knowledge that may not exist |
| "Easy" / "Trivial" | Same as above |
| "It can be shown that..." | Hides a step the reader needs |

When something is genuinely difficult, say so and slow down. When something builds on something hard, acknowledge it: *"This uses the <abbr title='[→ Ch15] Resistance to bending — I = bh³/12'>moment of inertia</abbr> from Chapter 15 — check the tooltip if you need a quick reminder."*

---

## What Copilot Must Not Write

- **Vocabulary tables ("word banks")** — definitions belong in the section body at the moment of need, not in a lookup table at the start of a chapter
- **Re-explanations** of already-taught concepts — use a tooltip + chapter reference instead
- **Symbols before their plain-language meaning** is established in the same section
- **Sections without a stated Achievement** — if you can't name what the reader can concretely DO, the section is not ready to be written
- **False precision** — report results with significant figures matching the precision of inputs
- **Passive voice** for instructions — write *"multiply both sides by A"* not *"both sides are multiplied by A"*

---

## The Knowledge Ledger

Every educational document should track what has been explained vs. only mentioned (previewed). Never use a concept as if it has been taught when it has only been mentioned. Label previews explicitly:

> *"You will see exactly why this works in Chapter 15 — for now, use the formula as given."*

---

## Tone

Write as if the reader is intelligent and capable but completely unfamiliar with this domain. Never condescend. When something is genuinely hard, say so. When the reader has earned a new capability, name it clearly in section A and again in section I. Every chapter should end with the reader feeling more capable than when they started — not merely more informed.
