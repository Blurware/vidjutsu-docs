// What the site says about getting started and the wallet.
// The $59 first load with auto-reload (BIZ-2381) is decided but not built yet.
// Until it ships, the site states the live rules from docs/pricing.mdx.
// When BIZ-2381 is live, set FIRST_LOAD_59 to true.
export const FIRST_LOAD_59 = false;

export const START_AMOUNT = FIRST_LOAD_59 ? "$59" : "$5";

export const RATES = [
  { price: "$0.03", unit: "per vCPU-minute, billed by the second" },
  { price: "$0.05", unit: "per GB-month of storage" },
] as const;

export const WALLET_FAQ = FIRST_LOAD_59
  ? "You start with a $59 load. Auto-reload is on by default: when your balance drops below $10, it adds $59. Credits last 12 months."
  : "Add a card and at least $5 to start. Top up whenever you like, $5 minimum, or turn on auto top-up so the wallet refills itself when it runs low.";

export const REFUND_FAQ = FIRST_LOAD_59
  ? "Unspent balance on your first $59 load is refundable within 14 days. Later loads and auto-reloads are non-refundable, and we always refund our own billing errors and failed jobs."
  : "A job that fails on our side is never charged, and we always refund our own billing errors. Write to support@vidjutsu.ai about anything else.";
