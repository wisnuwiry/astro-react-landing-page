/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#30C88F',
				accent: '#2D314D',
				background: '#FAFAFA',
				'secondary-background': '#F4F5F7',
				'gradient-start': '#33D35E',
				'gradient-end': '#2AB6D9',
				disabled: '#9597A5',
				'text-solid': '#2D314D',
			},
			fontFamily: {
				'font-sans': ['Public Sans', 'ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji']
			},
			maxWidth: {
				wrapper: '1110px',
			}
		},
	},
	plugins: [],
}
