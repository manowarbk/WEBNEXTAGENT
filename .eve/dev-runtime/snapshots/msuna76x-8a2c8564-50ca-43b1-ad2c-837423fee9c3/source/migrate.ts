import fs from 'fs';
import path from 'path';
import { solutions } from './data/solutions';
import { services } from './data/services';
import { industries } from './data/industries';
import { caseStudies } from './data/case-studies';

function saveToJson(dir: string, data: any[]) {
  const fullDir = path.join(process.cwd(), 'content', dir);
  if (!fs.existsSync(fullDir)) {
    fs.mkdirSync(fullDir, { recursive: true });
  }

  data.forEach((item) => {
    const slug = item.slug;
    if (!slug) { return; }
    const filePath = path.join(fullDir, slug + '.json');
    fs.writeFileSync(filePath, JSON.stringify(item, null, 2), 'utf8');
    console.log('Saved ' + filePath);
  });
}

saveToJson('solutions', solutions);
saveToJson('services', services);
saveToJson('industries', industries);
saveToJson('case-studies', caseStudies);

console.log('Migration complete!');
