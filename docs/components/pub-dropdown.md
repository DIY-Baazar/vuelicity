---
title: PubDropdown
description: Documentation for the PubDropdown component.
---

<script setup>
    import Default from "./PubDropdown/Default.vue";
    import Alignment from "./PubDropdown/Alignment.vue";
</script>

# PubDropdown

## Default Dropdown

<demo-container>
    <Default/>
</demo-container>

<<< @/components/PubDropdown/Default.vue

## Dropdown Alignment

### Prop - `alignToEnd` and `placement` Usage

The `alignToEnd` prop is used to align the dropdown to the end of the button. The `placement` prop is used to specify the placement of the dropdown relative to the button.

<demo-container>
    <Alignment />
</demo-container>

<<< @/components/PubDropdown/Alignment.vue
