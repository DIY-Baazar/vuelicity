<template>
    <pub-badge>
        <template #icon>
            <pub-icon name="sun" />
        </template>
    </pub-badge>
    <pub-badge color="grey">
        <template #icon>
            <pub-icon name="sun" size="xs" />
        </template>
    </pub-badge>
</template>

<script lang="ts" setup>
import { PubBadge, PubIcon } from "vuelicity";
</script>