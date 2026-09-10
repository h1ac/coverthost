import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const metadata = {
  title: "Terms of Service — Covert Host",
  description:
    "Terms for Covert Host private VPS hosting. Crypto-only, prepaid, no logs — and no KYC, ever.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="bg-white text-zinc-600 dark:bg-zinc-950 dark:text-zinc-300">
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Legal
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Effective&nbsp;September 10, 2026
          </p>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              1. The service
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              Covert Host (&quot;we&quot;, &quot;us&quot;) provides
              self-managed virtual private servers paid with cryptocurrency.
              Your plan — vCPU, RAM, storage, bandwidth, region, and term — is
              what you selected at checkout. Service is provided as-is: no
              uptime guarantees, no managed support. You get full root access
              and full responsibility for your server.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              2. No KYC, ever
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              We will never request Know Your Customer (KYC) verification —
              not at signup, not at checkout, not during your term, not after
              it. We do not request and do not accept: government-issued ID,
              passports, driver&apos;s licenses, selfies or biometric scans,
              proof of address, utility bills, phone numbers, or any other
              identity-document verification — not for any reason, including
              payment disputes, fraud claims, refunds, or legal requests
              aimed at identifying you. We can&apos;t hand over what we never
              collected. No account is required to purchase. The only
              personal data we ask for is a single email address, used solely
              to deliver your server credentials. If anyone claiming to be us
              ever asks you for KYC, it is an impersonation attempt — report
              it to sales@coverthost.com.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              3. Eligibility
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              You must be at least 18 years old and legally able to form a
              binding contract. By placing an order you confirm this.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              4. Acceptable use
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              You may not use the service for activity prohibited by the law
              of the region your server operates in, including: spam and bulk
              unsolicited email, DDoS booters/stressers, botnet command and
              control, phishing, carding or payment-fraud infrastructure,
              child sexual abuse material (zero tolerance, reported to
              authorities), or credible threats to life. We keep no content
              inspection; enforcement relies on abuse reports and automated
              network-level detection. We may null-route an offending IP or
              suspend a server while investigating an abuse report.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              5. Orders &amp; payment
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              Prices are listed in USD and payable in cryptocurrency — BTC,
              XMR, USDT, and 13 other coins across multiple networks, chosen
              at checkout. Crypto payments are final once confirmed on the
              relevant blockchain; chargebacks are not possible. There is no
              recurring billing, no stored payment method, no auto-renew:
              servers are prepaid per term. Provisioning completes within
              roughly five minutes of confirmation; credentials go to the
              email you provided at checkout.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              6. Refunds
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              You may request a refund within 48 hours of provisioning.
              Refunds go to the originating payment address. After 48 hours
              the paid term runs its course and is non-refundable. We may
              decline a refund where the window is being abused or where the
              server was terminated for a Section 4 violation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              7. Termination
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              Termination without refund, without notice, for child sexual
              abuse material (immediately, and reported to authorities),
              credible threats to life, payment fraud against us, or
              sustained abuse after warning. Lower-tier network abuse
              (outbound DDoS origination, open resolvers, open proxies, spam)
              is handled first at network level: null-routing the offending
              IP until it stops. You may terminate any time by letting your
              term lapse — nothing auto-renews.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              8. Your responsibilities
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              You are responsible for your content, your users, your security
              (updates, passwords, firewall), and for knowing the law that
              applies to your use and to your server&apos;s region. Keep
              backups — you have root, and that cuts both ways.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              9. Data destruction
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              When your term ends, or when you ask us to destroy your server,
              its storage is wiped and cannot be recovered. Nothing is
              retained.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              10. Limitation of liability
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              To the maximum extent permitted by law, our total aggregate
              liability is limited to the fees you paid for the current term.
              We are not liable for indirect, incidental, or consequential
              damages, lost profits, or data loss.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              11. Changes to these terms
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              We may update these terms; the effective date above will change
              and substantial updates will be announced on the site. Changes
              never apply retroactively to a term you have already paid for —
              the terms in force when you paid govern that term until it ends.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              12. Contact
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              Questions about these terms: sales@coverthost.com
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
