import { NextArrow } from "./NextArrow";

const MethodeItems = [
  {
    step: 1,
    title: "AUDIT GRATUIT (30 min)",
    description:
      "Analyse de votre présence actuelle, identification des opportunités manquées, stratégie personnalisée pour votre secteur.",
    footer: "100% gratuit, aucun engagement",
    color: "blue",
  },
  {
    step: 2,
    title: "DEVELOPPEMENT INTELLIGENT",
    description:
      "Site optimisé pour vos clients malagasy, formation pour que vous soyez autonome, suivi pendant 3 mois inclus.",
    color: "purple",
  },
  {
    step: 3,
    title: "RÉSULTATS MESURÉS",
    description:
      "Reporting mensuel de performance, ajustements gratuits si nécessaire.",
    color: "red",
  },
];

const MethodeItem = ({
  step,
  title,
  description,
  footer,
}: {
  step: number;
  title: string;
  description: string;
  footer?: string;
}) => {
  const colors = ["bg-blue-600", "bg-purple-600", "bg-red-600"];

  return (
    <div className="text-center">
      <div
        className={`w-20 h-20 ${
          colors[step - 1]
        } text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6`}
      >
        {step}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-4 dark:text-gray-400">
        {description}
      </p>
      {footer && (
        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
          {footer}
        </div>
      )}
    </div>
  );
};

export const Methode = () => {
  return (
    <section
      id="methode"
      className="py-30 relative min-h-screen flex flex-col justify-center items-center border-t-1 border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 dark:text-white">
            Comment je garantis votre succès en 3 étapes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {MethodeItems.map((item) => (
            <MethodeItem key={item.step} {...item} />
          ))}
        </div>
      </div>

      <NextArrow sectionId="difference" />
    </section>
  );
};
