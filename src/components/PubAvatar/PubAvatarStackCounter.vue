<template>
    <a
        class="relative flex size-10 items-center justify-center rounded-full border-2 border-white bg-gray-700 text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800"
        :href="href"
        >+{{ total }}</a
    >
</template>

<script setup lang="ts">
import type { AvatarStackCounterProps } from "./types";

const props = withDefaults(defineProps<AvatarStackCounterProps>(), {
    total: 1,
    href: "#"
});
</script>
