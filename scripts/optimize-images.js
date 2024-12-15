const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../static/images');
const outputDir = path.join(__dirname, '../static');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Process each image
async function processImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 80 })
      .resize(800, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .toFile(outputPath);
    
    console.log(`Processed: ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error);
  }
}

// Read all images and process them
fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, `${path.parse(file).name}.webp`);
      processImage(inputPath, outputPath);
    }
  });
});
