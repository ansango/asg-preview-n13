"use client";

import type { FC, ReactNode } from "react";

import { ThemeProvider } from "next-themes";

type Props = {
  children: ReactNode;
};

export const Theme: FC<Props> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
