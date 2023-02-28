import type { FC, ReactNode } from "react";

import { Fonts } from "./fonts";

type Props = {
  children: ReactNode;
};

export const Theme: FC<Props> = ({ children }) => {
  return (
    <>
      <Fonts />
      {children}
    </>
  );
};
