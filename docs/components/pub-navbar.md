---
title: PubNavbar
description: Documentation for the PubNavbar component.
---

<script setup>
import Default from './PubNavbar/Default.vue';
import Solid from './PubNavbar/Solid.vue';
import WithCTA from './PubNavbar/WithCTA.vue';
import WithDropdown from './PubNavbar/WithDropdown.vue';
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

## Navbar with dropdown

<demo-container>
    <WithDropdown/>
</demo-container>

<<< @/components/PubNavbar/WithDropdown.vue

<!--

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

### PubNavbar

#### Properties

| Name           | Type    | Default     | Description                                        | Options                          |
| :------------- | :------ | :---------- | :------------------------------------------------- | :------------------------------- |
| class          | String  | `''`        | Additional CSS classes to apply.                   |                                  |
| containerClass | String  | `''`        | Additional CSS classes to apply to the container.  |                                  |
| sticky         | Boolean | `false`     | Whether the navbar should be sticky.               |                                  |
| rounded        | Boolean | `false`     | Whether the navbar should have rounded corners.    |                                  |
| solid          | Boolean | `false`     | Whether the navbar should have a solid background. |                                  |
| theme          | String  | `'default'` | The theme of the navbar.                           | `'default'`, `'light'`, `'dark'` |

#### Slots

| Name       | Description                                       |
| ---------- | ------------------------------------------------- |
| logo       | Slot for the logo.                                |
| menu-icon  | Slot for the menu icon (mobile view).             |
| default    | Default slot for navbar content.                  |
| right-side | Slot for content on the right side of the navbar. |

### PubNavbarLogo

#### Properties

| Name     | Type   | Default  | Description                                      | Options                |
| -------- | :----- | :------- | :----------------------------------------------- | :--------------------- |
| link     | String | `''`     | The URL to navigate to when the logo is clicked. |                        |
| imageUrl | String | `''`     | The URL of the logo image.                       |                        |
| alt      | String | `''`     | Alternative text for the logo image.             |                        |
| as       | String | `'a'`    | The HTML element to use for the logo.            | `'a'`, `'router-link'` |
| linkAttr | String | `'href'` | The attribute to use for the link.               | `'href'`, `'to'`       |

#### Slots

| Name    | Description                    |
| ------- | ------------------------------ |
| default | Default slot for logo content. |

### PubNavbarCollapse

#### Properties

| Name       | Type    | Default | Description                       | Options |
| ---------- | :------ | :------ | :-------------------------------- | :------ |
| class      | String  | `''`    | Additional CSS classes to apply.  |         |
| isShowMenu | Boolean | `false` | Whether the menu should be shown. |         |

#### Slots

| Name    | Description                    |
| ------- | ------------------------------ |
| default | Default slot for menu content. |

### PubNavbarLink

#### Properties

| Name     | Type    | Default  | Description                                      | Options           |
| -------- | :------ | :------- | :----------------------------------------------- | :---------------- |
| link     | String  | `''`     | The URL to navigate to when the link is clicked. |                   |
| as       | String  | `'a'`    | The HTML element to use for the link.            | `'a'`, `'button'` |
| linkAttr | String  | `'href'` | The attribute to use for the link.               | `'href'`, `'to'`  |
| isActive | Boolean | `false`  | Whether the link is active.                      |                   |
| disabled | Boolean | `false`  | Whether the link is disabled.                    |                   |
| class    | String  | `''`     | Additional CSS classes to apply.                 |                   |

#### Slots

| Name    | Description                    |
| ------- | ------------------------------ |
| default | Default slot for link content. |
