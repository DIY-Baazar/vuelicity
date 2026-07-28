import { computed, normalizeClass, type Ref, useSlots } from 'vue'

import type { AlertTheme } from './types'
import type { ClassRef } from '@/types/global'

import { useMergeClasses } from '@/composables/useMergeClasses'
import { type ThemeColor, useThemeColor } from '@/composables/useThemeColor'

interface UseAlertClassesProps {
    color: Ref<AlertTheme>;
    bordered: Ref<boolean>;
    showIcon: Ref<boolean>;
    dismissible: Ref<boolean>;
    class: ClassRef;
}

const defaultAlertClasses = 'p-4 gap-3 text-sm rounded-lg'

const defaultCloseButtonClasses = 'ml-auto -mr-1.5 -my-1.5 rounded-lg focus:ring-2 border-0'

export function useAlertClasses (props: UseAlertClassesProps) {
    const slots = useSlots()
    const theme = useThemeColor(props.color.value as ThemeColor)

    const wrapperClasses = computed(() =>
        useMergeClasses([
            defaultAlertClasses,
            theme.backgroundLighterClasses.value,
            theme.textDarkClasses.value,
            theme.borderClasses.value,
            normalizeClass(props.class?.value),
            (props.showIcon?.value || props.dismissible?.value) && !slots.title ? 'flex items-center' : '',
            props.bordered?.value ? 'border' : '',
        ]),
    )

    const closeButtonClasses = computed(() =>
        useMergeClasses([
            defaultCloseButtonClasses,
            theme.textClasses.value,
            theme.backgroundLighterClasses.value,
            theme.hoverClasses.value,
            theme.focusClasses.value,
        ]),
    )

    return { wrapperClasses, closeButtonClasses }
}
