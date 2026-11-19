import { computed, normalizeClass, type Ref } from 'vue'

import type { ThemeColor } from '@/composables/useThemeColor'
import type { ClassRef } from '@/types/global'

import { useMergeClasses } from '@/composables/useMergeClasses'

interface UseParagraphClassesProps {
    color: Ref<ThemeColor | string>,
    class: ClassRef,
}

export function useParagraphClasses (props: UseParagraphClassesProps) {
    const spanClasses = computed(() => {
        return useMergeClasses([
            'pub-p text-body',
            normalizeClass(props.color.value),
            normalizeClass(props.class.value),
        ])
    })

    return {
        spanClasses,
    }
}
