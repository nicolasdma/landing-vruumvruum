import React from "react";
import { cn } from "../lib/utils";
// import FlipWords from "../ui/FlipWords";
import { basedIn } from "../data/about";

const discounts = [
  {
    label: "First collaboration",
    description: "A warm welcome for new clients",
    modifier: "-30%",
    color: "bg-green-600",
  },
  {
    label: "Low on jobs",
    description: "Lucky timing – I’ve got bandwidth",
    modifier: "-40%",
    color: "bg-lime-600",
  },
  {
    label: "Whenever delivery",
    description: "No rush? You save more",
    modifier: "-60%",
    color: "bg-emerald-700",
  },
  {
    label: "Cool & respectful",
    description: "Good vibes = good rates",
    modifier: "-10%",
    color: "bg-blue-600",
  },
];

const surcharges = [
  {
    label: "Need it NOW",
    description: "Top priority – all hands on deck",
    modifier: "+20%",
    color: "bg-yellow-600",
  },
  {
    label: "Emergency mode",
    description: "Critical situation? I’m all in",
    modifier: "+30%",
    color: "bg-orange-600",
  },
  {
    label: "Difficult to work with",
    description: "Tension adds cost",
    modifier: "+60%",
    color: "bg-red-600",
  },
  {
    label: "Hard pass mode",
    description: "If we’re not a fit, I’ll decline",
    modifier: "🚫",
    color: "bg-neutral-700 text-red-400 border border-red-500",
  },
];

const PricingPolicy: React.FC = () => {
  const basedList = basedIn.sort(() => Math.random() - 0.5);

  return (
    <div className="relative px-6 py-10 lg:py-20">
      {/* Background Mask Effect */}
      <div className="absolute inset-0 bg-black dark:bg-black z-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          {/* <TextGenerateEffect
            words="How I price my work"
            className="text-left text-4xl sm:text-5xl lg:text-6xl text-white"
          /> */}
             <div className={cn("font-bold", "text-left text-4xl sm:text-5xl lg:text-6xl text-white")}>
                <div className="my-4">
                  <div className=" dark:text-white text-black leading-tight tracking-tighter">
                  How I price my work
                  </div>
                </div>
              </div>
          <p className="text-neutral-400 mt-4 text-md sm:text-lg">
            Fair, flexible, transparent. Discounts for good vibes.
            Surcharges for chaos.
          </p>
        </div>

        {/* One-Time Offer & Referral */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-indigo-950/60 border border-indigo-800 rounded-lg p-5 shadow-md">
            <h3 className="text-white font-semibold mb-1">🔥 One-time Offer</h3>
            <p className="text-indigo-200 text-sm">
              First 3 projects get{" "}
              <span className="text-white font-bold">75% OFF</span> – just a
              proper kickoff. (2/3 In Progress)
            </p>
          </div>
          <div className="bg-neutral-950/60 border border-neutral-800 rounded-lg p-5 shadow-md">
            <h3 className="text-white font-semibold mb-1">🤝 Referral Reward</h3>
            <p className="text-neutral-300 text-sm">
              Refer someone. Once they pay,{" "}
              <span className="ml-1 text-green-400 font-semibold bg-green-900/30 px-2 py-1 rounded text-xs">
                you get 20% off
              </span>{" "}
              your next project.
            </p>
          </div>
        </div>

        {/* Modifiers Section */}
        <div className="bg-neutral-950/50 border border-neutral-800 rounded-xl p-6 mb-10 shadow-lg">
          <h2 className="text-white text-2xl font-semibold mb-4">
            Discounts & Surcharges
          </h2>
          <p className="text-sm text-neutral-400 mb-6">
            Base rate: <span className="text-white font-medium">$18/hour</span>
            . The rest depends on how we work together.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg text-white font-semibold mb-3">Discounts</h3>
              <ul className="space-y-3">
                {discounts.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between border border-neutral-800 rounded-lg p-3 hover:scale-[1.02] transition-transform"
                  >
                    <div>
                      <p className="text-white font-medium">{item.label}</p>
                      <p className="text-neutral-400 text-sm">{item.description}</p>
                    </div>
                    <span
                      className={`text-white text-sm px-3 py-1 rounded-full ${item.color}`}
                    >
                      {item.modifier}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-white font-semibold mb-3">Surcharges</h3>
              <ul className="space-y-3">
                {surcharges.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between border border-neutral-800 rounded-lg p-3 hover:scale-[1.02] transition-transform"
                  >
                    <div>
                      <p className="text-white font-medium">{item.label}</p>
                      <p className="text-neutral-400 text-sm">{item.description}</p>
                    </div>
                    <span
                      className={`text-white text-sm px-3 py-1 rounded-full ${item.color}`}
                    >
                      {item.modifier}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Expectations */}
        <div className="text-sm text-neutral-400 border-t border-neutral-800 pt-6">
          <h3 className="text-white font-semibold mb-2">What to Expect</h3>
          <p className="mb-2">
            Projects move in phases—usually around{" "}
            <span className="text-white font-medium">40–50 hours</span> each.
            You get builds, updates, and honest estimates.
          </p>
          <p className="mb-2">
            Tools? Your call: Trello, Notion, WhatsApp, emails. We’ll find the
            rhythm that works.
          </p>
          <p>No hidden fees. Just structure, clarity, and good work.</p>
        </div>
      </div>
    </div>
  );
};

export default PricingPolicy;
