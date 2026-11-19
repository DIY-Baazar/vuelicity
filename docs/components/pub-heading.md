---
title: Heading - PubHeading
description: Documentation for the PubHeading component.
---
<script setup>
    import DefaultHeading from './PubHeading/DefaultHeading.vue';
    import HeadingSizes from './PubHeading/HeadingSizes.vue';
    import StylingHeading from './PubHeading/StylingHeading.vue';
</script>

# PubHeading

This is a heading component which can be used to set headings for sections of content. It supports different sizes and styles.

## Default Heading

<demo-container flex-type='col' class='gap-2 items-start'>
<DefaultHeading />
</demo-container>

<<< @/components/PubHeading/DefaultHeading.vue

## Sizes

### Prop - `level` Usage

- Use `level="1"` for the most important text element on a page, typically the page title. Each page should have only one H1.
- Use `level="2"` for the next level of headings, typically used for section titles.
- Use `level="3"` for sub-sections within a section, typically used for sub-section titles.
- Use `level="4"` for sub-sub-sections within a sub-section, typically used for sub-sub-section titles.
- Use `level="5"` for sub-sub-sub-sections within a sub-sub-section, typically used for sub-sub-sub-section titles.
- Use `level="6"` for the least important text element on a page, typically used for fine print or captions.

<demo-container flex-type='col' class='gap-2 items-start'>
<HeadingSizes />
</demo-container>

<<< @/components/PubHeading/HeadingSizes.vue

## Styling Heading

### Props - `color` & `class` Usage

The `color` prop allows you to customize the color of the heading text. It accepts a string value representing the desired color class.
The `class` prop allows you to add additional CSS classes to the heading element.

<demo-container flex-type='col' class='gap-2 items-start'>
<StylingHeading />
</demo-container>

<<< @/components/PubHeading/StylingHeading.vue

## Reference

### Properties

| Name  | Type   | Default           | Description                             |
| ----- | ------ | ----------------- | --------------------------------------- |
| level | number | 1                 | The heading level (1-6)                 |
| color | String | `'text-blue-600'` | The color of the heading.               |
| class | String | `''`              | Additional CSS classes for the heading. |
