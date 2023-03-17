import type { ImageProps } from "@/components";

import data from "../../public/series/data.json";

export const getImgUrl = (image: ImageProps): string => {
  const imgSplit = image.url?.split("/").reverse().slice(0, 2).reverse().join("/");
  return data.filter((item) => `${item.folder}/${item.file}` === imgSplit)[0]?.base64;
};
