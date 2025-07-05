import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [tailwindcss(), vue()],
    build: {
        cssCodeSplit: true,
        target: "esnext",
        lib: {
            entry: resolve(__dirname, "./src/index.ts"),
            name: "vuelicity"
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue"
                }
            }
        },
        emptyOutDir: false
    },
    resolve: {
        extensions: [".js", ".jsx", ".vue", ".json", ".ts", ".tsx"],
        alias: {
            "@": resolve(__dirname, "./src")
        },
        dedupe: ["vue"]
    }
});
