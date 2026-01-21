<script lang="ts" setup>
import { computed, toRefs } from "vue";

interface PubButtonGroupProps {
    rounded?: boolean;
}

const props = withDefaults(defineProps<PubButtonGroupProps>(
), {
    rounded: false,
})
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