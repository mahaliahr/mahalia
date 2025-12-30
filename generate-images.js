const fs = require('fs');
const path = require('path');

const imagesDir = './assets/main-page';
const outputFile = './assets/images.json';

fs.readdir(imagesDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  
  const imageFiles = files
    .filter(file => /\.(png|jpg|jpeg|gif)$/i.test(file))
    .sort()
    .map(file => `./assets/main-page/${file}`);
  
  fs.writeFileSync(outputFile, JSON.stringify(imageFiles, null, 2));
  console.log(`✓ Generated ${imageFiles.length} image paths in ${outputFile}`);
});