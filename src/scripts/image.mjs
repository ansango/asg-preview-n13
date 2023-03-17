import fs from "fs";
import path from "path";

import fetch from "cross-fetch";
import matter from "gray-matter";
import sharp from "sharp";

const getBase64FromUrl = async (url) => {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  const minified = await sharp(Buffer.from(buffer)).webp({ quality: 80 }).toBuffer();
  const image = `data:image/webp;base64,${Buffer.from(minified).toString("base64")}`;
  return image;
};

const createFolder = (path) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
};

const createFolders = () => {
  const seriesDir = path.join(process.cwd(), "public/series");
  createFolder(seriesDir);
  return {
    seriesDir,
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
    series: series.filter((item) => item !== null).slice(0, 3),
  };
};

const getFiles = async () => {
  const { seriesDir } = createFolders();
  const { series } = getSeries();

  for (const serie of series) {
    const jsondata = [];
    console.log(`Generating images for ${serie.route}`);
    console.log(`------------------------------------`);
    console.log(``);
    console.log(`Appending folder ${serie.route} to ${seriesDir}`);
    const subFolder = path.join(seriesDir, serie.route);
    createFolder(subFolder);
    for (const image of serie.images) {
      console.log(`Downloading ${image.src}`);
      const base64 = await getBase64FromUrl(image.src);
      const jsonobj = JSON.stringify({ folder: serie.route, file: image.file, base64 });
      jsondata.push(jsonobj);
    }
    fs.writeFileSync(path.join(subFolder, "data.json"), `[${jsondata.join(",")}]`);
  }
};

getFiles();
