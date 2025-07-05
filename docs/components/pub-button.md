---
title: PubButton Component
---

<script setup>
import Basic from './demo/PubButton/Basic.vue';
</script>

# PubButton

This is a button component.

## Example Usage

<demo-container>
  <basic/>
</demo-container>

<<< @/components/demo/PubButton/Basic.vue

## Reference

### Properties

| Name | Type | Default | Description | Options |
| :--- | :--- | :--- | :--- | :--- |
| `as` | `string` | `'button'` | The HTML element to render. | `'button'`, `'a'` |
| `class` | `string` | `''` | Additional CSS classes to apply. | |
| `disabled` | `boolean` | `false` | Whether the button is disabled. | `true`, `false` |
| `loading` | `boolean` | `false` | Whether the button is in a loading state. | `true`, `false` |
| `name` | `string` | `''` | The name attribute for the button. | |
| `outline` | `boolean` | `false` | Whether to use the outline style. | `true`, `false` |
| `rounded` | `string` | `'none'` | The border radius of the button. | `'none'`, `'sm'`, `'md'`, `'lg'`, `'xl'`, `'2xl'`, `'3xl'`, `'full'` |
| `size` | `string` | `'md'` | The size of the button. | `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |
| `skeleton` | `boolean` | `false` | Whether to display a skeleton loader. | `true`, `false` |
| `theme` | `string` | `'primary'` | The color theme of the button. | `'none'`, `'default'`, `'primary'`, `'secondary'`, `'tertiary'`, `'danger'`, `'warning'`, `'success'`, `'info'`, `'light'`, `'dark'` |
| `to` | `string` | `'#'` | The href for the link when `as` is `'a'`. | |
| `type` | `string` | `'button'` | The type attribute for the button. | `'button'`, `'submit'`, `'reset'` |

### Slots

| Name | Description |
| ---- | ----------- |
| default | Default slot |
