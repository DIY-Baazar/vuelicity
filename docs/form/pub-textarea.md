---
title: PubTextarea
description: Documentation for the PubTextarea component.
---
<script setup>
    import Default from './PubTextarea/Default.vue';
    import Size from './PubTextarea/Size.vue';
</script>

# PubTextarea

This is a textarea component. It is used to display a textarea element for comment, message, wysiwyg editor, and more.

## Default Usage

<demo-container>
    <Default />
</demo-container>

<<< @/form/PubTextarea/Default.vue

## Sizes

### Prop - `size` Usage

The `size` prop is used to set the size of the textarea. It can be one of the following values: `'sm'`, `'md'`, `'lg'`, `'xl'`.

<demo-container flex-type='col' class='items-start'>
    <Size />
</demo-container>

<<< @/form/PubTextarea/Size.vue

## Reference