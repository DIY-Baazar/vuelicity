---
title: Paragraph - PubP
description: Documentation for the PubP component.
---

<script setup>
    import DefaultParagraph from './PubP/DefaultParagraph.vue';
    import StylingParagraph from './PubP/StylingParagraph.vue';
    import LeadingParagraph from './PubP/LeadingParagraph.vue';
    import FirstLetterParagraph from './PubP/FirstLetterParagraph.vue';
    import ParagraphLink from './PubP/ParagraphLink.vue';
    import ParagraphBold from './PubP/ParagraphBold.vue';
    import ParagraphUnderline from './PubP/ParagraphUnderline.vue';
</script>

# PubP

This is a paragraph component which can be used to display text content. It supports different styles and can be customized using props.

## Default Usage

<demo-container>
  <DefaultParagraph/>
</demo-container>

<<< @/components/PubP/DefaultParagraph.vue

## Leading Paragraph

<demo-container>
  <LeadingParagraph/>
</demo-container>

<<< @/components/PubP/LeadingParagraph.vue

## First letter

<demo-container>
  <FirstLetterParagraph/>
</demo-container>

<<< @/components/PubP/FirstLetterParagraph.vue

## Paragraph link

<demo-container>
  <ParagraphLink/>
</demo-container>

<<< @/components/PubP/ParagraphLink.vue

## Paragraph bold

<demo-container>
  <ParagraphBold/>
</demo-container>

<<< @/components/PubP/ParagraphBold.vue

## Paragraph underline

<demo-container>
  <ParagraphUnderline/>
</demo-container>

<<< @/components/PubP/ParagraphUnderline.vue

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
