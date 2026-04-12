<script lang="ts" setup>
import { computed, inject, onMounted, ref, toRefs } from "vue";
import type { AccordionHeaderProps, AccordionPanel, AccordionPanelState, AccordionState } from "./types";
import { useAccordionHeaderClasses } from "./utils";
import PubIcon from "@/components/PubIcon/PubIcon.vue";

const props = withDefaults(defineProps<AccordionHeaderProps>(), {
    activeClass: "",
    class: ""
});

const panelId = inject<string>("panelId")!;

const accordionState = ref();

const accordionPanelState = computed(() =>
    accordionState.value?.panels.find((panel: AccordionPanel) => panel.id === panelId)
);

const { wrapperClasses, actionClasses } = useAccordionHeaderClasses(accordionState, accordionPanelState, toRefs(props));

onMounted(() => {
    const { accordionState: newAccordionState } = inject<{ accordionState: AccordionState }>("accordionState")!;
    accordionState.value = newAccordionState;
});

const togglePanel = () => {
    if (!accordionPanelState.value) return;
    
    if (accordionState.value.persistent) {
        accordionPanelState.value.isVisible = !accordionPanelState.value.isVisible;
        return;
    }

    const currentPanelVisibility = accordionPanelState.value.isVisible;
    accordionState.value.panels.forEach((panel: AccordionPanel) => {
        if (panel.id === panelId) {
            panel.isVisible = !currentPanelVisibility;
        } else {
            panel.isVisible = false;
        }
    });
};
</script>

<template>
    <div class="pub-accordion-header">
        <button type="button" :class="wrapperClasses" @click="togglePanel">
            <slot />
            <pub-icon name="chevron-down" :class="actionClasses" />
        </button>
    </div>
</template>
