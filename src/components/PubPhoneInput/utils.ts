import { useMergeClasses } from "@/composables/useMergeClasses";
import { validationStatusMap, type FormElementSize, type FormElementValidationStatus } from "@/types/form";
import type { ClassRef } from "@/types/global";
import { computed, normalizeClass, type Ref } from "vue";

export interface UsePhoneInputClassesProps {
    class: ClassRef;
    wrapperClass: ClassRef;
    inputClass: ClassRef;
    labelClass: ClassRef;
    prependClass: ClassRef;
    appendClass: ClassRef;
    size: Ref<FormElementSize>;
    validationStatus: Ref<FormElementValidationStatus | undefined>;
    disabled: Ref<boolean>;
    isPrependText: Ref<boolean>;
    isAppendText: Ref<boolean>;
}

const defaultWrapperClasses = "pub-phone-input-container";
const defaultLabelClasses = "pub-phone-input-label block mb-2 text-sm font-medium";
const defaultPhoneInputWrapperClasses =
    "pub-phone-input-wrapper relative flex items-center has-[input:focus]:ring-offset-0 has-[input:focus]:ring-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg has-[input:focus]:ring-blue-500 has-[input:focus]:border-blue-500     ";
const defaultPhoneInputClasses =
    "pub-phone-input block grow w-full bg-transparent text-inherit ring-offset-0 ring-0 border-0 focus:ring-offset-0 focus:ring-0 focus:border-0 focus:outline-none";
const defaultHelperClasses = "mt-2 text-sm text-gray-500";

const successPhoneInputClasses = "text-green-900 placeholder:text-green-500";
const errorPhoneInputClasses = "text-red-900 placeholder:text-red-500";
const successPhoneInputWrapperClasses =
    "bg-green-50 border-green-200 has-[input:focus]:border-green-500 has-[input:focus]:ring-green-500";
const errorPhoneInputWrapperClasses =
    "bg-red-50 border-red-200 has-[input:focus]:border-red-500 has-[input:focus]:ring-red-500";
const successTextClasses = "text-green-700";
const errorTextClasses = "text-red-700";

const affixBaseClasses = "self-stretch flex items-center shrink-0 text-gray-500";
const affixDefaultBgClasses = "bg-gray-100";
const affixDisabledBgClasses = "bg-gray-200";
const affixSuccessBorderClasses = "border-green-200";
const affixErrorBorderClasses = "border-red-200";
const affixDefaultBorderClasses = "border-gray-300";
const affixSizeClasses: Record<FormElementSize, string> = {
    sm: "px-1 text-sm",
    md: "px-2 text-sm",
    lg: "px-3 text-base",
    xl: "px-4 text-base"
};

const phoneInputSizeClasses: Record<FormElementSize, string> = {
    sm: "py-0.5 px-1 text-sm",
    md: "py-1 px-2 text-sm",
    lg: "py-1.5 px-3 text-lg",
    xl: "py-2 px-4 text-lg"
};

export function usePhoneInputClasses(props: UsePhoneInputClassesProps) {
    const wrapperClasses = computed(() =>
        useMergeClasses([defaultWrapperClasses, normalizeClass(props.wrapperClass?.value)])
    );

    const labelClasses = computed(() =>
        useMergeClasses([defaultLabelClasses, normalizeClass(props.labelClass?.value)])
    );

    const phoneInputWrapperClasses = computed(() =>
        useMergeClasses([
            defaultPhoneInputWrapperClasses,
            props.validationStatus.value === validationStatusMap.Success
                ? successPhoneInputWrapperClasses
                : props.validationStatus.value === validationStatusMap.Error
                  ? errorPhoneInputWrapperClasses
                  : "",
            normalizeClass(props.class?.value)
        ])
    );

    const phoneInputClasses = computed(() =>
        useMergeClasses([
            defaultPhoneInputClasses,
            phoneInputSizeClasses[props.size.value],
            props.validationStatus.value === validationStatusMap.Success
                ? successPhoneInputClasses
                : props.validationStatus.value === validationStatusMap.Error
                  ? errorPhoneInputClasses
                  : "",
            normalizeClass(props.inputClass?.value)
        ])
    );

    const isdcodeInputClasses = computed(() =>
        useMergeClasses([
            defaultPhoneInputClasses,
            phoneInputSizeClasses[props.size.value],
            props.validationStatus.value === validationStatusMap.Success
                ? successPhoneInputClasses
                : props.validationStatus.value === validationStatusMap.Error
                  ? errorPhoneInputClasses
                  : "",
            "max-w-32 border-r border-gray-300",
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
        phoneInputWrapperClasses,
        phoneInputClasses,
        isdcodeInputClasses,
        validationMessageClasses,
        helperMessageClasses,
        appendContainerClasses,
        prependContainerClasses
    };
}
