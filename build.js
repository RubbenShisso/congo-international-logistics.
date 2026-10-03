// Builds the static site into dist/.
// Each page in src/pages starts with a small header block:
//   ---
//   title: Page title
//   description: Text for search engines
//   page: home            (marks the matching menu link as active)
//   ---
// The shared header and footer live in src/partials and are inserted into every page.
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "src");
const OUT = path.join(__dirname, "dist");

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const a = path.join(from, entry.name), b = path.join(to, entry.name);
    entry.isDirectory() ? copyDir(a, b) : fs.copyFileSync(a, b);
  }
}

function build() {
  fs.rmSync(OUT, { recursive: true, force: true });
  copyDir(path.join(SRC, "static"), OUT);

  const layout = fs.readFileSync(path.join(SRC, "partials", "layout.html"), "utf8");
  const header = fs.readFileSync(path.join(SRC, "partials", "header.html"), "utf8");
  const footer = fs.readFileSync(path.join(SRC, "partials", "footer.html"), "utf8");

  for (const file of fs.readdirSync(path.join(SRC, "pages")).filter(f => f.endsWith(".html"))) {
    const raw = fs.readFileSync(path.join(SRC, "pages", file), "utf8");
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
    if (!match) throw new Error(`${file} is missing its --- header block`);
    const meta = Object.fromEntries(match[1].split(/\r?\n/).map(l => {
      const i = l.indexOf(":");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    }));
    const content = raw.slice(match[0].length);

    // mark the current page's menu link as active
    const nav = header.replace(new RegExp(`data-nav="${meta.page}"`, "g"), `data-nav="${meta.page}" class="active" aria-current="page"`);

    // functions as replacements so "$" in the content is never treated specially
    const html = layout
      .replace("{{title}}", () => meta.title)
      .replace("{{description}}", () => meta.description)
      .replace("{{page}}", () => meta.page)
      .replace("{{header}}", () => nav)
      .replace("{{content}}", () => content)
      .replace("{{footer}}", () => footer);
    fs.writeFileSync(path.join(OUT, file), html);
  }
  return fs.readdirSync(OUT).filter(f => f.endsWith(".html"));
}

module.exports = build;
if (require.main === module) console.log("Built:", build().join(", "));
