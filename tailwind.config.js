/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src//components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				lightPink: "#FFF0EF",
				lightBlue: "#ECF6F6",
				strongBlue: "#3E9598",
				strongPink: "#CE3832",
				silver: "#B9B7B7",
			},
			spacing: {
				0.5: "0.125rem",
				2.5: "0.625rem",
				3.5: "0.875rem",
				4.5: "1.125rem",
				12.5: "3.125rem",
				15: "3.75rem",
				17.5: "4.375rem",
				25: "6.25rem",
			},
			lineHeight: {
				4.5: "1.125rem",
			},
		},
	},
	plugins: [],
};
