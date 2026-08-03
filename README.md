# Vuelicity

<div align="center">
<p><img alt="Vuelicity Logo" width="350" src="./docs/public/images/logo_text.png"/></p>
</div>

[![npm version](https://img.shields.io/npm/v/vuelicity.svg)](https://www.npmjs.com/package/vuelicity)
[![License MIT](https://img.shields.io/npm/l/vuelicity.svg)](LICENSE)
[![Vue](https://img.shields.io/badge/Vue-3.5.x-42b883.svg?logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1.x-06b6d4.svg?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.x-3178c6.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646cff.svg?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node](https://img.shields.io/badge/Node-%3E%3D18.x-339933.svg?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Docs](https://img.shields.io/badge/docs-online-blue.svg)](https://vuelicity.diybaazar.com/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-181717.svg?logo=github&logoColor=white)](https://github.com/DIY-Baazar/vuelicity)

Vuelicity is a collection of UI components for Vue 3, built with the power and flexibility of Tailwind CSS 4. It's designed to be simple, customizable, and a joy for developers to use.

## Features

- **Vue 3 Ready**: Built from the ground up for Vue 3 and the Composition API.
- **Tailwind CSS 4**: Leverages the latest features of Tailwind CSS for utility-first styling.
- **Customizable**: Components are designed to be easily themed and extended.
- **Developer Experience**: Simple and predictable component APIs.
- **Tree-shakable**: Only import the components you need, keeping your bundle size small.

## Documentation

For full documentation and live examples of all components, please visit our documentation website. The documentation source is located in the `/docs` directory of this repository and is built with VitePress.

Visit [https://diy-baazar.github.io/vuelicity](https://diy-baazar.github.io/vuelicity) for the latest documentation.

## Installation

Install Vuelicity and its peer dependencies using your favorite package manager:

```bash
# Using npm
npm install vuelicity vue tailwindcss

# Using yarn
yarn add vuelicity vue tailwindcss
```

### Setup

1. **Tailwind CSS**: Ensure you have Tailwind CSS configured in your project. If not, you can follow their official guide.

2. **Vuelicity Content**: Add the path to Vuelicity's components to your `tailwind.config.js` file. This allows Tailwind to scan the component files for classes and include them in your final CSS build.

   ```js
   // tailwind.config.js
   export default {
     content: [
       "./index.html",
       "./src/**/*.{vue,js,ts,jsx,tsx}",
       "./node_modules/vuelicity/src/**/*.{vue,js,ts,jsx,tsx}", // Add this line
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

## Usage

You can import components individually and use them in your Vue templates.

Here's an example of how to use the `PubButton` component:

```vue
<template>
  <PubButton color="blue" rounded="md"> Click me! </PubButton>
</template>

<script setup>
// Assuming Vuelicity components are exported from the main package entry
import { PubButton } from "vuelicity";
</script>
```

## Contributing

We welcome contributions! If you'd like to contribute, please:

1. Fork the repository.
2. Create a new branch for your feature or fix (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes with a clear commit message (`git commit -m 'feat: Add some feature'`).
5. Push your branch (`git push origin feature/your-feature-name`).
6. Open a new Pull Request.

### Local Development

To run the documentation site locally for development:

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run docs:dev`

This will start the VitePress development server where you can see your changes live.

## License

This project is licensed under the MIT License.
