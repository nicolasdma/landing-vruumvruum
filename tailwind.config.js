/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#22c55e",         // Green login button
        "primary-hover": "#16a34a", // Darker green on hover
        secondary: "#facc15",       // Yellow register link
        accent: "#4ade80",          // Optional green accent
        text: "#f3f4f6",            // Light gray text
        background: "#111827",      // Almost black background
        card: "#1f2937",            // Dark gray card/modal
        border: "#374151",          // Darker border
        muted: "#9ca3af",           // For placeholder or subdued text
        error: "#ef4444",
        warning: "#f59e0b",
        success: "#10b981",

        
      },
    },
  },
  plugins: [],
};
