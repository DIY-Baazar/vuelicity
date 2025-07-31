---
title: PubIcon Component
---

<script setup>
import Size from './demo/PubIcon/Size.vue';
import Theme from './demo/PubIcon/Theme.vue';
import DisplayIcon from './demo/PubIcon/DisplayIcon.vue';
import SpinFlip from './demo/PubIcon/SpinFlip.vue';
</script>

# PubIcon

This is a icon component.

## Scale

The icon can be scaled using the `size` prop.

<demo-container>
  <Size/>
</demo-container>

<<< @/components/demo/PubIcon/Size.vue

### Theme

The icon can be themed using the `theme` prop.

<demo-container>
  <Theme/>
</demo-container>

<<< @/components/demo/PubIcon/Theme.vue

### Spin, Flip, Rotate, and Mirror

The icon can be 
<demo-container>
<SpinFlip/>
</demo-container>

<<< @/components/demo/PubIcon/SpinFlip.vue


## Reference

### Properties

| Name | Type | Default | Description | Options |
| :--- | :--- | :--- | :--- | :--- |
| size | String | `'md'` | The size of the icon. | `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |
| theme | String | `'default'` | The color theme of the icon. | `'none'`, `'default'`, `'primary'`, `'secondary'`, `'tertiary'`, `'danger'`, `'warning'`, `'success'`, `'info'`, `'light'`, `'dark'` |
| name | String | `''` | The name of the icon. | Refer to the [icon list](#icons) below. |
|rotate | String | `''` | The rotation of the icon. | `'0'`, `'45'`, `'90'`, `'135'`, `'180'`, `'225'`, `'270'`, `'315'` |
|flip | Boolean | `false` | Whether to flip the icon horizontally. | `true`, `false` |
|spin | Boolean | `false` | Whether to spin the icon. | `true`, `false` |
|pulse | Boolean | `false` | Whether to pulse the icon. | `true`, `false` |
| class | String | `''` | Additional CSS classes to apply. | |

### Icons

<demo-container>
  <DisplayIcon name="alert"/>
  <DisplayIcon name="alert-circle"/>
  <DisplayIcon name="close"/>
  <DisplayIcon name="close-circle"/>
  <DisplayIcon name="check"/>
  <DisplayIcon name="check-circle"/>
  <DisplayIcon name="info"/>
  <DisplayIcon name="info-circle"/>
  <DisplayIcon name="plus"/>
  <DisplayIcon name="plus-circle"/>
  <DisplayIcon name="minus"/>
  <DisplayIcon name="minus-circle"/>
  <hr/>
  <DisplayIcon name="cart"/>
</demo-container>
