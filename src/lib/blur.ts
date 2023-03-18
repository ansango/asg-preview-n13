import type { ImageProps } from "@/components";

import data from "../../public/blur/data";

type DataJson = {
  folder: string;
  file: string;
  base64: string;
};

type DataJsonArray = Array<DataJson>;

export const getBlurUrl = (obj: ImageProps): string => {
  const image = obj.url?.replace(`${process.env.BUCKET_URL}/`, "");
  const json: DataJsonArray = data;
  const blur = json.filter((item) => `${item.folder}/${item.file}` === image)[0]?.base64;

  return blur;
};
