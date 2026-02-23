---
title: PubButtonGroup
description: Documentation for the PubButtonGroup component.
---

<script setup>
    import Default from "./demo/PubButtonGroup/Default.vue";
    import Rounded from "./demo/PubButtonGroup/Rounded.vue";
    import IconAction from "./demo/PubButtonGroup/IconAction.vue";
    import WithIcon from "./demo/PubButtonGroup/WithIcon.vue";
</script>

# PubButtonGroup

## Default Usage

<demo-container>
  <Default/>
</demo-container>

<<< @/components/demo/PubButtonGroup/Default.vue

## Rounded Button Group

<demo-container>
  <Rounded/>
</demo-container>

<<< @/components/demo/PubButtonGroup/Rounded.vue

## Button Group Icon Action

<demo-container>
  <IconAction/>
</demo-container>

<<< @/components/demo/PubButtonGroup/IconAction.vue

## Button Group Icons

<demo-container>
  <WithIcon/>
</demo-container>

<<< @/components/demo/PubButtonGroup/WithIcon.vue

## Reference

### Properties

| Name | Type | Default | Description | Options |
| :--- | :--- | :--- | :--- | :--- |
| rounded | Boolean | `false` | Whether to apply rounded corners to the button group. | `true`, `false` |

### Slots

| Name | Description |
| ---- | ----------- |
| default | Default slot for buttons |
