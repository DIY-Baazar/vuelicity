import fs from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import process from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const componentName = process.argv[2];

function createDir (path) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true });
    }
}

function toDashConstantCase (string) {
    return string
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // Insert dash between lowercase/number and uppercase
        .toLowerCase();
}

const componentsDir = join(__dirname, "..", "src", "components");
const componentDir = join(componentsDir, componentName);
createDir(componentDir);

fs.writeFileSync(join(componentDir, `${componentName}.vue`), `<script lang="ts" setup>
import { computed, toRefs } from "vue";
</script>

<template>
</template>
`);

fs.writeFileSync(join(componentDir, "types.ts"), "");
fs.writeFileSync(join(componentDir, "utils.ts"), "");
fs.writeFileSync(join(__dirname, "..", "docs", "components", `${toDashConstantCase(componentName)}.md`), `---
title: ${componentName}
description: Documentation for the ${componentName} component.
---`);

const componentFile = join(__dirname, "..", "docs", ".vitepress", "components", "index.ts");

const componentsContent = fs.readdirSync(componentsDir)
    .filter(file => fs.statSync(join(componentsDir, file)).isDirectory())
    .map(component => `{
        text: "${component}",
        link: "/components/${toDashConstantCase(component)}"
    }`)
    .join(",\n    ");

fs.writeFileSync(componentFile, `const component_toc = [
    ${componentsContent}
];

export default { component_toc };
`);
