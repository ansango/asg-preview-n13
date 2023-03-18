import type { FC } from "react";

import type { Template } from "tinacms";

import { Container } from "../../container";
import { Section } from "../../section";

export const ContactForm: FC = () => {
  return (
    <>
      <Section className="flex-none">
        <Container>COntact Form</Container>
      </Section>
    </>
  );
};

export const contactFormTemplate: Template = {
  label: "Contact Form",
  name: "contactForm",
  fields: [
    {
      name: "visible",
      label: "Visible",
      type: "boolean",
    },
  ],
};
