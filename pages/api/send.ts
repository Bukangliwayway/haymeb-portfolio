import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import Welcome from "../emails/Welcome";
import { render } from "@react-email/components";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: "jamesmatthewbelgica@gmail.com",
    subject: "Welcome Peasant!",
    html: render(Welcome()),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
