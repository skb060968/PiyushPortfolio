// cleanup-images.js
// Run with: node cleanup-images.js
// Requires sharp: npm install sharp

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const rootDir = path.join(__dirname, "public/images");

let renamedCount = 0;
let convertedCount = 0;

// Recursive function to walk through all subfolders
function walkDir(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Recurse into subfolder
      walkDir(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();

      // Rename .jpeg → .jpg
      if (ext === ".jpeg") {
        const newPath = path.join(dir, path.basename(file, ext) + ".jpg");
        fs.renameSync(fullPath, newPath);
        console.log(`Renamed: ${fullPath} → ${newPath}`);
        renamedCount++;
      }

      // Convert .png → .jpg and delete original
      if (ext === ".png") {
        const outputPath = path.join(dir, path.basename(file, ".png") + ".jpg");

        sharp(fullPath)
          .jpeg({ quality: 85 })
          .toFile(outputPath)
          .then(() => {
            fs.unlinkSync(fullPath); // delete original PNG
            console.log(`Converted & deleted: ${fullPath} → ${outputPath}`);
            convertedCount++;
          })
          .catch(err => console.error(`Error converting ${fullPath}:`, err));
      }
    }
  });
}

// Start recursive walk
walkDir(rootDir);

// Print summary after async conversions finish
process.on("beforeExit", () => {
  console.log("\n--- Summary ---");
  console.log(`JPEG renamed: ${renamedCount}`);
  console.log(`PNG converted: ${convertedCount}`);
  console.log("Cleanup complete!");
});