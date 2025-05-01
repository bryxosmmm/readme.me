import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [solid(), tailwindcss()],
  base: "/readme.me/",
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("solid-js")) {
              return "solid";
            }
            if (id.includes("solid-heroicons")) {
              return "icons";
            }
            if (id.includes("highlight.js")) {
              return "highlight";
            }
            if (id.includes("marked")) {
              return "marked";
            }
            if (id.includes("tailwindcss")) {
              return "tailwind";
            }
            return "vendor";
          }
          if (id.includes("components")) {
            return "components";
          }
        },
      },
    },
    chunkSizeWarningLimit: 500,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log"],
      },
    },
  },
});
