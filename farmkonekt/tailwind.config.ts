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
      colors: {
        fk: {
          green: "#05825B",
          light: "#F7F9F9",
          blue: "#55A5E9",
          black: "#1A1A1A",
          grey: "#6D727D",
          white: "#FFF",
          background: "#F4F5F6",
          red: "#FC5959",
          yellow: "#EAAE0F",
          brown: "#CC8D57",
          lighBrown: "#FCF9F6",
          greenHover: "#05A55B",
          greenLight1: "#E3F1EC",
          greenLight2: "#ABD5C8",
          greenLight3: "#F5FAF8",
          greenOutline: "#E3F1EC",
          greyHover: "#E9EAEA",
          lightGrey: "#F5F5F6",
        },
      },
    },
  },
  plugins: [],
};
export default config;
