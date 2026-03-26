<template>
    <pub-badge theme="blue">
        <template #icon>
            <pub-icon name="sun" aschild />
        </template>
    </pub-badge>
    <pub-badge theme="dark">
        <template #icon>
            <pub-icon name="sun" size="xs" aschild />
        </template>
    </pub-badge>
</template>

<script setup>
import { PubBadge, PubIcon } from "vuelicity";
</script>