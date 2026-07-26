---
title: PubBreadcrumb
description: Documentation for the PubBreadcrumb component.
---

<script setup>
    import DefaultBreadcrumb from './PubBreadcrumb/DefaultBreadcrumb.vue';
    import SolidBreadcrumb from './PubBreadcrumb/SolidBreadcrumb.vue';
    import CustomBreadcrumb from './PubBreadcrumb/CustomBreadcrumb.vue';
</script>

# PubBreadcrumb

This is a component for displaying a breadcrumb navigation. It provides a list of links to navigate between different pages or sections of a website.

## Default breadcrumb

<demo-container>
    <DefaultBreadcrumb />
</demo-container>

<<< @/components/PubBreadcrumb/DefaultBreadcrumb.vue

## Solid breadcrumb

### Prop - `solid` Usage

The `solid` prop can be used to change the background color of the breadcrumb.

<demo-container>
    <SolidBreadcrumb />
</demo-container>

<<< @/components/PubBreadcrumb/SolidBreadcrumb.vue

## Custom Icons

### Slot - `arrow-icon` and `home-icon` Usage

The `arrow-icon` and `home-icon` slots can be used to customize the icons used in the breadcrumb.

<demo-container>
    <CustomBreadcrumb />
</demo-container>

<<< @/components/PubBreadcrumb/CustomBreadcrumb.vue

## Reference

### PubBreadcrumb

#### Properties

| Name  | Type    | Default | Description                                            | Options |
| :---- | :------ | :------ | :----------------------------------------------------- | :------ |
| solid | Boolean | `false` | Whether the breadcrumb should have a solid background. |         |

#### Slots

| Name    | Description                              |
| ------- | ---------------------------------------- |
| default | Slot for `PubBreadcrumbItem` components. |

### PubBreadcrumbItem

#### Properties

| Name | Type    | Default | Description                                      | Options |
| :--- | :------ | :------ | :----------------------------------------------- | :------ |
| href | String  | `null`  | The URL to navigate to when the link is clicked. |         |
| home | Boolean | `false` | The icon to display next to the link text.       |         |

#### Slots

| Name       | Description              |
| :--------- | :----------------------- |
| default    | Slot for the link text.  |
| home-icon  | Slot for the home icon.  |
| arrow-icon | Slot for the arrow icon. |
