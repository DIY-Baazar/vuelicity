import { computed, normalizeClass, type Ref } from "vue";
import { useMergeClasses } from "@/composables/useMergeClasses";
import type {
    AccordionPanelState,
    AccordionState,
    UseAccordionClassesProps,
    UseAccordionContentClassesProps,
    UseAccordionHeaderClassesProps
} from "./types";

const baseAccordionClasses = "w-full";
const baseAccordionHeaderClasses =
    "flex w-full items-center justify-between gap-3 font-medium p-5 text-gray-500 rtl:text-right";
const defaultAccordionHeaderClasses = "border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200";
const flushedAccordionHeaderClasses = "border-b border-gray-200 border-x-0 border-b";
const defaultAccordionActionClasses = "ml-auto size-6 shrink-0";

const baseAccordionContentClasses = "p-5 border border-gray-200 bg-white";

export function useAccordionClasses (props: UseAccordionClassesProps) {
    const accordionClasses = computed(() => useMergeClasses([baseAccordionClasses, normalizeClass(props.class.value)]));

    return { accordionClasses };
}

export function useAccordionHeaderClasses (
    rootState: Ref<AccordionState>,
    panelState: Ref<AccordionPanelState>,
    props: UseAccordionHeaderClassesProps
) {
    const isFlushed = computed(() => rootState.value?.flushed);
    const isPanelVisible = computed(() => panelState.value?.isVisible);
    const isFirstPanel = computed(() => panelState.value?.order === 0);
    const isLastPanel = computed(() => panelState.value?.order === rootState.value?.panels.length - 1);

    const wrapperClasses = computed(() =>
        useMergeClasses([
            baseAccordionHeaderClasses,
            (isFirstPanel.value && !isFlushed.value) ? 'rounded-t-xl' : '',
            (isFirstPanel.value && isFlushed.value) ? 'border-t-0' : '',
            !isLastPanel.value ? "border-b-0" : "",
            isFlushed.value ? flushedAccordionHeaderClasses : defaultAccordionHeaderClasses,
            isPanelVisible.value ? 'text-gray-900' : 'text-gray-500',
            (isPanelVisible.value && !isFlushed.value) ? 'bg-gray-100' : '',
            isPanelVisible.value ? props.activeClass.value : "",
            normalizeClass(props.class.value)
        ])
    );

    const actionClasses = computed(() =>
        useMergeClasses([defaultAccordionActionClasses, isPanelVisible.value ? "rotate-180" : ""])
    );

    return { wrapperClasses, actionClasses };
}

export function useAccordionContentClasses (
    rootState: Ref<AccordionState>,
    panelState: Ref<AccordionPanelState>,
    props: UseAccordionContentClassesProps
) {
    const isFlushed = computed(() => rootState.value?.flushed);
    const panelsCount = computed(() => rootState.value?.panels.length ?? 0);
    const isLastPanel = computed(() => panelState.value?.order === panelsCount.value - 1);
    const isPanelVisible = computed(() => panelState.value?.isVisible);

    const contentClasses = computed(() =>
        useMergeClasses([
            baseAccordionContentClasses,
            isFlushed.value ? "border-x-0 border-t-0" : "",
            isLastPanel.value ? "border-t-0" : "",
            !isFlushed.value && !isLastPanel.value ? "border-b-0" : "",
            isPanelVisible.value ? props.activeClass.value : "hidden",
            normalizeClass(props.class.value)
        ])
    );

    return { contentClasses };
}
