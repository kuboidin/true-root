/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			primaryHover: 'var(--primary-hover)',
  			primaryDark: 'var(--primary-dark)',
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			secondaryHover: 'var(--secondary-hover)',
  			secondaryDark: 'var(--secondary-dark)',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
			lightGreen: 'var(--light-green)',
			fadeGreen: 'var(--fade-green)',
			darkGreen: 'var(--dark-green)',
			lemonGreen: 'var(--lemon-green)',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		gridTemplateColumns: {
			'13': 'repeat(13, minmax(0, 1fr))',
			'14': 'repeat(14, minmax(0, 1fr))',
			'15': 'repeat(15, minmax(0, 1fr))',
			'16': 'repeat(16, minmax(0, 1fr))',
			'17': 'repeat(17, minmax(0, 1fr))',
			'18': 'repeat(18, minmax(0, 1fr))',
			'19': 'repeat(19, minmax(0, 1fr))',
			'20': 'repeat(20, minmax(0, 1fr))',
			'21': 'repeat(21, minmax(0, 1fr))',
			'22': 'repeat(22, minmax(0, 1fr))',
			'23': 'repeat(23, minmax(0, 1fr))',
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
