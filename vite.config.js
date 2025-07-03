import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        tailwindcss(),
        vue(),
    ],
    build: {
        cssCodeSplit: true,
        target: "esnext",
        lib: {
            entry: path.resolve(__dirname, './src/index.js'),
            name: "vuelicity",
        },
        rollupOptions:{
            external: ['vue'],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue'
                }
            }
        },
        emptyOutDir: false
    },
    resolve: {
        extensions: [".js", ".jsx", ".vue", ".json"],
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
        dedupe: ['vue'],
    },
});
