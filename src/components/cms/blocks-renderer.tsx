import type { FC } from "react";

import type { TinaMarkdownContent } from "tinacms/dist/rich-text";

import type { Page, Serie } from ".tina/__generated__/types";

import { getBlurUrl } from "../../lib";
import type { ImageProps } from "../image";
import { Image } from "../image";

import type { BodySimpleProps } from "./bodies";
import { BodySimple } from "./bodies";
import type { ContactFormProps } from "./forms";
import { ContactForm } from "./forms";
import { HeroBase, type HeroBaseProps } from "./hero";
import { MasonryBase } from "./masonry";
import type { MasonryBaseProps } from "./masonry";
import { Series } from "./series";

type Props = Pick<Page, "blocks"> & {
  data?: unknown;
};

export const Blocks: FC<Props> = ({ blocks, data }) => {
  return (
    <>
      {blocks?.map((block, iBlock) => {
        const key = `${block?.__typename}-${iBlock}`;
        switch (block?.__typename) {
          case "PageBlocksHeroBase": {
            if (!block.visible) return null;
            return <HeroBase key={key} {...(block as HeroBaseProps)} />;
          }
          case "PageBlocksMasonryBase": {
            if (!block.visible) return null;
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
            const raw = data as { series: Array<Serie> } | undefined;
            if (!block.visible || !raw) return null;

            return <Series key={key} data={raw.series} />;
          }
          case "PageBlocksContactForm": {
            if (!block.visible) return null;
            return <ContactForm key={key} {...(block as ContactFormProps)} />;
          }
          case "PageBlocksBodySimple": {
            const content = block.content as TinaMarkdownContent;
            if (!block.visible || content.children.length === 0) return null;
            return <BodySimple key={key} {...(block as BodySimpleProps)} />;
          }
          default:
            return null;
        }
      })}
    </>
  );
};
