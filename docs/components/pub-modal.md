---
title: PubModal Component
---

<script setup>
import Default from './demo/PubModal/Default.vue';
import Size from './demo/PubModal/Size.vue';
import Position from './demo/PubModal/Position.vue';
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
  <pub-modal size="sm" />
  <pub-modal size="lg" />
  <pub-modal size="2xl" />
  <pub-modal size="5xl" />
</template>

<script setup>
import { PubModal } from "vuelicity";
</script>
```

### Props - `position` Usage

The `position` prop can be used to adjust the position of the modal.

<demo-container>
  <Position/>
</demo-container>

```vue
<template>
  <pub-modal position="top-start" />
  <pub-modal position="top-center" />
  <pub-modal position="top-end" />
  <pub-modal position="center-start" />
  <pub-modal position="center-end" />
  <pub-modal position="bottom-start" />
  <pub-modal position="bottom-center" />
  <pub-modal position="bottom-end" />
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
| zIndex | Number | `40` | The z-index of the modal. | `10`, `20`, `30`, `40`, `50` |
| isOpen | Boolean | `false` | Whether the modal is open. | `true`, `false` |
| persistent | Boolean | `false` | Whether the modal should be persistent. | `true`, `false` |
| notClickClose | Boolean | `false` | Whether the modal should not close when clicked outside. | `true`, `false` |
| notEscapeClose | Boolean | `false` | Whether the modal should not close when the escape key is pressed. | `true`, `false` |
| scrollable | Boolean | `false` | Whether the modal should be scrollable. | `true`, `false` |
| overlayBlur | Boolean | `false` | Whether the modal should have a blurred overlay. | `true`, `false` |
| class | String | `''` | Additional CSS classes to apply. | |

### Slots

| Name | Description |
| ---- | ----------- |
| default | Default slot |
| header | Header slot |
| footer | Footer slot |
