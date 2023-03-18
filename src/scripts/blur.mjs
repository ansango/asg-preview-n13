import fs from "fs";
import path from "path";

import { createFolder, route, getSeries, getBase64FromUrl } from "./lib/index.mjs";

const makeBlur = async () => {
  console.log("Generating blur images");

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
  fs.writeFileSync(
    path.join(blurDir, "data.js"),
    `const data = [${jsondata.join(",")}]; export default data;`
  );

  console.log("Blur images generated");
};

makeBlur();
