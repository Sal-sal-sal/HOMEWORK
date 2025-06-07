/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "var(--primary-blue)",
        "light-blue": "var(--light-blue)",
        "dark-blue": "var(--dark-blue)",
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "border-color": "var(--border-color)",
        "message-out": "var(--message-out)",
        "message-in": "var(--message-in)",
      },
    },
  },
  plugins: [],
}; 