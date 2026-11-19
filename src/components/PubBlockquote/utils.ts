import { computed, normalizeClass, type Ref } from 'vue'

import type { BlockquoteType } from './types'
import type { ClassRef } from '@/types/global'

import { useMergeClasses } from '@/composables/useMergeClasses'

interface UseBlockquoteClassesProps {
    type: Ref<BlockquoteType>;
    cite: Ref<string | undefined>;
    class: ClassRef;
}

const defaultBlockquoteClasses = 'font-semibold text-lg italic text-gray-900 dark:text-white'
const solidBlockquoteClasses = 'bg-gray-100 dark:bg-gray-800 border-l-4 border-gray-300 p-4 dark:border-gray-500'

export function useBlockquoteClasses (props:UseBlockquoteClassesProps) {
    const spanClasses = computed(() => useMergeClasses([
        'pub-blockquote',
        defaultBlockquoteClasses,
        props.type.value === 'solid' ? solidBlockquoteClasses : '',
        normalizeClass(props.class.value),
    ]))

    return {
        spanClasses,
    }
}
