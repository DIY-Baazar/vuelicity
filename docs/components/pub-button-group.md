---
title: PubButtonGroup
description: Documentation for the PubButtonGroup component.
---

<script setup>
    import DefaultBtnGrp from "./PubButtonGroup/DefaultBtnGrp.vue";
    import RoundedBtnGrp from "./PubButtonGroup/RoundedBtnGrp.vue";
    import IconAction from "./PubButtonGroup/IconAction.vue";
    import WithIcon from "./PubButtonGroup/WithIcon.vue";
</script>

# PubButtonGroup

## Default Usage

<demo-container>
  <DefaultBtnGrp/>
</demo-container>

<<< @/components/PubButtonGroup/DefaultBtnGrp.vue

## Rounded Button Group

<demo-container>
  <RoundedBtnGrp/>
</demo-container>

<<< @/components/PubButtonGroup/RoundedBtnGrp.vue

## Button Group Icon Action

<demo-container>
  <IconAction/>
</demo-container>

<<< @/components/PubButtonGroup/IconAction.vue

## Button Group Icons

<demo-container>
  <WithIcon/>
</demo-container>

<<< @/components/PubButtonGroup/WithIcon.vue

## Reference

### Properties

| Name | Type | Default | Description | Options |
| :--- | :--- | :--- | :--- | :--- |
| rounded | Boolean | `false` | Whether to apply rounded corners to the button group. |  |

### Slots

| Name | Description |
| ---- | ----------- |
| default | Default slot for buttons |
