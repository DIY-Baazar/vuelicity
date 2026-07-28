import { computed, normalizeClass, type Ref } from 'vue'

import type { TabsColor, TabsVariant } from './types'
import type { ClassRef } from '@/types/global'

import { useMergeClasses } from '@/composables/useMergeClasses'
import { useThemeColor } from '@/composables/useThemeColor'

interface UseTabsClassesProps {
    variant: Ref<TabsVariant>;
    tabClass: ClassRef;
    vertical: Ref<boolean>;
}

interface UseTabClassesProps {
    active: Ref<boolean>;
    disabled: Ref<boolean>;
    variant: Ref<TabsVariant>;
    itemClass: ClassRef;
    itemActiveClass: ClassRef;
    vertical: Ref<boolean>;
    fullWidth: Ref<boolean>;
    color: Ref<TabsColor>;
}

export type TabClassMap = {
    active: string;
    default: string;
    disabled: string;
}

const baseTabsClasses = 'flex text-sm font-medium text-grey-500'

const defaultTabClasses: TabClassMap = {
    default:
        'cursor-pointer inline-flex items-center gap-2 p-4 rounded-t-lg hover:text-grey-600 hover:bg-grey-50 dark:hover:bg-grey-800 dark:hover:text-grey-300',
    active: 'cursor-pointer inline-flex items-center gap-2 p-4 text-blue-600 bg-grey-100 rounded-t-lg active dark:bg-grey-800 dark:text-blue-500',
    disabled: 'inline-flex items-center gap-2 p-4 text-grey-400 rounded-t-lg cursor-not-allowed dark:text-grey-500',
}
const underlineTabClasses: TabClassMap = {
    default:
        'cursor-pointer inline-flex items-center gap-2 p-4 rounded-t-lg border-b-2 border-transparent hover:text-grey-600 hover:border-grey-300 dark:hover:text-grey-300',
    active: 'cursor-pointer inline-flex items-center gap-2 p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500',
    disabled: 'inline-flex items-center gap-2 p-4 text-grey-400 rounded-t-lg cursor-not-allowed dark:text-grey-500',
}
const pillsTabClasses: TabClassMap = {
    default:
        'cursor-pointer inline-flex items-center gap-2 py-3 px-4 rounded-lg hover:text-grey-900 hover:bg-grey-100 dark:hover:bg-grey-800 dark:hover:text-white',
    active: 'cursor-pointer inline-flex items-center gap-2 py-3 px-4 text-white bg-blue-600 rounded-lg active',
    disabled: 'inline-flex items-center gap-2 py-3 px-4 text-grey-400 cursor-not-allowed dark:text-grey-500',
}

const verticalDefaultTabClasses: TabClassMap = {
    default:
        'cursor-pointer flex items-center gap-2 w-full text-left p-4 hover:text-grey-600 hover:bg-grey-50 dark:hover:bg-grey-800 dark:hover:text-grey-300',
    active: 'cursor-pointer flex items-center gap-2 w-full text-left p-4 text-blue-600 bg-grey-100 active dark:bg-grey-800 dark:text-blue-500',
    disabled: 'flex items-center gap-2 w-full text-left p-4 text-grey-400 cursor-not-allowed dark:text-grey-500',
}
const verticalUnderlineTabClasses: TabClassMap = {
    default:
        'cursor-pointer flex items-center gap-2 w-full text-left p-4 border-r-2 border-transparent hover:text-grey-600 hover:border-grey-300 dark:hover:text-grey-300',
    active: 'cursor-pointer flex items-center gap-2 w-full text-left p-4 text-blue-600 border-r-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500',
    disabled: 'flex items-center gap-2 w-full text-left p-4 text-grey-400 cursor-not-allowed dark:text-grey-500',
}
const verticalPillsTabClasses: TabClassMap = {
    default:
        'cursor-pointer flex items-center gap-2 w-full text-left py-3 px-4 rounded-lg hover:text-grey-900 hover:bg-grey-100 dark:hover:bg-grey-800 dark:hover:text-white',
    active: 'cursor-pointer flex items-center gap-2 w-full text-left py-3 px-4 text-white bg-blue-600 rounded-lg active',
    disabled: 'flex items-center gap-2 w-full text-left py-3 px-4 text-grey-400 cursor-not-allowed dark:text-grey-500',
}

const tabFullWidthClasses = 'inline-flex items-center justify-center w-full'

export function useTabsClasses (props: UseTabsClassesProps) {
    const tabsClasses = computed(() =>
        useMergeClasses([
            baseTabsClasses,
            props.vertical.value ? 'flex-col' : 'flex-wrap w-full',
            props.variant.value === 'default' || props.variant.value === 'underline'
                ? props.vertical.value
                    ? 'border-r border-grey-200'
                    : 'border-b border-grey-200'
                : '',
            props.variant.value === 'underline' ? (props.vertical.value ? '-mr-px' : '-mb-px') : '',
            normalizeClass(props.tabClass.value),
        ]),
    )

    return {
        tabsClasses,
    }
}

export function useTabClasses (props: UseTabClassesProps): {
    tabClasses: Ref<string>;
} {
    const tabClasses = computed(() => {
        const theme = useThemeColor(props.color.value)
        const tabClassType: keyof TabClassMap = props.active.value
            ? 'active'
            : props.disabled.value
                ? 'disabled'
                : 'default'

        let baseTabClasses = null
        let isActiveThemeClasses = null
        if (props.variant.value === 'pills') {
            baseTabClasses = props.vertical.value ? verticalPillsTabClasses : pillsTabClasses
            isActiveThemeClasses = tabClassType === 'active' ? [theme.backgroundClasses.value, 'text-white'] : []
        } else if (props.variant.value === 'underline') {
            baseTabClasses = props.vertical.value ? verticalUnderlineTabClasses : underlineTabClasses
            isActiveThemeClasses =
                tabClassType === 'active' ? [theme.borderClasses.value, theme.textClasses.value] : []
        } else {
            baseTabClasses = props.vertical.value ? verticalDefaultTabClasses : defaultTabClasses
            isActiveThemeClasses = tabClassType === 'active' ? [theme.textClasses.value] : []
        }

        return useMergeClasses([
            baseTabClasses[tabClassType],
            ...isActiveThemeClasses,
            normalizeClass(props.itemClass.value),
            tabClassType === 'active' ? normalizeClass(props.itemActiveClass.value) : '',
            props.fullWidth.value ? tabFullWidthClasses : '',
        ])
    })

    return {
        tabClasses,
    }
}
