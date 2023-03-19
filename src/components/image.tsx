import type { FC } from "react";

import ImageNext from "next/image";

type AspectRatio = {
  "4/3": "aspect-4/3";
  "4/5": "aspect-4/5";
  "5/4": "aspect-5/4";
  "9/16": "aspect-9/16";
  "2/3": "aspect-2/3";
  "3/2": "aspect-3/2";
  square: "aspect-square";
  video: "aspect-video";
  auto: "aspect-auto";
};

export type ImageProps = {
  url?: string;
  alt?: string;
  aspectRatio?: keyof AspectRatio;
  centerImage?:
    | "top"
    | "center"
    | "bottom"
    | "left"
    | "left-top"
    | "left-bottom"
    | "right"
    | "right-top"
    | "right-bottom";
  blurDataURL?: string;
  loading?: "lazy" | "eager";
  onClick?: () => void;
};

export const aspectRatioCn = {
  "4/3": "aspect-4/3",
  "4/5": "aspect-4/5",
  "5/4": "aspect-5/4",
  "9/16": "aspect-9/16",
  "2/3": "aspect-2/3",
  "3/2": "aspect-3/2",
  square: "aspect-square",
  video: "aspect-video",
  auto: "aspect-auto",
};

export const objectPositionCn = {
  top: "object-top",
  center: "object-center",
  bottom: "object-bottom",
  left: "object-left",
  "left-top": "object-left-top",
  "left-bottom": "object-left-bottom",
  right: "object-right",
  "right-top": "object-right-top",
  "right-bottom": "object-right-bottom",
};

const getSize = (aspectRatio: keyof typeof aspectRatioCn | string) => {
  switch (aspectRatio) {
    case "2/3":
      return { width: 1365, height: 2048 };
    case "3/2":
      return { width: 2048, height: 1365 };
    case "4/3":
      return { width: 2048, height: 1536 };
    case "4/5":
      return { width: 1638, height: 2048 };
    case "5/4":
      return { width: 2048, height: 1638 };
    case "9/16":
      return { width: 1152, height: 2048 };
    case "auto":
      return { width: 2048, height: 1365 };
    case "square":
      return { width: 2048, height: 2048 };
    case "video":
      return { width: 2048, height: 1152 };
  }
};

export const Image: FC<ImageProps> = ({
  alt = "",
  url,
  aspectRatio = "auto",
  centerImage = "center",
  loading = "lazy",
  onClick,
  blurDataURL,
}) => {
  const centerCn = objectPositionCn[centerImage] || objectPositionCn["center"];

  return (
    <span className="flex flex-col">
      {url ? (
        <ImageNext
          className={`object-cover ${centerCn} ${aspectRatioCn[aspectRatio]} ${
            onClick
              ? `duration-300 transform transition-all cursor-pointer hover:opacity-[0.89] group-hover:opacity-[0.89]`
              : "max-w-s"
          }`}
          src={url}
          {...getSize(aspectRatio)}
          alt={alt}
          loading={loading}
          onClick={onClick}
          priority={loading === "eager" ? true : false}
          placeholder={blurDataURL ? "blur" : "empty"}
          blurDataURL={blurDataURL}
        />
      ) : null}
    </span>
  );
};

export const aspectRatio = Object.keys(aspectRatioCn);
export const centerImage = Object.keys(objectPositionCn);
