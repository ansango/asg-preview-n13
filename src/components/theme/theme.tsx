"use client";

import type { FC, ReactNode } from "react";

import { Inter, PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

type Props = {
  children: ReactNode;
};

export const Theme: FC<Props> = ({ children }) => {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --serif: ${ptSerif.style.fontFamily};
            --sans: ${inter.style.fontFamily};
          }
          [data-theme="light"] {
            --color-primary: theme("colors.pink.500");
            --color-secondary: theme("colors.indigo.500");
            --color-text: theme("colors.gray.900");
            --color-text-offset: theme("colors.gray.600");
            --color-background: theme("colors.gray.50");
            --color-background-offset: theme("colors.gray.100");
            --color-border: theme("colors.gray.900" / 10%);
          }

          [data-theme="dark"] {
            --color-primary: theme("colors.pink.400");
            --color-secondary: theme("colors.indigo.400");
            --color-text: theme("colors.gray.50");
            --color-text-offset: theme("colors.gray.400");
            --color-background: theme("colors.gray.900");
            --color-background-offset: theme("colors.gray.800");
            --color-border: theme("colors.gray.50" / 10%);
          }
        `}
      </style>
      {children}
    </>
  );
};
