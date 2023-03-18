import type { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return <main className="flex flex-col flex-1">{children}</main>;
}