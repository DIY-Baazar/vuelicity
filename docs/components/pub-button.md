---
title: PubButton Component
---

<script setup>
import Basic from './demo/PubButton/Basic.vue';
</script>

# PubButton

This is a button component.

## Example Usage

<demo-container>
  <basic/>
</demo-container>

<<< @/components/demo/PubButton/Basic.vue

## Reference

### Properties

| Name | Type   | Default | Description    |Options|
| ---- | ------ | ------- | -------------- | --- |
| theme  | string | `primary`    | Color Theme |`none`, `default`, `primary`, `secondary`, `tertiary`, `danger`, `warning`, `success`, `info`, `primary-outline`, `secondary-outline`, `tertiary-outline`, `danger-outline`, `warning-outline`, `success-outline`, `info-outline`, `skeletal`|
| as | string | `button` | Element to render |`button`, `a`|
|type|string|`button`|Button type for input element|`button`, `submit`, `reset`|
|name|string|''|||

### Slots

| Name | Description |
| ---- | ----------- |
| default | Default slot |
