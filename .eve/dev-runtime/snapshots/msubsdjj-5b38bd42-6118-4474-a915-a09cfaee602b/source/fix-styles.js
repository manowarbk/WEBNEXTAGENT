const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'components');
const globalsCssPath = path.join(__dirname, 'app', 'globals.css');

const files = [
  'layout/Navbar.tsx',
  'layout/Footer.tsx',
  'sections/Hero.tsx',
  'sections/SolutionsGrid.tsx',
  'sections/IndustriesGrid.tsx',
  'sections/StatsBar.tsx',
  'sections/CaseStudyPreview.tsx',
  'sections/CTABanner.tsx',
  '../app/giai-phap/[slug]/SolutionDetailClient.tsx',
  '../app/dich-vu/[slug]/ServiceDetailClient.tsx',
  '../app/nganh/[slug]/IndustryDetailClient.tsx',
  '../app/book-demo/page.tsx',
  '../app/ve-chung-toi/page.tsx',
];

let allCss = '\n/* --- COMPONENT STYLES --- */\n';

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract CSS
    const styleMatch = content.match(/<style jsx>\{`([\s\S]*?)`\}<\/style>/);
    if (styleMatch) {
      allCss += `\n/* ${file} */\n`;
      allCss += styleMatch[1] + '\n';
      
      // Remove style block
      content = content.replace(/<style jsx>\{`[\s\S]*?`\}<\/style>/, '');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Processed ${file}`);
    }
  }
}

fs.appendFileSync(globalsCssPath, allCss, 'utf8');
console.log('Appended all CSS to globals.css');
