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
        lib: {
            entry: path.resolve(__dirname, './src/index.js'),
            name: "vuelicity",
            formats: ['es'],
            fileName: format => `vuelicity.${format}.js`
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
    },
});
