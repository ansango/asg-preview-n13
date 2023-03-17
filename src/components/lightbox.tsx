import type { FC, ReactNode } from "react";
import { useEffect, useContext, createContext, useState } from "react";

import Box from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import type { ImageProps } from "./image";
import { Image } from "./image";
import type { MasonryProps } from "./masonry";
import { Masonry } from "./masonry";

type LightBoxContextType = {
  slides: { src: string; index: number }[];
  setSlides: (slides: { src: string; index: number }[]) => void;
  index: number;
  setIndex: (value: number) => void;
};

const initialState: LightBoxContextType = {
  slides: [],
  setSlides: (slides) => console.log("setSlides", slides),
  index: -1,
  setIndex: (value) => console.log("setIndex", value),
};

const LightBoxContext = createContext(initialState);

export const useLightBox = () => useContext(LightBoxContext);

export const LightBox: FC<{ children: ReactNode }> = ({ children }) => {
  const [index, setIndex] = useState<number>(-1);
  const [slides, setSlides] = useState<{ src: string; index: number }[]>([]);

  return (
    <LightBoxContext.Provider
      value={{
        slides,
        setSlides,
        index,
        setIndex,
      }}
    >
      {children}

      <Box
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Thumbnails, Zoom, Slideshow, Fullscreen]}
        thumbnails={{
          position: "bottom",
        }}
      />
    </LightBoxContext.Provider>
  );
};

type Images = { images: ImageProps[] };

export type MasonryWithLightBoxProps = Omit<MasonryProps, "children"> & Images;

export const MasonryWidget: FC<MasonryWithLightBoxProps> = ({ columns, gap, images }) => {
  const { setIndex, setSlides } = useLightBox();

  useEffect(() => {
    if (images) {
      const mappedImages = images.map((img, index) => {
        return {
          src: img.url || "",
          index,
        };
      });
      setSlides(mappedImages);
    }
  }, [images, setSlides]);
  return (
    <Masonry columns={columns} gap={gap}>
      {images.map((image, index) => (
        <Image
          key={index}
          {...image}
          alt={image.alt}
          onClick={() => setIndex(index)}
          loading={index < 4 ? "eager" : "lazy"}
        />
      ))}
    </Masonry>
  );
};

export const MasonryWithLightBox: FC<MasonryWithLightBoxProps> = ({ columns, gap, images }) => {
  return (
    <LightBox>{images && <MasonryWidget columns={columns} gap={gap} images={images} />}</LightBox>
  );
};
