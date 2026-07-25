<template>
    <pub-badge color="blue">
        <template #icon>
            <pub-icon name="sun" />
        </template>
    </pub-badge>
    <pub-badge color="dark">
        <template #icon>
            <pub-icon name="sun" size="xs" />
        </template>
    </pub-badge>
</template>

<script lang="ts" setup>
import { PubBadge, PubIcon } from "vuelicity";
</script>