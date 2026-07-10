---
title: PubCard
description: Documentation for the PubCard component.
---

<script setup>
import Default from './PubCard/Default.vue';
import WithImage from './PubCard/WithImage.vue';
import Horizontal from './PubCard/Horizontal.vue';
</script>

# PubCard

This is a card component that can be used to display content in a card. It provides various options for customizing the card, such as adding a border, shadow, and rounded corners.

## Default Card

<demo-container>
    <Default />
</demo-container>

<<< @/components/PubCard/Default.vue

## Card with image

<demo-container>
    <WithImage />
</demo-container>

<<< @/components/PubCard/WithImage.vue

## Horizontal Card

<demo-container>
    <Horizontal />
</demo-container>

<<< @/components/PubCard/Horizontal.vue

## Reference

### Properties

| Name    | Type   | Default     | Description                                      | Options                                |
| :------ | :----- | :---------- | :----------------------------------------------- | :------------------------------------- |
| href    | String | `''`        | The URL to navigate to when the card is clicked. |                                        |
| imgAlt  | String | `''`        | The alternative text for the image.              |                                        |
| imgSrc  | String | `''`        | The URL of the image.                            |                                        |
| variant | String | `'default'` | The variant of the card.                         | `'default'`, `'image'`, `'horizontal'` |
| class   | String | `''`        | Additional CSS classes to apply.                 |                                        |

### Slots

| Name    | Description  |
| ------- | ------------ |
| default | Default slot |
