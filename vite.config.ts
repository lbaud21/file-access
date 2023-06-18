import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import EnvironmentPlugin from "vite-plugin-environment";

const envVariables = [];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin(envVariables)],
});
