/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'pizza-red': '#C62828', // Richer deep red
                'pizza-orange': '#FF5722', // Vibrant orange
                'pizza-cream': '#FFF3E0', // Soft warm cream
                'pizza-charcoal': '#1A1A1A', // Very dark grey, almost black
                'pizza-green': '#2E7D32', // Basil green
                'pizza-dark': '#121212', // Background dark
            },
            fontFamily: {
                sans: ['Outfit', 'Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
