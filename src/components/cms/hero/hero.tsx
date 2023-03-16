import type { FC } from "react";

import type { Template } from "tinacms";

import { Container } from "../../container";
import { Section } from "../../section";

export type HeroBaseProps = {
  headline: string;
  tagline?: string;
};

export const HeroBase: FC<HeroBaseProps> = ({ headline, tagline }) => {
  return (
    <Section>
      <Container className="h-[65vh] flex items-center justify-center">
        <div className="text-center">
          {tagline && <span>{tagline}</span>}
          <h1 className="rotate-[1.5deg]">{headline}</h1>
        </div>
      </Container>
    </Section>
  );
};

export const heroBaseTemplate: Template = {
  name: "heroBase",
  label: "Hero Base",
  fields: [
    {
      type: "string",
      label: "Tagline",
      name: "tagline",
    },
    {
      type: "string",
      label: "Headline",
      name: "headline",
      required: true,
    },
  ],
};
