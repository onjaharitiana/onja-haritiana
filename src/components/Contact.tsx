import { Contact2 } from "@/components/contact-2";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center py-20"
    >
      <Contact2
        title="Découvrez en 30 minutes comment doubler vos ventes"
        description="Audit gratuit + stratégie personnalisée - Réponse sous 24h"
        phone="+261 34 14 256 65"
        email="contact@onja-haritiana.dev"
        web={{ label: "onja-haritiana.dev", url: "https://onja-haritiana.dev" }}
      />
    </section>
  );
};
