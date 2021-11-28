module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.html', './src/**/*.svelte'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Digimon', 'Helvetica', 'Arial', 'sans-serif']
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
