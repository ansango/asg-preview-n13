import type { ImageProps } from "@/components";

async function loadBase64Image(base64ImagePath: string) {
  const response = await fetch(base64ImagePath);
  const base64Image = await response.text();
  return base64Image;
}

export const getBlurUrl = async (obj: ImageProps): Promise<string> => {
  const image = obj.url?.replace(`${process.env.BUCKET_URL}`, "").replace(".webp", ".text");
  return await loadBase64Image(`/public/blur/${image}`);
};
