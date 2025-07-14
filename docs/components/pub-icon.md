---
title: PubIcon Component
---

<script setup>
import Size from './demo/PubIcon/Size.vue';
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
