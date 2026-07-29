import { computed, normalizeClass, type Ref } from 'vue'

import type { BadgeSize, BadgeTheme } from './types'

import { useMergeClasses } from '@/composables/useMergeClasses'
import { isThemeColor, type ThemeColor, useThemeColor } from '@/composables/useThemeColor'

const defaultBadgeClasses = 'rounded flex items-center gap-2 font-semibold'

type NonThemeColor = Exclude<BadgeTheme, ThemeColor>

const badgeThemeClasses: Record<NonThemeColor, string> = {
    default: 'bg-light text-grey-800',
}

const badgeSizeClasses: Record<BadgeSize, string> = {
    xs: 'px-1 py-0.5 text-xs',
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-base',
}

const badgeBorderedClasses: Record<NonThemeColor, string> = {
    default: 'border-grey-800',
}

interface UseBadgeClassesProps {
    color: Ref<BadgeTheme>;
    size: Ref<BadgeSize>;
    bordered: Ref<boolean>;
    rounded: Ref<boolean>;
}

export function useBadgeClasses (props: UseBadgeClassesProps) {
    return computed(() => {
        let themeClasses = ''
        let borderClasses = ''
        if (isThemeColor(props.color.value)) {
            const theme = useThemeColor(props.color.value as ThemeColor)
            borderClasses = theme.borderClasses.value
            themeClasses = normalizeClass([theme.textDarkClasses.value, theme.backgroundLightClasses.value])
        } else {
            themeClasses = badgeThemeClasses[props.color.value as NonThemeColor]
            borderClasses = badgeBorderedClasses[props.color.value as NonThemeColor]
        }

        return useMergeClasses([
            defaultBadgeClasses,
            themeClasses,
            badgeSizeClasses[props.size.value],
            props.bordered.value ? 'border ' + borderClasses : '',
            props.rounded.value ? 'rounded-full' : '',
        ])
    })
}
