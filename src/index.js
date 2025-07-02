import components from './components';

const plugin = {
    install (app) {
        for (const prop in components) {
            if (components.hasOwnProperty(prop)) {
                const component = components[prop];
                app.component(component.name, component);
            }
        }
    }
};

import './styles/main.css';

export default plugin;