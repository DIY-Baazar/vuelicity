---
title: PubBadge Component
description: Documentation for the PubBadge component.
---

<script setup>
import DefaultBadge from './PubBadge/DefaultBadge.vue';
import DimissableBadge from './PubBadge/DimissableBadge.vue';
import SizeBadge from './PubBadge/SizeBadge.vue';
import BorderedBadge from './PubBadge/BorderedBadge.vue';
import RoundedBadge from './PubBadge/RoundedBadge.vue';
import AsLink from './PubBadge/AsLink.vue';
import WithIcon from './PubBadge/WithIcon.vue';
import IconBadge from './PubBadge/IconBadge.vue';
</script>

# PubBadge

This is a badge component can be used to complement other elements such as buttons or text elements as a label or to show the count of a given data, such as the number of comments for an article or how much time has passed by since a comment has been made.

## Default badges

### Prop - `color` Usage

The `color` prop can be used to change the color of the badge.

<demo-container>
    <DefaultBadge />
</demo-container>

<<< @/components/PubBadge/DefaultBadge.vue

## Large badges

### Prop - `size` Usage

The `size` prop can be used to change the size of the badge.

<demo-container>
    <SizeBadge />
</demo-container>

<<< @/components/PubBadge/SizeBadge.vue

## Bordered badges

### Prop - `bordered` Usage

The `bordered` prop can be used to add a border to the badge.

<demo-container>
    <BorderedBadge />
</demo-container>

<<< @/components/PubBadge/BorderedBadge.vue

## Dismissable badges (chips)

### Prop - `dismissable` Usage

The `dismissable` prop can be used to make the badge dismissable.

<demo-container>
    <DimissableBadge />
</demo-container>

<<< @/components/PubBadge/DimissableBadge.vue

## Rounded badges

### Prop - `rounded` Usage

The `rounded` prop can be used to add rounded corners to the badge.

<demo-container>
    <RoundedBadge />
</demo-container>

<<< @/components/PubBadge/RoundedBadge.vue

## Badges as links

### Prop - `href` Usage

The `href` prop can be used to make the badge a link.

<demo-container>
    <AsLink />
</demo-container>

<<< @/components/PubBadge/AsLink.vue

## Badges with icons

### Slot - `icon` Usage

The `icon` slot can be used to add an icon to the badge.

<demo-container>
    <WithIcon />
</demo-container>

<<< @/components/PubBadge/WithIcon.vue

## Badges with only icon

<demo-container>
    <IconBadge />
</demo-container>

<<< @/components/PubBadge/IconBadge.vue

## Reference

### Properties

| Name     | Type    | Default     | Description                                                          | Options                                                                                         |
| :------- | :------ | :---------- | :------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------- |
| color    | String  | `'default'` | The color color of the badge.                                        | `'default'`, `'blue'`, `'red'`, `'yellow'`, `'green'`, `'pink'`, `'cyan'`, `'purple'`, `'grey'` |
| size     | String  | `'xs'`      | The size of the badge.                                               | `'xs'`, `'sm'`, `'md'`                                                                          |
| href     | String  | `null`      | The URL to link to. If provided, the badge renders as an anchor tag. |                                                                                                 |
| bordered | Boolean | `false`     | Whether to add a border to the badge.                                |                                                                                                 |
| rounded  | Boolean | `false`     | Whether to add rounded corners to the badge.                         |                                                                                                 |

### Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | The content of the badge. |
| icon    | Slot for an icon.         |
