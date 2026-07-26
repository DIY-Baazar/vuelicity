---
title: PubTabs
description: Documentation for the PubTabs component.
---

<script setup>
    import DefaultTabs from './PubTabs/DefaultTabs.vue';
    import UnderlineTabs from './PubTabs/UnderlineTabs.vue';
    import PillsTabs from './PubTabs/PillsTabs.vue';
    import DirectiveTabs from './PubTabs/DirectiveTabs.vue';
    import WithIcons from './PubTabs/WithIcons.vue';
    import VerticalTabs from './PubTabs/VerticalTabs.vue';
    import FullWidth from './PubTabs/FullWidth.vue';
    import StylingTabs from './PubTabs/StylingTabs.vue';
    import ColoredTabs from './PubTabs/ColoredTabs.vue';
    import { PubKbd } from 'vuelicity';
</script>

# PubTabs

This is a tab component that displays a list of tabs and their content which can be used to switch between different views.

## Default Usage

<demo-container class="gap-0">
    <DefaultTabs />
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

The `variant` prop can be used to change the behavior of the tabs.

### Underline Tab

Set `variant="underline"` to display the tabs as an underline.

<demo-container class="gap-0">
    <UnderlineTabs />
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

## Pills Tab

Set `variant="pills"` to display the tabs as pills.

<demo-container class="gap-0">
    <PillsTabs />
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

The `directive` prop can be used to change the behavior of the tabs.

<demo-container class="gap-0">
    <DirectiveTabs/>
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

## Tabs with Icons

### Slot - `icon` Usage

The `icon` slot can be used to add an icon to the tabs.

<demo-container class="gap-0">
    <WithIcons/>
</demo-container>

## Vertical tabs

### Props - `vertical` Usage

The `vertical` prop can be used to display the tabs vertically.

<demo-container>
    <VerticalTabs/>
</demo-container>

## Full Width tabs

### Props - `full-width` Usage

The `full-width` prop can be used to display the tabs in full width.

<demo-container>
    <FullWidth/>
</demo-container>

## Colored tabs

### Props - `color` Usage

The `color` prop can be used to change the color of the tabs.

<demo-container class="gap-0">
    <ColoredTabs/>
</demo-container>

```vue
<template>
    <pub-tabs v-model="activeTab" class="p-5" color="red">
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

## Styling tabs

### Props - `tab-class`, `item-class`, `item-active-class`, `class` Usage

The `tab-class`, `item-class`, `item-active-class`, and `class` props can be used to style the tabs.

<demo-container class="gap-0">
    <StylingTabs/>
</demo-container>

```vue
<template>
    <pub-tabs
        v-model="activeTab"
        tab-class="bg-amber-100 dark:bg-green-900 border-b-2 border-amber-400 dark:border-green-700"
        item-class="font-bold text-amber-800 dark:text-green-300 hover:bg-amber-300 hover:text-amber-900 dark:hover:bg-green-800 dark:hover:text-green-100"
        item-active-class="bg-amber-400 dark:bg-green-700 text-amber-900 dark:text-green-100"
        class="bg-amber-50 dark:bg-green-950 p-5 border-amber-400 border-x-2 dark:border-green-700 border-b-2"
    >
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

## Keyboard Navigation

The tab list follows the ARIA tabs pattern. Once focus is on a tab button, use the keyboard to navigate:

- Pressing the `right` arrow key <pub-kbd>&#8594;</pub-kbd> moves focus to the next tab button.
- Pressing the `left` arrow key <pub-kbd>&#8592;</pub-kbd> moves focus to the previous tab button.
- Pressing the `home` key <pub-kbd>Home</pub-kbd> moves focus to the first tab button.
- Pressing the `end` key <pub-kbd>End</pub-kbd> moves focus to the last tab button.

## Reference

### PubTabs

#### Properties

| Name            | Type    | Default     | Description                        | Options                                                       |
| :-------------- | :------ | :---------- | :--------------------------------- | ------------------------------------------------------------- |
| variant         | String  | `'default'` | The variant of the tabs.           | `'default'`, `'underline'`, `'pills'`                         |
| modelValue      | String  | `Required`  | The active tab.                    |                                                               |
| directive       | String  | `'if'`      | The directive of the tabs.         | `'if'`, `'show'`                                              |
| tabClass        | String  | `''`        | The class of the tabs.             |                                                               |
| itemClass       | String  | `''`        | The class of the tab items.        |                                                               |
| itemActiveClass | String  | `''`        | The class of the active tab items. |                                                               |
| iconPosition    | String  | `'left'`    | The position of the icon.          | `'left'`, `'right'`                                           |
| vertical        | Boolean | `false`     | Whether the tabs are vertical.     |                                                               |
| fullWidth       | Boolean | `false`     | Whether the tabs are full width.   |                                                               |
| color           | String  | `'blue'`    | The theme of the tabs.             | `'blue', 'grey', 'green', 'pink', 'purple', 'red', 'yellow'` |

#### Slots

| Name    | Description                      |
| :------ | :------------------------------- |
| default | One or more `PubTab` components. |

#### Events

| Name              | Description                          |
| :---------------- | :----------------------------------- |
| update:modelValue | Emitted when the active tab changes. |
| click:tab         | Emitted when a tab is clicked.       |

### PubTab

#### Properties

| Name     | Type    | Default    | Description                  | Options |
| -------- | ------- | ---------- | ---------------------------- | ------- |
| name     | String  | `Required` | The name of the tab.         |         |
| title    | String  | `''`       | The title of the tab.        |         |
| disabled | Boolean | `false`    | Whether the tab is disabled. |         |

#### Slots

| Name    | Description        |
| ------- | ------------------ |
| default | Default slot       |
| icon    | Slot for the icon. |
