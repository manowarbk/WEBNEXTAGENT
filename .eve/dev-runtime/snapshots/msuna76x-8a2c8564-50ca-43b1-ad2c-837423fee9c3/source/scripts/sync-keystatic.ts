import fs from 'fs';
import path from 'path';

function syncCollection(dir: string, outputFile: string, variableName: string) {
  const fullDir = path.join(process.cwd(), 'content', dir);
  if (!fs.existsSync(fullDir)) return;
  
  const files = fs.readdirSync(fullDir).filter(f => f.endsWith('.json'));
  const items = files.map(file => {
    const content = fs.readFileSync(path.join(fullDir, file), 'utf8');
    return JSON.parse(content);
  });
  
  const tsContent = `// This file is auto-generated\nexport const ${variableName}: any[] = ${JSON.stringify(items, null, 2)};\n`;
  
  fs.writeFileSync(path.join(process.cwd(), 'data', outputFile), tsContent, 'utf8');
  console.log('Synced ' + dir + ' to ' + outputFile);
}

syncCollection('solutions', 'solutions.ts', 'solutions');
syncCollection('services', 'services.ts', 'services');
syncCollection('industries', 'industries.ts', 'industries');
syncCollection('case-studies', 'case-studies.ts', 'caseStudies');

console.log('Sync complete!');
