// Flag icons: inline SVGs from flag-icons (MIT), flags/4x3.

const FLAGS: Record<string, { viewBox: string; body: string }> = {
  us: {
    viewBox: "0 0 640 480",
    body: "<path fill=\"#bd3d44\" d=\"M0 0h640v480H0\"/> <path stroke=\"#fff\" stroke-width=\"37\" d=\"M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640\"/> <path fill=\"#192f5d\" d=\"M0 0h364.8v258.5H0\"/> <marker markerHeight=\"30\" markerWidth=\"30\"> <path fill=\"#fff\" d=\"m14 0 9 27L0 10h28L5 27z\"/> </marker> <path fill=\"none\" marker-mid=\"url(#us-a)\" d=\"m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60z\"/>",
  },
  de: {
    viewBox: "0 0 640 480",
    body: "<path fill=\"#fc0\" d=\"M0 320h640v160H0z\"/> <path fill=\"#000001\" d=\"M0 0h640v160H0z\"/> <path fill=\"red\" d=\"M0 160h640v160H0z\"/>",
  },
  nl: {
    viewBox: "0 0 640 480",
    body: "<path fill=\"#ae1c28\" d=\"M0 0h640v160H0z\"/> <path fill=\"#fff\" d=\"M0 160h640v160H0z\"/> <path fill=\"#21468b\" d=\"M0 320h640v160H0z\"/>",
  },
  gb: {
    viewBox: "0 0 640 480",
    body: "<path fill=\"#012169\" d=\"M0 0h640v480H0z\"/> <path fill=\"#FFF\" d=\"m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z\"/> <path fill=\"#C8102E\" d=\"m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z\"/> <path fill=\"#FFF\" d=\"M241 0v480h160V0zM0 160v160h640V160z\"/> <path fill=\"#C8102E\" d=\"M0 193v96h640v-96zM273 0v480h96V0z\"/>",
  },
  sg: {
    viewBox: "0 0 640 480",
    body: "<defs> <clipPath> <path fill-opacity=\".7\" d=\"M0 0h640v480H0z\"/> </clipPath> </defs> <g fill-rule=\"evenodd\" clip-path=\"url(#sg-a)\"> <path fill=\"#fff\" d=\"M-20 0h720v480H-20z\"/> <path fill=\"#df0000\" d=\"M-20 0h720v240H-20z\"/> <path fill=\"#fff\" d=\"M146 40.2a84.4 84.4 0 0 0 .8 165.2 86 86 0 0 1-106.6-59 86 86 0 0 1 59-106c16-4.6 30.8-4.7 46.9-.2z\"/> <path fill=\"#fff\" d=\"m133 110 4.9 15-13-9.2-12.8 9.4 4.7-15.2-12.8-9.3 15.9-.2 5-15 5 15h15.8zm17.5 52 5 15.1-13-9.2-12.9 9.3 4.8-15.1-12.8-9.4 15.9-.1 4.9-15.1 5 15h16zm58.5-.4 4.9 15.2-13-9.3-12.8 9.3 4.7-15.1-12.8-9.3 15.9-.2 5-15 5 15h15.8zm17.4-51.6 4.9 15.1-13-9.2-12.8 9.3 4.8-15.1-12.9-9.4 16-.1 4.8-15.1 5 15h16zm-46.3-34.3 5 15.2-13-9.3-12.9 9.4 4.8-15.2-12.8-9.4 15.8-.1 5-15.1 5 15h16z\"/> </g>",
  },
  jp: {
    viewBox: "0 0 640 480",
    body: "<defs> <clipPath> <path fill-opacity=\".7\" d=\"M-88 32h640v480H-88z\"/> </clipPath> </defs> <g fill-rule=\"evenodd\" stroke-width=\"1pt\" clip-path=\"url(#jp-a)\" transform=\"translate(88 -32)\"> <path fill=\"#fff\" d=\"M-128 32h720v480h-720z\"/> <circle cx=\"523.1\" cy=\"344.1\" r=\"194.9\" fill=\"#bc002d\" transform=\"translate(-168.4 8.6)scale(.76554)\"/> </g>",
  },
  in: {
    viewBox: "0 0 640 480",
    body: "<path fill=\"#f93\" d=\"M0 0h640v160H0z\"/> <path fill=\"#fff\" d=\"M0 160h640v160H0z\"/> <path fill=\"#128807\" d=\"M0 320h640v160H0z\"/> <g transform=\"matrix(3.2 0 0 3.2 320 240)\"> <circle r=\"20\" fill=\"#008\"/> <circle r=\"17.5\" fill=\"#fff\"/> <circle r=\"3.5\" fill=\"#008\"/> <g> <g> <g> <g fill=\"#008\"> <circle r=\".9\" transform=\"rotate(7.5 -8.8 133.5)\"/> <path d=\"M0 17.5.6 7 0 2l-.6 5z\"/> </g> <use xlink:href=\"#in-a\" width=\"100%\" height=\"100%\" transform=\"rotate(15)\"/> </g> <use xlink:href=\"#in-b\" width=\"100%\" height=\"100%\" transform=\"rotate(30)\"/> </g> <use xlink:href=\"#in-c\" width=\"100%\" height=\"100%\" transform=\"rotate(60)\"/> </g> <use xlink:href=\"#in-d\" width=\"100%\" height=\"100%\" transform=\"rotate(120)\"/> <use xlink:href=\"#in-d\" width=\"100%\" height=\"100%\" transform=\"rotate(-120)\"/> </g>",
  },
  au: {
    viewBox: "0 0 640 480",
    body: "<path fill=\"#00008B\" d=\"M0 0h640v480H0z\"/> <path fill=\"#fff\" d=\"m37.5 0 122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0z\"/> <path fill=\"red\" d=\"M212 140.5 320 220v20l-135.5-99.5zm-92 10 3 17.5-96 72H0zM320 0v1.5l-124.5 94 1-22L295 0zM0 0l119.5 88h-30L0 21z\"/> <path fill=\"#fff\" d=\"M120.5 0v240h80V0zM0 80v80h320V80z\"/> <path fill=\"red\" d=\"M0 96.5v48h320v-48zM136.5 0v240h48V0z\"/> <path fill=\"#fff\" d=\"m527 396.7-20.5 2.6 2.2 20.5-14.8-14.4-14.7 14.5 2-20.5-20.5-2.4 17.3-11.2-10.9-17.5 19.6 6.5 6.9-19.5 7.1 19.4 19.5-6.7-10.7 17.6zm-3.7-117.2 2.7-13-9.8-9 13.2-1.5 5.5-12.1 5.5 12.1 13.2 1.5-9.8 9 2.7 13-11.6-6.6zm-104.1-60-20.3 2.2 1.8 20.3-14.4-14.5-14.8 14.1 2.4-20.3-20.2-2.7 17.3-10.8-10.5-17.5 19.3 6.8L387 178l6.7 19.3 19.4-6.3-10.9 17.3 17.1 11.2ZM623 186.7l-20.9 2.7 2.3 20.9-15.1-14.7-15 14.8 2.1-21-20.9-2.4 17.7-11.5-11.1-17.9 20 6.7 7-19.8 7.2 19.8 19.9-6.9-11 18zm-96.1-83.5-20.7 2.3 1.9 20.8-14.7-14.8-15.1 14.4 2.4-20.7-20.7-2.8 17.7-11L467 73.5l19.7 6.9 7.3-19.5 6.8 19.7 19.8-6.5-11.1 17.6zM234 385.7l-45.8 5.4 4.6 45.9-32.8-32.4-33 32.2 4.9-45.9-45.8-5.8 38.9-24.8-24-39.4 43.6 15 15.8-43.4 15.5 43.5 43.7-14.7-24.3 39.2 38.8 25.1Z\"/>",
  },
};

export function FlagIcon({ cc, className }: { cc: string; className?: string }) {
  const flag = FLAGS[cc];
  if (!flag) return <span className={`inline-block h-3.5 w-5 rounded-lg bg-zinc-300 dark:bg-zinc-700 ${className ?? ""}`} />;
  return (
    <svg
      viewBox={flag.viewBox}
      className={`inline-block rounded-lg ${className ?? ""}`}
      aria-hidden
      dangerouslySetInnerHTML={{ __html: flag.body }}
    />
  );
}