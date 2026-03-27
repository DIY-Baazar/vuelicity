import fs from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const prefix = "Pub";

function createDir (path) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true });
    }
}

function toDashConstantCase (string) {
    return string
        .replace(/([a-z0-9])([A-Z])/g, "$1-$2") // Insert dash between lowercase/number and uppercase
        .toLowerCase();
}

const rl = readline.createInterface({ input, output });
let componentName = await rl.question("Enter the component name (without Pub prefix): ");

if (!componentName) {
    console.error("Component name is required");
    process.exit(1);
}
rl.close();

componentName = prefix + componentName.charAt(0).toUpperCase() + componentName.slice(1);

const componentsDir = join(__dirname, "..", "src", "components");
const componentDir = join(componentsDir, componentName);
createDir(componentDir);

fs.writeFileSync(
    join(componentDir, `${componentName}.vue`),
    `<script lang="ts" setup>
import { computed, toRefs } from "vue";
</script>

<template>
<div class="${toDashConstantCase(componentName)}"></div>
</template>
    `,
);

fs.writeFileSync(join(componentDir, "types.ts"), "");
fs.writeFileSync(join(componentDir, "utils.ts"), "");
fs.writeFileSync(
    join(__dirname, "..", "docs", "components", `${toDashConstantCase(componentName)}.md`),
    `---
title: ${componentName}
description: Documentation for the ${componentName} component.
---
<script setup>
</script>

# ${componentName}
`,
);

// Writing into the component file index
const componentFile = join(__dirname, "..", "docs", ".vitepress", "components", "index.ts");

const componentsContent = fs
    .readdirSync(componentsDir)
    .filter((file) => fs.statSync(join(componentsDir, file)).isDirectory())
    .sort() // Ensure alphabetical order
    .map(
        (component) => `{
        text: "${component}",
        link: "/components/${toDashConstantCase(component)}"
    }`,
    )
    .join(",\n    ");
fs.writeFileSync(
    componentFile,
    `const component_toc = [
    ${componentsContent}
];
export default { component_toc };
`,
);
// Writing into the component export
const componentExportFile = join(componentsDir, "index.ts");
const componentExportContent = fs
    .readdirSync(componentsDir, { recursive: true })
    .filter((file) => file.endsWith(".vue") && !file.startsWith("_"))
    .sort() // Ensure alphabetical order
    .map((file) => {
        return { file: file.replace(/\\/g, "/"), component: file.replace(".vue", "").replace(/\\/g, "/").split("/").pop() };
    })
    .map(({ file, component }) => `export { default as ${component} } from "./${file}";`)
    .join("\n");

fs.writeFileSync(componentExportFile, componentExportContent);

console.log(`Component ${componentName} created successfully!`);
