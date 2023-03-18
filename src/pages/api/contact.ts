import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

import type { ValidationSchema } from "@/components/cms";
import {
  sendMail,
  CONFIG as MAIL_CONFIG,
  clientHtml,
  submission,
  corsMiddleware,
  customErrors,
} from "@/lib";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.use(corsMiddleware).post(async (req, res) => {
  const {
    email,
    firstName,
    lastName,
    privacy,
    subject: message,
    token,
  } = req.body as ValidationSchema & {
    token: string | undefined;
  };
  if (!req.body || !firstName || !lastName || !email || !privacy || !message || !token) {
    return res.status(400).json({ message: "Invalid request" });
  } else {
    try {
      await sendMail({
        to: MAIL_CONFIG.from,
        from: MAIL_CONFIG.from,
        subject: "New message from anibalsantosgomez.com",
        html: submission({
          name: `${firstName} ${lastName}`,
          email,
          message,
        }),
      });
      await sendMail({
        to: email,
        from: MAIL_CONFIG.from,
        subject: "Mensaje recibido!",
        html: clientHtml({ lang: "es", name: `${firstName} ${lastName}` }),
      });
      return res.status(200).json({ message: "Success" });
    } catch (error) {
      res.status(405).json({
        status: "failure",
        message: "Error submitting the enquiry form",
      });
    }
  }
});

export default router.handler(customErrors);
