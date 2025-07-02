---
title: PubButton Component
---

<script setup>
import Basic from './demo/PubButton/Basic.vue';
</script>

# PubButton

This is a button component.

## Example Usage

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/components/demo/PubButton/Basic.vue

## Reference

### Properties

| Name | Type   | Default | Description    |Options|
| ---- | ------ | ------- | -------------- | --- |
| theme  | string | `primary`    | Color Theme |`none`, `primary`, `secondary`, `tertiary`, `success`, `info`, `warning`, `danger`|
| as | string | `button` | Element to render |`button`, `a`, `div`|
|type|string|`button`|Button type for input element|`button`, `submit`, `reset`|
|name|string|''|||

### Slots

| Name | Description |
| ---- | ----------- |
| default | Default slot |
