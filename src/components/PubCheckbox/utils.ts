import { computed, normalizeClass, type Ref } from 'vue'

import type { ClassRef } from '@/types/global'

import { useMergeClasses } from '@/composables/useMergeClasses'

interface UseCheckboxClassesProps {
    class: ClassRef;
    wrapperClass: ClassRef;
    labelClass: ClassRef;
    disabled: Ref<boolean>;
    bordered: Ref<boolean>;
}

const defaultWrapperClasses = 'pub-checkbox-container w-full'
const defaultLabelClasses = 'pub-checkbox-label text-sm font-medium text-grey-900 mr-1'
const defaultCheckboxClasses =
    'mr-2 w-4 h-4 text-blue-600 bg-grey-100 border-grey-300 rounded-sm focus:ring-blue-500 focus:ring-2'
const disabledLabelClasses = 'text-grey-400'
const defaultHelperClasses = 'ml-6 text-xs font-normal text-grey-500'

export function useCheckboxClasses (props: UseCheckboxClassesProps) {
    const wrapperClasses = computed(() =>
        useMergeClasses([
            defaultWrapperClasses,
            props.bordered.value ? 'border border-grey-300 rounded shadow-xs p-4' : '',
            normalizeClass(props.wrapperClass?.value),
        ]),
    )

    const checkboxClasses = computed(() =>
        useMergeClasses([defaultCheckboxClasses, normalizeClass(props.class?.value)]),
    )

    const labelClasses = computed(() =>
        useMergeClasses([
            defaultLabelClasses,
            props.disabled.value ? disabledLabelClasses : '',
            normalizeClass(props.labelClass?.value),
        ]),
    )

    const helperMessageClasses = computed(() => useMergeClasses([defaultHelperClasses]))

    return {
        wrapperClasses,
        checkboxClasses,
        labelClasses,
        helperMessageClasses,
    }
}
