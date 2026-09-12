---
title: PubRating
description: Documentation for the PubRating component.
---
<script setup>
    import DefaultRating from './PubRating/DefaultRating.vue';
    import SizeRating from './PubRating/SizeRating.vue';
    import ColorRating from './PubRating/ColorRating.vue';
    import WithTextRating from './PubRating/WithTextRating.vue';
    import RatingCount from './PubRating/RatingCount.vue';
</script>

# PubRating

## Default Usage

<demo-container>
    <DefaultRating />
</demo-container>

<<< @/components/PubRating/DefaultRating.vue

## Rating with Text

### Slot - `besideText` Usage

The `besideText` slot is used to display text beside the rating stars. You can use this slot to show additional information, such as the number of reviews or a custom message.

<demo-container>
    <WithTextRating />
</demo-container>

<<< @/components/PubRating/WithTextRating.vue

## Rating Count

### Props - `reviewLink` & `reviewText` Usage

The `reviewLink` prop is used to set the URL for the review link, and the `reviewText` prop is used to set the text for the review link.

<demo-container>
    <RatingCount />
</demo-container>

<<< @/components/PubRating/RatingCount.vue

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

## Reference

### Props

| Name       | Type           | Default  | Description                       | Options                                                    |
| ---------- | -------------- | -------- | --------------------------------- | ---------------------------------------------------------- |
| rating     | Number         | 0        | The rating value to be displayed. |                                                            |
| reviewLink | String         | ''       | The URL for the review link.      |                                                            |
| reviewText | String         | ''       | The text for the review link.     |                                                            |
| scale      | Number         | 5        | The maximum rating value.         |                                                            |
| size       | String         | 'md'     | The size of the rating stars.     | 'sm', 'md', 'lg', 'xl'                                     |
| color      | String / Class | 'yellow' | The color of the rating stars.    | 'blue', 'red', 'green', 'yellow', 'purple', 'pink', 'grey' |

### Slots

| Name       | Description                                       |
| ---------- | ------------------------------------------------- |
| besideText | Slot for displaying text beside the rating stars. |
