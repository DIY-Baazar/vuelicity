---
title: PubBreadcrumb
description: Documentation for the PubBreadcrumb component.
---

<script setup>
    import Default from './PubBreadcrumb/Default.vue';
    import Solid from './PubBreadcrumb/Solid.vue';
    import Custom from './PubBreadcrumb/Custom.vue';
</script>

# PubBreadcrumb

This is a component for displaying a breadcrumb navigation. It provides a list of links to navigate between different pages or sections of a website.

## Default breadcrumb

<demo-container>
    <Default />
</demo-container>

<<< @/components/PubBreadcrumb/Default.vue

## Solid breadcrumb

### Prop - `solid` Usage

The `solid` prop can be used to change the background color of the breadcrumb.

<demo-container>
    <Solid />
</demo-container>

<<< @/components/PubBreadcrumb/Solid.vue

## Custom Icons

### Slot - `arrow-icon` and `home-icon` Usage

The `arrow-icon` and `home-icon` slots can be used to customize the icons used in the breadcrumb.

<demo-container>
    <Custom />
</demo-container>

<<< @/components/PubBreadcrumb/Custom.vue

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
