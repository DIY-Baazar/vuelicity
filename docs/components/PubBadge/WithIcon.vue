<template>
    <pub-badge theme="light">
        <template #icon>
            <pub-icon name="sun" size="xs" />
        </template>
        Light
    </pub-badge>
    <pub-badge theme="dark">
        <template #icon>
            <pub-icon name="moon" type="outline" size="xs" />
        </template>
        Dark
    </pub-badge>
</template>

<script setup>
import { PubBadge, PubIcon } from "vuelicity";
</script>
