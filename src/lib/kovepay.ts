const KOVEPAY_ORIGIN = process.env.KOVEPAY_API_URL ?? "https://kovepay.com";

export class KovepayError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "KovepayError";
    this.status = status;
  }
}

type KovepayInvoice = {
  data: {
    id: string;
    checkoutUrl: string;
    amountUsd: string;
    status: string;
  };
};

export async function createKovepayInvoice(amountUsd: string, description: string) {
  const apiKey = process.env.KOVEPAY_INVOICE_API_KEY;
  if (!apiKey) {
    throw new KovepayError("Payment provider is not configured", 500);
  }

  const response = await fetch(`${KOVEPAY_ORIGIN}/api/v1/invoices`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amountUsd,
      externalId: `${Math.floor(10000 + Math.random() * 90000)}`,
      expiresInMinutes: 60,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new KovepayError("Could not create invoice", response.status);
  }

  const invoice = (await response.json()) as KovepayInvoice;
  if (!invoice?.data?.checkoutUrl) {
    throw new KovepayError("Payment provider returned an invalid invoice", 502);
  }

  return invoice.data;
}
