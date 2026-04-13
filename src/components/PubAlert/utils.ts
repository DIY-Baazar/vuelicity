import { useMergeClasses } from "@/composables/useMergeClasses";
import { computed, normalizeClass, useSlots, type Ref } from "vue";
import type { AlertTheme } from "./types";
import type { ClassRef } from "@/types/global";

interface UseAlertClassesProps {
    theme: Ref<AlertTheme>;
    bordered: Ref<boolean>;
    showIcon: Ref<boolean>;
    dismissible: Ref<boolean>;
    class: ClassRef;
}

const defaultAlertClasses = "p-4 gap-3 text-sm rounded-lg";
const alertThemeClasses: Record<AlertTheme, string> = {
    blue: "bg-blue-50 text-blue-800",
    green: "bg-green-50 text-green-800",
    yellow: "bg-yellow-50 text-yellow-800",
    red: "bg-red-50 text-red-800",
    dark: "bg-grey-100 text-grey-800"
};
const alertBorderedClasses: Record<AlertTheme, string> = {
    blue: "border-blue-800",
    green: "border-green-800",
    yellow: "border-yellow-800",
    red: "border-red-800",
    dark: "border-grey-800"
};

const defaultCloseButtonClasses = "ml-auto -mr-1.5 -my-1.5 rounded-lg focus:ring-2 border-0";
const closeButtonThemeClasses: Record<AlertTheme, string> = {
    blue: "text-blue-500 bg-blue-50 hover:bg-blue-200 focus:ring-blue-400",
    green: "text-green-500 bg-green-50 hover:bg-green-200 focus:ring-green-400",
    yellow: "text-yellow-500 bg-yellow-50 hover:bg-yellow-200 focus:ring-yellow-400",
    red: "text-red-500 bg-red-50 hover:bg-red-200 focus:ring-red-400",
    dark: "text-grey-500 bg-grey-50 hover:bg-grey-200 focus:ring-grey-400"
};


export function useAlertClasses (props: UseAlertClassesProps) {
    const slots = useSlots();

    const wrapperClasses = computed(() =>
        useMergeClasses([
            defaultAlertClasses,
            alertThemeClasses[props.theme.value],
            alertBorderedClasses[props.theme.value],
            normalizeClass(props.class?.value),
            (props.showIcon?.value || props.dismissible?.value) && !slots.title ? "flex items-center" : "",
            props.bordered?.value ? "border" : "",
        ])
    );

    const closeButtonClasses = computed(() =>
        useMergeClasses([
            defaultCloseButtonClasses,
            closeButtonThemeClasses[props.theme.value]
        ])
    );

    return { wrapperClasses, closeButtonClasses };
}
