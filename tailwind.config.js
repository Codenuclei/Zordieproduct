/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},

		  backgroundImage: {
			'radial-gradient': 'radial-gradient(circle, rgba(255, 25, 29, 1), rgba(82, 9, 9, 1))',
			'radial-grad': 'radial-gradient(circle, rgba(255, 25, 44, 1), rgba(82, 9, 9, 1))',
			'custom-red-gradient': 'linear-gradient(189.47deg, #FFB2B3 4.76%, #FF191D 92.85%)',
		  },
		
		  boxShadow: {
		
			'custom': '0px 2px 8px 0px #03030329', // Define the custom box-shadow
		  },
		 
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

