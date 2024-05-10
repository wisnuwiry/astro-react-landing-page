import type { SVGProps } from "react";

const HamburgerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={11} {...props}>
    <path
      fill={props.fill ?? "#2D314D"}
      fillRule="evenodd"
      d="M0 0h24v1H0zm0 5h24v1H0zm0 5h24v1H0z"
    />
  </svg>
);
export default HamburgerIcon;
