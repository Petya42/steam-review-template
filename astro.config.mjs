import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://petya42.github.io/",
  base: "/steam-hun-review-template",
  integrations: [tailwind()],
});
