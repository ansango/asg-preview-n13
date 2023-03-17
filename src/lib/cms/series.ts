import tinaClient from "../../../.tina/__generated__/client";

export async function getSeries() {
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
          new Date(b?.publishedAt as unknown as Date).getTime() -
          new Date(a?.publishedAt as unknown as Date).getTime()
      );

  return (
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
