---
title: Paragraph - PubP
description: Documentation for the PubP component.
---

<script setup>
    import DefaultParagraph from './PubP/DefaultParagraph.vue';
    import StylingParagraph from './PubP/StylingParagraph.vue';
</script>

# PubP

This is a paragraph component which can be used to display text content. It supports different styles and can be customized using props.

## Default Usage

<demo-container>
  <DefaultParagraph/>
</demo-container>

<<< @/components/PubP/DefaultParagraph.vue

## Custom Classes

<demo-container flex-type='col' class='gap-2 items-start'>
    <StylingParagraph/>
</demo-container>

<<< @/components/PubP/StylingParagraph.vue

## Reference

### Properties

| Name  | Type   | Default | Description                               |
| ----- | ------ | ------- | ----------------------------------------- |
| class | String | `''`    | Additional CSS classes for the paragraph. |
