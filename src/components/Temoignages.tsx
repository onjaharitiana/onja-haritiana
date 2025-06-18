import { Star } from "lucide-react";
import { NextArrow } from "./NextArrow";

const temoignages = [
  {
    name: "Rakoto M.",
    company: "Épicerie Moderne, Antananarivo",
    quote:
      "Grâce au site e-commerce, mes ventes ont doublé en 3 mois. Onja comprend vraiment comment vendent les PME malgaches.",
    stars: 5,
    sales: "+120% de chiffre d'affaires",
    salesColor: "bg-green-500",
  },
  {
    name: "Hery R.",
    company: "Cabinet Comptable",
    quote:
      "Le site nous amène 5 nouveaux clients par mois. L'investissement s'est rentabilisé en 6 semaines.",
    stars: 5,
    sales: "+5 nouveaux clients/mois",
    salesColor: "bg-blue-500",
  },
  {
    name: "Nivo T.",
    company: "Atelier Métallurgie",
    quote:
      "Avant, les clients ne nous trouvaient pas. Maintenant ils nous appellent directement grâce au référencement.",
    stars: 5,
    sales: "+300% de visibilité",
    salesColor: "bg-purple-500",
  },
];

const Temoignage = ({
  name,
  company,
  quote,
  stars,
  sales,
  salesColor,
}: {
  name: string;
  company: string;
  quote: string;
  stars: number;
  sales: string;
  salesColor?: string;
}) => {
  return (
    <div className="bg-slate-600/20 backdrop-blur-lg p-8 rounded-2xl border border-slate-600/20 dark:bg-stone-600/20 dark:border-stone-700/20">
      <div className="flex mb-4">
        {[...Array(stars)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <blockquote className="text-lg mb-6 italic">{quote}</blockquote>
      <div className="border-t border-white/20 pt-4">
        <div className="font-bold">{name}</div>
        <div className="opacity-80 mb-2">{company}</div>
        <div
          className={`${
            salesColor || "bg-green-500"
          } text-white px-3 py-1 rounded-full text-sm inline-block`}
        >
          {sales}
        </div>
      </div>
    </div>
  );
};

export const Temoignages = () => {
  return (
    <section
      id="temoignages"
      className="relative min-h-screen py-30 flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 text-dark dark:text-white dark:bg-gradient-to-br dark:from-blue-950 dark:to-neutral-950"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Ce que disent mes clients PME
          </h2>
          <p className="text-xl opacity-90">
            Des résultats concrets, des entrepreneurs satisfaits
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {temoignages.map((t) => (
            <Temoignage key={t.name} {...t} />
          ))}
        </div>
      </div>
      <NextArrow sectionId="methode" />
    </section>
  );
};
