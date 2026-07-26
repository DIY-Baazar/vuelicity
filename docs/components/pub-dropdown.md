---
title: PubDropdown
description: Documentation for the PubDropdown component.
---

<script setup>
    import DefaultDropdown from "./PubDropdown/DefaultDropdown.vue";
    import PlacementDropdown from "./PubDropdown/PlacementDropdown.vue";
    import AlignmentDropdown from "./PubDropdown/AlignmentDropdown.vue";
    import OffsetDistance from "./PubDropdown/OffsetDistance.vue";
    import OffsetSkidding from "./PubDropdown/OffsetSkidding.vue";
    import DisabledDropdown from "./PubDropdown/DisabledDropdown.vue";
    import ColouredTriggers from "./PubDropdown/ColouredTriggers.vue";
    import CustomTrigger from "./PubDropdown/CustomTrigger.vue";
</script>

# PubDropdown

## Default Dropdown

<demo-container>
    <DefaultDropdown/>
</demo-container>

<<< @/components/PubDropdown/DefaultDropdown.vue

## Dropdown Placement

### Prop - `placement` Usage

The `placement` prop is used to specify the placement of the dropdown relative to the button.

<demo-container>
    <PlacementDropdown />
</demo-container>

```vue
<template>
    <pub-dropdown placement="top" text="Top">
        <nav class="py-2 text-sm text-grey-700">
            <a href="#" class="block px-4 py-2 hover:bg-grey-100"> Dashboard </a>
            <a href="#" class="block px-4 py-2 hover:bg-grey-100"> Settings </a>
            <a href="#" class="block px-4 py-2 hover:bg-grey-100"> Earnings </a>
            <a href="#" class="block px-4 py-2 hover:bg-grey-100"> Sign out </a>
        </nav>
    </pub-dropdown>

    <pub-dropdown placement="right" text="Right">
        <nav class="py-2 text-sm text-grey-700">...</nav>
    </pub-dropdown>

    <pub-dropdown text="Bottom">
        <nav class="py-2 text-sm text-grey-700">...</nav>
    </pub-dropdown>

    <pub-dropdown placement="left" text="Left">
        <nav class="py-2 text-sm text-grey-700">...</nav>
    </pub-dropdown>
</template>

<script setup>
    import { PubDropdown } from "vuelicity";
</script>
```

## Dropdown Alignment

### Prop - `alignToEnd` Usage

The `alignToEnd` prop is used to align the dropdown to the end of the button.

<demo-container>
    <AlignmentDropdown />
</demo-container>

```vue
<template>
    <pub-dropdown align-to-end placement="top" text="Top">
        <nav class="py-2 text-sm text-grey-700">
            <a href="#" class="block px-4 py-2 hover:bg-grey-100"> Dashboard </a>
            <a href="#" class="block px-4 py-2 hover:bg-grey-100"> Settings </a>
            <a href="#" class="block px-4 py-2 hover:bg-grey-100"> Earnings </a>
            <a href="#" class="block px-4 py-2 hover:bg-grey-100"> Sign out </a>
        </nav>
    </pub-dropdown>

    <pub-dropdown align-to-end placement="right" text="Right">
        <nav class="py-2 text-sm text-grey-700">...</nav>
    </pub-dropdown>

    <pub-dropdown align-to-end text="Bottom">
        <nav class="py-2 text-sm text-grey-700">...</nav>
    </pub-dropdown>

    <pub-dropdown align-to-end placement="left" text="Left">
        <nav class="py-2 text-sm text-grey-700">...</nav>
    </pub-dropdown>
</template>

<script setup>
    import { PubDropdown } from "vuelicity";
</script>
```

## Dropdown Offset

### Prop - `offset-distance` Usage

The `offset-distance` prop is used to specify the distance between the button and the dropdown.

<demo-container>
    <OffsetDistance />
</demo-container>

<<< @/components/PubDropdown/OffsetDistance.vue

### Prop - `offset-skidding` Usage

The `offset-skidding` prop is used to specify the skidding between the button and the dropdown.

<demo-container>
    <OffsetSkidding />
</demo-container>

<<< @/components/PubDropdown/OffsetSkidding.vue

