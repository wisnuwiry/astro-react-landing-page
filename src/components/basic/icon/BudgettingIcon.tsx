import type { SVGProps } from "react"

const BudgettingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={72} height={72} {...props}>
    <defs>
      <linearGradient id="a" x1="0%" x2="99.58%" y1="0%" y2="99.58%">
        <stop offset="0%" stopColor="#33D35E" />
        <stop offset="100%" stopColor="#2AB6D9" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle cx={36} cy={36} r={36} fill="url(#a)" />
      <path
        fill="#FFF"
        fillRule="nonzero"
        d="M44.633 16a3.096 3.096 0 0 1 3.092 3.092v7.57c5.23.286 9.393 4.365 9.393 9.338 0 4.973-4.162 9.052-9.393 9.338v7.57A3.095 3.095 0 0 1 44.633 56H27.099a3.095 3.095 0 0 1-3.092-3.092v-7.24a.587.587 0 1 1 1.174 0v3.522h21.37v-3.852a10.479 10.479 0 0 1-2.89-.568l-4.383 2.391c-.466.254-1.013-.22-.833-.716l1.308-3.596h-6.705a.592.592 0 0 1-.415-.172l-4.697-4.696a.593.593 0 0 1-.172-.415V24.728c0-.324.263-.587.587-.587h15.03c.324 0 .587.263.587.587v2.402a10.493 10.493 0 0 1 2.583-.468v-4.478H25.18v20.704a.587.587 0 1 1-1.174 0V19.092A3.096 3.096 0 0 1 27.099 16zm1.918 34.364H25.18v2.544a1.92 1.92 0 0 0 1.918 1.918h17.534a1.92 1.92 0 0 0 1.918-1.918v-2.544zm-9.433.705c.325 0 .587.262.587.587v1.878a.587.587 0 0 1-.587.587h-2.505a.587.587 0 0 1-.587-.587v-1.878c0-.325.263-.587.587-.587zm-.587 1.174h-1.33v.704h1.33v-.704zM47.138 27.82c-4.856 0-8.806 3.67-8.806 8.18 0 2.217.94 4.293 2.647 5.846.177.16.239.41.157.635l-1.056 2.905 3.251-1.773a.587.587 0 0 1 .49-.034 9.343 9.343 0 0 0 3.317.601c4.856 0 8.806-3.67 8.806-8.18s-3.95-8.18-8.806-8.18zm0 1.33c.324 0 .587.264.587.588v1.291h.04a2.469 2.469 0 0 1 2.465 2.466v.626a.587.587 0 1 1-1.174 0v-.626c0-.712-.58-1.291-1.292-1.291h-.94c-.884 0-1.604.72-1.604 1.604 0 .885.72 1.605 1.605 1.605h.626a2.782 2.782 0 0 1 2.779 2.779c0 1.44-1.1 2.627-2.505 2.765v1.305a.587.587 0 1 1-1.174 0v-1.291h-.04a2.469 2.469 0 0 1-2.465-2.466.587.587 0 1 1 1.174 0c0 .712.58 1.291 1.292 1.291h.939c.885 0 1.605-.72 1.605-1.604 0-.885-.72-1.605-1.605-1.605h-.626a2.782 2.782 0 0 1-2.78-2.779 2.783 2.783 0 0 1 2.506-2.765v-1.305c0-.324.263-.587.587-.587zm-4.345-3.835H28.938v11.663h4.11c.324 0 .587.263.587.588v4.11h5.567c-1.327-1.622-2.044-3.593-2.044-5.676 0-1.112.208-2.18.59-3.17h-6.266a.587.587 0 1 1 0-1.174h6.82a9.397 9.397 0 0 1 1.466-1.957h-2.023a.587.587 0 1 1 0-1.174h3.13c.076 0 .148.014.214.04.53-.38 1.1-.71 1.704-.985v-2.265zM32.461 38.153h-2.692l2.692 2.692v-2.692zm3.405-3.366a.587.587 0 1 1 0 1.174h-4.384a.587.587 0 1 1 0-1.174zm-.626-6.263a.587.587 0 1 1 0 1.175h-3.758a.587.587 0 1 1 0-1.175zm9.393-11.35H27.099a1.92 1.92 0 0 0-1.918 1.918v1.918h21.37v-1.918a1.92 1.92 0 0 0-1.918-1.918zm-7.515 1.33a.587.587 0 1 1 0 1.175h-2.505a.587.587 0 1 1 0-1.174z"
      />
    </g>
  </svg>
)
export default BudgettingIcon
