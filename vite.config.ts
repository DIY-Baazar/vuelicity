import { resolve } from 'path'

import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [tailwindcss(), vue()],
    build: {
        cssCodeSplit: true,
        target: 'esnext',
        lib: {
            entry: resolve(__dirname, './src/index.ts'),
            name: 'vuelicity',
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue',
                },
            },
        },
        emptyOutDir: false,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.vue', '.json', '.ts', '.tsx'],
        alias: {
            '@': resolve(__dirname, './src'),
        },
        dedupe: ['vue'],
    },
})
