import type { FC } from "react";

import type { Template } from "tinacms";

import { Container } from "../../container";
import { Section } from "../../section";

export const ContactForm: FC = () => {
  return (
    <>
      <Section className="flex-none">
        <Container>
          <div className="grid grid-cols-1 gap-6">
            <label>
              <span>Full name</span>
              <input type="text" placeholder="" />
            </label>
            <label>
              <span>Email address</span>
              <input type="email" placeholder="john@example.com" />
            </label>
            <label>
              <span>When is your event?</span>
              <input type="date" />
            </label>
            <label>
              <span>What type of event is it?</span>
              <select>
                <option>Corporate event</option>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Other</option>
              </select>
            </label>
            <label>
              <span>Additional details</span>
              <textarea rows={3} />
            </label>
            <div>
              <div className="mt-2">
                <div>
                  <label className="inline-flex items-center">
                    <input type="checkbox" />
                    <span className="ml-2">Email me news and special offers</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Container>
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
