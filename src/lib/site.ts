// Canonical site identity. Set NEXT_PUBLIC_SITE_URL in the environment when
// coverthost.com goes live to retarget every canonical/sitemap/OG URL at once.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://77.223.214.183.sslip.io";

export const SITE_NAME = "Covert Host";
export const SITE_TAGLINE = "Anonymous crypto VPS hosting";
export const SITE_DESCRIPTION =
  "Deploy a private Linux VPS in minutes and pay with Bitcoin, Monero, USDT and 15+ other coins. No account, no ID, no logs.";
