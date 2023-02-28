import type { ReactNode } from 'react';

import '@/styles/index.css';

import { Header, Footer, Theme } from '@/components';
import GlobalData from '@/content/global/index.json';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const { footer, header } = GlobalData;
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Theme>
          <Header {...header} />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer {...footer} />
        </Theme>
      </body>
    </html>
  );
}
