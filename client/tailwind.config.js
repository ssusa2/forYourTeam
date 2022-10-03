/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	safelist: [
		'active',
		'activeColor',
		// '${activeColor}',
		// 'text-[#e52121]',
		// 'text-[#00ff8c]',
		//
	],
	plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar-hide')],
};
