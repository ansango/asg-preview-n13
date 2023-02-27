import type { FC, ReactNode } from 'react';
import { useContext, createContext, useState } from 'react';

import Box from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

type LightBoxContextType = {
  slides: { src: string; index: number }[];
  setSlides: (slides: { src: string; index: number }[]) => void;
  index: number;
  setIndex: (value: number) => void;
};

const initialState: LightBoxContextType = {
  slides: [],
  setSlides: (slides) => console.log('setSlides', slides),
  index: -1,
  setIndex: (value) => console.log('setIndex', value),
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
        plugins={[Thumbnails, Zoom]}
        thumbnails={{
          position: 'bottom',
        }}
      />
    </LightBoxContext.Provider>
  );
};
