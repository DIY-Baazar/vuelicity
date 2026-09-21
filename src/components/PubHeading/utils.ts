import { computed, normalizeClass, type Ref } from 'vue'

import type { HeadingLevel } from './types'
import type { ClassRef } from '@/types/global'

import { useMergeClasses } from '@/composables/useMergeClasses'
import { isThemeColor, type ThemeColor, useThemeColor } from '@/composables/useThemeColor'

const textSizes: Record<HeadingLevel, string> = {
    1: 'text-5xl font-extrabold',
    2: 'text-4xl font-bold',
    3: 'text-3xl font-bold',
    4: 'text-2xl font-bold',
    5: 'text-xl font-bold',
    6: 'text-lg font-bold',
}

interface UseHeadingClassesProps {
    level: Ref<HeadingLevel>;
    color: Ref<string>;
    class: ClassRef;
}

export function useHeadingClasses (props:UseHeadingClassesProps) {
    const spanClasses = computed(() => {
        let themeClasses = ''
        if (isThemeColor(props.color.value)) {
            const theme = useThemeColor(props.color.value as ThemeColor)
            themeClasses = normalizeClass([theme.textClasses.value])
        } else {
            themeClasses = normalizeClass([props.color.value])
        }
        return useMergeClasses([
            textSizes[props.level.value],
            themeClasses,
            normalizeClass(props.class.value),
        ])
    })

    return {
        spanClasses,
    }
}
