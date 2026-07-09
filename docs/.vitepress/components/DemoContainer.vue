<style lang="scss">
.vp-raw {
    border: 1px solid var(--vp-c-default-2);
    border-radius: 5px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;

    select {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 0.75rem center;
        background-size: 1.25em 1.25em;
    }
}
</style>

<template>
    <div :class="useMergeClasses([`vp-raw flex flex-${flexType} gap-3`, props.class])">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import { useMergeClasses } from "@/composables/useMergeClasses";

interface DCProps {
    flexType?: "col" | "row";
    class?: string;
}

const props = withDefaults(defineProps<DCProps>(), {
    flexType: "row",
    class: ""
});
</script>
