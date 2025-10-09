# Getting Started

## Setup

This setup assumes your client app is created with Vite and vue template, and you use 'npm link' to link to `vuelicity` locally.

In your `package.json`, you shall have the dependencies compatible with the following:

```json
"dependencies": {
    "tailwindcss": "^4.1.11",
    "vue": "^3.5.17"
}
```

In your `vite.config.js`, you shall configure to dedupe `vue`:

```js
export default defineConfig({
  resolve: {
    dedupe: ['vue'],
  },
});
```

In your `main.js`, you shall import the libraries and CSS:

```js
import 'vuelicity/dist/vuelicity.css';
```

Import components from this library in your own component:

```html
<script setup>
  import { PubButton } from 'vuelicity';
</script>
```
