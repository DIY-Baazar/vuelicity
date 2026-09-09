---
title: PubRating
description: Documentation for the PubRating component.
---
<script setup>
    import DefaultRating from './PubRating/DefaultRating.vue';
    import SizeRating from './PubRating/SizeRating.vue';
    import ColorRating from './PubRating/ColorRating.vue';
</script>

# PubRating

## Default Usage

<demo-container>
    <DefaultRating />
</demo-container>

<<< @/components/PubRating/DefaultRating.vue

## Rating with Text

## Rating Count

## Star Sizes

### Prop - `size` Usage

The `size` prop is used to set the size of the rating stars. It can be one of the following values: `sm`, `md`, `lg`, `xl`.

<demo-container flex-type='col' class='items-start'>
    <SizeRating />
</demo-container>

<<< @/components/PubRating/SizeRating.vue

## Star Colors

### Prop - `color` Usage

The `color` prop is used to set the color of the rating stars. It can be one of the following values: `blue`, `red`, `green`, `yellow`, `purple`, `pink`, `grey`.

<demo-container flex-type='col' class='items-start'>
    <ColorRating />
</demo-container>

<<< @/components/PubRating/ColorRating.vue
