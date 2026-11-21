// What the site says about getting started and the wallet.
// The $59 first load with auto-reload (BIZ-2381) is live in prod since Nov 21 2026.
// false restores the old $5 rules.
export const FIRST_LOAD_59 = true;

export const START_AMOUNT = FIRST_LOAD_59 ? "$59" : "$5";

export const RATES = [
  { price: "$0.03", unit: "per vCPU-minute, billed by the second" },
  { price: "$0.05", unit: "per GB-month of storage" },
] as const;

export const WALLET_FAQ = FIRST_LOAD_59
  ? "You start with a $59 load. Auto-reload is on by default: when your balance drops below $10, it adds $59, and you can turn it off. Top-ups are $10 minimum. Credits expire 12 months after purchase."
  : "Add a card and at least $5 to start. Top up whenever you like, $5 minimum, or turn on auto top-up so the wallet refills itself when it runs low.";

export const REFUND_FAQ = FIRST_LOAD_59
  ? "Unused credit from your first $59 load is refundable for 3 days: email admin@vidjutsu.ai. Later top-ups and auto-reloads are non-refundable, and we always refund our own billing errors and failed jobs."
  : "A job that fails on our side is never charged, and we always refund our own billing errors. Write to support@vidjutsu.ai about anything else.";
