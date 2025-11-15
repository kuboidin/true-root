import fs from 'fs';
import path from 'path';

// Very small, dependency-free frontmatter + markdown renderer suited for blog posts
// Frontmatter format (YAML-like, single-line values only):
// ---\nkey: value\nkey2: value\n---\n
export function parseFrontMatter(raw) {
  const fmStart = raw.indexOf('\n---');
  const firstLineIsFence = raw.startsWith('---');
  if (!firstLineIsFence) {
    return { data: {}, content: raw };
  }
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return { data: {}, content: raw };
  const fmBlock = raw.slice(3, end).trim();
  const content = raw.slice(end + 4).trim();
  const data = {};
  fmBlock.split(/\r?\n/).forEach((line) => {
    const idx = line.indexOf(':');
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    const valueRaw = line.slice(idx + 1).trim();
    // arrays by comma
    const value = valueRaw.includes(',') ? valueRaw.split(',').map((s) => s.trim()) : valueRaw;
    data[key] = value;
  });
  return { data, content };
}

// Minimal markdown to HTML. Not exhaustive, but good enough for blog SEO content.
export function markdownToHtml(md) {
  // Escape HTML first
  let out = md.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // Code blocks ```
  out = out.replace(/```([\s\S]*?)```/g, (m, code) => `<pre><code>${code.replace(/\n/g, '<br/>')}</code></pre>`);
  // Inline code
  out = out.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Headings ###### to #
  for (let i = 6; i >= 1; i--) {
    const re = new RegExp(`^${'#'.repeat(i)}\\s+(.+)$`, 'gm');
    out = out.replace(re, (_, text) => `<h${i}>${text}</h${i}>`);
  }

  // Bold and italics
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // Images ![alt](src)
  out = out.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2" />');
  // Links [text](href)
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Blockquotes
  out = out.replace(/^>\s+(.+)$/gm, '<blockquote>$1</blockquote>');

  // Ordered lists
  out = out.replace(/^(\d+)\.\s+(.+)$/gm, '<li>$2</li>');
  out = out.replace(/(<li>.+<\/li>)(\r?\n)(?=<li>)/g, '$1'); // keep together
  out = out.replace(/(?:^|\n)(<li>.+<\/li>(?:\n<li>.+<\/li>)*)/g, '<ol>$1</ol>');

  // Unordered lists
  out = out.replace(/^[-*+]\s+(.+)$/gm, '<li>$1</li>');
  out = out.replace(/(?:^|\n)(<li>.+<\/li>(?:\n<li>.+<\/li>)*)/g, (m) => m.startsWith('<ol>') ? m : `<ul>${m}</ul>`);

  // Horizontal rule
  out = out.replace(/^---$/gm, '<hr/>');

  // Paragraphs: wrap loose lines that are not block elements
  out = out.replace(/^(?!<h\d>|<ul>|<ol>|<li>|<blockquote>|<img|<pre>|<hr|<\/|<p>)(.+)$/gm, '<p>$1</p>');

  return out;
}

export const BLOG_DIR = path.join(process.cwd(), 'src', 'content', 'blog');

export function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));
  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
    const { data, content } = parseFrontMatter(raw);
    return {
      slug,
      ...data,
      excerpt: content.split(/\r?\n/).slice(0, 3).join(' '),
    };
  });
  // sort by date if present
  posts.sort((a, b) => (new Date(b.date || 0)).getTime() - (new Date(a.date || 0)).getTime());
  return posts;
}

export function getPostBySlug(slug) {
  const file = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = parseFrontMatter(raw);
  return { slug, meta: data, content, html: markdownToHtml(content) };
}
