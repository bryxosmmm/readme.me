import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/readme/",
  plugins: [solid(), tailwindcss()],
  build: {
    minify: "terser",
  },
});
