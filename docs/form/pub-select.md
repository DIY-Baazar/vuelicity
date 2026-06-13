---
title: PubSelect
description: Documentation for the PubSelect component.
---
<script setup>
    import Default from './PubSelect/Default.vue';
    import Size from './PubSelect/Size.vue';
    import Disabled from './PubSelect/Disabled.vue';
</script>

# PubSelect

This is a select component. It is used to display a select field to select an option from a list of options.

## Default Usage

<demo-container>
    <Default />
</demo-container>

<<< @/form/PubSelect/Default.vue

## Sizes

### Prop - `size` Usage

The `size` prop is used to set the size of the select field. It can be one of the following values: `'sm'`, `'md'`, `'lg'`, `'xl'`.

<demo-container flex-type='col' class='items-start'>
    <Size />
</demo-container>

<<< @/form/PubSelect/Size.vue

## Disabled

### Prop - `disabled` Usage

The `disabled` prop is used to disable the select field. It can be a boolean value.

<demo-container>
    <Disabled />
</demo-container>

<<< @/form/PubSelect/Disabled.vue