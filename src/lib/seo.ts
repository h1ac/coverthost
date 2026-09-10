import { SITE_URL, SITE_NAME } from "@/lib/site";
import { PLANS, REGIONS } from "@/lib/data";

export const FAQS = [
  {
    question: "Do you require an account or ID?",
    answer:
      "No. Choose a plan, send payment, and receive your credentials. We never ask for a name, address, or identity documents.",
  },
  {
    question: "What logs do you keep?",
    answer:
      "No traffic or connection logs. Nothing is retained after your server is destroyed.",
  },
  {
    question: "How fast is provisioning?",
    answer: "Within five minutes of payment confirmation.",
  },
  {
    question: "Where are your servers located?",
    answer: `Nine locations worldwide: ${REGIONS.map((r) => r.city).join(", ")}.`,
  },
  {
    question: "Can I pay with a stablecoin?",
    answer: "Yes. USDT, USDC and DAI.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Within 48 hours, returned to the originating address.",
  },
];

export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
  };
}

export function serviceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Covert Host VPS",
    description:
      "Crypto-only VPS hosting with no account, no ID and no logs. Linux servers in 9 locations, deployed within minutes of payment.",
    url: `${SITE_URL}/`,
    brand: { "@type": "Brand", name: SITE_NAME },
    offers: PLANS.map((plan) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: `${plan.name} VPS`,
        description: `${plan.vcpu} vCPU, ${plan.ram} GB RAM, ${plan.disk} GB NVMe storage, unlimited bandwidth`,
      },
      price: plan.price.toFixed(2),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/order`,
    })),
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
