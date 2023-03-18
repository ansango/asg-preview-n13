import type { FC } from "react";

import Balancer from "react-wrap-balancer";
import type { Template } from "tinacms";
import type { TinaMarkdownContent } from "tinacms/dist/rich-text";
import { TinaMarkdown } from "tinacms/dist/rich-text";

import { Container } from "../../container";
import { Section } from "../../section";

export type BodySimpleProps = {
  content: TinaMarkdownContent;
};

export const BodySimple: FC<BodySimpleProps> = ({ content }) => {
  return (
    <Section className="flex-none">
      <Container>
        <article className="pb-20 prose prose-lg md:pb-40 lg:pb-72 lg:prose-xl xl:prose-2xl">
          <Balancer>
            <TinaMarkdown content={content} />
          </Balancer>
        </article>
      </Container>
    </Section>
  );
};

export const bodySimpleTemplate: Template = {
  name: "bodySimple",
  label: "Body Simple",
  fields: [
    {
      type: "boolean",
      label: "Visible",
      name: "visible",
    },
    {
      type: "rich-text",
      label: "Content",
      name: "content",
    },
  ],
};
