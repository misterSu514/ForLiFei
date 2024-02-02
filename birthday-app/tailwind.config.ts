import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        mobile: "360px", // 手機版寬度
      },
      height: {
        mobile: "620px", // 手機版高度
      },
      colors: {
        kirbo:'#f9a8d4',
        ruu:'#ACD6FF',
      },
    },
  },
  plugins: [],
};
export default config;
