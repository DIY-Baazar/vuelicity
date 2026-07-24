---
title: PubSpinner
description: Documentation for the PubSpinner component.
---

<script setup>
    import Default from "./PubSpinner/Default.vue"
    import Sizes from "./PubSpinner/Sizes.vue"
    import Colors from "./PubSpinner/Colors.vue"
</script>

# PubSpinner

This is a component for rendering spinners that can be used to show loading indicators.

## Default Usage

<demo-container>
    <Default/>
</demo-container>

<<< @/components/PubSpinner/Default.vue

## Spinner Sizes

### Prop - `size` Usage

The `size` prop is used to set the size of the spinner. It's value is similar to Tailwind spacing unit (`4`= 1rem, `8` = 2rem).

<demo-container>
    <Sizes/>
</demo-container>

<<< @/components/PubSpinner/Sizes.vue

## Colored Spinners

### Prop - `color` Usage

The `color` prop is used to set the color of the spinner.

<demo-container>
    <Colors/>
</demo-container>

<<< @/components/PubSpinner/Colors.vue

## Reference

### Properties

| Name  | Type   | Default | Description                                    | Options                                                                                   |
| :---- | :----- | :------ | :--------------------------------------------- | :---------------------------------------------------------------------------------------- |
| size  | String | `4`     | Size of the spinner                            | `'0'\|'0.5'\|'1'\|'1.5'\|'2'\|'2.5'\|'3'\|'4'\|'5'\|'6'\|'7'\|'8'\|'9'\|'10'\|'11'\|'12'` |
| color | String | `blue`  | Color of the spinner (also accepts hex string) | `'blue'\|'gray'\|'green'\|'pink'\|'purple'\|'red'\|'white'\|'yellow'\|'#3fb984'`          |
