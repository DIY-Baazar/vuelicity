import type { ThemeColor } from '@/composables/useThemeColor'

export type BadgeTheme =
    | 'default'
    | ThemeColor

export type BadgeSize = 'xs' | 'sm' | 'md'

export interface BadgeProps {
    color?: BadgeTheme;
    size?: BadgeSize;
    href?: string | null;
    bordered?: boolean;
    rounded?: boolean;
    class?: string;
    dismissable?: boolean;
};
