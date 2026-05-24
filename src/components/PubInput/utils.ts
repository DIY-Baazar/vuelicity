import type { ClassRef } from "@/types/global";
import { computed, normalizeClass, type Ref } from "vue";
import { validationStatusMap, type InputSize, type ValidationStatus } from "./types";
import { useMergeClasses } from "@/composables/useMergeClasses";

interface UseInputClassesProps {
    type: Ref<string>;
    size: Ref<InputSize>;
    class: ClassRef;
    wrapperClass: ClassRef;
    labelClass: ClassRef;
    validationStatus: Ref<ValidationStatus | undefined>;
    disabled: Ref<boolean>;
    inputClass: ClassRef;
}

const defaultWrapperClasses = "pub-input-container";
const defaultLabelClasses = "pub-input-label block mb-2 text-sm font-medium";
const defaultInputWrapperClasses = 'pub-input-wrapper relative flex items-center has-[input:focus]:ring-offset-0 has-[input:focus]:ring-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg has-[input:focus]:ring-blue-500 has-[input:focus]:border-blue-500     ';
const defaultInputClasses = 'pub-input block grow w-full p-0 bg-transparent text-inherit ring-offset-0 ring-0 border-0 focus:ring-offset-0 focus:ring-0 focus:border-0 focus:outline-none';
const defaultHelperClasses = "mt-2 text-sm text-gray-500";

const disabledInputWrapperClasses = "bg-gray-100";
const disabledInputClasses = "cursor-not-allowed";

const successTextClasses = "text-green-700";
const errorTextClasses = "text-red-700";
const successInputWrapperClasses = "bg-green-50 border-green-500";
const errorInputWrapperClasses = "bg-red-50 border-red-500";
const successInputClasses = "text-green-900 placeholder-green-700";
const errorInputClasses = "text-red-900 placeholder-red-700";


const inputSizeClasses: Record<InputSize, string> = {
    sm: "py-0.5 px-2 text-sm",
    md: "py-1 px-3 text-sm",
    lg: "py-1.5 px-4 text-lg"
};

export function useInputClasses (props: UseInputClassesProps) {
    const wrapperClasses = computed(() =>
        useMergeClasses([
            defaultWrapperClasses,
            normalizeClass(props.wrapperClass?.value)
        ])
    );

    const labelClasses = computed(() =>
        useMergeClasses([
            defaultLabelClasses,
            normalizeClass(props.labelClass?.value),
            props.validationStatus.value === validationStatusMap.Success
                ? successTextClasses
                : props.validationStatus.value === validationStatusMap.Error ? errorTextClasses : '',
        ])
    );

    const inputWrapperClasses = computed(() =>
        useMergeClasses([
            defaultInputWrapperClasses,
            normalizeClass(props.class?.value),
            props.validationStatus.value === validationStatusMap.Success
                ? successInputWrapperClasses
                : props.validationStatus.value === validationStatusMap.Error ? errorInputWrapperClasses : '',
            props.disabled.value ? disabledInputWrapperClasses : '',
        ])
    );

    const inputClasses = computed(() => useMergeClasses([
        defaultInputClasses,
        inputSizeClasses[props.size.value],
        props.validationStatus.value === validationStatusMap.Success
            ? successInputClasses
            : props.validationStatus.value === validationStatusMap.Error ? errorInputClasses : '',
        normalizeClass(props.inputClass.value),
        props.disabled.value ? disabledInputClasses : '',
    ]));

    const validationMessageClasses = computed(() =>
        useMergeClasses([
            defaultHelperClasses,
            props.validationStatus.value === validationStatusMap.Success
                ? successTextClasses
                : props.validationStatus.value === validationStatusMap.Error ? errorTextClasses : '',
        ])
    );

    const helperMessageClasses = computed(() =>
        useMergeClasses([
            defaultHelperClasses
        ])
    );

    return {
        wrapperClasses,
        labelClasses,
        inputWrapperClasses,
        inputClasses,
        validationMessageClasses,
        helperMessageClasses
    };
}
