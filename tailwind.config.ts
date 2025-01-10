import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavanda: "#CECEFE" ,
        paleCanary:"#FAE27C" ,
        babyBlue: "#C3EAFA",
        softRose:"#E69DB3",
        softMint:"#ADDEAD"

      },
    },
  },
  plugins: [],
} satisfies Config;
