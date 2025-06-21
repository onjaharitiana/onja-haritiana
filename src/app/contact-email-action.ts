"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail({
  firstname,
  lastname,
  email,
  phone,
  subject,
  message,
}: {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  try {
    const fullName = `${firstname} ${lastname}`;
    const html = `
      <h2>Nouveau message de contact</h2>
      <p><strong>Nom:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Téléphone:</strong> ${phone}</p>
      <p><strong>Sujet:</strong> ${subject}</p>
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
    `;
    await resend.emails.send({
      from: "Contact <contact@onja-haritiana.dev>",
      to: ["onja.developer@gmail.com"],
      subject: `[Contact] ${subject}`,
      replyTo: email,
      html,
    });
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error?.message || "Erreur d'envoi" };
  }
}
