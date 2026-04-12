---
title: PubAccordion
description: Documentation for the PubAccordion component.
---

<script setup>
import Default from './PubAccordion/Default.vue';
import Persistent from './PubAccordion/Persistent.vue';
import Flushed from './PubAccordion/Flushed.vue';
</script>

# PubAccordion

This is an accordion component that can be used to display content in an accordion. It provides various options for customizing the accordion, such as adding a border, shadow, and rounded corners.

## Default accordion

<demo-container>
    <Default />
</demo-container>

<<< @/components/PubAccordion/Default.vue

## Persistent accordion

### Prop - `persistent` Usage

<demo-container>
    <Persistent />
</demo-container>

<<< @/components/PubAccordion/Persistent.vue

## Flushed accordion

### Prop - `flushed` Usage

<demo-container>
    <Flushed />
</demo-container>

<<< @/components/PubAccordion/Flushed.vue

## Reference

### Properties

#### PubAccordion

| Name       | Type    | Default | Description                                                         | Options |
| :--------- | :------ | :------ | :------------------------------------------------------------------ | :------ |
| flushed    | Boolean | `false` | Whether to remove the default background-color and rounded corners. |         |
| persistent | Boolean | `false` | Whether to keep the items open when another item is clicked.        |         |
| collapsed  | Boolean | `false` | Whether to collapse the accordion to the first open item.           |         |
| class      | String  | `''`    | Additional CSS classes to apply.                                    |         |

#### PubAccordionPanel

| Name        | Type   | Default | Description                                          | Options |
| :---------- | :----- | :------ | :--------------------------------------------------- | :------ |
| activeClass | String | `''`    | Additional CSS classes to apply to the active panel. |         |

#### PubAccordionHeader

| Name        | Type   | Default | Description                                          | Options |
| :---------- | :----- | :------ | :--------------------------------------------------- | :------ |
| activeClass | String | `''`    | Additional CSS classes to apply to the active panel. |         |
| class       | String | `''`    | Additional CSS classes to apply.                     |         |

### Slots

#### PubAccordion

| Name    | Description                              |
| ------- | ---------------------------------------- |
| default | Slot for `PubAccordionPanel` components. |

#### PubAccordionPanel

| Name    | Description                                                         |
| ------- | ------------------------------------------------------------------- |
| default | Slot for `PubAccordionHeader` and `PubAccordionContent` components. |

#### PubAccordionHeader

| Name    | Description                                |
| ------- | ------------------------------------------ |
| default | The header content of the accordion panel. |

#### PubAccordionContent

| Name    | Description                              |
| ------- | ---------------------------------------- |
| default | The body content of the accordion panel. |
