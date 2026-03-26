---
title: PubBadge Component
description: Documentation for the PubBadge component.
---

<script setup>
import Default from './PubBadge/Default.vue';
import Size from './PubBadge/Size.vue';
import Bordered from './PubBadge/Bordered.vue';
import Rounded from './PubBadge/Rounded.vue';
import AsLink from './PubBadge/AsLink.vue';
import WithIcon from './PubBadge/WithIcon.vue';
import Icon from './PubBadge/Icon.vue';
</script>

# PubBadge

This is a badge component can be used to complement other elements such as buttons or text elements as a label or to show the count of a given data, such as the number of comments for an article or how much time has passed by since a comment has been made.

## Default badges

### Prop - `theme` Usage

The `theme` prop can be used to change the color of the badge.

<demo-container>
    <Default />
</demo-container>

<<< @/components//PubBadge/Default.vue

## Large badges

### Prop - `size` Usage

The `size` prop can be used to change the size of the badge.

<demo-container>
    <Size />
</demo-container>

<<< @/components//PubBadge/Size.vue

## Bordered badges

### Prop - `bordered` Usage

The `bordered` prop can be used to add a border to the badge.

<demo-container>
    <Bordered />
</demo-container>

<<< @/components//PubBadge/Bordered.vue

## Rounded badges

### Prop - `rounded` Usage

The `rounded` prop can be used to add rounded corners to the badge.

<demo-container>
    <Rounded />
</demo-container>

<<< @/components//PubBadge/Rounded.vue

## Badges as links

### Prop - `href` Usage

The `href` prop can be used to make the badge a link.

<demo-container>
    <AsLink />
</demo-container>

<<< @/components//PubBadge/AsLink.vue

## Badges with icons

### Slot - `icon` Usage

The `icon` slot can be used to add an icon to the badge.

<demo-container>
    <WithIcon />
</demo-container>

<<< @/components//PubBadge/WithIcon.vue

## Badges with only icon

<demo-container>
    <Icon />
</demo-container>

<<< @/components//PubBadge/Icon.vue

## Reference

### Properties


| Name  | Type   | Default     | Description                                                          | Options                                                                                           |
| :---- | :----- | :---------- | :------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| theme | String | `'default'` | The color theme of the badge.                                        | `'default'`, `'blue'`, `'red'`, `'yellow'`, `'green'`, `'magenta'`, `'cyan'`, `'light'`, `'dark'` |
| size  | String | `'xs'`      | The size of the badge.                                               | `'xs'`, `'sm'`, `'md'`                                                                            |
| href  | String | `null`      | The URL to link to. If provided, the badge renders as an anchor tag. |                                                                                                   |
| bordered | Boolean | `false` | Whether to add a border to the badge. |  |  
| rounded | Boolean | `false` | Whether to add rounded corners to the badge. |  |  


### Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | The content of the badge. |
| icon    | Slot for an icon.         |
