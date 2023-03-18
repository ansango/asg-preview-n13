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
              <span>Nombre</span>
              <input type="text" placeholder="" />
            </label>
            <label>
              <span>Apellidos</span>
              <input type="text" placeholder="" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="john@example.com" />
            </label>
            <label>
              <span>Asunto</span>
              <textarea rows={4} placeholder="¿Cómo puedo ayudarte?" />
            </label>
            <div>
              <div className="mt-2">
                <div>
                  <label className="inline-flex items-center">
                    <input type="checkbox" />
                    <span className="ml-2">Acepto la política de privacidad</span>
                  </label>
                </div>
              </div>
            </div>
            <button className="btn btn-primary">Enviar</button>
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
