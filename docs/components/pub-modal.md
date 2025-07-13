---
title: PubModal Component
---

<script setup>
import Default from './demo/PubModal/Default.vue';
import Size from './demo/PubModal/Size.vue';
</script>

# PubModal

This is a modal component.

## Default Usage

<demo-container>
  <Default/>
</demo-container>

<<< @/components/demo/PubModal/Default.vue

## Props - `size` Usage

The `size` prop can be used to adjust the size of the modal.

<demo-container>
  <Size/>
</demo-container>

```vue
<template>
  <pub-modal size="xs" />
  <pub-modal size="md" />
  <pub-modal size="2xl" />
  <pub-modal size="5xl" />
</template>

<script setup>
import { PubModal } from "vuelicity";
</script>
```

## Reference

### Properties

| Name | Type | Default | Description | Options |
| :--- | :--- | :--- | :--- | :--- |
| size | String | `'md'` | The size of the modal. | `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'`, `'2xl'`, `'3xl'`, `'4xl'`, `'5xl'` |
| position | String | `'center'` | The position of the modal. | `'top-start'`, `'top-center'`, `'top-end'`, `'center-start'`, `'center'`, `'center-end'`, `'bottom-start'`, `'bottom-center'`, `'bottom-end'` |
| zIndex | String | `'50'` | The z-index of the modal. | `'10'`, `'20'`, `'30'`, `'40'`, `'50'` |
| isOpen | Boolean | `false` | Whether the modal is open. | `true`, `false` |
| class | String | `''` | Additional CSS classes to apply. | |

### Slots

| Name | Description |
| ---- | ----------- |
| default | Default slot |
| header | Header slot |
| footer | Footer slot |
