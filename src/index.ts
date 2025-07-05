import type { App } from "vue";

import components from "./components";

const install = (app: App) => {
    Object.values(components).forEach((component: any) => {
        app.component(component.name, component);
    });
};

export default install;

export * from "./components";
