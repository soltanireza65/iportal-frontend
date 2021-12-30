module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class',
	important: true,
	theme: {
		zIndex: {
			'-1': -1
		},
		extend: {
			width: {
				'1/2full': '150%',
				'2full': '200%',
				'3full': '300%'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
