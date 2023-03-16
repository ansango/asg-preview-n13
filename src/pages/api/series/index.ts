import type { NextApiRequest, NextApiResponse } from "next";

import tinaClient from "../../../../.tina/__generated__/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    data: {
      serieConnection: { edges },
    },
  } = await tinaClient.queries.serieConnection();
  const data =
    edges &&
    edges
      .map((edge) => {
        if (edge) {
          return edge.node;
        }
      })
      .filter((node) => node)
      .sort(
        (a, b) =>
          new Date(a?.publishedAt as unknown as Date).getTime() -
          new Date(b?.publishedAt as unknown as Date).getTime()
      );

  res.status(200).json(
    data &&
      data
        .map((serie) => {
          if (serie) {
            const {
              id,
              sequence,
              summary,
              title,
              cover,
              description,
              isFeatured,
              masonry,
              meta,
              publishedAt,
              visible,
              gallerySerie,
            } = serie;
            return {
              id,
              sequence,
              summary,
              title,
              cover,
              description,
              isFeatured,
              masonry,
              meta,
              publishedAt,
              visible,
              gallerySerie,
            };
          }
        })
        .filter((serie) => serie?.visible)
  );
}
