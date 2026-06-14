<style lang="scss">
.vp-raw {
    border: 1px solid var(--vp-c-default-2);
    border-radius: 5px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
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
