import type { FC } from "react";

import type { Page, Serie } from ".tina/__generated__/types";

import type { ImageProps } from "../image";
import { Image } from "../image";

import { HeroBase, type HeroBaseProps } from "./hero";
import { MasonryBase } from "./masonry";
import type { MasonryBaseProps } from "./masonry";
import { Series } from "./series";

type Props = Pick<Page, "blocks"> & {
  data?: any;
};

export const Blocks: FC<Props> = ({ blocks, data }) => {
  return (
    <>
      {blocks?.map((block, iBlock) => {
        switch (block?.__typename) {
          case "PageBlocksHeroBase": {
            return <HeroBase key={iBlock} {...(block as HeroBaseProps)} />;
          }
          case "PageBlocksMasonryBase": {
            return (
              <MasonryBase key={iBlock} {...(block as MasonryBaseProps)}>
                {block.images?.map((image, iGallery) => (
                  <Image
                    key={iGallery}
                    {...(image as ImageProps)}
                    alt={image?.alt}
                    loading={iBlock < 2 && iGallery < 2 ? "eager" : "lazy"}
                  />
                ))}
              </MasonryBase>
            );
          }
          case "PageBlocksAllSeries": {
            return <Series key={iBlock} data={data.series as Serie[]} />;
          }
          default:
            return null;
        }
      })}
    </>
  );
};
