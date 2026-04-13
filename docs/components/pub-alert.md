---
title: PubAlert
description: Documentation for the PubAlert component.
---

<script setup>
    import Default from './PubAlert/Default.vue';
    import WithIcon from './PubAlert/WithIcon.vue';
    import Bordered from './PubAlert/Bordered.vue';
    import WithList from './PubAlert/WithList.vue';
    import Accented from './PubAlert/Accented.vue';
    import Dismissible from './PubAlert/Dismissible.vue';
    import Additional from './PubAlert/Additional.vue';
    import Announcement from './PubAlert/Announcement.vue';
</script>

# PubAlert

This is an alert component that can be used to display content in an alert. It provides various options for customizing the alert, such as adding a border, shadow, and rounded corners.

## Default alerts

### Prop - `theme` Usage

There are a number of themes available for the alert, including `'blue'`, `'red'`, `'yellow'`, `'green'`, `'dark'`. Below is a demo of each theme.

<demo-container>
    <Default />
</demo-container>

<<< @/components/PubAlert/Default.vue

## Alerts with icon

### Prop - `showIcon` Usage

The `showIcon` prop can be used to display an icon in the alert.

<demo-container>
    <WithIcon />
</demo-container>

<<< @/components/PubAlert/WithIcon.vue

## Bordered alerts

### Prop - `bordered` Usage

The `bordered` prop can be used to add a border to the alert.

<demo-container>
    <Bordered />
</demo-container>

<<< @/components/PubAlert/Bordered.vue

## Alerts with list

<demo-container>
    <WithList />
</demo-container>

<<< @/components/PubAlert/WithList.vue

## Border accent

<demo-container>
    <Accented />
</demo-container>

<<< @/components/PubAlert/Accented.vue

## Dismissible alerts

<demo-container>
    <Dismissible />
</demo-container>

<<< @/components/PubAlert/Dismissible.vue

## Additional content

<demo-container>
    <Additional />
</demo-container>

<<< @/components/PubAlert/Additional.vue

## Announcements alerts

<demo-container>
    <Announcement />
</demo-container>

<<< @/components/PubAlert/Announcement.vue

## Reference

### Properties

| Name        | Type    | Default  | Description                                | Options                                            |
| :---------- | :------ | :------- | :----------------------------------------- | :------------------------------------------------- |
| theme       | String  | `'blue'` | The color theme of the alert.              | `'blue'`, `'red'`, `'yellow'`, `'green'`, `'dark'` |
| dismissible | Boolean | `false`  | Whether the alert is dismissible.          |                                                    |
| bordered    | Boolean | `false`  | Whether to add a border to the alert.      |                                                    |
| showIcon    | Boolean | `false`  | Whether to display an icon in the alert.   |                                                    |
| duration    | Number  | `5000`   | The duration of the alert in milliseconds. |                                                    |

### Slots

| Name         | Description                     |
| ------------ | ------------------------------- |
| default      | The main content of the alert.  |
| icon         | Slot for a custom icon.         |
| close-button | Slot for a custom close button. |
| title        | Slot for a custom title.        |

### Events

| Name  | Description                       |
| ----- | --------------------------------- |
| close | Emitted when the alert is closed. |
