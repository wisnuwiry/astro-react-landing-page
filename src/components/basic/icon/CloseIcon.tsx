import type { SVGProps } from "react"

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} {...props}>
    <g fill={props.fill ?? "#2D314D"} fillRule="evenodd">
      <path d="m.868.661 16.97 16.97-.706.708L.162 1.369z" />
      <path d="M.161 17.632 17.131.662l.708.706-16.97 16.97z" />
    </g>
  </svg>
)

export default CloseIcon
