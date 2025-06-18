import { X } from "lucide-react";

import { Check } from "lucide-react";

export const Difference = () => {
  return (
    <section id="difference" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            La différence qui change tout
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-4 px-6 text-left">Critères</th>
                <th className="py-4 px-6 text-center">Autres développeurs</th>
                <th className="py-4 px-6 text-center bg-yellow-500 text-black">
                  Moi
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-6 font-semibold">Approche</td>
                <td className="py-4 px-6 text-center">
                  <X className="w-6 h-6 text-red-600 mx-auto" />
                  <div className="text-sm">Se contentent de coder</div>
                </td>
                <td className="py-4 px-6 text-center bg-green-50">
                  <Check className="w-6 h-6 text-green-600 mx-auto" />
                  <div className="text-sm font-semibold">
                    Comprends votre business
                  </div>
                </td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="py-4 px-6 font-semibold">Expertise</td>
                <td className="py-4 px-6 text-center">
                  <X className="w-6 h-6 text-red-600 mx-auto" />
                  <div className="text-sm">Spécialisés sur 1 techno</div>
                </td>
                <td className="py-4 px-6 text-center bg-green-50">
                  <Check className="w-6 h-6 text-green-600 mx-auto" />
                  <div className="text-sm font-semibold">
                    Généraliste = solution complète
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-semibold">Tarifs</td>
                <td className="py-4 px-6 text-center">
                  <X className="w-6 h-6 text-red-600 mx-auto" />
                  <div className="text-sm">Prix européens</div>
                </td>
                <td className="py-4 px-6 text-center bg-green-50">
                  <Check className="w-6 h-6 text-green-600 mx-auto" />
                  <div className="text-sm font-semibold">
                    Adaptés aux PME malgaches
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-semibold">Suivi</td>
                <td className="py-4 px-6 text-center">
                  <X className="w-6 h-6 text-red-600 mx-auto" />
                  <div className="text-sm">Vous laissent seuls après</div>
                </td>
                <td className="py-4 px-6 text-center bg-green-50">
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
    </section>
  );
};
