import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import RubyPlugin from "vite-plugin-ruby";

// https://vite.dev/config/
export default defineConfig({
  plugins: [RubyPlugin(), react(), tailwindcss()],
});
