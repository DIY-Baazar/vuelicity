import * as components from './components'

import type { App } from 'vue'
import './styles/main.css'

export const install = (app: App): void => {
  Object.values(components).forEach((component: import('vue').Component) => {
    if (component?.name) {
      app.component(component.name, component)
    }
  })
}

export * from './components'
