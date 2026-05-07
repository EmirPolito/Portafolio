import type { SVGProps } from "react";

const GitIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <path
      d="M249.07 117.43 138.57 6.93a14.92 14.92 0 0 0-21.07 0L96.1 28.34l31.14 31.14a37.31 37.31 0 0 1 37.49 37.49l31.54 31.54a37.28 37.28 0 1 1-11.44 11.44l-30.82-30.82v51.13a37.29 37.29 0 1 1-16.18 0V111.4a37.27 37.27 0 0 1-28.84-28.84L79.13 51.42 6.93 123.63a14.92 14.92 0 0 0 0 21.07l110.5 110.5a14.92 14.92 0 0 0 21.07 0l110.5-110.5a14.92 14.92 0 0 0 .07-27.27Z"
      fill="#F05032"
    />
  </svg>
);

export { GitIcon };
