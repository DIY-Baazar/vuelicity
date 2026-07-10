---
title: PubRadio
description: Documentation for the PubRadio component.
---

<script setup>
    import Default from './PubRadio/Default.vue';
    import Size from './PubRadio/Size.vue';
    import Disabled from './PubRadio/Disabled.vue';
    import Color from './PubRadio/Color.vue';
</script>

# PubRadio

This is a radio component. It is used to display a radio field to select an option from a list of options.

## Default Usage

<demo-container flex-type='col' class='items-start'>
    <Default />
</demo-container>

<<< @/form/PubRadio/Default.vue

## Sizes

### Prop - `size` Usage

The `size` prop is used to set the size of the radio button. It can be one of the following values: `sm`, `md`, `lg`, `xl`.

<demo-container flex-type='col' class='items-start'>
    <Size />
</demo-container>

<<< @/form/PubRadio/Size.vue

## Disabled

### Prop - `disabled` Usage

The `disabled` prop is used to disable the radio button.

<demo-container flex-type='col' class='items-start'>
    <Disabled />
</demo-container>

<<< @/form/PubRadio/Disabled.vue

## Colors

### Prop - `color` Usage

The `color` prop is used to set the color of the radio button. It can be one of the following values: `red`, `yellow`, `green`, `blue`, `magenta`, `cyan`, `light`, `dark`.

<demo-container>
    <Color />
</demo-container>

<<< @/form/PubRadio/Color.vue

## Reference

### Props

| Name         | Type    | Default | Description                                             | Options                                                                              |
| ------------ | ------- | ------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| name         | String  | `''`    | The name of the radio button.                           |                                                                                      |
| label        | String  | `''`    | The label of the radio button.                          |                                                                                      |
| value        | String  | `''`    | The value of the radio button.                          |                                                                                      |
| size         | String  | `'md'`  | The size of the radio button.                           | `'sm'`, `'md'`, `'lg'`, `'xl'`                                                       |
| disabled     | Boolean | `false` | Whether the radio button is disabled.                   |                                                                                      |
| color        | String  | `''`    | The color of the radio button.                          | `'red'`, `'yellow'`, `'green'`, `'blue'`, `'magenta'`, `'cyan'`, `'light'`, `'dark'` |
| class        | String  | `''`    | Additional CSS classes to apply.                        |                                                                                      |
| wrapperClass | String  | `''`    | Additional CSS classes to apply to the wrapper element. |                                                                                      |
| labelClass   | String  | `''`    | Additional CSS classes to apply to the label element.   |                                                                                      |
| bordered     | Boolean | `false` | Whether the radio button is bordered.                   |                                                                                      |

### Slots

| Name    | Description  |
| ------- | ------------ |
| default | Default slot |
