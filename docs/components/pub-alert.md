---
title: PubAlert
description: Documentation for the PubAlert component.
---

<script setup>
    import DefaultAlert from './PubAlert/DefaultAlert.vue';
    import WithIcon from './PubAlert/WithIcon.vue';
    import BorderedAlert from './PubAlert/BorderedAlert.vue';
    import WithList from './PubAlert/WithList.vue';
    import AccentedAlert from './PubAlert/AccentedAlert.vue';
    import DismissibleAlert from './PubAlert/DismissibleAlert.vue';
    import AdditionalAlert from './PubAlert/AdditionalAlert.vue';
    import AnnouncementAlert from './PubAlert/AnnouncementAlert.vue';
</script>

# PubAlert

This is an alert component that can be used to display content in an alert. It provides various options for customizing the alert, such as adding a border, shadow, and rounded corners.

## Default alerts

### Prop - `color` Usage

There are a number of themes available for the alert, including `'blue'`, `'red'`, `'yellow'`, `'green'`, `'dark'`. Below is a demo of each color.

<demo-container>
    <DefaultAlert />
</demo-container>

<<< @/components/PubAlert/DefaultAlert.vue

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
    <BorderedAlert />
</demo-container>

<<< @/components/PubAlert/BorderedAlert.vue

## Alerts with list

<demo-container>
    <WithList />
</demo-container>

<<< @/components/PubAlert/WithList.vue

## Border accent

<demo-container>
    <AccentedAlert />
</demo-container>

<<< @/components/PubAlert/AccentedAlert.vue

## Dismissible alerts

<demo-container>
    <DismissibleAlert />
</demo-container>

<<< @/components/PubAlert/DismissibleAlert.vue

## Additional content

<demo-container>
    <AdditionalAlert />
</demo-container>

<<< @/components/PubAlert/AdditionalAlert.vue

## Announcements alerts

<demo-container>
    <AnnouncementAlert />
</demo-container>

<<< @/components/PubAlert/AnnouncementAlert.vue

## Reference

### Properties

| Name        | Type    | Default  | Description                                | Options                                                                  |
| :---------- | :------ | :------- | :----------------------------------------- | :----------------------------------------------------------------------- |
| color       | String  | `'blue'` | The color color of the alert.              | `'blue'`, `'red'`, `'yellow'`, `'green'`, `'purple'`, `'pink'`, `'grey'` |
| dismissible | Boolean | `false`  | Whether the alert is dismissible.          |                                                                          |
| bordered    | Boolean | `false`  | Whether to add a border to the alert.      |                                                                          |
| showIcon    | Boolean | `false`  | Whether to display an icon in the alert.   |                                                                          |
| duration    | Number  | `5000`   | The duration of the alert in milliseconds. |                                                                          |

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
