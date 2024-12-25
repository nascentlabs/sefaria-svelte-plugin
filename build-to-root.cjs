const fs = require('fs/promises');
const path = require('path');

async function copyFiles(sourceDir, destDir) {
  try {
    const files = await fs.readdir(sourceDir);

    for (const file of files) {
      const sourceFile = path.join(sourceDir, file);
      const destFile = path.join(destDir, file);

      // Check if the item is a file or a directory
      const stat = await fs.stat(sourceFile);

      if (stat.isFile()) {
        // Copy the file
        await fs.copyFile(sourceFile, destFile);
        console.log(`Copied: ${file}`);
      } else if (stat.isDirectory()) {
        // Recursively copy the directory
        await copyFiles(sourceFile, destFile);
      }
    }

    console.log('All files copied successfully.');
  } catch (error) {
    console.error(`Error copying files: ${error.message}`);
  }
}

// Example usage
const sourceDir = path.resolve(__dirname, 'dist'); // Replace 'source' with your source directory
const destDir = path.resolve(__dirname); // Replace 'destination' with your destination directory

copyFiles(sourceDir, destDir);
