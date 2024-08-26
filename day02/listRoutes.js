// listRoutes.js

const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src/app');  // Adjust this path if needed

function getRoutes(dir, basePath = '') {
  const files = fs.readdirSync(dir);
  let routes = [];

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      routes = routes.concat(getRoutes(filePath, path.join(basePath, file)));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      // Ignore special files like _app.tsx or _document.tsx
      if (!file.startsWith('_')) {
        const routePath = path.join(basePath, file.replace(/\.(tsx|ts)$/, ''));
        routes.push(routePath);
      }
    }
  });

  return routes;
}

const routes = getRoutes(pagesDir);

console.log('Available Routes:');
routes.forEach(route => {
  console.log(`/${route}`);
});
