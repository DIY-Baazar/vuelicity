---
title: PubAccordion
description: Documentation for the PubAccordion component.
---

<script setup>
import DefaultAccordion from './PubAccordion/DefaultAccordion.vue';
import PersistentAccordion from './PubAccordion/PersistentAccordion.vue';
import FlushedAccordion from './PubAccordion/FlushedAccordion.vue';
import CollapsedAccordion from './PubAccordion/CollapsedAccordion.vue';
import ColouredAccordion from './PubAccordion/ColouredAccordion.vue';
</script>

# PubAccordion

This is an accordion component that can be used to display content in an accordion. It provides various options for customizing the accordion, such as adding a border, shadow, and rounded corners.

## Default accordion

<demo-container>
    <DefaultAccordion />
</demo-container>

<<< @/components/PubAccordion/DefaultAccordion.vue

## Persistent accordion

### Prop - `persistent` Usage

The `persistent` prop can be used to keep the items open when another item is clicked.

<demo-container>
    <PersistentAccordion />
</demo-container>

<<< @/components/PubAccordion/PersistentAccordion.vue

## Flushed accordion

### Prop - `flushed` Usage

The `flushed` prop can be used to remove the default background-color and rounded corners.

<demo-container>
    <FlushedAccordion />
</demo-container>

<<< @/components/PubAccordion/FlushedAccordion.vue

## Initially collapsed

### Prop - `collapsed` Usage

The `collapsed` prop can be used to collapse the accordion to the first open item.

<demo-container>
    <CollapsedAccordion />
</demo-container>

<<< @/components/PubAccordion/CollapsedAccordion.vue

## Colouring Options

<demo-container>
    <ColouredAccordion />
</demo-container>

<<< @/components/PubAccordion/ColouredAccordion.vue

## Reference

### PubAccordion

#### Properties

| Name       | Type    | Default | Description                                                         | Options |
| :--------- | :------ | :------ | :------------------------------------------------------------------ | :------ |
| flushed    | Boolean | `false` | Whether to remove the default background-color and rounded corners. |         |
| persistent | Boolean | `false` | Whether to keep the items open when another item is clicked.        |         |
| collapsed  | Boolean | `false` | Whether to collapse the accordion to the first open item.           |         |
| class      | String  | `''`    | Additional CSS classes to apply.                                    |         |

#### Slots

| Name    | Description                              |
| ------- | ---------------------------------------- |
| default | Slot for `PubAccordionPanel` components. |

### PubAccordionPanel

#### Properties

| Name        | Type   | Default | Description                                          | Options |
| :---------- | :----- | :------ | :--------------------------------------------------- | :------ |
| activeClass | String | `''`    | Additional CSS classes to apply to the active panel. |         |

#### Slots

| Name    | Description                                                         |
| ------- | ------------------------------------------------------------------- |
| default | Slot for `PubAccordionHeader` and `PubAccordionContent` components. |

#### Emits

| Name | Description                       |
| ---- | --------------------------------- |
| show | Emitted when the panel is shown.  |
| hide | Emitted when the panel is hidden. |

### PubAccordionHeader

#### Properties

| Name        | Type   | Default | Description                                          | Options |
| :---------- | :----- | :------ | :--------------------------------------------------- | :------ |
| activeClass | String | `''`    | Additional CSS classes to apply to the active panel. |         |
| class       | String | `''`    | Additional CSS classes to apply.                     |         |

#### Slots

| Name    | Description                                |
| ------- | ------------------------------------------ |
| default | The header content of the accordion panel. |

### PubAccordionContent

#### Properties

| Name        | Type   | Default | Description                                          | Options |
| :---------- | :----- | :------ | :--------------------------------------------------- | :------ |
| class       | String | `''`    | Additional CSS classes to apply.                     |         |
| activeClass | String | `''`    | Additional CSS classes to apply to the active panel. |         |

#### Slots

| Name    | Description                              |
| ------- | ---------------------------------------- |
| default | The body content of the accordion panel. |
