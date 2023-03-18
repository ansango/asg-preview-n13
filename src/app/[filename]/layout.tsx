import type { ReactNode } from "react";

import { Theme } from "@/components";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <Theme>
      <main className="flex flex-col flex-1">{children}</main>
    </Theme>
  );
}
