import type { FC } from "react";

import type { Template } from "tinacms";

export const ContactForm: FC = () => {
  return <>COntact Form</>;
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
