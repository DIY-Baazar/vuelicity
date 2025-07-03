import DefaultTheme from 'vitepress/theme';
import DemoContainer from '../components/DemoContainer.vue';
import Vuelicity from 'vuelicity';

import './custom.css';

export default {
    ...DefaultTheme,
    enhanceApp ({ app }) {
        app.use(Vuelicity);
        app.component('DemoContainer', DemoContainer);
    }
};