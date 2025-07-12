---
title: PubButton Component
---

<script setup>
import Theme from './demo/PubButton/Theme.vue';
import Outline from './demo/PubButton/Outline.vue';
import Rounded from './demo/PubButton/Rounded.vue';
import Size from './demo/PubButton/Size.vue';
import Disabled from './demo/PubButton/Disabled.vue';
import LoadingSkeleton from './demo/PubButton/LoadingSkeleton.vue';
</script>

# PubButton

This is a button component.

## Prop - `theme` Usage

There are a number of themes available for the button, including `'none'`, `'default'`, `'primary'`, `'secondary'`, `'tertiary'`, `'danger'`, `'warning'`, `'success'`, `'info'`, `'light'`, `'dark'`. Below is a demo of each theme.

<demo-container>
  <Theme/>
</demo-container>

<<< @/components/demo/PubButton/Theme.vue

## Prop - `outline` Usage

The `outline` prop can be used to add an outline style to the button.

<demo-container>
  <Outline/>
</demo-container>

<<< @/components/demo/PubButton/Outline.vue

## Prop - `rounded` Usage

The `rounded` prop can be used to add rounded corners to the button.

<demo-container>
  <Rounded/>
</demo-container>

<<< @/components/demo/PubButton/Rounded.vue

## Prop - `size` Usage

The `size` prop can be used to adjust the size of the button.

<demo-container>
  <Size/>
</demo-container>

<<< @/components/demo/PubButton/Size.vue

## Prop - `disabled` Usage

The `disabled` prop can be used to disable the button.

<demo-container>
  <Disabled/>
</demo-container>

<<< @/components/demo/PubButton/Disabled.vue

## Props - `loading` and `skeleton` Usage

The `loading` prop can be used to display a loading state. The `skeleton` prop can be used to display a skeleton loader.

<demo-container>
  <LoadingSkeleton/>
</demo-container>

<<< @/components/demo/PubButton/LoadingSkeleton.vue

## Reference

### Properties

| Name | Type | Default | Description | Options |
| :--- | :--- | :--- | :--- | :--- |
| theme | String | `'primary'` | The color theme of the button. | `'none'`, `'default'`, `'primary'`, `'secondary'`, `'tertiary'`, `'danger'`, `'warning'`, `'success'`, `'info'`, `'light'`, `'dark'` |
| outline | Boolean | `false` | Whether to use the outline style. |  |
| rounded | String | `'none'` | The border radius of the button. | `'none'`, `'sm'`, `'md'`, `'lg'`, `'xl'`, `'full'` |
| size | String | `'md'` | The size of the button. | `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |
| as | String | `'button'` | The HTML element to render. | `'button'`, `'a'` |
| class | String | `''` | Additional CSS classes to apply. | |
| disabled | Boolean | `false` | Whether the button is disabled. |  |
| loading | Boolean | `false` | Whether the button is in a loading state. | `true`, `false` |
| name | String | `''` | The name attribute for the button. | |
| skeleton | Boolean | `false` | Whether to display a skeleton loader. | `true`, `false` |
| to | String | `'#'` | The href for the link when `as` is `'a'`. | |
| type | String | `'button'` | The type attribute for the button. | `'button'`, `'submit'`, `'reset'` |

### Slots

| Name | Description |
| ---- | ----------- |
| default | Default slot |
