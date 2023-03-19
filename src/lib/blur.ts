import type { ImageProps } from "@/components";

export const getBlurUrl = (obj: ImageProps): string =>
  `/blur/${obj.url?.replace(`${process.env.BUCKET_URL}`, "")}`;
