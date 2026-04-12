<script lang="ts" setup>
import { computed, inject, onMounted, ref, toRefs } from "vue";
import type { AccordionContentProps, AccordionPanelState, AccordionState } from "./types";
import { useAccordionContentClasses } from "./utils";

const props = withDefaults(defineProps<AccordionContentProps>(), {
    class: "",
    activeClass: ""
});

const panelId = inject<string>("panelId")!;

const accordionState = ref();
const accordionPanelState = computed(() =>
    accordionState.value?.panels.find((panel: AccordionPanelState) => panel.id === panelId)
);

const { contentClasses } = useAccordionContentClasses(accordionState, accordionPanelState, toRefs(props));

onMounted(() => {
    const { accordionState: newAccordionState } = inject<{ accordionState: AccordionState }>("accordionState")!;
    accordionState.value = newAccordionState;
});
</script>

<template>
    <div :class="['pub-accordion-content', contentClasses]" ref="contentRef">
        <slot />
    </div>
</template>
