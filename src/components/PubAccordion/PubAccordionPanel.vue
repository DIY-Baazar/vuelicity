<script lang="ts" setup>
import { computed, inject, onMounted, ref, useId, watch } from "vue";
import type { AccordionPanel, AccordionPanelProps, AccordionState } from "./types";

const props = withDefaults(defineProps<AccordionPanelProps>(), {
    activeClass: ""
});

const accordionState = ref();

const panelRef = ref<HTMLDivElement>();
const panelId = useId();

const accordionPanelState = computed(() =>
    accordionState.value ? accordionState.value.panels.find((panel: AccordionPanel) => panel.id === panelId) : null
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
    const { accordionState: newAccordionState } = inject<{ accordionState: AccordionState }>("accordionState")!;
    accordionState.value = newAccordionState;

    const panelIdx =
        panelRef.value && panelRef.value.parentElement
            ? Array.from(panelRef.value.parentElement.children).indexOf(panelRef.value)
            : 0;

    accordionState.value.panels.push({
        ...props,
        id: panelId,
        isVisible: (panelIdx === 0 && !accordionState.value.collapsed) || false,
        order: panelIdx
    });
});
</script>

<template>
    <div :class="['pub-accordion-panel']" ref="panelRef" :data-panel-id="panelId">
        <slot />
    </div>
</template>
