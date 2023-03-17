import fs from "fs";
import path from "path";

import fetch from "cross-fetch";
import matter from "gray-matter";
import sharp from "sharp";

import { createFolder } from "./lib/index.mjs";

const getBase64FromUrl = async (url) => {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  const minified = await sharp(Buffer.from(buffer)).resize(8).webp({ quality: 50 }).toBuffer();
  const image = `data:image/webp;base64,${Buffer.from(minified).toString("base64")}`;
  return image;
};

const createFolders = () => {
  const blurDir = path.join(process.cwd(), "public/blur");
  createFolder(blurDir);
  return {
    blurDir,
  };
};

const getSeries = () => {
  const SERIES_DIR = path.join(process.cwd(), "src/content/series");
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

const getFiles = async () => {
  const { blurDir } = createFolders();
  const { series } = getSeries();
  const jsondata = [];
  for (const serie of series) {
    console.log(`Generating blur images for ${serie.route}`);
    for (const image of serie.images) {
      const base64 = await getBase64FromUrl(image.src);
      const jsonobj = JSON.stringify({ folder: serie.route, file: image.file, base64 });
      jsondata.push(jsonobj);
    }
  }
  fs.writeFileSync(path.join(blurDir, "data.json"), `[${jsondata.join(",")}]`);
};

getFiles();
