---
title: PubAlert
description: Documentation for the PubAlert component.
---

<script setup>
    import Default from './PubAlert/Default.vue';
    import WithIcon from './PubAlert/WithIcon.vue';
    import Bordered from './PubAlert/Bordered.vue';
    import WithList from './PubAlert/WithList.vue';
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

## Dismissible alerts

## Additional content

## Announcements alerts

## Reference
