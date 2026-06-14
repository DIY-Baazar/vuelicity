import { useMergeClasses } from "@/composables/useMergeClasses";
import type { ClassRef } from "@/types/global";
import { computed, normalizeClass, type Ref } from "vue";

interface UseCheckBoxClassesProps {
    class: ClassRef;
    wrapperClass: ClassRef;
    labelClass: ClassRef;
    disabled: Ref<boolean>;
    bordered: Ref<boolean>;
}

const defaultWrapperClasses = "pub-check-box-container";
const defaultLabelClasses = "pub-check-box-label text-sm font-medium text-gray-900 mr-1";
const defaultCheckboxClasses =
    "mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2";
const disabledLabelClasses = "text-gray-400";
const defaultHelperClasses = "ml-6 text-xs font-normal text-gray-500";

export function useCheckBoxClasses(props: UseCheckBoxClassesProps) {
    const wrapperClasses = computed(() =>
        useMergeClasses([
            defaultWrapperClasses,
            props.bordered.value ? "border border-gray-300 rounded shadow-xs p-4" : "",
            normalizeClass(props.wrapperClass?.value)
        ])
    );

    const checkboxClasses = computed(() =>
        useMergeClasses([defaultCheckboxClasses, normalizeClass(props.class?.value)])
    );

    const labelClasses = computed(() =>
        useMergeClasses([
            defaultLabelClasses,
            props.disabled.value ? disabledLabelClasses : "",
            normalizeClass(props.labelClass?.value)
        ])
    );

    const helperMessageClasses = computed(() => useMergeClasses([defaultHelperClasses]));

    return {
        wrapperClasses,
        checkboxClasses,
        labelClasses,
        helperMessageClasses
    };
}
