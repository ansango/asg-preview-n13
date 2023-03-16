"use client";

import type { FC } from "react";

import Link from "next/link";
import useSWR from "swr";
import type { Template } from "tinacms";

import type { Serie } from ".tina/__generated__/types";

import { fetcher, kebabCase } from "../../../lib";
import { Container } from "../../container";
import { Section } from "../../section";

export const Series: FC = () => {
  const { data } = useSWR<Serie[]>("/api/series", fetcher);

  return (
    <Section className="flex-none">
      <Container className="!py-2 !sm:py-2 !md:py-6">
        <ul className="space-y-12">
          {data?.map(({ id, title, description, sequence }) => {
            return (
              <li key={id} className="odd:-rotate-[0.5deg] even:rotate-[0.5deg] group">
                <h3 className="text-xl">
                  <Link href={`/serie/${kebabCase(`${sequence}-${title}`)}`}>{title} </Link>
                </h3>

                <p className="text-sm">{description}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
};

export const allSeriesTemplate: Template = {
  label: "All series",
  name: "allSeries",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
    },
  ],
};
