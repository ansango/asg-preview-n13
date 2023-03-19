import fs from "fs";
import path from "path";

import sharp from "sharp";

import { createFolder } from "./lib/index.mjs";

const imageExtensions = [".jpg", ".jpeg", ".png", ".gif"];

function getImagesFromFolder(folderPath) {
  let images = [];
  fs.readdirSync(folderPath).forEach((file) => {
    const filePath = path.join(folderPath, file);
    const fileStat = fs.statSync(filePath);
    if (fileStat.isDirectory()) {
      images = images.concat(getImagesFromFolder(filePath));
    } else if (imageExtensions.includes(path.extname(filePath).toLowerCase())) {
      images.push(filePath);
    }
  });
  return images;
}

async function resize(inputPath, outputPath, outputBlurPath, format = "webp", quality = 80) {
  console.log("Starting image resizing");
  console.log("Input path:", inputPath);
  createFolder(inputPath);
  console.log("Output path:", outputPath);
  const outputDirPath = path.resolve(outputPath);
  console.log("Blur path:", outputBlurPath);
  const outputBlurDirPath = path.resolve(outputBlurPath);

  if (fs.existsSync(outputDirPath)) {
    fs.rmSync(outputDirPath, { recursive: true });
  }

  if (fs.existsSync(outputBlurDirPath)) {
    fs.rmSync(outputBlurDirPath, { recursive: true });
  }
  console.log("Creating output folders");
  console.log("Output path:", outputPath);
  createFolder(outputPath, { recursive: true });
  console.log("Blur path:", outputBlurPath);
  createFolder(outputBlurPath, { recursive: true });
  console.log("Resizing images");
  const images = getImagesFromFolder(inputPath);
  console.log("Found", images.length, "images");
  for (const imagePath of images) {
    console.log("Resizing", imagePath);
    const subFolderPath = path.dirname(path.relative(inputPath, imagePath));
    const outputFolder = path.join(outputPath, subFolderPath);
    const outputBlurFolder = path.join(outputBlurPath, subFolderPath);

    fs.mkdirSync(outputFolder, { recursive: true });
    fs.mkdirSync(outputBlurFolder, { recursive: true });

    const image = sharp(imagePath);
    const outputExt = format === "webp" ? ".webp" : ".jpg";
    const metadata = await image.metadata();
    const { width, height } = metadata;
    const isLandscape = width > height;
    const isPortrait = width < height;

    if (isLandscape) {
      await image
        .webp({ quality, effort: 6 })
        .resize({ width: 1536, height: 1024, fit: "cover" })
        .toFile(
          path.join(outputFolder, path.basename(imagePath, path.extname(imagePath)) + outputExt)
        );
      console.log("Resized", imagePath);
      await image
        .webp({ quality: 50, effort: 6 })
        .resize(800)
        .blur(10)
        .toFile(
          path.join(outputBlurFolder, path.basename(imagePath, path.extname(imagePath)) + outputExt)
        );

      console.log("Generated blur image", imagePath);
    } else if (isPortrait) {
      await image
        .webp({ quality, effort: 6 })
        .resize({ width: 1024, height: 1536, fit: "cover" })
        .toFile(
          path.join(outputFolder, path.basename(imagePath, path.extname(imagePath)) + outputExt)
        );
      console.log("Resized", imagePath);
      await image
        .webp({ quality: 50, effort: 6 })
        .resize(800)
        .blur(10)
        .toFile(
          path.join(outputBlurFolder, path.basename(imagePath, path.extname(imagePath)) + outputExt)
        );

      console.log("Generated blur image", imagePath);
    } else {
      await image
        .webp({ quality, effort: 6 })
        .resize({ width: 1536, height: 1536, fit: "cover" })
        .toFile(
          path.join(outputFolder, path.basename(imagePath, path.extname(imagePath)) + outputExt)
        );
      console.log("Resized", imagePath);
      await image
        .webp({ quality: 50, effort: 6 })
        .resize(800)
        .blur(10)
        .toFile(
          path.join(outputBlurFolder, path.basename(imagePath, path.extname(imagePath)) + outputExt)
        );

      console.log("Generated blur image", imagePath);
    }
  }
  console.log("Finished image resizing");
  console.log("Output path:", outputPath);
  console.log("Blur path:", outputBlurPath);
  console.log("Total images:", images.length);
}

const inputPath = process.cwd() + "/.images";
const outputPath = process.cwd() + "/.images___output";
const outputBlurPath = process.cwd() + "/.images___output_blur";

resize(inputPath, outputPath, outputBlurPath, "webp", 80);
