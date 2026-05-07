import type { SVGProps } from "react";

const NpmIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <path d="M0 0h256v256H0z" fill="#CB3837" />
    <path d="M48 48h160v160h-32V80h-48v128H48z" fill="#FFF" />
  </svg>
);

export { NpmIcon };
