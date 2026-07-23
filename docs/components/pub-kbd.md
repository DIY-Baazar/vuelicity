---
title: PubKbd
description: Documentation for the PubKbd component.
---
<script setup>
    import Default from './PubKbd/Default.vue';
    import InText from './PubKbd/InText.vue';
    import InsideTable from './PubKbd/InsideTable.vue';
</script>

# PubKbd

## Default KBD

<demo-container>
    <Default/>
</demo-container>

<<< @/components/PubKbd/Default.vue

## KBD Inside Text

<demo-container>
    <InText/>
</demo-container>

<<< @/components/PubKbd/InText.vue

## KBD Inside a Table

<demo-container>
    <InsideTable/>
</demo-container>

<<< @/components/PubKbd/InsideTable.vue

## Reference

### Properties

| Name  | Type | Default | Description | Options |
| :---- | :--- | :------ | :---------- | :------ |
| class |      |         |             |         |

### Slots

| Name    | Description |
| ------- | ----------- |
| default |             |
| icon    |             |
