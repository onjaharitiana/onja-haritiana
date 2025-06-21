"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendContactEmail } from "@/app/contact-email-action";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

const contactSchema = z.object({
  firstname: z.string().min(1, { message: "Le prénom est requis" }),
  lastname: z.string().min(1, { message: "Le nom est requis" }),
  email: z.string().email({ message: "Email invalide" }),
  phone: z
    .string()
    .min(10, { message: "Téléphone invalide (10 chiffres min)" }),
  subject: z.string().min(1, { message: "Le sujet est requis" }),
  message: z.string().min(1, { message: "Le message est requis" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
}: // phone = "(123) 34567890",
// email = "email@example.com",
// web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
Contact2Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const onSubmit = async (data: ContactFormValues) => {
    setSuccess(false);
    setError(null);
    const res = await sendContactEmail(data);
    if (res.success) {
      setSuccess(true);
      reset();
    } else {
      setError(res.error || "Erreur lors de l'envoi du message");
    }
  };

  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-md flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-4xl font-semibold lg:mb-1 lg:text-5xl">
                {title}
              </h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            {/*
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                Contact :
              </h3>
              <ul className="ml-4 list-disc">
                <li>
                  <span className="font-bold">Téléphone: </span>
                  {phone}
                </li>
                <li>
                  <span className="font-bold">Whatsapp: </span>
                  {phone}
                </li>
                <li>
                  <span className="font-bold">Email: </span>
                  <a href={`mailto:${email}`} className="underline">
                    {email}
                  </a>
                </li>
                <li>
                  <span className="font-bold">Web: </span>
                  <a href={web.url} target="_blank" className="underline">
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>
            */}
          </div>
          <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10">
            {success && (
              <div className="mb-4 text-green-600 text-center font-semibold">
                Votre message a bien été envoyé !
              </div>
            )}
            {error && (
              <div className="mb-4 text-red-600 text-center font-semibold">
                {error}
              </div>
            )}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6"
            >
              <div className="flex gap-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="firstname">Prénom</Label>
                  <Input
                    type="text"
                    id="firstname"
                    placeholder="Prénom"
                    {...register("firstname")}
                  />
                  {errors.firstname && (
                    <span className="text-red-500 text-sm">
                      {errors.firstname.message}
                    </span>
                  )}
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="lastname">Nom</Label>
                  <Input
                    type="text"
                    id="lastname"
                    placeholder="Nom"
                    {...register("lastname")}
                  />
                  {errors.lastname && (
                    <span className="text-red-500 text-sm">
                      {errors.lastname.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  type="text"
                  id="phone"
                  placeholder="Téléphone"
                  {...register("phone")}
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm">
                    {errors.phone.message}
                  </span>
                )}
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="subject">Sujet</Label>
                <Input
                  type="text"
                  id="subject"
                  placeholder="Sujet"
                  {...register("subject")}
                />
                {errors.subject && (
                  <span className="text-red-500 text-sm">
                    {errors.subject.message}
                  </span>
                )}
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  placeholder="Type your message here."
                  id="message"
                  {...register("message")}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    {errors.message.message}
                  </span>
                )}
              </div>
              <Button className="w-full" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
