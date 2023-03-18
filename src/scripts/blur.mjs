import fs from "fs";
import path from "path";

import { createFolder, route, getSeries, getBase64FromUrl } from "./lib/index.mjs";

const makeBlur = async () => {
  const blurDir = route("public/blur");
  createFolder(blurDir);

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
  console.log("Done");
};

makeBlur();
