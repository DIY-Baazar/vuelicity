<script lang="ts" setup>
import { toRefs, provide, useId, reactive } from "vue";
import type { AccordionPanelState, AccordionProps } from "./types";
import { useAccordionClasses } from "./utils";

const props = withDefaults(defineProps<AccordionProps>(), {
    class: "",
    collapsed: false,
    flushed: false,
    persistent: false
});

const { accordionClasses } = useAccordionClasses(toRefs(props));

const accordionId = useId();
const accordionState = reactive({
    ...props,
    id: accordionId,
    panels: [] as AccordionPanelState[]
});

const registerPanel = (panel: AccordionPanelState) => {
    accordionState.panels.push(panel);
}

provide("accordionState", { accordionState, registerPanel });
</script>

<template>
    <div :class="['pub-accordion', accordionClasses]" :data-accordion-id="accordionId">
        <slot />
    </div>
</template>
