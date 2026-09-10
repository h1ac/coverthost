import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import { Logo } from "@/components/logo";

export function SiteHeader({
  active,
}: {
  active?: "home" | "order";
}) {
  return (
    <header className="border-b border-zinc-200 bg-white/95 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/95">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-8" />
          <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
            Covert Host
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link
            href="/#plans"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Plans
          </Link>
          <Link
            href="/#payment"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Payment
          </Link>
          <Link
            href="/#faq"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            FAQ
          </Link>
          <Link
            href="/order"
            className={`hover:text-indigo-600 dark:hover:text-indigo-400 ${
              active === "order" ? "text-indigo-600 dark:text-indigo-400" : ""
            }`}
          >
            Order
          </Link>
          <Link
            href="/#contact"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/order"
            className="hidden cursor-pointer rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 sm:inline-block"
          >
            Order now
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm sm:flex-row sm:px-6">
        <p>&copy; 2026 Covert Host. All rights reserved.</p>
        <nav className="flex gap-6">
          <Link
            href="/#plans"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Plans
          </Link>
          <Link
            href="/#payment"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Payment
          </Link>
          <Link
            href="/#faq"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            FAQ
          </Link>
          <Link
            href="/order"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Order
          </Link>
          <Link
            href="/terms"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Privacy
          </Link>
          <a
            href="mailto:support@coverthost.com"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Support
          </a>
        </nav>
      </div>
    </footer>
  );
}
