import { useMergeClasses, normalizeClasses } from "@/composables/useMergeClasses";
import type { ClassRef } from "@/types/global";
import { computed, type Ref } from "vue";
import type { DropdownAlignment, DropdownPlacement } from "./types";

interface UseDropdownClassesProps {
    class: ClassRef;
    contentWrapperClass: ClassRef;
    triggerClass: ClassRef;
    triggerWrapperClass: ClassRef;
    alignToEnd: Ref<boolean>;
    placement: Ref<DropdownPlacement>;
    isContentVisible: Ref<boolean>;
}

const defaultWrapperClasses = 'fwb-dropdown inline-flex relative';
const defaultContentWrapperClasses = 'absolute z-10 bg-white rounded shadow-sm dark:bg-gray-700';

const appendRotationClassMap = {
    bottom: '',
    left: 'rotate-90',
    right: '-rotate-90',
    top: 'rotate-180',
};

const contentWrapperAlignmentClasses: Record<DropdownAlignment, string> = {
    horizontal: 'left-0',
    vertical: 'top-0',
    horizontal_reverse: 'right-0',
    vertical_reverse: 'bottom-0'
};

export const useDropdownClasses = (props: UseDropdownClassesProps) => {
    const alignment: DropdownAlignment =
        ['top', 'bottom'].includes(props.placement.value)
            ? (props.alignToEnd.value ? 'horizontal_reverse' : 'horizontal')
            : (props.alignToEnd.value ? 'vertical_reverse' : 'vertical');

    const wrapperClasses = computed(() => useMergeClasses([
        defaultWrapperClasses,
        props.isContentVisible.value ? 'open' : '',
        normalizeClasses(props.class.value)
    ]));

    const contentWrapperClasses = computed(() => useMergeClasses([
        defaultContentWrapperClasses,
        contentWrapperAlignmentClasses[alignment],
        normalizeClasses(props.contentWrapperClass.value),
    ]));

    const triggerWrapperClasses = computed(() => useMergeClasses([
        normalizeClasses(props.triggerWrapperClass.value),
    ]));

    const triggerAppendClass = computed(() =>
        useMergeClasses([
            appendRotationClassMap[props.placement.value],
            props.placement.value === 'left' ? 'mr-2' : '',
        ]),
    );

    return { wrapperClasses, contentWrapperClasses, triggerWrapperClasses, triggerAppendClass };
};