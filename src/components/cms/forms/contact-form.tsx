import type { FC } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { Template } from "tinacms";
import { z } from "zod";

import { Container } from "../../container";
import { Section } from "../../section";

const validationSchema = z.object({
  firstName: z
    .string()
    .min(2, {
      message: "El nombre debe tener al menos 2 caracteres",
    })
    .max(100, {
      message: "El nombre no puede tener más de 100 caracteres",
    }),
  lastName: z
    .string()
    .min(2, {
      message: "El apellido debe tener al menos 2 caracteres",
    })
    .max(100, {
      message: "El apellido no puede tener más de 100 caracteres",
    }),
  email: z.string().email({
    message: "El email no es válido",
  }),
  subject: z
    .string()
    .min(10, {
      message: "El asunto debe tener al menos 10 caracteres",
    })
    .max(1000, {
      message: "El asunto no puede tener más de 1000 caracteres",
    }),
  privacy: z.boolean().refine((value) => value === true, {
    message: "Debes aceptar la política de privacidad",
  }),
});

type ValidationSchema = z.infer<typeof validationSchema>;

export const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
  });
  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    reset();
    console.log(data);
  };

  return (
    <>
      <Section className="flex-none">
        <Container>
          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit(onSubmit)}>
            <label>
              <span>Nombre</span>
              <input type="text" placeholder="" {...register("firstName")} />
              <span className={`${errors.firstName?.message ? "error-text" : "helper-text"}`}>
                {errors.firstName?.message ?? "Introduce tu nombre"}
              </span>
            </label>
            <label>
              <span>Apellidos</span>
              <input type="text" placeholder="" {...register("lastName")} />
              <span className={`${errors.lastName?.message ? "error-text" : "helper-text"}`}>
                {errors.lastName?.message ?? "Introduce tus apellidos"}
              </span>
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="john@example.com" {...register("email")} />
              <span className={`${errors.email?.message ? "error-text" : "helper-text"}`}>
                {errors.email?.message ?? "Introduce tu email"}
              </span>
            </label>
            <label>
              <span>Asunto</span>
              <textarea rows={4} placeholder="¿Cómo puedo ayudarte?" {...register("subject")} />
              <span className={`${errors.subject?.message ? "error-text" : "helper-text"}`}>
                {errors.subject?.message ?? "Introduce el asunto"}
              </span>
            </label>
            <div>
              <div className="mt-2">
                <div>
                  <label className="items-center">
                    <input type="checkbox" {...register("privacy")} />
                    <span className="ml-2 text-sm">Acepto la política de privacidad</span>
                    <span className={`block ${errors.privacy?.message ? "error-text" : ""}`}>
                      {errors.privacy?.message ?? ""}
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <button className="btn btn-primary">Enviar</button>
          </form>
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
