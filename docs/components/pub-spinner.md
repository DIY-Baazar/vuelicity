---
title: PubSpinner
description: Documentation for the PubSpinner component.
---

<script setup>
    import DefaultSpinner from "./PubSpinner/DefaultSpinner.vue"
    import SizesSpinner from "./PubSpinner/SizesSpinner.vue"
    import ColorsSpinner from "./PubSpinner/ColorsSpinner.vue"
</script>

# PubSpinner

This is a component for rendering spinners that can be used to show loading indicators.

## Default Usage

<demo-container>
    <DefaultSpinner/>
</demo-container>

<<< @/components/PubSpinner/DefaultSpinner.vue

## Spinner Sizes

### Prop - `size` Usage

The `size` prop is used to set the size of the spinner. It's value is similar to Tailwind spacing unit (`4`= 1rem, `8` = 2rem).

<demo-container>
    <SizesSpinner/>
</demo-container>

<<< @/components/PubSpinner/SizesSpinner.vue

## Colored Spinners

### Prop - `color` Usage

The `color` prop is used to set the color of the spinner.

<demo-container>
    <ColorsSpinner/>
</demo-container>

<<< @/components/PubSpinner/ColorsSpinner.vue

## Reference

### Properties

| Name  | Type   | Default | Description                                    | Options                                                                                   |
| :---- | :----- | :------ | :--------------------------------------------- | :---------------------------------------------------------------------------------------- |
| size  | String | `4`     | Size of the spinner                            | `'0'\|'0.5'\|'1'\|'1.5'\|'2'\|'2.5'\|'3'\|'4'\|'5'\|'6'\|'7'\|'8'\|'9'\|'10'\|'11'\|'12'` |
| color | String | `blue`  | Color of the spinner (also accepts hex string) | `'blue'\|'grey'\|'green'\|'pink'\|'purple'\|'red'\|'white'\|'yellow'\|'#{color_hexcode}'` |
