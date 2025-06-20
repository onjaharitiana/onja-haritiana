import { X } from "lucide-react";

import { Check } from "lucide-react";
import { NextArrow } from "./NextArrow";

export const Difference = () => {
  return (
    <section
      id="difference"
      className="min-h-screen flex flex-col justify-center py-20 bg-gray-50 dark:bg-gray-900 relative"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            La différence qui change tout
          </h2>
        </div>

        <div className="bg-white rounded-md shadow-xl overflow-hidden dark:bg-gray-800">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-600 text-white dark:bg-blue-950 w-30/100">
                <th className="py-4 px-6 border-r-1 border-white dark:border-gray-500 text-center">
                  Critères
                </th>
                <th className="py-4 px-6 text-center w-35/100">
                  Autres développeurs
                </th>
                <th className="py-4 px-6 text-center w-35/100 bg-yellow-500 text-black dark:bg-yellow-900 dark:text-white">
                  Moi
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-6 font-semibold border-r-1 border-white dark:border-gray-500 text-center">
                  Approche
                </td>
                <td className="py-4 px-6 text-center">
                  <X className="w-6 h-6 text-red-600 mx-auto" />
                  <div className="text-sm">Se contentent de coder</div>
                </td>
                <td className="py-4 px-6 text-center bg-green-50 dark:bg-green-950">
                  <Check className="w-6 h-6 text-green-600 mx-auto" />
                  <div className="text-sm font-semibold">
                    Comprends votre business
                  </div>
                </td>
              </tr>
              <tr className="border-b bg-gray-50 dark:bg-gray-900">
                <td className="py-4 px-6 font-semibold border-r-1 border-white dark:border-gray-500 text-center">
                  Expertise
                </td>
                <td className="py-4 px-6 text-center">
                  <X className="w-6 h-6 text-red-600 mx-auto" />
                  <div className="text-sm">Spécialisés sur 1 techno</div>
                </td>
                <td className="py-4 px-6 text-center bg-green-50 dark:bg-green-950">
                  <Check className="w-6 h-6 text-green-600 mx-auto" />
                  <div className="text-sm font-semibold">
                    Généraliste = solution complète
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-semibold border-r-1 border-white dark:border-gray-500 text-center">
                  Tarifs
                </td>
                <td className="py-4 px-6 text-center">
                  <X className="w-6 h-6 text-red-600 mx-auto" />
                  <div className="text-sm">Prix européens</div>
                </td>
                <td className="py-4 px-6 text-center bg-green-50 dark:bg-green-950">
                  <Check className="w-6 h-6 text-green-600 mx-auto" />
                  <div className="text-sm font-semibold">
                    Adaptés aux PME malagasy
                  </div>
                </td>
              </tr>
              <tr className="border-b bg-gray-50 dark:bg-gray-900">
                <td className="py-4 px-6 font-semibold border-r-1 border-white dark:border-gray-500 text-center">
                  Suivi
                </td>
                <td className="py-4 px-6 text-center">
                  <X className="w-6 h-6 text-red-600 mx-auto" />
                  <div className="text-sm">Vous laissent seuls après</div>
                </td>
                <td className="py-4 px-6 text-center bg-green-50 dark:bg-green-950">
                  <Check className="w-6 h-6 text-green-600 mx-auto" />
                  <div className="text-sm font-semibold">
                    Formation + suivi 3 mois
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <NextArrow sectionId="contact" />
    </section>
  );
};
