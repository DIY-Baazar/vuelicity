---
title: PubButton Component
description: Documentation for the PubButton component.
---

<script setup>
import DefaultButton from './PubButton/DefaultButton.vue';
import OutlineButton from './PubButton/OutlineButton.vue';
import RoundedButton from './PubButton/RoundedButton.vue';
import SizeButton from './PubButton/SizeButton.vue';
import DisabledButton from './PubButton/DisabledButton.vue';
import LoadingSkeleton from './PubButton/LoadingSkeleton.vue';
import WithIcon from './PubButton/WithIcon.vue';
import WithLabel from './PubButton/WithLabel.vue';
import IconButton from './PubButton/IconButton.vue';
</script>

# PubButton

This is a button component that can be used to create buttons with various styles and sizes.

## Default buttons

### Prop - `color` Usage

There are a number of theme-colors available for the button, including `'blue'`, `'red'`, `'yellow'`, `'green'`, `'pink'`, `'cyan'`, `'purple'`, `'grey'`. Below is a demo of each color.

<demo-container>
  <DefaultButton/>
</demo-container>

<<< @/components/PubButton/DefaultButton.vue

## Outline buttons

### Prop - `outline` Usage

The `outline` prop can be used to add an outline style to the button.

<demo-container>
  <OutlineButton/>
</demo-container>

<<< @/components/PubButton/OutlineButton.vue

## Pill buttons

### Prop - `rounded` Usage

The `rounded` prop can be used to add rounded corners to the button.

<demo-container>
  <RoundedButton/>
</demo-container>

<<< @/components/PubButton/RoundedButton.vue

## Button sizes

### Prop - `size` Usage

The `size` prop can be used to adjust the size of the button.

<demo-container>
  <SizeButton/>
</demo-container>

<<< @/components/PubButton/SizeButton.vue

## Disabled Buttons

### Prop - `disabled` Usage

The `disabled` prop can be used to disable the button.

<demo-container>
  <DisabledButton/>
</demo-container>

<<< @/components/PubButton/DisabledButton.vue

## Button with loading state

### Props - `loading` and `skeleton` Usage

The `loading` prop can be used to display a loading state. The `skeleton` prop can be used to display a skeleton loader.

<demo-container>
  <LoadingSkeleton/>
</demo-container>

<<< @/components/PubButton/LoadingSkeleton.vue

## Buttons with icon

<demo-container>
  <WithIcon/>
</demo-container>

<<< @/components/PubButton/WithIcon.vue

## Button with label

<demo-container>
    <WithLabel/>
</demo-container>

<<< @/components/PubButton/WithLabel.vue

## Icon buttons

<demo-container>
    <IconButton/>
</demo-container>

<<< @/components/PubButton/IconButton.vue

## Reference

### Properties

| Name     | Type    | Default     | Description                                           | Options                                                                                       |
| :------- | :------ | :---------- | :---------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| color    | String  | `'default'` | The color color of the button.                        | `'none'`, `'default'`, `'blue'`, `'red'`, `'yellow'`, `'green'`, `'pink'`, `'cyan'`, `'grey'` |
| outline  | Boolean | `false`     | Whether to use the outline style.                     |                                                                                               |
| rounded  | String  | `'none'`    | The border radius of the button.                      | `'none'`, `'sm'`, `'md'`, `'lg'`, `'xl'`, `'full'`                                            |
| size     | String  | `'md'`      | The size of the button.                               | `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'`                                                        |
| square   | Boolean | `false`     | Whether to render the button as a square.             |                                                                                               |
| as       | String  | `'button'`  | The HTML element to render.                           | `'button'`, `'a'`                                                                             |
| class    | String  | `''`        | Additional CSS classes to apply.                      |                                                                                               |
| disabled | Boolean | `false`     | Whether the button is disabled.                       |                                                                                               |
| loading  | Boolean | `false`     | Whether the button is in a loading state.             |                                                                                               |
| name     | String  | `''`        | The name attribute for the button.                    |                                                                                               |
| skeleton | Boolean | `false`     | Whether to display a skeleton loader.                 |                                                                                               |
| to       | String  | `'#'`       | The href for the link when `as` is `'a'`.             |                                                                                               |
| type     | String  | `'button'`  | The type attribute for the button.                    | `'button'`, `'submit'`, `'reset'`                                                             |
| linkAttr | String  | `'href'`    | The attribute to use for the link when `as` is `'a'`. |                                                                                               |

### Slots

| Name    | Description                              |
| ------- | ---------------------------------------- |
| default | Default slot                             |
| prepend | Slot for content before the default slot |
| append  | Slot for content after the default slot  |
