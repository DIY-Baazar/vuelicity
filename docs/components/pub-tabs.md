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

### Underline

<demo-container>
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

## Pills

<demo-container>
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

<demo-container>
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

## Reference

### PubTabs

#### Properties

| Name | Type | Default | Description | Options |
| ---- | ---- | ------- | ----------- | ------- |

#### Slots

| Name    | Description                      |
| ------- | -------------------------------- |
| default | One or more `PubTab` components. |

### Events

| Name              | Description |
| ----------------- | ----------- |
| update:modelValue |             |
| click:tab         |             |

### PubTab

#### Properties

| Name | Type | Default | Description | Options |
| ---- | ---- | ------- | ----------- | ------- |

#### Slots

| Name    | Description |
| ------- | ----------- |
| default |             |
| icon    |             |
