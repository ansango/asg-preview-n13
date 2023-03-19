import type { ReactNode } from "react";

import { Theme } from "@/components";

import SeriesConfig from "../../../content/global/series.json";

type Params = {
  filename: string;
};

export default async function SerieLayout({ children }: { children: ReactNode; params: Params }) {
  const { background } = SeriesConfig;

  return (
    <div className={`${background.light} ${background.dark}`}>
      <Theme>
        <main>{children}</main>
      </Theme>
    </div>
  );
}
