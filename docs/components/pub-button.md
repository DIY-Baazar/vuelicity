---
title: PubButton Component
---

<script setup>
import Theme from './demo/PubButton/Theme.vue';
import Outline from './demo/PubButton/Outline.vue';
</script>

# PubButton

This is a button component.

## Theme Usage

There are a number of themes available for the button, including `'none'`, `'default'`, `'primary'`, `'secondary'`, `'tertiary'`, `'danger'`, `'warning'`, `'success'`, `'info'`, `'light'`, `'dark'`. Below is a demo of each theme.

<demo-container>
  <Theme/>
</demo-container>

<<< @/components/demo/PubButton/Theme.vue

## Outline Usage

The `outline` prop can be used to add an outline style to the button.

<demo-container>
  <Outline/>
</demo-container>

<<< @/components/demo/PubButton/Outline.vue

## Reference

### Properties

| Name | Type | Default | Description | Options |
| :--- | :--- | :--- | :--- | :--- |
| theme | String | `'primary'` | The color theme of the button. | `'none'`, `'default'`, `'primary'`, `'secondary'`, `'tertiary'`, `'danger'`, `'warning'`, `'success'`, `'info'`, `'light'`, `'dark'` |
| outline | Boolean | `false` | Whether to use the outline style. | `true`, `false` |
| as | String | `'button'` | The HTML element to render. | `'button'`, `'a'` |
| class | String | `''` | Additional CSS classes to apply. | |
| disabled | Boolean | `false` | Whether the button is disabled. | `true`, `false` |
| loading | Boolean | `false` | Whether the button is in a loading state. | `true`, `false` |
| name | String | `''` | The name attribute for the button. | |
| rounded | String | `'none'` | The border radius of the button. | `'none'`, `'sm'`, `'md'`, `'lg'`, `'xl'`, `'2xl'`, `'3xl'`, `'full'` |
| size | String | `'md'` | The size of the button. | `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |
| skeleton | Boolean | `false` | Whether to display a skeleton loader. | `true`, `false` |
| `to` | String | `'#'` | The href for the link when `as` is `'a'`. | |
| `type` | String | `'button'` | The type attribute for the button. | `'button'`, `'submit'`, `'reset'` |

### Slots

| Name | Description |
| ---- | ----------- |
| default | Default slot |
