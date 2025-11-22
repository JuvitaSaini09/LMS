import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                pumpkin: "var(--color-pumpkin)",
                woodsmoke: "var(--color-woodsmoke)",
                pampas: "var(--color-pampas)",
                "hit-pink": "var(--color-hit-pink)",
                "mid-gray": "var(--color-mid-gray)",
                romantic: "var(--color-romantic)",
                "silver-sand": "var(--color-silver-sand)",
                "outer-space": "var(--color-outer-space)",
                rust: "var(--color-rust)",
                "athen-gray": "var(--color-athen-gray)",
            }
        }
    }
}

export default config;