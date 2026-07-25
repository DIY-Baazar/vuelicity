---
title: PubKbd
description: Documentation for the PubKbd component.
---

<script setup>
    import DefaultKbd from './PubKbd/DefaultKbd.vue';
    import InText from './PubKbd/InText.vue';
    import InsideTable from './PubKbd/InsideTable.vue';
</script>

# PubKbd

This is a component for rendering keyboard shortcuts.

## Default KBD

<demo-container>
    <DefaultKbd/>
</demo-container>

<<< @/components/PubKbd/DefaultKbd.vue

## KBD Inside Text

KBD can be used inside text.

<demo-container>
    <InText/>
</demo-container>

<<< @/components/PubKbd/InText.vue

## KBD Inside a Table

KBD can be used inside a table.

<demo-container>
    <InsideTable/>
</demo-container>

<<< @/components/PubKbd/InsideTable.vue

## Reference

### Properties

| Name  | Type   | Default | Description                      | Options |
| :---- | :----- | :------ | :------------------------------- | :------ |
| class | String | `''`    | Additional CSS classes to apply. |

### Slots

| Name    | Description        |
| ------- | ------------------ |
| default | Slot for content.  |
| icon    | Slot for the icon. |
