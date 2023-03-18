import type { FC } from "react";

import type { Template } from "tinacms";
import type { TinaMarkdownContent } from "tinacms/dist/rich-text";
import { TinaMarkdown } from "tinacms/dist/rich-text";

import { Container } from "../../container";
import { Section } from "../../section";

export type HeroBaseProps = {
  headline: string;
  tagline?: string;
  text?: string;
  align: "left" | "center" | "right" | null;
  rotationTitle: "left" | "center" | "right" | null;
  parragraph?: TinaMarkdownContent;
};

const algignCnText = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const alignCnContainer = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

const rotationTitleCn = {
  left: "-rotate-[1.5deg]",
  center: "",
  right: "rotate-[1.5deg]",
};

export const HeroBase: FC<HeroBaseProps> = ({
  headline,
  tagline,
  text,
  align = "center",
  rotationTitle = "center",
  parragraph,
}) => {
  const cnContainer = align && alignCnContainer[align];
  const cnText = align && algignCnText[align];
  const cnRotationTitle = rotationTitle && rotationTitleCn[rotationTitle];
  console.log(parragraph);
  return (
    <>
      <Section>
        <Container className={`h-[65vh] flex items-center ${cnContainer}`}>
          <div className={`space-y-5 ${cnText}`}>
            {tagline && <span>{tagline}</span>}
            <h1 className={`${cnRotationTitle} max-w-screen-lg`}>{headline}</h1>
            {text && <span>{text}</span>}
          </div>
        </Container>
      </Section>
      {parragraph && parragraph.children.length > 0 && (
        <Section className="flex-none">
          <Container>
            <article className="pb-20 md:pb-40 lg:pb-72 prose prose-lg lg:prose-xl xl:prose-2xl">
              <TinaMarkdown content={parragraph} />
            </article>
          </Container>
        </Section>
      )}
    </>
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
    {
      type: "string",
      label: "Text",
      name: "text",
    },
    {
      type: "string",
      label: "Align",
      name: "align",
      options: [
        {
          label: "Left",
          value: "left",
        },
        {
          label: "Center",
          value: "center",
        },
        {
          label: "Right",
          value: "right",
        },
      ],
    },
    {
      type: "string",
      label: "Rotation Title",
      name: "rotationTitle",
      options: [
        {
          label: "Left",
          value: "left",
        },
        {
          label: "Center",
          value: "center",
        },
        {
          label: "Right",
          value: "right",
        },
      ],
    },
    {
      type: "rich-text",
      label: "Parragraph",
      name: "parragraph",
    },
  ],
};
