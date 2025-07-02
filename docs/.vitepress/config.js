import path from 'path';

export default {
    title: 'Vuelicity',
    description: 'Vuelicity is a collection of UI components for Vue 3 using Tailwind CSS 4.',
    themeConfig: {
        repo: 'https://github.com/DIY-Baazar/vuelicity',
        sidebar: [
            {
                text: 'Introduction',
                children: [
                    { text: 'What is Vuelicity?', link: '/' },
                    { text: 'Getting Started', link: '/guide/' },
                ],
            }, {
                text: 'Components',
                children: [
                    { text: 'PubButton', link: '/components/pub-button' },
                    // { text: 'Component B', link: '/components/component-b' },
                ],
            }
        ],
    },
    vite: {
        resolve: {
            alias: {
                'vuelicity': path.resolve(__dirname, '../../src'),
            },
            dedupe: ['vue'], // avoid error when using dependencies that also use Vue
        }
    }
};