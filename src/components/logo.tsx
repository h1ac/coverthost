export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* slash behind the iris: reads as one line with a clean gap */}
      <line
        x1="5.5"
        y1="26"
        x2="26.5"
        y2="6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-indigo-600 dark:text-indigo-400"
      />
      {/* eye outline */}
      <path
        d="M2 16C5.5 10.5 10.5 7.5 16 7.5s10.5 3 14 8.5c-3.5 5.5-8.5 8.5-14 8.5S5.5 21.5 2 16Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        className="text-indigo-600 dark:text-indigo-400"
        fill="none"
      />
      {/* iris = sealed server unit (sits on top, punch-out effect) */}
      <rect x="10.5" y="10.5" width="11" height="11" rx="2.5" className="fill-indigo-600 dark:fill-indigo-400" />
      <rect x="12.75" y="13.2" width="6.5" height="2.2" rx="0.8" fill="#fff" opacity="0.9" />
      <circle cx="13.9" cy="14.3" r="0.65" fill="#34d399" />
      <rect x="12.75" y="18.2" width="6.5" height="2.2" rx="0.8" fill="#fff" opacity="0.9" />
      <circle cx="13.9" cy="19.3" r="0.65" fill="#34d399" />
      <rect x="12.75" y="15.9" width="6.5" height="1.8" rx="0.8" fill="#fff" opacity="0.55" />
    </svg>
  );
}
