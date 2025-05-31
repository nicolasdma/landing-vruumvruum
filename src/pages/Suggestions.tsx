import React, { useEffect } from "react";
import { suggestions } from "../data/suggestions";

const Suggestions: React.FC = () => {
  useEffect(() => {
    window.history.pushState({}, "", "/dashboard/suggestions");
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 pb-24">
      <h1 className="text-3xl font-bold text-white mb-4">Crypto Payment Integration Plan</h1>
      <p className="text-neutral-400 mb-12 text-sm">
        Below is a detailed breakdown of the proposed solutions for integrating cryptocurrency payments into the system using WalletConnect and CoinGate. Each solution includes description, implementation scope, time estimates, and cost.
      </p>

      {suggestions.map((suggestion, index) => (
        <section
          key={index}
          className="mt-12 rounded-xl border border-neutral-800 bg-neutral-950/80 shadow-md p-8 space-y-8"
        >
          <header>
            <h2 className="text-2xl font-bold text-white mb-2">
              {suggestion.title}
            </h2>
            <div className="space-y-2 text-sm text-neutral-200 leading-relaxed">
              {suggestion.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </header>

          {suggestion.timeEstimate.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">🕒 Implementation Breakdown</h3>
              <div className="overflow-x-auto rounded-lg border border-neutral-700">
                <table className="min-w-full text-sm text-left text-white">
                  <thead className="bg-neutral-900 text-neutral-300">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Task</th>
                      <th className="px-4 py-3 font-semibold">Estimated Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {suggestion.timeEstimate.map((task, i) => (
                      <tr key={i} className="border-t border-neutral-800">
                        <td className="px-4 py-2">{task.task}</td>
                        <td className="px-4 py-2">{task.time}</td>
                      </tr>
                    ))}
                    <tr className="border-t border-neutral-800 font-bold bg-neutral-900">
                      <td className="px-4 py-2">Total</td>
                      <td className="px-4 py-2">{suggestion.total}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {suggestion.cost && (
            <footer className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-neutral-800 pt-6 text-sm text-neutral-300">
              <div className="flex flex-col gap-1">
                <span className="font-medium text-white">Timeframe:</span>
                <span>{suggestion.workingDays}</span>
                <span className="mt-2 text-white font-medium">Rate: {suggestion.rate}</span>
              </div>
              <div className="flex flex-col items-start sm:items-end justify-between gap-2">
                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-white bg-violet-600 rounded-full">
                  75% OFF
                </span>
                <span className="text-lg font-semibold text-white">
                  Final Cost: {suggestion.cost}
                </span>
              </div>
            </footer>
          )}
        </section>
      ))}

      <section className="mt-20">
        <h3 className="text-xl font-bold text-white mb-4">📊 Integration Comparison</h3>
        <div className="overflow-x-auto border border-neutral-700 rounded-lg">
          <table className="min-w-full text-sm text-left text-white">
            <thead className="bg-neutral-900 text-neutral-300">
              <tr>
                <th className="px-4 py-3 font-semibold">Feature</th>
                <th className="px-4 py-3 font-semibold">WalletConnect</th>
                <th className="px-4 py-3 font-semibold">CoinGate</th>
              </tr>
            </thead>
            <tbody className="text-neutral-200">
              <tr className="border-t border-neutral-800">
                <td className="px-4 py-2">Setup Time</td>
                <td className="px-4 py-2">13–17 hours</td>
                <td className="px-4 py-2">7–8 hours</td>
              </tr>
              <tr className="border-t border-neutral-800">
                <td className="px-4 py-2">KYC Requirement</td>
                <td className="px-4 py-2">No</td>
                <td className="px-4 py-2">Yes</td>
              </tr>
              <tr className="border-t border-neutral-800">
                <td className="px-4 py-2">Payment Methods</td>
                <td className="px-4 py-2">Any EVM-compatible wallet</td>
                <td className="px-4 py-2">Crypto + Fiat (Card, Apple Pay)</td>
              </tr>
              <tr className="border-t border-neutral-800">
                <td className="px-4 py-2">Fees</td>
                <td className="px-4 py-2">Gas fees only</td>
                <td className="px-4 py-2">~1% processing fee</td>
              </tr>
              <tr className="border-t border-neutral-800">
                <td className="px-4 py-2">USD → Crypto Conversion</td>
                <td className="px-4 py-2">Manual (CoinGecko API)</td>
                <td className="px-4 py-2">Automatic by CoinGate</td>
              </tr>
              <tr className="border-t border-neutral-800">
                <td className="px-4 py-2">Transaction Confirmation</td>
                <td className="px-4 py-2">Custom (Alchemy webhook or polling)</td>
                <td className="px-4 py-2">Handled by CoinGate</td>
              </tr>
              <tr className="border-t border-neutral-800">
                <td className="px-4 py-2">Long-term Flexibility</td>
                <td className="px-4 py-2">High (add NFTs, DeFi, on-chain logic)</td>
                <td className="px-4 py-2">Low (limited to CoinGate platform)</td>
              </tr>
              <tr className="border-t border-neutral-800">
                <td className="px-4 py-2">Best For</td>
                <td className="px-4 py-2">Web3-native UX, full control</td>
                <td className="px-4 py-2">Fast setup with fiat support</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Suggestions;
