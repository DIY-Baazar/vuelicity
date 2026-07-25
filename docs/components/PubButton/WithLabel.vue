<template>
    <pub-button color="blue" size="sm">
        <pub-badge color="light" class="w-4 h-4" rounded>5</pub-badge>
        Messages
    </pub-button>
    <pub-button color="yellow" size="sm">
        Go to Cart
        <pub-badge color="light" class="w-4.5 h-4.5" rounded>9+</pub-badge>
    </pub-button>
</template>

<script lang="ts" setup>
import { PubButton, PubBadge } from "vuelicity";
</script>