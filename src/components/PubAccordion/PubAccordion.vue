<script lang="ts" setup>
import { toRefs, provide } from "vue";
import type { AccordionProps } from "./types";
import { useAccordionClasses } from "./utils";

const props = withDefaults(defineProps<AccordionProps>(), {
    class: "",
    collapsed: false,
    flushed: false,
    persistent: false
});

const { accordionClasses } = useAccordionClasses(toRefs(props));

const accordionId = Math.random().toString(36).slice(2);

provide("accordionState", {
    accordionState: {
        ...props,
        id: accordionId,
        panels: []
    }
});
</script>

<template>
    <div :class="['pub-accordion', accordionClasses]" :data-accordion-id="accordionId">
        <slot />
    </div>
</template>
