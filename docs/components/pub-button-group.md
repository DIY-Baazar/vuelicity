---
title: PubButtonGroup
description: Documentation for the PubButtonGroup component.
---

<script setup>
    import Default from "./PubButtonGroup/Default.vue";
    import Rounded from "./PubButtonGroup/Rounded.vue";
    import IconAction from "./PubButtonGroup/IconAction.vue";
    import WithIcon from "./PubButtonGroup/WithIcon.vue";
</script>

# PubButtonGroup

## Default Usage

<demo-container>
  <Default/>
</demo-container>

<<< @/components/PubButtonGroup/Default.vue

## Rounded Button Group

<demo-container>
  <Rounded/>
</demo-container>

<<< @/components//PubButtonGroup/Rounded.vue

## Button Group Icon Action

<demo-container>
  <IconAction/>
</demo-container>

<<< @/components//PubButtonGroup/IconAction.vue

## Button Group Icons

<demo-container>
  <WithIcon/>
</demo-container>

<<< @/components//PubButtonGroup/WithIcon.vue

## Reference

### Properties

| Name | Type | Default | Description | Options |
| :--- | :--- | :--- | :--- | :--- |
| rounded | Boolean | `false` | Whether to apply rounded corners to the button group. |  |

### Slots

| Name | Description |
| ---- | ----------- |
| default | Default slot for buttons |
