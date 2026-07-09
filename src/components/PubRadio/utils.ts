import { useMergeClasses } from "@/composables/useMergeClasses";
import type { FormElementColor, FormElementSize } from "@/types/form";
import type { ClassRef } from "@/types/global";
import { computed, normalizeClass, type Ref } from "vue";

interface UseRadioClassProps {
    bordered: Ref<boolean>;
    wrapperClass: ClassRef;
    class: ClassRef;
    labelClass: ClassRef;
    disabled: Ref<boolean>;
    size: Ref<FormElementSize>;
    color: Ref<FormElementColor>;
}

const defaultWrapperClasses = "pub-radio-container w-full";
const defaultLabelClasses = "pub-radio-label font-medium text-gray-900 mr-1";
const defaultRadioWrapperClasses = "flex justify-start items-center select-none";
const defaultRadioClasses =
    "pub-radio mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-2";
const disabledLabelClasses = "text-gray-400";
const defaultHelperClasses = "ml-6 text-xs font-normal text-gray-500";

const radioSizeClasses: Record<FormElementSize, string> = {
    sm: "py-0.5 px-2 text-sm",
    md: "py-1 px-3 text-base",
    lg: "py-1.5 px-4 text-lg",
    xl: "py-2 px-4 text-xl"
};

const radioColorClasses: Record<FormElementColor, string> = {
    red: "accent-red-500 focus:ring-red-500",
    green: "accent-green-500 focus:ring-green-500",
    blue: "accent-blue-500 focus:ring-blue-500",
    yellow: "accent-yellow-500 focus:ring-yellow-500",
    magenta: "accent-magenta-500 focus:ring-magenta-500",
    cyan: "accent-cyan-500 focus:ring-cyan-500",
    light: "accent-gray-300 focus:ring-light-300",
    dark: "accent-gray-700 focus:ring-gray-700"
};

export function useRadioClasses(props: UseRadioClassProps) {
    const wrapperClasses = computed(() =>
        useMergeClasses([
            defaultWrapperClasses,
            props.bordered.value ? "border border-gray-300 rounded shadow-xs p-4" : "",
            normalizeClass(props.wrapperClass?.value)
        ])
    );

    const radioWrapperClasses = computed(() =>
        useMergeClasses([defaultRadioWrapperClasses, radioSizeClasses[props.size.value]])
    );

    const radioClasses = computed(() =>
        useMergeClasses([defaultRadioClasses, radioColorClasses[props.color.value], normalizeClass(props.class?.value)])
    );

    const labelClasses = computed(() =>
        useMergeClasses([
            defaultLabelClasses,
            props.disabled.value ? disabledLabelClasses : "",
            normalizeClass(props.labelClass?.value)
        ])
    );

    const helperMessageClasses = computed(() => useMergeClasses([defaultHelperClasses]));

    return { wrapperClasses, radioClasses, radioWrapperClasses, labelClasses, helperMessageClasses };
}
