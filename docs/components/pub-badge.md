---
title: PubBadge
description: Documentation for the PubBadge component.
---
<script setup>
import Default from './demo/PubBadge/Default.vue';
import Size from './demo/PubBadge/Size.vue';
</script>

# PubBadge

This is a badge component can be used to complement other elements such as buttons or text elements as a label or to show the count of a given data, such as the number of comments for an article or how much time has passed by since a comment has been made.

## Default badges

### Prop - `theme` Usage

The `theme` prop can be used to change the color of the badge.

<demo-container>
    <Default />
</demo-container>

<<< @/components/demo/PubBadge/Default.vue

## Large badges

### Prop - `size` Usage

The `size` prop can be used to change the size of the badge.

<demo-container>
    <Size />
</demo-container>

<<< @/components/demo/PubBadge/Size.vue