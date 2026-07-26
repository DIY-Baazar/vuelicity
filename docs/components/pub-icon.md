---
title: PubIcon Component
description: Documentation for the PubIcon component.
---

<script setup>
import SizeIcon from './PubIcon/SizeIcon.vue';
import ColoredIcon from './PubIcon/ColoredIcon.vue';
import DisplayIcon from './PubIcon/DisplayIcon.vue';
import SearchIcon from './PubIcon/SearchIcon.vue';
import SpinFlip from './PubIcon/SpinFlip.vue';
</script>

# PubIcon

This is a icon component that displays a vector graphic icon.

## Scale

The icon can be scaled using the `size` prop.

<demo-container>
  <SizeIcon/>
</demo-container>

<<< @/components/PubIcon/SizeIcon.vue

## Colored Icons

### Prop - `color` Usage

The icon can be colored using the `color` prop.

<demo-container>
  <ColoredIcon/>
</demo-container>

<<< @/components/PubIcon/ColoredIcon.vue

## Spin, Flip, Rotate, and Mirror

### Props - `spin`, `flip`, `rotate`, and `mirror` Usage

The icon can be rotated, flipped, spun, and mirrored using the `spin`, `flip`, `rotate`, and `mirror` props.

<demo-container>
<SpinFlip/>
</demo-container>

<<< @/components/PubIcon/SpinFlip.vue

## Reference

### Properties

| Name   | Type    | Default     | Description                            | Options                                                                                         |
| :----- | :------ | :---------- | :------------------------------------- | :---------------------------------------------------------------------------------------------- |
| size   | String  | `'md'`      | The size of the icon.                  | `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'`                                                          |
| color  | String  | `'default'` | The color color of the icon.           | `'default'`, `'blue'`, `'red'`, `'yellow'`, `'green'`, `'grey'`, `'cyan'`, `'pink'`, `'purple'` |
| name   | String  | `''`        | The name of the icon.                  | Refer to the [icon list](#icons) below.                                                         |
| rotate | Boolean | `false`     | Whether to rotate the icon 90 degrees. |                                                                                                 |
| flip   | Boolean | `false`     | Whether to flip the icon horizontally. |                                                                                                 |
| spin   | Boolean | `false`     | Whether to spin the icon.              |                                                                                                 |
| pulse  | Boolean | `false`     | Whether to pulse the icon.             |                                                                                                 |
| class  | String  | `''`        | Additional CSS classes to apply.       |                                                                                                 |

### Icons

<demo-container>
    <SearchIcon/>
</demo-container>
