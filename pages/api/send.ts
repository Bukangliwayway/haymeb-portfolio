import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { render } from "@react-email/components";
import Content from "../emails/Content";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, subject, description } = req.body;

  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: "jamesmatthewbelgica@gmail.com",
    subject: subject,
    html: render(Content({ email, description })),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
