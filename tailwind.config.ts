import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
    
      }
    },
    colors:{
      first:"#141414",
      second:"#f7f7f7"
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#b8b8b8",

          secondary: "#b8b8b8",

          accent: "#b8b8b8",

          neutral: "#ebebeb",

          "base-100": "#ffffff",

          info: "#0000ff",

          success: "#008000",

          warning: "#a6a659",

          error: "#ff0000",
          blackbg:"#1f2937"
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
