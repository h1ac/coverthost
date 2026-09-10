import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { CoinIcon } from "@/components/coin-icons";
import { PLANS, COINS, REGIONS } from "@/lib/data";
import { FAQS, orgJsonLd, serviceJsonLd, faqJsonLd } from "@/lib/seo";

function Coin({ sym, name }: { sym: string; name: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-sm font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
      <CoinIcon sym={sym} className="h-5 w-5 shrink-0" />
      <span className="font-semibold text-zinc-900 dark:text-white">{sym}</span>
      <span className="hidden text-zinc-500 sm:inline dark:text-zinc-400">
        {name}
      </span>
    </span>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="text-sm font-medium uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white text-zinc-600 dark:bg-zinc-950 dark:text-zinc-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
      <SiteHeader />

      <main>
        <section className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
            <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
              Private VPS hosting, paid with cryptocurrency
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg">
              Deploy a reliable Linux server in minutes and pay with Bitcoin,
              Monero, or stablecoins. No account, no ID required.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="/order"
                className="cursor-pointer rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500"
              >
                View plans
              </a>
              <a
                href="#contact"
                className="cursor-pointer rounded-md border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
              >
                Contact sales
              </a>
            </div>
            <p className="mt-6 text-sm">
              Servers in{" "}
              {[...new Set(REGIONS.map((r) => r.city))].join(", ")}.
            </p>
          </div>
        </section>

        {/* Trust indicators */}
        <section className="border-b border-zinc-200 dark:border-zinc-800">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden sm:grid-cols-4 lg:grid-cols-4">
            {[
              {
                title: "Privacy first",
                description: "No account or identity verification. An order number and a payment is all we ask for.",
                color: "text-green-600 dark:text-green-400",
              },
              {
                title: "Crypto payments",
                description: "Pay with 15+ cryptocurrencies across multiple networks and chains.",
                color: "text-amber-600 dark:text-amber-400",
              },
              {
                title: "Fast provisioning",
                description: "Servers build automatically within ~5 minutes of payment confirmation.",
                color: "text-blue-600 dark:text-blue-400",
              },
              {
                title: "Full root access",
                description: "Full root, native IPv6 address, and DDoS protection included with every plan.",
                color: "text-emerald-600 dark:text-emerald-400",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="px-6 py-8 sm:border-l sm:border-zinc-200 sm:first:border-l-0 dark:sm:border-zinc-800"
              >
                <span className={`mb-2 block text-2xl ${feature.color}`}>
                  ●
                </span>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Plans */}
        <section id="plans" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="Pricing" title="Simple monthly plans" />
          <p className="mb-10 max-w-2xl">
            All plans include unlimited bandwidth, full root access, a native
            IPv6 address, and automatic provisioning. Prices are per month, in
            USD.
          </p>
          <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-50 text-xs font-semibold uppercase tracking-wider dark:border-zinc-800 dark:bg-zinc-900">
                  <th className="px-6 py-3 font-semibold">Plan</th>
                  <th className="px-6 py-3 font-semibold">vCPU</th>
                  <th className="px-6 py-3 font-semibold">RAM</th>
                  <th className="px-6 py-3 font-semibold">NVMe storage</th>
                  <th className="px-6 py-3 font-semibold">Bandwidth</th>
                  <th className="px-6 py-3 text-right font-semibold">Price</th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                {PLANS.map((plan) => (
                  <tr key={plan.name}>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-zinc-900 dark:text-white">
                        {plan.name}
                      </span>
                      {plan.highlight && (
                        <span className="ml-3 rounded bg-indigo-600 px-2 py-0.5 text-xs font-medium text-white">
                          Popular
                        </span>
                      )}
                      <span className="block text-xs text-zinc-500">
                        {plan.tagline}
                      </span>
                    </td>
                    <td className="px-6 py-4">{plan.vcpu}</td>
                    <td className="px-6 py-4">{plan.ram} GB</td>
                    <td className="px-6 py-4">{plan.disk} GB</td>
                    <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400">
                      Unlimited
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="font-semibold text-zinc-900 dark:text-white">
                        ${plan.price}
                      </span>
                      <span className="text-zinc-500">/mo</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <a
                        href="/order"
                        className="cursor-pointer rounded-md border border-zinc-300 px-4 py-1.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
                      >
                        Order
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 rounded-md border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm dark:border-zinc-800 dark:bg-zinc-900">
            Need more than 32 vCPU / 64 GB RAM? Bare-metal and custom
            configurations are available, up to 128 vCPU and 512 GB RAM with
            dedicated 10 Gbps networking.{" "}
            <a
              href="#contact"
              className="font-medium text-indigo-600 underline underline-offset-4 hover:no-underline dark:text-indigo-400"
            >
              Contact us for a quote
            </a>
            .
          </p>
        </section>

        {/* Payment */}
        <section
          id="payment"
          className="border-y border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Payments"
              title="Pay with cryptocurrency"
            />
            <p className="mb-8 max-w-2xl">
              Choose your preferred coin and network at checkout.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {COINS.map((coin) => (
                <Coin key={coin.sym} sym={coin.sym} name={coin.name} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <div className="divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
            {FAQS.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-zinc-900 dark:text-white">
                  {faq.question}
                  <span className="ml-4 text-xl leading-none text-zinc-400 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="border-t border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900"
        >
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
              Ready to deploy your server?
            </h2>
            <p className="mx-auto mt-3 max-w-xl">
              Order a standard plan online, or contact us for a custom
              configuration and volume pricing.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:sales@coverthost.com"
                className="cursor-pointer rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500"
              >
                Email sales
              </a>
              <a
                href="#plans"
                className="cursor-pointer rounded-md border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
              >
                View plans
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
