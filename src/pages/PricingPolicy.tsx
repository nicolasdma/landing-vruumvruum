// PricingPolicy.tsx
import React from "react";

const discounts = [
    {
      label: "First collaboration",
      description: "Welcome offer to kick things off",
      modifier: "-30%",
      color: "bg-green-600",
    },
    {
      label: "Low on jobs",
      description: "Lucky you – I'm in need of work",
      modifier: "-40%",
      color: "bg-lime-600",
    },
    {
      label: "Whenever delivery",
      description: "No rush, no stress, whenever works",
      modifier: "-60%",
      color: "bg-emerald-700",
    },
    {
      label: "Cool & respectful",
      description: "Good vibes, good deals",
      modifier: "-10%",
      color: "bg-blue-600",
    },
  ];
  
  const surcharges = [
    {
      label: "Need it NOW",
      description: "Top priority, I'm dropping everything",
      modifier: "+20%",
      color: "bg-yellow-600",
    },
    {
      label: "Emergency mode",
      description: "Armageddon? Servers down? Needed *yesterday*",
      modifier: "+30%",
      color: "bg-orange-600",
    },
    {
      label: "Difficult to work with",
      description: "Rude, disrespectful, chaotic",
      modifier: "+60%",
      color: "bg-red-600",
    },
    {
      label: "Hard pass mode",
      description: "Sorry, I don’t work with you",
      modifier: "🚫",
      color: "bg-neutral-700 text-red-400 border border-red-500",
    },
  ];
  
  
const PricingPolicy: React.FC = () => {
  return (
    <div className="mt-10 space-y-8">
      <div className="border border-neutral-800 rounded-lg bg-neutral-950/60 shadow-md p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Discounts & Surcharges</h2>
        <p className="text-sm text-neutral-400 mb-6">
          Base rate: $16/hour – modifiers apply based on context.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Discounts</h3>
            <ul className="space-y-3">
              {discounts.map((item, index) => (
                <li key={index} className="flex items-center justify-between border border-neutral-800 rounded-lg p-3">
                  <div>
                    <p className="text-white font-medium">{item.label}</p>
                    <p className="text-neutral-400 text-sm">{item.description}</p>
                  </div>
                  <span className={`text-white text-sm px-3 py-1 rounded-full ${item.color}`}>
                    {item.modifier}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Surcharges</h3>
            <ul className="space-y-3">
              {surcharges.map((item, index) => (
                <li key={index} className="flex items-center justify-between border border-neutral-800 rounded-lg p-3">
                  <div>
                    <p className="text-white font-medium">{item.label}</p>
                    <p className="text-neutral-400 text-sm">{item.description}</p>
                  </div>
                  <span className={`text-white text-sm px-3 py-1 rounded-full ${item.color}`}>
                    {item.modifier}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPolicy;
