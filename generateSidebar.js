const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'docs');

function getSidebarItems(dir, prefix = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap(entry => {
    const fullPath = path.join(dir, entry.name);
    const id = prefix ? `${prefix}/${entry.name.replace('.md', '')}` : entry.name.replace('.md', '');

    if (entry.isDirectory()) {
      return {
        type: 'category',
        label: entry.name,
        items: getSidebarItems(fullPath, id),
      };
    } else if (entry.name.endsWith('.md')) {
      return id;
    } else {
      return [];
    }
  });
}

const sidebar = {
  docs: getSidebarItems(docsDir),
};

fs.writeFileSync(
  path.join(__dirname, 'sidebars.js'),
  'module.exports = ' + JSON.stringify(sidebar, null, 2),
);

console.log('✅ sidebars.js updated!');
