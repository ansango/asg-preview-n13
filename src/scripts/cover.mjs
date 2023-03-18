import fs from "fs";
import path from "path";

import { createFolder, route, getSeries, getImageFromUrl } from "./lib/index.mjs";

const makeCover = async () => {
  console.log("Generating covers");
  const staticDir = route("public/static");
  createFolder(staticDir);
  const seriesStaticDir = route("public/static/series");
  createFolder(seriesStaticDir);
  const { series } = getSeries();

  for (const serie of series) {
    console.log(`Processing ${serie.cover}`);
    const filename = serie.filename.split("-")[0];
    console.log(`Processing ${filename}`);
    const output = await getImageFromUrl({
      url: serie.cover,
      width: 400,
      height: 400,
      quality: 70,
    });

    fs.writeFileSync(path.join(seriesStaticDir, `${filename}.jpg`), output);
  }
  console.log("Covers generated");
};
makeCover();
