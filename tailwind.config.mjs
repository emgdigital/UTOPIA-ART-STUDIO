/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,sss,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'night': '#000000',
				'ash': '#A8A8A8',
				'gold': '#DED1B6',
				'teal-dark': '#0F393D',
			}
		},
	},
	plugins: [],
}