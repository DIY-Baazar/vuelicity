---
title: PubIcon Component
description: Documentation for the PubIcon component.
---

<script setup>
import Size from './PubIcon/Size.vue';
import Theme from './PubIcon/Theme.vue';
import DisplayIcon from './PubIcon/DisplayIcon.vue';
import SearchIcon from './PubIcon/SearchIcon.vue';
import SpinFlip from './PubIcon/SpinFlip.vue';
</script>

# PubIcon

This is a icon component that displays a vector graphic icon.

## Scale

The icon can be scaled using the `size` prop.

<demo-container>
  <Size/>
</demo-container>

<<< @/components/PubIcon/Size.vue

### Theme

The icon can be themed using the `theme` prop.

<demo-container>
  <Theme/>
</demo-container>

<<< @/components/PubIcon/Theme.vue

### Spin, Flip, Rotate, and Mirror

The icon can be animated or transformed.
<demo-container>
<SpinFlip/>
</demo-container>

<<< @/components/PubIcon/SpinFlip.vue


## Reference

### Properties

| Name   | Type    | Default     | Description                            | Options                                                                                           |
| :----- | :------ | :---------- | :------------------------------------- | :------------------------------------------------------------------------------------------------ |
| size   | String  | `'md'`      | The size of the icon.                  | `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'`                                                            |
| theme  | String  | `'default'` | The color theme of the icon.           | `'default'`, `'blue'`, `'red'`, `'yellow'`, `'green'`, `'magenta'`, `'cyan'`, `'light'`, `'dark'` |
| name   | String  | `''`        | The name of the icon.                  | Refer to the [icon list](#icons) below.                                                           |
| rotate | Boolean | `false`     | Whether to rotate the icon 90 degrees. |                                                                                    |
| flip   | Boolean | `false`     | Whether to flip the icon horizontally. |                                                                                    |
| spin   | Boolean | `false`     | Whether to spin the icon.              |                                                                                    |
| pulse  | Boolean | `false`     | Whether to pulse the icon.             |                                                                                    |
| class  | String  | `''`        | Additional CSS classes to apply.       |                                                                                                   |

### Icons

<demo-container>
    <SearchIcon/>
</demo-container>
