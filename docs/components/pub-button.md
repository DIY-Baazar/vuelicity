---
title: PubButton Component
description: Documentation for the PubButton component.
---

<script setup>
import Default from './PubButton/Default.vue';
import Outline from './PubButton/Outline.vue';
import Rounded from './PubButton/Rounded.vue';
import Size from './PubButton/Size.vue';
import Disabled from './PubButton/Disabled.vue';
import LoadingSkeleton from './PubButton/LoadingSkeleton.vue';
import WithIcon from './PubButton/WithIcon.vue';
import WithLabel from './PubButton/WithLabel.vue';
import Icon from './PubButton/Icon.vue';
</script>

# PubButton

This is a button component that can be used to create buttons with various styles and sizes.

## Default buttons

### Prop - `theme` Usage

There are a number of themes available for the button, including `'none'`, `'default'`, `'blue'`, `'red'`, `'yellow'`, `'green'`, `'magenta'`, `'cyan'`, `'light'`, `'dark'`. Below is a demo of each theme.

<demo-container>
  <Default/>
</demo-container>

<<< @/components//PubButton/Default.vue

## Outline buttons
### Prop - `outline` Usage

The `outline` prop can be used to add an outline style to the button.

<demo-container>
  <Outline/>
</demo-container>

<<< @/components//PubButton/Outline.vue

## Pill buttons
### Prop - `rounded` Usage

The `rounded` prop can be used to add rounded corners to the button.

<demo-container>
  <Rounded/>
</demo-container>

<<< @/components//PubButton/Rounded.vue

## Button sizes
### Prop - `size` Usage

The `size` prop can be used to adjust the size of the button.

<demo-container>
  <Size/>
</demo-container>

<<< @/components//PubButton/Size.vue

## Disabled Buttons
### Prop - `disabled` Usage

The `disabled` prop can be used to disable the button.

<demo-container>
  <Disabled/>
</demo-container>

<<< @/components//PubButton/Disabled.vue

## Button with loading state
### Props - `loading` and `skeleton` Usage

The `loading` prop can be used to display a loading state. The `skeleton` prop can be used to display a skeleton loader.

<demo-container>
  <LoadingSkeleton/>
</demo-container>

<<< @/components//PubButton/LoadingSkeleton.vue

## Buttons with icon

<demo-container>
  <WithIcon/>
</demo-container>

<<< @/components//PubButton/WithIcon.vue

## Button with label 

<demo-container>
    <WithLabel/>
</demo-container>

<<< @/components//PubButton/WithLabel.vue

## Icon buttons

<demo-container>
    <Icon/>
</demo-container>

<<< @/components//PubButton/Icon.vue

## Reference

### Properties

| Name | Type | Default | Description | Options |
| :--- | :--- | :--- | :--- | :--- |
| theme | String | `'default'` | The color theme of the button. | `'none'`, `'default'`, `'blue'`, `'red'`, `'yellow'`, `'green'`, `'magenta'`, `'cyan'`, `'light'`, `'dark'` |
| outline | Boolean | `false` | Whether to use the outline style. |  |
| rounded | String | `'none'` | The border radius of the button. | `'none'`, `'sm'`, `'md'`, `'lg'`, `'xl'`, `'full'` |
| size | String | `'md'` | The size of the button. | `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |
| square | Boolean | `false` | Whether to render the button as a square. | |
| as | String | `'button'` | The HTML element to render. | `'button'`, `'a'` |
| class | String | `''` | Additional CSS classes to apply. | |
| disabled | Boolean | `false` | Whether the button is disabled. |  |
| loading | Boolean | `false` | Whether the button is in a loading state. |  |
| name | String | `''` | The name attribute for the button. | |
| skeleton | Boolean | `false` | Whether to display a skeleton loader. |  |
| to | String | `'#'` | The href for the link when `as` is `'a'`. | |
| type | String | `'button'` | The type attribute for the button. | `'button'`, `'submit'`, `'reset'` |
| linkAttr | String | `'href'` | The attribute to use for the link when `as` is `'a'`. | |

### Slots

| Name | Description |
| ---- | ----------- |
| default | Default slot |
| prepend | Slot for content before the default slot |
| append | Slot for content after the default slot |
