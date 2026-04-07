const fs = require('fs');
const path = require('path');

const dir = 'd:/Ayathiwork/2026/tiffen-central/components/';

function walk(directory) {
  let results = [];
  const list = fs.readdirSync(directory);
  list.forEach(file => {
    file = path.join(directory, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(dir);
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let newContent = content;

  // Track original to see if changed
  const oldC = newContent;

  newContent = newContent.replace(/<img\b/g, '<Image unoptimized width={800} height={800} ');
  // Avoid duplicating imports
  if (newContent !== oldC && !newContent.includes('import Image from "next/image"')) {
    // try single quotes too
    if (!newContent.includes("import Image from 'next/image'")) {
       newContent = 'import Image from "next/image";\n' + newContent;
    }
  }

  // Also replace simple <a> tags that don't have existing explicit <Link>s around them. Wait, `Header.jsx` has <Link> internally already. 
  // Let's just focus on images, as `grep_search` found no `<a href` replacing needed that weren't already `<Link>`.

  if (content !== newContent) {
    fs.writeFileSync(f, newContent);
    console.log('Updated ' + f);
  }
});
