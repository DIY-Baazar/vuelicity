---
title: PubCarousel
description: Documentation for the PubCarousel component.
---

<script setup>
    import Default from './PubCarousel/Default.vue';
    import WithoutControls from './PubCarousel/WithoutControls.vue';
    import WithoutIndicators from './PubCarousel/WithoutIndicators.vue';
    import SlideAnim from './PubCarousel/SlideAnim.vue';
    import SlideInterval from './PubCarousel/SlideInterval.vue';
    import Static from './PubCarousel/Static.vue';
</script>

# PubCarousel

This is a component for displaying a carousel of items. It provides a list of items and navigation controls to move between them.

## Default carousel

<demo-container>
    <Default />
</demo-container>

<<< @/components/PubCarousel/Default.vue

## Carousel without controls

### Prop - `hideControls` Usage

The `hideControls` prop can be used to hide the navigation controls.

<demo-container>
    <WithoutControls />
</demo-container>

<<< @/components/PubCarousel/WithoutControls.vue

## Carousel without indicators

### Prop - `hideIndicators` Usage

The `hideIndicators` prop can be used to hide the indicators.

<demo-container>
    <WithoutIndicators />
</demo-container>

<<< @/components/PubCarousel/WithoutIndicators.vue

## Carousel with slide animation

### Prop - `slide` Usage

The `slide` prop can be used to enable slide animation.

<demo-container>
    <SlideAnim />
</demo-container>

<<< @/components/PubCarousel/SlideAnim.vue

## Carousel with slide and custom interval

### Props - `slide` and `interval` Usage

The `slide` prop can be used to enable slide animation. The `interval` prop can be used to set the interval between slides.

<demo-container>
    <SlideInterval />
</demo-container>

## Static carousel

### Prop - `static` Usage

The `static` prop can be used to disable animation.

<demo-container>
    <Static />
</demo-container>

## Reference

### Properties

| Name           | Type    | Default | Description                              | Options |
| :------------- | :------ | :------ | :--------------------------------------- | :------ |
| hideControls   | Boolean | `false` | Whether to hide the navigation controls. |         |
| hideIndicators | Boolean | `false` | Whether to hide the indicators.          |         |
| slide          | Boolean | `false` | Whether to enable slide animation.       |         |
| interval       | Number  | `3000`  | The interval between slides.             |         |
| pictures       | Array   | `[]`    | An array of picture items.               |         |
| static         | Boolean | `false` | Whether to disable animation.            |         |
