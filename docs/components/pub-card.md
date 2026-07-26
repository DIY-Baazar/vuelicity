---
title: PubCard
description: Documentation for the PubCard component.
---

<script setup>
import DefaultCard from './PubCard/DefaultCard.vue';
import WithImage from './PubCard/WithImage.vue';
import HorizontalCard from './PubCard/HorizontalCard.vue';
</script>

# PubCard

This is a card component that can be used to display content in a card. It provides various options for customizing the card, such as adding a border, shadow, and rounded corners.

## Default Card

<demo-container>
    <DefaultCard />
</demo-container>

<<< @/components/PubCard/DefaultCard.vue

## Card with image

<demo-container>
    <WithImage />
</demo-container>

<<< @/components/PubCard/WithImage.vue

## Horizontal Card

<demo-container>
    <HorizontalCard />
</demo-container>

<<< @/components/PubCard/HorizontalCard.vue

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
