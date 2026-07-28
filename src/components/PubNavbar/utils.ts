import { computed, normalizeClass, type Ref } from 'vue'

import type { NavbarTheme } from './types'
import type { BreakpointKey } from '@/composables/useBreakpoints'
import type { ClassRef } from '@/types/global'

import { useMergeClasses } from '@/composables/useMergeClasses'

interface UseNavbarClassesProps {
    sticky: Ref<boolean>;
    rounded: Ref<boolean>;
    solid: Ref<boolean>;
    color: Ref<NavbarTheme>;
    containerClass: ClassRef;
    class: ClassRef;
}

const navbarThemeClasses = {
    light: {
        true: 'bg-white',
        false: 'bg-grey-50',
    },
    dark: {
        true: 'bg-black',
        false: 'bg-grey-800',
    },
    default: {
        true: 'bg-white dark:bg-black',
        false: 'bg-grey-50 dark:bg-grey-800',
    },
}

type NavbarSolid = 'true' | 'false'

const navbarTextThemeClasses: Record<NavbarTheme, Record<NavbarSolid, string>> = {
    light: {
        true: 'text-grey-700 hover:bg-light',
        false: 'text-grey-700 hover:bg-grey-50',
    },
    dark: {
        true: 'text-grey-200 hover:bg-dark',
        false: 'text-grey-200 hover:bg-grey-800',
    },
    default: {
        true: 'text-grey-700 hover:bg-light dark:text-grey-200 dark:hover:bg-dark',
        false: 'text-grey-700 hover:bg-grey-50 dark:text-grey-200 dark:hover:bg-grey-800',
    },
}

export function useNavbarClasses (props: UseNavbarClassesProps): {
    wrapperClasses: Ref<string>;
    spanClasses: Ref<string>;
} {
    const wrapperClasses = computed(() =>
        useMergeClasses([
            'border-grey-200 w-full',
            props.sticky.value ? 'fixed z-20 top-0 left-0 border-b border-grey-200' : '',
            props.rounded.value ? 'rounded' : '',
            props.solid.value ? 'p-3' : 'px-2 sm:px-4 py-2.5',
            navbarThemeClasses[props.color.value][props.solid.value ? 'true' : 'false'],
            navbarTextThemeClasses[props.color.value][props.solid.value ? 'true' : 'false'],
            normalizeClass(props.containerClass.value),
        ]),
    )
    const spanClasses = computed(() =>
        useMergeClasses([
            'max-w-screen-xl flex flex-wrap items-center justify-between mx-auto',
            normalizeClass(props.class.value),
        ]),
    )

    return { wrapperClasses, spanClasses }
}

interface UseNavbarCollapseClassesProps {
    isShowMenu: Ref<boolean>;
    noToggleButton: Ref<boolean>;
    class: ClassRef;
    collapseBreakpoint: Ref<BreakpointKey>;
}

export function useNavbarCollapseClasses (props: UseNavbarCollapseClassesProps): {
    wrapperClasses: Ref<string>;
    spanClasses: Ref<string>;
} {
    const collapseBreakpoint = props.collapseBreakpoint.value
    const wrapperClasses = computed(() =>
        useMergeClasses([
            'w-full',
            `${collapseBreakpoint}:w-auto ${collapseBreakpoint}:block`,
            props.isShowMenu.value ? '' : 'hidden',
        ]),
    )
    const spanClasses = computed(() =>
        useMergeClasses([
            'flex flex-col p-4 rounded-lg border border-grey-100',
            `${collapseBreakpoint}:flex-row ${collapseBreakpoint}:space-x-8 ${collapseBreakpoint}:mt-0 ${collapseBreakpoint}:text-sm ${collapseBreakpoint}:font-medium ${collapseBreakpoint}:border-0`,
            props.noToggleButton.value ? '' : `mt-4 ${collapseBreakpoint}:mt-0`,
            normalizeClass(props.class?.value),
        ]),
    )

    return { wrapperClasses, spanClasses }
}

interface UseNavbarLinkProps {
    isActive?: Ref<boolean>;
    class: ClassRef;
    collapseBreakpoint: Ref<BreakpointKey>;
}

export function useNavbarLinkClasses (props: UseNavbarLinkProps): {
    linkClasses: Ref<string>;
} {
    const collapseBreakpoint = props.collapseBreakpoint.value
    const currentPageClasses = `bg-blue ${collapseBreakpoint}:bg-transparent text-white ${collapseBreakpoint}:text-blue`
    const defaultStateClasses = `${collapseBreakpoint}:hover:bg-transparent ${collapseBreakpoint}:border-0 ${collapseBreakpoint}:hover:text-blue`
    const defaultClasses = `block py-2 pr-4 pl-3 rounded ${collapseBreakpoint}:p-0`
    const linkClasses = computed(() =>
        useMergeClasses([
            defaultClasses,
            props.isActive?.value ? currentPageClasses : defaultStateClasses,
            normalizeClass(props.class?.value),
        ]),
    )
    return { linkClasses }
}
