import type { FC } from "react";

import Link from "next/link";

type Pagination = {
  title: string;
  route: string;
};

type Props = {
  prev?: Pagination | null;
  next?: Pagination | null;
};

export const Pagination: FC<Props> = ({ next, prev }) => {
  return (
    <>
      <div className="text-left group">
        {prev?.route && (
          <>
            <h4 className="text-xs tracking-wide italic">Anterior</h4>
            <Link href={prev.route} className={`line-clamp-1 max-w-xs mr-auto`}>
              {prev.title}
            </Link>
          </>
        )}
      </div>

      <div className="text-right group">
        {next?.route && (
          <>
            <h4 className="text-xs tracking-wide italic">Siguiente</h4>

            <Link href={next.route} className="line-clamp-1 max-w-xs ml-auto">
              {next.title}
            </Link>
          </>
        )}
      </div>
    </>
  );
};
