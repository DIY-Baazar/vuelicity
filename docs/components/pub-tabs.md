---
title: PubTabs
description: Documentation for the PubTabs component.
---

<script setup>
    import Default from './PubTabs/Default.vue';
    import Underline from './PubTabs/Underline.vue';
    import Pills from './PubTabs/Pills.vue';
    import Directive from './PubTabs/Directive.vue';
    import WithIcons from './PubTabs/WithIcons.vue';
    import Vertical from './PubTabs/Vertical.vue';
    import FullWidth from './PubTabs/FullWidth.vue';
    import Styling from './PubTabs/Styling.vue';
</script>

# PubTabs

This is a tab component.

## Default Usage

<demo-container class="gap-0">
    <Default />
</demo-container>

```vue
<template>
  <pub-tabs v-model="activeTab" class="p-5">
    <pub-tab name="profile" title="Profile"> Lorem ipsum dolor sit ... </pub-tab>
    <pub-tab name="orders" title="Orders"> 
        ...
    </pub-tab>
    <pub-tab name="address" title="Address"> 
        ...
    </pub-tab>
    <pub-tab name="admin" title="Admin" disabled>
        ...
    </pub-tab>
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
    <Underline />
</demo-container>

```vue
<template>
  <pub-tabs v-model="activeTab" class="p-5" variant="underline">
    <pub-tab name="profile" title="Profile"> Lorem ipsum dolor sit ... </pub-tab>
    <pub-tab name="orders" title="Orders"> 
        ...
    </pub-tab>
    <pub-tab name="address" title="Address"> 
        ...
    </pub-tab>
    <pub-tab name="admin" title="Admin" disabled>
        ...
    </pub-tab>
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
    <Pills />
</demo-container>

```vue
<template>
  <pub-tabs v-model="activeTab" class="p-5" variant="pills">
    <pub-tab name="profile" title="Profile"> Lorem ipsum dolor sit ... </pub-tab>
    <pub-tab name="orders" title="Orders"> 
        ...
    </pub-tab>
    <pub-tab name="address" title="Address"> 
        ...
    </pub-tab>
    <pub-tab name="admin" title="Admin" disabled>
        ...
    </pub-tab>
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
    <Directive/>
</demo-container>

```vue
<template>
  <pub-tabs v-model="activeTab" class="p-5">
    <pub-tab name="profile" title="Profile"> Lorem ipsum dolor sit ... </pub-tab>
    <pub-tab name="orders" title="Orders"> 
        ...
    </pub-tab>
    <pub-tab name="address" title="Address"> 
        ...
    </pub-tab>
    <pub-tab name="admin" title="Admin" disabled>
        ...
    </pub-tab>
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
    <Vertical/>
</demo-container>

## Full Width tabs

### Props - `full-width` Usage

The `full-width` prop can be used to display the tabs in full width.

<demo-container>
    <FullWidth/>
</demo-container>

## Styling tabs

### Props - `tab-class`, `item-class`, `item-active-class`, `class` Usage

The `tab-class`, `item-class`, `item-active-class`, and `class` props can be used to style the tabs.

<demo-container class="gap-0">
    <Styling/>
</demo-container>

```vue
<template>
  <pub-tabs v-model="activeTab" tab-class="bg-amber-100 dark:bg-green-900 border-b-2 border-amber-400 dark:border-green-700"
        item-class="font-bold text-amber-800 dark:text-green-300 hover:bg-amber-300 hover:text-amber-900 dark:hover:bg-green-800 dark:hover:text-green-100"
        item-active-class="bg-amber-400 dark:bg-green-700 text-amber-900 dark:text-green-100"
        class="bg-amber-50 dark:bg-green-950 p-5 border-amber-400 border-x-2 dark:border-green-700 border-b-2">
    <pub-tab name="profile" title="Profile"> Lorem ipsum dolor sit ... </pub-tab>
    <pub-tab name="orders" title="Orders"> 
        ...
    </pub-tab>
    <pub-tab name="address" title="Address"> 
        ...
    </pub-tab>
    <pub-tab name="admin" title="Admin" disabled>
        ...
    </pub-tab>
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
| modelValue      | String  | `Required`  | The active tab.                    |                                                                                                   |
| directive       | String  | `'if'`      | The directive of the tabs.         | `'if'`, `'show'`                                                                                  |
| tabClass        | String  | `''`        | The class of the tabs.             |                                                                                                   |
| itemClass       | String  | `''`        | The class of the tab items.        |                                                                                                   |
| itemActiveClass | String  | `''`        | The class of the active tab items. |                                                                                                   |
| iconPosition    | String  | `'left'`    | The position of the icon.          | `'left'`, `'right'`                                                                               |
| vertical        | Boolean | `false`     | Whether the tabs are vertical.     |                                                                                                   |
| fullWidth       | Boolean | `false`     | Whether the tabs are full width.   |                                                                                                   |
| theme           | String  | `'default'` | The theme of the tabs.             | `'default'`, `'blue'`, `'red'`, `'green'`, `'yellow'`, `'magenta'`, `'cyan'`, `'light'`, `'dark'` |

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
