---
title: PubBlockquote
description: Documentation for the PubBlockquote component.
---
<script setup>
    import DefaultBlockquote from './PubBlockquote/DefaultBlockquote.vue';
    import SolidBlockquote from './PubBlockquote/SolidBlockquote.vue';
    // import WithIconBlockquote from './PubBlockquote/WithIconBlockquote.vue';
    import AlignmentBlockquote from './PubBlockquote/AlignmentBlockquote.vue';
    import SizeBlockquote from './PubBlockquote/SizeBlockquote.vue';
</script>

# PubBlockquote

This is a blockquote component which can be used to display quoted text content. It supports different styles and can be customized using props.

## Default Blockquote

<demo-container>
    <DefaultBlockquote />
</demo-container>

<<< @/components/PubBlockquote/DefaultBlockquote.vue

## Props - `type` Usage

### Solid Background

Use `type="solid"` to apply a solid background with a left border accent, useful for pulling quotes out of surrounding content.

<demo-container>
    <solid-blockquote />
</demo-container>

<<< @/components/PubBlockquote/SolidBlockquote.vue

## Alignment

<demo-container class="inline-block w-full">
    <alignment-blockquote />
</demo-container>

<<< @/components/PubBlockquote/AlignmentBlockquote.vue

## Sizes

<demo-container>
    <size-blockquote />
</demo-container>

<<< @/components/PubBlockquote/SizeBlockquote.vue

## Reference

### Properties

| Name  | Type   | Default | Description                                                                       |
| ----- | ------ | ------- | --------------------------------------------------------------------------------- |
| class | String | `''`    | Additional CSS classes for the blockquote.                                        |
| type  | String | `''`    | The style type of the blockquote. Can be set to `'solid'` for a solid background. |
