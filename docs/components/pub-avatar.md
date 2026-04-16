---
title: PubAvatar
description: Documentation for the PubAvatar component.
---

<script setup>
    import Default from './PubAvatar/Default.vue';
    import Bordered from './PubAvatar/Bordered.vue';
    import PlaceholderIcon from './PubAvatar/PlaceholderIcon.vue';
    import PlaceholderInitials from './PubAvatar/PlaceholderInitials.vue';
    import AltPlaceholder from './PubAvatar/AltPlaceholder.vue';
    import DotStatus from './PubAvatar/DotStatus.vue';
    import DotStatusPos from './PubAvatar/DotStatusPos.vue';
</script>

# PubAvatar

This is an avatar component that can be used to display a user's profile picture. It provides various options for customizing the avatar, such as adding a border, shadow, and rounded corners.

## Default avatar

<demo-container flex-type='col'>
    <Default />
</demo-container>

<<< @/components/PubAvatar/Default.vue

## Bordered avatar

### Prop - `bordered` Usage

The `bordered` prop can be used to add a border to the avatar.

<demo-container flex-type='col'>
    <Bordered />
</demo-container>

<<< @/components/PubAvatar/Bordered.vue

## Placeholder icon

<demo-container flex-type='col'>
    <PlaceholderIcon />
</demo-container>

<<< @/components/PubAvatar/PlaceholderIcon.vue

## Placeholder initials

### Prop - `initials` Usage

The `initials` prop can be used to display the initials of the user.

<demo-container flex-type='col'>
    <PlaceholderInitials />
</demo-container>

<<< @/components/PubAvatar/PlaceholderInitials.vue

## Alternate placeholder icon

### Slot - `placeholder` Usage

The `placeholder` slot can be used to display a custom placeholder icon.

<demo-container flex-type='col'>
    <AltPlaceholder />
</demo-container>

<<< @/components/PubAvatar/AltPlaceholder.vue

## Dot indicator

### Prop - `status` Usage

<demo-container flex-type='col'>
    <DotStatus />
</demo-container>

<<< @/components/PubAvatar/DotStatus.vue

## Dot indicator position

### Prop - `statusPosition` Usage

The `statusPosition` prop can be used to adjust the position of the dot indicator.

<demo-container flex-type='col'>
    <DotStatusPos />
</demo-container>

<<< @/components/PubAvatar/DotStatusPos.vue
