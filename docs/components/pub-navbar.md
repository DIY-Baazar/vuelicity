---
title: PubNavbar
description: Documentation for the PubNavbar component.
---

<script setup>
import Default from './PubNavbar/Default.vue';
import Solid from './PubNavbar/Solid.vue';
import WithCTA from './PubNavbar/WithCTA.vue';
</script>

# PubNavbar

This is a navbar component which can be used to display a navigation menu in a header. It can be customized with various styles and features such as sticky behavior, rounded corners, and a solid background. Additionally, it can include a logo, a menu icon for mobile view, and a dropdown menu for larger screens.

## Default Usage

<demo-container>
  <Default/>
</demo-container>

<<< @/components/PubNavbar/Default.vue

## Solid background

<demo-container>
  <Solid/>
</demo-container>

<<< @/components/PubNavbar/Solid.vue

<!-- ## Navbar with dropdown

## Multi-level dropdown

## Sticky navbar

## Navbar with submenu

## Navbar with search -->

## Navbar with action button

<demo-container>
    <WithCTA/>
</demo-container>

<<< @/components/PubNavbar/WithCTA.vue

<!-- ## Language dropdown

## User menu dropdown -->

## Reference

### Properties

| Name | Type | Default | Description | Options |
| :--- | :--- | :--- | :--- | :--- |
| class | String | `''` | Additional CSS classes to apply. | |
| containerClass | String | `''` | Additional CSS classes to apply to the container. | |
| sticky | Boolean | `false` | Whether the navbar should be sticky. |  |
| rounded | Boolean | `false` | Whether the navbar should have rounded corners. |  |
| solid | Boolean | `false` | Whether the navbar should have a solid background. |  |
| theme | String | `'default'` | The theme of the navbar. | `'default'`, `'light'`, `'dark'` |

### Slots

| Name | Description |
| ---- | ----------- |
| logo | Slot for the logo. |
| menu-icon | Slot for the menu icon (mobile view). |
| default | Default slot for navbar content. |
| right-side | Slot for content on the right side of the navbar. |

