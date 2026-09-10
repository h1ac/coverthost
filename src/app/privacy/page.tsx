import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const metadata = {
  title: "Privacy Policy — Covert Host",
  description:
    "What we collect (almost nothing), what we never collect (identity documents), and how little we keep.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="bg-white text-zinc-600 dark:bg-zinc-950 dark:text-zinc-300">
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Legal
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Effective&nbsp;September 10, 2026
          </p>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              1. Summary
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              We collect the least data that lets us run a working VPS
              business: one email per order, the order configuration you
              choose, and crypto payment references. We keep no traffic or
              connection logs, we run no analytics, and we will never request
              identity verification (KYC).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              2. Data we collect
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
              <li>
                <strong className="text-zinc-900 dark:text-white">
                  Email address.
                </strong>{" "}
                Optional in principle, required in practice for automatic
                credential delivery. We never verify it beyond deliverability.
              </li>
              <li>
                <strong className="text-zinc-900 dark:text-white">
                  Order configuration.
                </strong>{" "}
                Plan, duration, and region you select. Billing and capacity
                data — not identity data.
              </li>
              <li>
                <strong className="text-zinc-900 dark:text-white">
                  Payment references.
                </strong>{" "}
                Cryptocurrency payments settle on public blockchains: the
                payment address and transaction hash are inherently public. We
                retain only the minimum needed to match a payment to an order
                and to issue refunds.
              </li>
              <li>
                <strong className="text-zinc-900 dark:text-white">
                  Abuse reports.
                </strong>{" "}
                If a third party reports abuse from your server, we keep
                enough of the report and our response to document how it was
                handled.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              3. Data we never collect
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              No real names, no government ID documents, no selfies or
              biometric verification, no proof of address, no phone numbers,
              no date of birth, no device fingerprinting, no browser
              analytics, no advertising cookies, no session recording, and no
              card or bank data (we cannot accept cards). We will never
              request identity verification at any point in the customer
              lifecycle — there is no exception, and asking us to add one is
              wasted breath.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              4. Traffic and connection logs
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              None. We keep no traffic logs, no connection logs, no netflow
              history, and no per-user bandwidth accounting beyond live
              counters that reset. Nothing about what you do with your server
              is recorded or correlated.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              5. Panels, accounts, profiles
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              We run no customer-facing account system. There is no dashboard
              profile, no support-desk identity, and no marketing profile to
              manage. An order is just an order ID. Less structure means less
              to leak.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              6. What we do with your email
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              Sent to it: server credentials, payment confirmations and
              expiry notices, and refund correspondence. Never sent from it:
              marketing, list subscriptions, product announcements. Never
              shared, sold, rented, or traded with any third party, and never
              used as a cross-reference key against any dataset we do not
              already have (we do not have any).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              7. Retention
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              Order, email, and payment records are kept while your term is
              active, plus a short buffer covering the 48-hour refund window
              and minimum accounting tolerances, then deleted. Server storage
              is wiped irrecoverably at term end or on request. We keep no
              archives of customer data, because there is almost no customer
              data to archive.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              8. Third parties
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              Two, by necessity. Our crypto payment processor, which generates
              invoice addresses and sees only the amount and an order
              reference — we have no identity to hand it. And the data centers
              hosting the physical servers. Neither receives analytics or
              marketing data, because we collect none. We do not embed
              third-party trackers; the site loads from its own origin only.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              9. Your data, your rights
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              Want everything gone? Email sales@coverthost.com from the
              address on the order with your order ID and we delete everything
              except what keeps your active server running — or just let the
              term lapse, after which the remaining records fall out of
              retention on their own. "Deletion requests" here are measured
              in minutes, not weeks, because there is so little to delete.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              10. Security
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              Minimal data means minimal risk. Traffic is TLS-encrypted end to
              end; stored records sit on encrypted volumes with access
              limited to the staff who need them for billing and support. The
              most sensitive thing we hold is an email address, and we treat
              even that carefully.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              11. Changes
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              We may update this policy; the effective date above changes and
              material updates are announced on the site. We will never add
              "we may request KYC" style clauses, silently or otherwise. The
              no-KYC commitment is the point of this document.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              12. Contact
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              Questions about privacy: sales@coverthost.com
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
