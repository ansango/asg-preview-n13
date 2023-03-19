import type { ImageProps } from "@/components";

export const getBlurUrl = (obj: ImageProps): string => {
  const image = obj.url?.replace(`${process.env.BUCKET_URL}`, "");
  console.log(image);
  return `/blur/${image}`;
};
