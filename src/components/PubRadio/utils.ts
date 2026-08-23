import { computed, normalizeClass, type Ref } from 'vue'

import type { ClassRef } from '@/types/global'

import { useMergeClasses } from '@/composables/useMergeClasses'
import {
    type FormElementColor,
    type FormElementSize,
    type FormElementValidationStatus,
    validationStatusMap,
} from '@/types/form'

interface UseRadioClassProps {
    bordered: Ref<boolean>;
    wrapperClass: ClassRef;
    class: ClassRef;
    validationStatus: Ref<FormElementValidationStatus | undefined>;
    labelClass: ClassRef;
    disabled: Ref<boolean>;
    size: Ref<FormElementSize>;
    color: Ref<FormElementColor>;
}

const defaultWrapperClasses = 'pub-radio-container w-full'
const defaultLabelClasses = 'pub-radio-label ms-2 font-medium text-grey-900 mr-1'
const defaultRadioWrapperClasses = 'flex items-center'
const defaultRadioClasses =
  'pub-radio shrink-0 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed'
const disabledLabelClasses = 'text-grey-400'
const defaultHelperClasses = 'ml-6 text-xs font-normal text-grey-500'

const successTextClasses = 'text-green-700'
const errorTextClasses = 'text-red-700'
const successRadioWrapperClasses =
  'bg-green-50 border-green-200 has-[input:focus]:border-green-500 has-[input:focus]:ring-green-500'
const errorRadioWrapperClasses =
  'bg-red-50 border-red-200 has-[input:focus]:border-red-500 has-[input:focus]:ring-red-500'
const successRadioClasses = 'text-green-900'
const errorRadioClasses = 'text-red-900'

const radioSizeClasses: Record<FormElementSize, string> = {
    sm: 'py-0.5 px-2 text-sm',
    md: 'py-1 px-3 text-base',
    lg: 'py-1.5 px-4 text-lg',
    xl: 'py-2 px-4 text-xl',
}

const radioColorClasses: Record<FormElementColor, string> = {
    red: 'accent-red-500 focus:ring-red-500',
    green: 'accent-green-500 focus:ring-green-500',
    blue: 'accent-blue-500 focus:ring-blue-500',
    yellow: 'accent-yellow-500 focus:ring-yellow-500',
    pink: 'accent-pink-500 focus:ring-pink-500',
    cyan: 'accent-cyan-500 focus:ring-cyan-500',
    purple: 'accent-purple-500 focus:ring-purple-500',
    grey: 'accent-grey-300 focus:ring-grey-300',
    black: 'accent-grey-700 focus:ring-grey-700',
}

export function useRadioClasses (props: UseRadioClassProps) {
    const wrapperClasses = computed(() =>
        useMergeClasses([
            defaultWrapperClasses,
            props.bordered.value
                ? 'border border-grey-300 rounded shadow-xs p-4'
                : '',
            normalizeClass(props.wrapperClass?.value),
        ]),
    )

    const radioWrapperClasses = computed(() =>
        useMergeClasses([
            defaultRadioWrapperClasses,
            props.validationStatus.value === validationStatusMap.Success
                ? successRadioWrapperClasses
                : props.validationStatus.value === validationStatusMap.Error ? errorRadioWrapperClasses : '',
            radioSizeClasses[props.size.value],
        ]),
    )

    const radioClasses = computed(() =>
        useMergeClasses([
            defaultRadioClasses,
            radioColorClasses[props.color.value],
            props.validationStatus.value === validationStatusMap.Success
                ? successRadioClasses
                : props.validationStatus.value === validationStatusMap.Error
                    ? errorRadioClasses
                    : '',
            normalizeClass(props.class?.value),
        ]),
    )

    const labelClasses = computed(() =>
        useMergeClasses([
            defaultLabelClasses,
            props.disabled.value ? disabledLabelClasses : '',
            normalizeClass(props.labelClass?.value),
        ]),
    )

    const validationMessageClasses = computed(() =>
        useMergeClasses([
            defaultHelperClasses,
            props.validationStatus.value === validationStatusMap.Success
                ? successTextClasses
                : props.validationStatus.value === validationStatusMap.Error
                    ? errorTextClasses
                    : '',
        ]),
    )

    const helperMessageClasses = computed(() =>
        useMergeClasses([defaultHelperClasses]),
    )

    return {
        wrapperClasses,
        radioClasses,
        radioWrapperClasses,
        labelClasses,
        helperMessageClasses,
        validationMessageClasses,
    }
}
