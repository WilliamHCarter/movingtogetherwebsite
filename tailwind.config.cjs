/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'blue': '#5F92CC',
			'sky': '#54a1f8',
			'grey': '#aaaaaa',
			'white': '#ffffff',
		  },
		  screens: {
			'pc': '700px',
		  },
	},
	plugins: [],
}
