import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://iotera.asia",
  vite: {
    plugins: [tailwindcss()],
  },
});
