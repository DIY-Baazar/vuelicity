---
title: PubBadge Component
description: Documentation for the PubBadge component.
---

<script setup>
import Default from './demo/PubBadge/Default.vue';
import Size from './demo/PubBadge/Size.vue';
import Bordered from './demo/PubBadge/Bordered.vue';
import Rounded from './demo/PubBadge/Rounded.vue';
import AsLink from './demo/PubBadge/AsLink.vue';
import WithIcon from './demo/PubBadge/WithIcon.vue';
import Icon from './demo/PubBadge/Icon.vue';
</script>

# PubBadge

This is a badge component can be used to complement other elements such as buttons or text elements as a label or to show the count of a given data, such as the number of comments for an article or how much time has passed by since a comment has been made.

## Default badges

### Prop - `theme` Usage

The `theme` prop can be used to change the color of the badge.

<demo-container>
    <Default />
</demo-container>

<<< @/components/demo/PubBadge/Default.vue

## Large badges

### Prop - `size` Usage

The `size` prop can be used to change the size of the badge.

<demo-container>
    <Size />
</demo-container>

<<< @/components/demo/PubBadge/Size.vue

## Bordered badges

### Prop - `bordered` Usage

The `bordered` prop can be used to add a border to the badge.

<demo-container>
    <Bordered />
</demo-container>

<<< @/components/demo/PubBadge/Bordered.vue

## Rounded badges

### Prop - `rounded` Usage

The `rounded` prop can be used to add rounded corners to the badge.

<demo-container>
    <Rounded />
</demo-container>

<<< @/components/demo/PubBadge/Rounded.vue

## Badges as links

### Prop - `href` Usage

The `href` prop can be used to make the badge a link.

<demo-container>
    <AsLink />
</demo-container>

<<< @/components/demo/PubBadge/AsLink.vue

## Badges with icons

### Slot - `icon` Usage

The `icon` slot can be used to add an icon to the badge.

<demo-container>
    <WithIcon />
</demo-container>

<<< @/components/demo/PubBadge/WithIcon.vue

## Badges with only icon

<demo-container>
    <Icon />
</demo-container>

<<< @/components/demo/PubBadge/Icon.vue

## Reference

### Properties


| Name  | Type   | Default     | Description                                                          | Options                                                                                           |
| :---- | :----- | :---------- | :------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| theme | String | `'default'` | The color theme of the badge.                                        | `'default'`, `'blue'`, `'red'`, `'yellow'`, `'green'`, `'magenta'`, `'cyan'`, `'light'`, `'dark'` |
| size  | String | `'xs'`      | The size of the badge.                                               | `'xs'`, `'sm'`, `'md'`                                                                            |
| href  | String | `null`      | The URL to link to. If provided, the badge renders as an anchor tag. |                                                                                                   |
| bordered | Boolean | `false` | Whether to add a border to the badge. | `true`, `false` |  
| rounded | Boolean | `false` | Whether to add rounded corners to the badge. | `true`, `false` |  


### Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | The content of the badge. |
| icon    | Slot for an icon.         |
