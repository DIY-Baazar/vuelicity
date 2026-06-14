import { useMergeClasses } from "@/composables/useMergeClasses";
import { validationStatusMap, type FormElementSize, type FormElementValidationStatus } from "@/types/form";
import type { ClassRef } from "@/types/global";
import { computed, normalizeClass, type Ref } from "vue";

export interface UseTextareaClassesProps {
    disabled: Ref<boolean>;
    class: ClassRef;
    labelClass: ClassRef;
    inputClass: ClassRef;
    wrapperClass: ClassRef;
    size: Ref<FormElementSize>;
    validationStatus: Ref<FormElementValidationStatus | undefined>;
    footerClass: ClassRef;
}

const defaultLabelClasses = "pub-textarea-label block mb-2 text-sm font-medium";
const defaultHelperClasses = "mt-2 text-sm text-gray-500";
const defaultWrapperClasses = "pub-textarea-container w-full";
const defaultInputWrapperClasses =
    "relative bg-gray-50 shadow-xs border border-gray-300 has-[textarea:focus]:border-blue-500 rounded-lg has-[textarea:focus]:ring-1 has-[textarea:focus]:ring-blue-500 text-gray-900 ";
const defaultInputClasses =
    "pub-textarea w-full block bg-transparent border-0 focus:border-0 focus:outline-none ring-0 focus:ring-0 text-inherit placeholder:text-gray-400";
const defaultFooterClasses = "px-3.5 py-2 border-gray-300 border-t";

const disabledInputClasses = "cursor-not-allowed text-gray-400";
const disabledInputWrapperClasses = "bg-gray-100";

const successTextClasses = "text-green-700";
const errorTextClasses = "text-red-700";
const successInputWrapperClasses =
    "bg-green-50 border-green-200 has-[textarea:focus]:border-green-500 has-[textarea:focus]:ring-green-500";
const errorInputWrapperClasses =
    "bg-red-50 border-red-200 has-[textarea:focus]:border-red-500 has-[textarea:focus]:ring-red-500";
const successInputClasses = "text-green-900 placeholder:text-green-500";
const errorInputClasses = "text-red-900 placeholder:text-red-500";

const inputSizeClasses: Record<FormElementSize, string> = {
    sm: "px-2.5 py-2 text-sm",
    md: "px-3 py-2.5 text-sm",
    lg: "px-3.5 py-3 text-base",
    xl: "px-4 py-3.5 text-base"
};

export function useTextareaClasses(props: UseTextareaClassesProps) {
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

    const inputWrapperClasses = computed(() =>
        useMergeClasses([
            defaultInputWrapperClasses,
            inputSizeClasses[props.size.value],
            props.validationStatus.value === validationStatusMap.Success
                ? successInputWrapperClasses
                : props.validationStatus.value === validationStatusMap.Error
                  ? errorInputWrapperClasses
                  : "",
            props.disabled.value ? disabledInputWrapperClasses : ""
        ])
    );

    const inputClasses = computed(() =>
        useMergeClasses([
            defaultInputClasses,
            props.validationStatus.value === validationStatusMap.Success
                ? successInputClasses
                : props.validationStatus.value === validationStatusMap.Error
                  ? errorInputClasses
                  : "",
            normalizeClass(props.inputClass?.value),
            props.disabled.value ? disabledInputClasses : ""
        ])
    );

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

    const footerClasses = computed(()=> useMergeClasses([
        defaultFooterClasses,
        normalizeClass(props.footerClass?.value),
    ]));

    const helperMessageClasses = computed(() => useMergeClasses([defaultHelperClasses]));

    return {
        wrapperClasses,
        labelClasses,
        inputWrapperClasses,
        inputClasses,
        validationMessageClasses,
        helperMessageClasses,
        footerClasses
    };
}