## Disabled Dropdown

### Prop - `disabled` Usage

The `disabled` prop can be used to disable the dropdown.

<demo-container>
    <DisabledDropdown />
</demo-container>

<<< @/components/PubDropdown/DisabledDropdown.vue

## Dropdown - coloured triggers

### Prop - `color` Usage

The `color` prop can be used to change the color of the dropdown trigger.

<demo-container>
    <ColouredTriggers />
</demo-container>

```vue
<template>
    <pub-dropdown text="Red" color="red">
        <nav class="py-2 text-sm text-grey-700">...</nav>
    </pub-dropdown>
    <pub-dropdown text="Blue">
        <nav class="py-2 text-sm text-grey-700">...</nav>
    </pub-dropdown>
    <pub-dropdown text="Green" color="green">
        <nav class="py-2 text-sm text-grey-700">...</nav>
    </pub-dropdown>
    <pub-dropdown text="Yellow" color="yellow">
        <nav class="py-2 text-sm text-grey-700">...</nav>
    </pub-dropdown>
    <pub-dropdown text="Pink" color="pink">
        <nav class="py-2 text-sm text-grey-700">...</nav>
    </pub-dropdown>
    <pub-dropdown text="Cyan" color="cyan">
        <nav class="py-2 text-sm text-grey-700">...</nav>
    </pub-dropdown>
</template>

<script setup>
    import { PubDropdown } from "vuelicity";
</script>
```

## Dropdown - custom trigger

### Slot - `trigger` Usage

The `trigger` slot can be used to customize the dropdown trigger.

<demo-container>
    <CustomTrigger />
</demo-container>

<<< @/components/PubDropdown/CustomTrigger.vue

## Reference

### Properties

| Name                | Type    | Default     | Description                                                     | Options                                                                                                   |
| :------------------ | :------ | :---------- | :-------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------- |
| text                | String  | `''`        | The text to display on the dropdown button.                     |                                                                                                           |
| color               | String  | `'default'` | The color color of the dropdown trigger.                        | `'none'`, `'default'`, `'blue'`, `'red'`, `'green'`, `'yellow'`, `'pink'`, `'cyan'`, `'purple'`, `'grey'` |
| placement           | String  | `'bottom'`  | The placement of the dropdown relative to the trigger.          | `'top'`, `'right'`, `'bottom'`, `'left'`                                                                  |
| alignToEnd          | Boolean | `false`     | Whether to align the dropdown to the end of the trigger.        |                                                                                                           |
| disabled            | Boolean | `false`     | Whether the dropdown is disabled.                               |                                                                                                           |
| class               | String  | `''`        | Additional CSS classes to apply to the wrapper.                 |                                                                                                           |
| triggerClass        | String  | `''`        | Additional CSS classes to apply to the trigger button.          |                                                                                                           |
| triggerWrapperClass | String  | `''`        | Additional CSS classes to apply to the trigger wrapper.         |                                                                                                           |
| dropdownClass       | String  | `''`        | Additional CSS classes to apply to the dropdown container.      |                                                                                                           |
| contentWrapperClass | String  | `''`        | Additional CSS classes to apply to the content wrapper.         |                                                                                                           |
| duration            | Number  | `250`       | The duration of the dropdown animation in milliseconds.         |                                                                                                           |
| offsetDistance      | Number  | `8`         | The distance between the trigger and the dropdown.              |                                                                                                           |
| offsetSkidding      | Number  | `0`         | The displacement along the trigger button.                      |                                                                                                           |
| isActive            | Boolean | `false`     | Whether the dropdown is currently active.                       |                                                                                                           |
| type                | String  | `'button'`  | The type of the dropdown trigger.                               | `'button'`, `'navlink'`                                                                                   |
| closeInside         | Boolean | `false`     | Whether to close the dropdown when clicking inside the content. |                                                                                                           |

### Slots

| Name    | Description                                     |
| ------- | ----------------------------------------------- |
| default | The content of the dropdown menu.               |
| trigger | Slot to customize the dropdown trigger element. |

### Events

| Name   | Description                           |
| ------ | ------------------------------------- |
| toggle | Emitted when the dropdown is toggled. |
