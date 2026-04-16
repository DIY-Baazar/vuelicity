---
title: PubAvatar
description: Documentation for the PubAvatar component.
---

<script setup>
    import Default from './PubAvatar/Default.vue';
    import Bordered from './PubAvatar/Bordered.vue';
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
