<script lang="ts" setup>
import type { ButtonGroupProps } from "./types";

const props = withDefaults(defineProps<ButtonGroupProps>(
), {
    rounded: false,
});
</script>

<template>
    <div class="pub-button-group inline-flex" :class="{ 'rounded-md': props.rounded }" role="group">
        <slot />
    </div>
</template>

<style>
@reference "@/styles/main.css";

.pub-button-group.rounded-md>button {
    @apply rounded-none;
}

.pub-button-group.rounded-md>button:first-child {
    @apply rounded-l-lg;
}

.pub-button-group.rounded-md>button:last-child {
    @apply rounded-r-lg;
}
</style>