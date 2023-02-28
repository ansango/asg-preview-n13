import type { FC } from "react";

import type { Page } from ".tina/__generated__/types";

import type { ImageProps } from "../image";
import { Image } from "../image";

import { HeroBase, type HeroBaseProps } from "./hero";
import { MasonryBase, type MasonryBaseProps } from "./masonry";

type Props = Pick<Page, "blocks">;

export const Blocks: FC<Props> = ({ blocks }) => {
  return (
    <>
      {blocks?.map((block, i) => {
        switch (block?.__typename) {
          case "PageBlocksHeroBase": {
            return <HeroBase key={i} {...(block as HeroBaseProps)} />;
          }
          case "PageBlocksMasonryBase": {
            return (
              <MasonryBase key={i} {...(block as MasonryBaseProps)}>
                {block.images?.map((image, i) => (
                  <Image key={i} {...(image as ImageProps)} alt={image?.alt} />
                ))}
              </MasonryBase>
            );
          }

          default:
            return null;
        }
      })}
    </>
  );
};
