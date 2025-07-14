---
title: PubIcon Component
---

<script setup>
import Size from './demo/PubIcon/Size.vue';
import DisplayIcon from './demo/PubIcon/DisplayIcon.vue';
</script>

# PubIcon

This is a icon component.

## Scale

The icon can be scaled using the `size` prop.

<demo-container>
  <Size/>
</demo-container>

## Reference

### Properties

| Name | Type | Default | Description | Options |
| :--- | :--- | :--- | :--- | :--- |
| size | String | `'md'` | The size of the icon. | `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |
| theme | String | `'default'` | The color theme of the icon. | `'none'`, `'default'`, `'primary'`, `'secondary'`, `'tertiary'`, `'danger'`, `'warning'`, `'success'`, `'info'`, `'light'`, `'dark'` |
| class | String | `''` | Additional CSS classes to apply. | |

### Icons

<demo-container>
  <DisplayIcon name="alert"/>
  <DisplayIcon name="alert-circle"/>
  <DisplayIcon name="close"/>
  <DisplayIcon name="close-circle"/>
  <DisplayIcon name="check"/>
  <DisplayIcon name="check-circle"/>
  <DisplayIcon name="plus"/>
  <DisplayIcon name="plus-circle"/>
  <DisplayIcon name="minus"/>
  <DisplayIcon name="minus-circle"/>
</demo-container>
