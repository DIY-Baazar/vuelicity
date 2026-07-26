---
title: PubRadio
description: Documentation for the PubRadio component.
---

<script setup>
    import DefaultRadio from './PubRadio/DefaultRadio.vue';
    import SizeRadio from './PubRadio/SizeRadio.vue';
    import DisabledRadio from './PubRadio/DisabledRadio.vue';
    import ColorRadio from './PubRadio/ColorRadio.vue';
</script>

# PubRadio

This is a radio component. It is used to display a radio field to select an option from a list of options.

## Default Usage

<demo-container flex-type='col' class='items-start'>
    <DefaultRadio />
</demo-container>

<<< @/components/PubRadio/DefaultRadio.vue

## Sizes

### Prop - `size` Usage

The `size` prop is used to set the size of the radio button. It can be one of the following values: `sm`, `md`, `lg`, `xl`.

<demo-container flex-type='col' class='items-start'>
    <SizeRadio />
</demo-container>

<<< @/components/PubRadio/SizeRadio.vue

## Disabled

### Prop - `disabled` Usage

The `disabled` prop is used to disable the radio button.

<demo-container flex-type='col' class='items-start'>
    <DisabledRadio />
</demo-container>

<<< @/components/PubRadio/DisabledRadio.vue

## Colors

### Prop - `color` Usage

The `color` prop is used to set the color of the radio button. It can be one of the following values: `red`, `yellow`, `green`, `blue`, `magenta`, `cyan`, `light`, `dark`.

<demo-container>
    <ColorRadio />
</demo-container>

<<< @/components/PubRadio/ColorRadio.vue

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
