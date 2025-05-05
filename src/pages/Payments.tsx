import React from "react";

const payments = [
  {
    task: "Delivery #1 – Core features (excl. admin panel)",
    delivered: false,
    paid: false,
  },
  {
    task: "Delivery #2 – Admin panel",
    delivered: false,
    paid: false,
  },
  {
    task: "Delivery #3 – Testing & tweaks (1 week)",
    delivered: false,
    paid: false,
  },
  {
    task: "Delivery #4 – Support (3 extra weeks)",
    delivered: false,
    paid: false,
  },
];

const Payments: React.FC = () => {
  const baseTotal = 160;
  const extraTotal = 32;
  const grandTotal = baseTotal + extraTotal;

  return (
    <div className="mt-6 border border-neutral-800 rounded-lg bg-neutral-950/60 shadow-md p-6">
      <h2 className="text-xl font-semibold text-white mb-4">
        💸 Payments Agreement
      </h2>

      <p className="text-white mb-4">
        We close everything (including the admin panel and post-delivery
        support) at <strong>${baseTotal} total</strong>, covering around{" "}
        <strong>35–50 hours</strong> of work (~40h). Supabase learning is not
        charged. Payment is split into 4 equal parts (25% each).
      </p>

      {/* Total Summary */}
      <div className="text-white border border-neutral-800 rounded-lg p-4 bg-neutral-900/40 mb-6">
        <h3 className="text-lg font-semibold mb-2">🧾 Total Breakdown</h3>
        <div className="flex justify-between items-center mb-1">
          <span>Main scope</span>
          <span>
            ${baseTotal} → 4 payments of ${baseTotal / 4}
          </span>
        </div>
        <div className="flex justify-between items-center mb-1">
          <div>
            <span>Extra tasks</span>
            <ul className="list-disc list-inside text-white text-sm mb-6 space-y-1">
              <li>Referrals (est. 8h / $32 with discount)</li>
            </ul>
          </div>
          <div className="flex flex-col items-end">
            <span>${extraTotal}</span>
          </div>
        </div>
        <hr className="my-2 border-neutral-700" />
        <div className="flex justify-between items-center font-semibold text-green-400">
          <span>Total due</span>
          <span>${grandTotal}</span>
        </div>
      </div>

      {/* Main Payment Status Section */}
      <h3 className="text-lg font-semibold text-white mt-6 mb-2">
        📦 Payment Status
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-white">
          <thead>
            <tr className="font-semibold border-b border-neutral-700">
              <th className="px-4 py-2 font-medium">Task</th>
              <th className="px-4 py-2 font-medium">Delivered</th>
              <th className="px-4 py-2 font-medium">Paid</th>
              <th className="px-4 py-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p, i) => (
              <tr key={i} className="border-t border-neutral-700">
                <td className="px-4 py-2">{p.task}</td>
                <td className="px-4 py-2">{p.delivered ? "✅" : "⏳"}</td>
                <td className="px-4 py-2">{p.paid ? "✅" : "⏳"}</td>
                <td className="px-4 py-2">
                  {p.delivered && p.paid ? (
                    <span className="text-green-400 font-medium">Done</span>
                  ) : (
                    <span className="text-yellow-400 font-medium">Pending</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
