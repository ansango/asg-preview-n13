"use client";

import type { FC } from "react";

import { Inter, PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export const Fonts: FC = () => {
  return (
    <style jsx global>
      {`
        :root {
          --serif: ${ptSerif.style.fontFamily};
          --sans: ${inter.style.fontFamily};
        }
      `}
    </style>
  );
};
