/// <reference types="vite/client" />

declare module '*.md?raw' {
  const content: string;
  export default content;
}

declare module '*.js?raw' {
  const content: string;
  export default content;
}

declare module 'katex/contrib/auto-render' {
  export default function renderMathInElement(element: HTMLElement, options?: Record<string, unknown>): void;
}
