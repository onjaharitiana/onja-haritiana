import { Code, Users, Globe } from "lucide-react";
import { NextArrow } from "./NextArrow";
const expertiseItems = [
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: "Expérience entreprise",
    description:
      "6 ans dans les contraintes budget/délais/ROI. Je sais ce qui marche vraiment pour faire grandir une entreprise, pas juste coder.",
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "Vision Business",
    description:
      "Généraliste expérimenté = je parle technique ET business. Votre projet aura une cohérence globale, du design à la stratégie, pas juste du code.",
  },
  {
    icon: <Code className="w-8 h-8 text-purple-600" />,
    title: "Marché Malagasy",
    description:
      "Je connais vos clients, vos concurrents, vos opportunités. Votre site sera optimisé pour le comportement des consommateurs malagasy et les spécificités locales.",
  },
];

const ExpertiseItem = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-800 text-center">
      <div className="flex items-center justify-center mb-6">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center dark:bg-gray-700">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

export const ExpertiseSection = () => {
  return (
    <section
      id="expertise"
      className="relative py-40 flex flex-col items-center bg-gray-50 dark:bg-gray-900 min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 dark:text-white">
            Contrairement aux autres développeurs, je connais vos VRAIS défis
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Double expertise unique : standards européens + compréhension
            profonde du marché malgache
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {expertiseItems.map((item) => (
            <ExpertiseItem key={item.title} {...item} />
          ))}
        </div>
      </div>
      <NextArrow sectionId="methode" />
    </section>
  );
};
