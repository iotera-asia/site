import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://iotera.asia",
  fonts: [
    {
      provider: fontProviders.npm({ remote: false }),
      name: "Geist Variable",
      cssVariable: "--font-geist",
      options: {
        package: "@fontsource-variable/geist",
      },
      weights: ["100 900"],
      styles: ["normal"],
      subsets: ["latin"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
