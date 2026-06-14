import type { ClassRef } from "@/types/global";
import { computed, normalizeClass, type Ref } from "vue";
import { useMergeClasses } from "@/composables/useMergeClasses";
import { validationStatusMap, type FormElementSize, type FormElementValidationStatus } from "@/types/form";

interface UseInputClassesProps {
    type: Ref<string>;
    size: Ref<FormElementSize>;
    class: ClassRef;
    wrapperClass: ClassRef;
    labelClass: ClassRef;
    validationStatus: Ref<FormElementValidationStatus | undefined>;
    disabled: Ref<boolean>;
    inputClass: ClassRef;
    isPrependText: Ref<boolean>;
    isAppendText: Ref<boolean>;
    prependClass: ClassRef;
    appendClass: ClassRef;
}

const defaultWrapperClasses = "pub-input-container";
const defaultLabelClasses = "pub-input-label block mb-2 text-sm font-medium";
const defaultInputWrapperClasses =
    "pub-input-wrapper relative flex items-center has-[input:focus]:ring-offset-0 has-[input:focus]:ring-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg has-[input:focus]:ring-blue-500 has-[input:focus]:border-blue-500     ";
const defaultInputClasses =
    "pub-input block grow w-full p-0 bg-transparent text-inherit ring-offset-0 ring-0 border-0 focus:ring-offset-0 focus:ring-0 focus:border-0 focus:outline-none";
const defaultHelperClasses = "mt-2 text-sm text-gray-500";

const disabledInputClasses = "cursor-not-allowed text-gray-400";
const disabledInputWrapperClasses = "bg-gray-100";

const successTextClasses = "text-green-700";
const errorTextClasses = "text-red-700";
const successInputWrapperClasses =
    "bg-green-50 border-green-200 has-[input:focus]:border-green-500 has-[input:focus]:ring-green-500";
const errorInputWrapperClasses =
    "bg-red-50 border-red-200 has-[input:focus]:border-red-500 has-[input:focus]:ring-red-500";
const successInputClasses = "text-green-900 placeholder:text-green-500";
const errorInputClasses = "text-red-900 placeholder:text-red-500";

const affixBaseClasses = "self-stretch flex items-center shrink-0 text-gray-500";
const affixDefaultBgClasses = "bg-gray-100";
const affixDisabledBgClasses = "bg-gray-200";
const affixSuccessBorderClasses = "border-green-200";
const affixErrorBorderClasses = "border-red-200";
const affixDefaultBorderClasses = "border-gray-300";
const affixSizeClasses: Record<FormElementSize, string> = {
    sm: "px-2.5 text-sm",
    md: "px-3 text-sm",
    lg: "px-3.5 text-base",
    xl: "px-4 text-base"
};

const inputSizeClasses: Record<FormElementSize, string> = {
    sm: "py-0.5 px-2 text-sm",
    md: "py-1 px-3 text-sm",
    lg: "py-1.5 px-4 text-lg",
    xl: "py-2 px-4 text-lg"
};

export function useInputClasses(props: UseInputClassesProps): {
    wrapperClasses: Ref<string>;
    labelClasses: Ref<string>;
    inputWrapperClasses: Ref<string>;
    inputClasses: Ref<string>;
    validationMessageClasses: Ref<string>;
    helperMessageClasses: Ref<string>;
    appendContainerClasses: Ref<string>;
    prependContainerClasses: Ref<string>;
} {
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
            normalizeClass(props.class?.value),
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
            inputSizeClasses[props.size.value],
            props.validationStatus.value === validationStatusMap.Success
                ? successInputClasses
                : props.validationStatus.value === validationStatusMap.Error
                  ? errorInputClasses
                  : "",
            normalizeClass(props.inputClass.value),
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

    const helperMessageClasses = computed(() => useMergeClasses([defaultHelperClasses]));

    const affixBorderClasses = computed(() =>
        props.validationStatus.value === validationStatusMap.Success
            ? affixSuccessBorderClasses
            : props.validationStatus.value === validationStatusMap.Error
              ? affixErrorBorderClasses
              : affixDefaultBorderClasses
    );
    const affixBgClasses = computed(() => (props.disabled.value ? affixDisabledBgClasses : affixDefaultBgClasses));

    const appendContainerClasses = computed(() =>
        props.isAppendText.value
            ? useMergeClasses([
                  affixBaseClasses,
                  affixSizeClasses[props.size.value],
                  affixBgClasses.value,
                  "border-l rounded-r-lg",
                  affixBorderClasses.value,
                  normalizeClass(props.appendClass.value)
              ])
            : useMergeClasses(["flex items-center ms-2 shrink-0", normalizeClass(props.appendClass.value)])
    );

    const prependContainerClasses = computed(() =>
        props.isPrependText.value
            ? useMergeClasses([
                  affixBaseClasses,
                  affixSizeClasses[props.size.value],
                  affixBgClasses.value,
                  "border-r rounded-l-lg",
                  affixBorderClasses.value,
                  normalizeClass(props.prependClass.value)
              ])
            : useMergeClasses(["flex items-center me-2 shrink-0", normalizeClass(props.prependClass.value)])
    );

    return {
        wrapperClasses,
        labelClasses,
        inputClasses,
        inputWrapperClasses,
        validationMessageClasses,
        helperMessageClasses,
        appendContainerClasses,
        prependContainerClasses
    };
}
