---
title: Link - PubA
description: Documentation for the PubA component.
---

<script setup>
    import DefaultLink from './PubA/DefaultLink.vue';
    import LinkInParagraph from './PubA/LinkInParagraph.vue';
    import StylingLink from './PubA/StylingLink.vue';
    import WithIcon from './PubA/WithIcon.vue';
</script>

# PubA

This is a link component which can be used to set hyperlinks from one page to another or to an external website when clicking on an inline text item, button, or card.

## Default Link

<demo-container>
    <DefaultLink />
</demo-container>

<<< @/components/PubA/DefaultLink.vue

<!-- ## Link Button -->

## Link in Paragraph

<demo-container>
    <LinkInParagraph />
</demo-container>

<<< @/components/PubA/LinkInParagraph.vue

## Link with Icon

<demo-container>
    <WithIcon />
</demo-container>

<<< @/components/PubA/WithIcon.vue

## Styling Link

<demo-container>
    <StylingLink />
</demo-container>

<<< @/components/PubA/StylingLink.vue

## Reference

### Properties

| Name  | Type   | Default           | Description                                      |
| ----- | ------ | ----------------- | ------------------------------------------------ |
| href  | String | `''`              | The URL to navigate to when the link is clicked. |
| color | String | `'text-blue-600'` | The color of the link.                           |
