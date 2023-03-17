import fs from "fs";
import path from "path";

import fetch from "cross-fetch";
import matter from "gray-matter";
import sharp from "sharp";

import { createFolder, route, sizes } from "../lib/index.mjs";

const getImages = () => {
  const SERIES_DIR = route("src/content/series");
  console.log(SERIES_DIR);
  const series = fs.readdirSync(SERIES_DIR).map((file) => {
    const source = fs.readFileSync(path.join(SERIES_DIR, file));
    const { data } = matter(source);
    if (data.visible === false) return null;
    if (!data.masonry) return null;
    return {
      images: data.masonry.images.map((image) => {
        return { src: image.url, file: image.url.split("/")[4] };
      }),
      route: data.masonry.images.map((image) => image.url)[0].split("/")[3],
    };
  });
  return {
    series: series.filter((item) => item !== null),
  };
};

const getBuffer = async (url) => {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  return Buffer.from(buffer);
};

const program = async () => {
  const dir = "public/series";
  const directory = route(dir);
  createFolder(directory);
  const { series } = getImages();

  for (const serie of series) {
    const subFolder = route(`${dir}/${serie.route}`);
    console.log(`Generating images for ${serie.route}`);
    console.log(`------------------------------------`);
    console.log(``);
    console.log(`Appending folder ${serie.route} to ${dir}`);
    createFolder(subFolder);
    for (const image of serie.images) {
      console.log(`Downloading ${image.src}`);
      const file = image.file.split(".")[0];
      const newDir = route(`${dir}/${serie.route}/${file}`);
      createFolder(newDir);
      const buffer = await getBuffer(image.src);
      const raw = await sharp(buffer);
      const metadata = await raw.metadata();
      const { width, height } = metadata;
      const ratio = width / height;
      const isPortrait = ratio < 1;

      try {
        await Promise.all(
          sizes.map(async ({ height, width }) => {
            const newDir = route(`${dir}/${serie.route}/${file}`);
            createFolder(newDir);

            if (isPortrait) {
              await raw
                .webp({
                  quality: 80,
                })
                .resize({
                  width: height,
                  height: width,
                  fit: "cover",
                })
                .toFile(`${newDir}/${width}x${height}.webp`);
            } else {
              await raw
                .webp({
                  quality: 90,
                })
                .resize({ width, height, fit: "cover" })
                .toFile(`${newDir}/${width}x${height}.webp`);
            }
            console.log(`Resized ${image.src} to ${width}x${height}`);
          })
        );
      } catch (error) {
        console.log(error);
      }
    }
  }

  console.table({
    "Total files": series.map((serie) => serie.images.length).reduce((a, b) => a + b, 0),
  });
};

program();
