import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/* BASE_PATH is set by the GitHub workflow (e.g. /my-repo/). Locally and on a custom domain it is "/". */
export default defineConfig({ base: process.env.BASE_PATH || "/", plugins: [react()] });
