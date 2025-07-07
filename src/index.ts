import type { App } from "vue";
import * as components from "./components";
import "./styles/main.css";

export const install = (app: App): void => {
    Object.values(components).forEach((component: any) => {
        if (component?.name) {
            app.component(component.name, component);
        }
    });
};

export * from "./components";
