"use client";

import { useMemo, useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { FlagIcon } from "@/components/flag-icon";
import { PLANS, DURATIONS, REGIONS } from "@/lib/data";

function SectionLabel({
  step,
  title,
  hint,
}: {
  step: number;
  title: string;
  hint?: string;
}) {
  return (
    <div className="mb-4 flex items-baseline gap-3">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
        {step}
      </span>
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
        {title}
      </h2>
      {hint && <span className="text-sm text-zinc-500">{hint}</span>}
    </div>
  );
}

export default function OrderClient() {
  const [planName, setPlanName] = useState(PLANS[2].name);
  const [months, setMonths] = useState(1);
  const [regionId, setRegionId] = useState(REGIONS[0].id);
  const [email, setEmail] = useState("");
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const plan = PLANS.find((p) => p.name === planName) ?? PLANS[0];
  const region = REGIONS.find((r) => r.id === regionId) ?? REGIONS[0];
  const duration = DURATIONS.find((d) => d.months === months) ?? DURATIONS[0];

  const totals = useMemo(() => {
    const base = plan.price * months;
    const discount = Math.round(base * duration.discount) / 100;
    const total = Math.round((base - discount) * 100) / 100;
    return { base, discount, total, monthly: total / months };
  }, [plan, months, duration]);

  const [isRedirecting, setIsRedirecting] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  async function handleCheckout() {
    if (!emailValid || isRedirecting) return;
    setIsRedirecting(true);
    setCheckoutError(null);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amountUsd: totals.total,
          description: `${plan.name} - ${duration.label} - ${region.city} - ${email}`,
        }),
      });
      const result = await response.json();
      if (!response.ok || !result?.checkoutUrl) {
        throw new Error(result?.error ?? "Could not start checkout");
      }
      window.location.href = result.checkoutUrl;
    } catch (error) {
      setCheckoutError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
      setIsRedirecting(false);
    }
  }

  return (
    <div className="bg-white text-zinc-600 dark:bg-zinc-950 dark:text-zinc-300">
      <SiteHeader active="order" />

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Order
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Configure your server
          </h1>
          <p className="mt-2 max-w-2xl">
            Pick a plan, how long you want it, and where it should live. Pay
            with crypto at the next step.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          {/* Left: selection */}
          <div className="space-y-12">
            {/* Step 1: Email */}
            <section>
              <SectionLabel step={1} title="Your email" />
              <label className="block max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
                />
                {email !== "" && !emailValid && (
                  <span className="mt-2 block text-xs text-red-600 dark:text-red-400">
                    Please enter a valid email address.
                  </span>
                )}
              </label>
            </section>

            {/* Step 2: Plan */}
            <section>
              <SectionLabel step={2} title="Choose a plan" />
              <div className="grid gap-3 sm:grid-cols-2">
                {PLANS.map((p) => (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => setPlanName(p.name)}
                    className={`cursor-pointer rounded-lg border p-4 text-left transition-colors ${
                      planName === p.name
                        ? "border-indigo-600 bg-indigo-50 ring-1 ring-indigo-600 dark:border-indigo-500 dark:bg-indigo-500/10 dark:ring-indigo-500"
                        : "border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-semibold text-zinc-900 dark:text-white">
                        {p.name}
                      </span>
                      <span className="text-sm font-semibold text-zinc-900 dark:text-white">
                        ${p.price}
                        <span className="font-normal text-zinc-500">/mo</span>
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-zinc-500">{p.tagline}</p>
                    <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                      <div className="rounded-md bg-zinc-50 py-2 dark:bg-zinc-800/60">
                        <span className="block text-sm font-semibold text-zinc-900 dark:text-white">
                          {p.vcpu}
                        </span>
                        <span className="block text-[10px] text-zinc-500">
                          vCPU
                        </span>
                      </div>
                      <div className="rounded-md bg-zinc-50 py-2 dark:bg-zinc-800/60">
                        <span className="block text-sm font-semibold text-zinc-900 dark:text-white">
                          {p.ram} GB
                        </span>
                        <span className="block text-[10px] text-zinc-500">
                          RAM
                        </span>
                      </div>
                      <div className="rounded-md bg-zinc-50 py-2 dark:bg-zinc-800/60">
                        <span className="block text-sm font-semibold text-zinc-900 dark:text-white">
                          {p.disk} GB
                        </span>
                        <span className="block text-[10px] text-zinc-500">
                          NVMe
                        </span>
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400">
                      Unlimited bandwidth
                    </p>
                  </button>
                ))}
              </div>
            </section>

            {/* Step 3: Duration */}
            <section>
              <SectionLabel step={3} title="Choose duration" />
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {DURATIONS.map((d) => (
                  <button
                    key={d.months}
                    type="button"
                    onClick={() => setMonths(d.months)}
                    className={`cursor-pointer relative rounded-lg border p-4 text-center transition-colors ${
                      months === d.months
                        ? "border-indigo-600 bg-indigo-50 ring-1 ring-indigo-600 dark:border-indigo-500 dark:bg-indigo-500/10 dark:ring-indigo-500"
                        : "border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
                    }`}
                  >
                    {d.discount > 0 && (
                      <span className="absolute -top-2.5 right-2 rounded-full bg-emerald-600 px-2 py-0.5 text-[11px] font-semibold text-white">
                        −{d.discount}%
                      </span>
                    )}
                    <span className="block text-sm font-semibold text-zinc-900 dark:text-white">
                      {d.label}
                    </span>
                    <span className="text-xs text-zinc-500">
                      {d.discount > 0 ? `${d.discount}% off` : "standard rate"}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            {/* Step 4: Region */}
            <section>
              <SectionLabel step={4} title="Choose region" />
              <div className="grid gap-3 sm:grid-cols-3">
                {REGIONS.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setRegionId(r.id)}
                    className={`cursor-pointer flex items-center gap-3 rounded-lg border p-3.5 text-left transition-colors ${
                      regionId === r.id
                        ? "border-indigo-600 bg-indigo-50 ring-1 ring-indigo-600 dark:border-indigo-500 dark:bg-indigo-500/10 dark:ring-indigo-500"
                        : "border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
                    }`}
                  >
                    <FlagIcon cc={r.cc} className="h-5 w-7 shrink-0" />
                    <span className="text-sm font-semibold text-zinc-900 dark:text-white">
                      {r.city}
                    </span>
                  </button>
                ))}
              </div>
            </section>
          </div>

          {/* Right: summary */}
          <aside className="h-fit lg:sticky lg:top-24">
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                Order summary
              </h2>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt>Plan</dt>
                  <dd className="font-mono font-medium text-zinc-900 dark:text-white">
                    {plan.name}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt>Specs</dt>
                  <dd className="text-zinc-900 dark:text-white">
                    {plan.vcpu} vCPU / {plan.ram} GB
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt>Region</dt>
                  <dd className="flex items-center gap-1.5 text-zinc-900 dark:text-white">
                    <FlagIcon cc={region.cc} className="h-3.5 w-5" />
                    {region.city}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt>Duration</dt>
                  <dd className="text-zinc-900 dark:text-white">
                    {duration.label}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt>Email</dt>
                  <dd className="text-zinc-900 dark:text-white">
                    {emailValid ? email : "not set"}
                  </dd>
                </div>
                <div className="border-t border-dashed border-zinc-200 pt-3 dark:border-zinc-700">
                  <div className="flex justify-between">
                    <dt>Base cost</dt>
                    <dd>
                      ${plan.price} × {months} mo = ${totals.base}
                    </dd>
                  </div>
                </div>
                {totals.discount > 0 && (
                  <div className="flex justify-between text-emerald-600 dark:text-emerald-400">
                    <dt>Discount</dt>
                    <dd>−${totals.discount}</dd>
                  </div>
                )}
              </dl>
              <div className="mt-5 border-t border-zinc-200 pt-4 dark:border-zinc-800">
                <div className="flex items-baseline justify-between">
                  <span className="font-semibold text-zinc-900 dark:text-white">
                    Total
                  </span>
                  <span className="text-2xl font-bold text-zinc-900 dark:text-white">
                    ${totals.total}
                  </span>
                </div>
                {months > 1 && (
                  <p className="mt-1 text-right text-xs text-zinc-500">
                    ≈ ${totals.monthly.toFixed(2)}/mo
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={handleCheckout}
                disabled={!emailValid || isRedirecting}
                className="mt-6 w-full cursor-pointer rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isRedirecting ? "Redirecting to payment…" : "Continue to payment →"}
              </button>
              {checkoutError && (
                <p className="mt-2 text-center text-xs text-red-600 dark:text-red-400">
                  {checkoutError}
                </p>
              )}
              {!emailValid && (
                <p className="mt-2 text-center text-xs text-zinc-500">
                  Enter your email above to continue.
                </p>
              )}
              <p className="mt-3 text-center text-xs text-zinc-500">
                Pay with BTC, XMR, USDT and 13 more coins.
              </p>
            </div>
          </aside>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
