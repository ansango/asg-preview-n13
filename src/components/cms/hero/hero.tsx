import type { FC } from "react";

import type { Template } from "tinacms";

import { Container } from "../../container";
import { Section } from "../../section";

export type HeroBaseProps = {
  headline: string;
  tagline?: string;
  text?: string;
};

export const HeroBase: FC<HeroBaseProps> = ({ headline, tagline, text }) => {
  return (
    <Section>
      <Container className="h-[75vh] flex items-center">
        <div>
          {tagline && <p className="text-2xl font-sans">{tagline}</p>}
          <h1 className="text-3xl font-sans">{headline}</h1>
          {text && <p className="text-lg font-sans">{text}</p>}
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
      name: "tagline",
      label: "Tagline",
      type: "string",
    },
    {
      type: "string",
      label: "Headline",
      name: "headline",
      required: true,
    },
    {
      type: "string",
      label: "Text",
      name: "text",
      ui: {
        component: "textarea",
      },
    },
  ],
};
