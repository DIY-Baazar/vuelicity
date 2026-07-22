---
title: PubTabs
description: Documentation for the PubTabs component.
---

<script setup>
    import Default from './PubTabs/Default.vue';
    import Underline from './PubTabs/Underline.vue';
    import Pills from './PubTabs/Pills.vue';
    import Directive from './PubTabs/Directive.vue';
</script>

# PubTabs

This is a tab component.

## Default Usage

<demo-container>
    <Default />
</demo-container>

```vue
<template>
    <pub-tabs v-model="activeTab" class="p-5">
        <pub-tab name="profile" title="Profile"> Lorem ipsum dolor sit ... </pub-tab>
        <pub-tab name="orders" title="Orders"> ... </pub-tab>
        <pub-tab name="address" title="Address"> ... </pub-tab>
        <pub-tab name="admin" title="Admin" disabled> ... </pub-tab>
    </pub-tabs>
</template>

<script setup>
    import { ref } from "vue";
    import { PubTab, PubTabs } from "vuelicity";

    const activeTab = ref("profile");
</script>
```

## Props - `variant` Usage

### Underline

<demo-container>
    <Underline />
</demo-container>

```vue
<template>
    <pub-tabs v-model="activeTab" class="p-5" variant="underline">
        <pub-tab name="profile" title="Profile"> Lorem ipsum dolor sit ... </pub-tab>
        <pub-tab name="orders" title="Orders"> ... </pub-tab>
        <pub-tab name="address" title="Address"> ... </pub-tab>
        <pub-tab name="admin" title="Admin" disabled> ... </pub-tab>
    </pub-tabs>
</template>

<script setup>
    import { ref } from "vue";
    import { PubTab, PubTabs } from "vuelicity";

    const activeTab = ref("profile");
</script>
```

## Pills

<demo-container>
    <Pills />
</demo-container>

```vue
<template>
    <pub-tabs v-model="activeTab" class="p-5" variant="pills">
        <pub-tab name="profile" title="Profile"> Lorem ipsum dolor sit ... </pub-tab>
        <pub-tab name="orders" title="Orders"> ... </pub-tab>
        <pub-tab name="address" title="Address"> ... </pub-tab>
        <pub-tab name="admin" title="Admin" disabled> ... </pub-tab>
    </pub-tabs>
</template>

<script setup>
    import { ref } from "vue";
    import { PubTab, PubTabs } from "vuelicity";

    const activeTab = ref("profile");
</script>
```

## Directive

### Props - `directive` Usage

<demo-container>
    <Directive/>
</demo-container>

```vue
<template>
    <pub-tabs v-model="activeTab" class="p-5">
        <pub-tab name="profile" title="Profile"> Lorem ipsum dolor sit ... </pub-tab>
        <pub-tab name="orders" title="Orders"> ... </pub-tab>
        <pub-tab name="address" title="Address"> ... </pub-tab>
        <pub-tab name="admin" title="Admin" disabled> ... </pub-tab>
    </pub-tabs>
</template>

<script setup>
    import { ref } from "vue";
    import { PubTab, PubTabs } from "vuelicity";

    const activeTab = ref("profile");
</script>
```

## Reference

### PubTabs

#### Properties

| Name            | Type    | Default     | Description                        | Options                                                                                           |
| :-------------- | :------ | :---------- | :--------------------------------- | ------------------------------------------------------------------------------------------------- |
| variant         | String  | `'default'` | The variant of the tabs.           | `'default'`, `'underline'`, `'pills'`                                                             |
| modelValue      | String  | `Required`  | The active tab.                    |
| directive       | String  | `'if'`      | The directive of the tabs.         | `'if'`, `'show'`                                                                                  |
| tabClass        | String  | `''`        | The class of the tabs.             |
| itemClass       | String  | `''`        | The class of the tab items.        |
| itemActiveClass | String  | `''`        | The class of the active tab items. |
| iconPosition    | String  | `'left'`    | The position of the icon.          | `'left'`, `'right'`                                                                               |
| vertical        | Boolean | `false`     | Whether the tabs are vertical.     | `true`, `false`                                                                                   |
| fullWidth       | Boolean | `false`     | Whether the tabs are full width.   | `true`, `false`                                                                                   |
| theme           | String  | `'default'` | The theme of the tabs.             | `'default'`, `'blue'`, `'red'`, `'green'`, `'yellow'`, `'magenta'`, `'cyan'`, `'light'`, `'dark'` |

#### Slots

| Name    | Description                      |
| :------ | :------------------------------- |
| default | One or more `PubTab` components. |

### Events

| Name              | Description                          |
| :---------------- | :----------------------------------- |
| update:modelValue | Emitted when the active tab changes. |
| click:tab         | Emitted when a tab is clicked.       |

### PubTab

#### Properties

| Name     | Type    | Default    | Description                  | Options         |
| -------- | ------- | ---------- | ---------------------------- | --------------- |
| name     | String  | `Required` | The name of the tab.         |
| title    | String  | `''`       | The title of the tab.        |
| disabled | Boolean | `false`    | Whether the tab is disabled. | `true`, `false` |

#### Slots

| Name    | Description        |
| ------- | ------------------ |
| default | Default slot       |
| icon    | Slot for the icon. |
