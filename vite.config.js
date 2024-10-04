// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                register: resolve(__dirname, "register.html"),
            },
        },
    },
    server: {
        port: 2500,
    },
});
