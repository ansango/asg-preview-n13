import type { FC } from "react";

import type { Page, Serie } from ".tina/__generated__/types";

import { getBlurUrl } from "../../lib";
import type { ImageProps } from "../image";
import { Image } from "../image";

import { ContactForm } from "./forms";
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
        const key = `${block?.__typename}-${iBlock}`;
        switch (block?.__typename) {
          case "PageBlocksHeroBase": {
            return <HeroBase key={key} {...(block as HeroBaseProps)} />;
          }
          case "PageBlocksMasonryBase": {
            return (
              <MasonryBase key={key} {...(block as MasonryBaseProps)}>
                {block.images?.map((image, iGallery) => (
                  <Image
                    {...(image as ImageProps)}
                    key={iGallery}
                    alt={image?.alt}
                    loading={iBlock < 2 && iGallery < 2 ? "eager" : "lazy"}
                    blurDataURL={getBlurUrl(image as ImageProps)}
                  />
                ))}
              </MasonryBase>
            );
          }
          case "PageBlocksAllSeries": {
            return <>{block.visible && <Series key={key} data={data.series as Serie[]} />}</>;
          }
          case "PageBlocksContactForm": {
            return <ContactForm key={key} />;
          }
          default:
            return null;
        }
      })}
    </>
  );
};
