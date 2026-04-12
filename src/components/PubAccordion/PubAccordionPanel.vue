<script lang="ts" setup>
import { computed, inject, onMounted, provide, useId, watch } from "vue";
import type { AccordionPanel, AccordionPanelProps, AccordionPanelState, AccordionState } from "./types";

const props = withDefaults(defineProps<AccordionPanelProps>(), {
    activeClass: ""
});

const { accordionState, registerPanel } = inject<{
    accordionState: AccordionState;
    registerPanel: (panel: AccordionPanelState) => void;
}>("accordionState")!;

const panelId = useId();
provide("panelId", panelId);

const accordionPanelState = computed(() =>
    accordionState.panels.find((panel: AccordionPanelState) => panel.id === panelId)
);

const isVisible = computed(() => accordionPanelState.value?.isVisible);

const emit = defineEmits<{
    show: [];
    hide: [];
}>();

watch(isVisible, (value) => {
    if (value) {
        emit("show");
    } else {
        emit("hide");
    }
});

onMounted(() => {
    const panelOrder = accordionState.panels.length;

    const panel: AccordionPanel = {
        ...props,
        id: panelId,
        isVisible: (panelOrder === 0 && !accordionState.collapsed) || false,
        order: panelOrder
    };

    registerPanel(panel);
});
</script>

<template>
    <div :class="['pub-accordion-panel']" :data-panel-id="panelId">
        <slot />
    </div>
</template>
