import { useMergeClasses } from "@/composables/useMergeClasses";
import { computed, normalizeClass, type Ref } from "vue";
import type { ClassRef } from "@/types/global";
import { validationStatusMap, type FormElementSize, type FormElementValidationStatus } from "@/types/form";

interface UseSelectClassesProps {
    disabled: Ref<boolean>;
    validationStatus: Ref<FormElementValidationStatus | undefined>;
    labelClass?: ClassRef;
    class?: ClassRef;
    size: Ref<FormElementSize>;
    underline: Ref<boolean>;
    wrapperClass?: ClassRef;
}

const defaultLabelClasses = "pub-select-label block mb-2 text-sm font-medium";
const defaultWrapperClasses = "pub-select-container w-full";
const defaultHelperClasses = "mt-2 text-sm text-gray-500";
const defaultSelectClasses =
    "pub-select w-full text-gray-900 bg-gray-50 focus:ring-primary-500 focus:border-primary-500";

const disabledSelectClasses = "cursor-not-allowed bg-gray-100";

const successTextClasses = "text-green-700";
const errorTextClasses = "text-red-700";
const successSelectClasses = "bg-green-50 border-green-500 focus:ring-green-500 focus:border-green-500 text-green-900 placeholder-green-700";
const errorSelectClasses = "bg-red-50 border-red-500 focus:ring-red-500 focus:border-red-500 text-red-900 placeholder-red-700";

const selectSizeClasses: Record<FormElementSize, string> = {
    sm: "p-2 text-sm",
    md: "p-2.5 text-sm",
    lg: "p-4",
    xl: "p-5 text-base"
};
const underlineSelectClasses =
    "bg-transparent border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 peer";

export function useSelectClasses(props: UseSelectClassesProps) {
    const wrapperClasses = computed(() =>
        useMergeClasses([defaultWrapperClasses, normalizeClass(props.wrapperClass?.value)])
    );

    const labelClasses = computed(() =>
        useMergeClasses([
            defaultLabelClasses,
            normalizeClass(props.labelClass?.value),
            props.validationStatus.value === validationStatusMap.Success
                ? successTextClasses
                : props.validationStatus.value === validationStatusMap.Error
                  ? errorTextClasses
                  : ""
        ])
    );

    const selectClasses = computed(() => {
        const underlineByStatus =
            props.validationStatus.value === validationStatusMap.Success
                ? "focus:border-green-500"
                : props.validationStatus.value === validationStatusMap.Error
                  ? "focus:border-red-500"
                  : "";

        return useMergeClasses([
            defaultSelectClasses,
            props.validationStatus.value === validationStatusMap.Success
                ? successSelectClasses
                : props.validationStatus.value === validationStatusMap.Error
                  ? errorSelectClasses
                  : "",
            selectSizeClasses[props.size.value],
            normalizeClass(props.class?.value),
            props.disabled.value ? disabledSelectClasses : "",
            props.underline.value ? underlineSelectClasses : "border border-gray-300 rounded-lg",
            props.underline.value ? underlineByStatus : ""
        ]);
    });

    const validationMessageClasses = computed(() =>
        useMergeClasses([
            defaultHelperClasses,
            props.validationStatus.value === validationStatusMap.Success
                ? successTextClasses
                : props.validationStatus.value === validationStatusMap.Error
                  ? errorTextClasses
                  : ""
        ])
    );

    const helperMessageClasses = computed(() => useMergeClasses([defaultHelperClasses]));

    return {
        wrapperClasses,
        labelClasses,
        selectClasses,
        validationMessageClasses,
        helperMessageClasses
    };
}
