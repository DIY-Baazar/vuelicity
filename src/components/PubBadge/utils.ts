import { type Ref } from "vue";
import type { BadgeSize, BadgeTheme } from "./types";

const defaultBadgeClasses = "rounded flex items-center gap-2";

const badgeThemeClasses: Record<BadgeTheme, string> = {
    default: "bg-light text-grey-800",
    red: "bg-red-100 text-red-800",
    blue: "bg-blue-100 text-blue-800",
    yellow: "bg-yellow-100 text-yellow-800",
    green: "bg-green-100 text-green-800",
    magenta: "bg-magenta-100 text-magenta-800",
    cyan: "bg-cyan-100 text-cyan-800",
    light: "bg-grey-100 text-grey-800",
    dark: "bg-grey-800 text-grey-100",
};

const badgeSizeClasses: Record<BadgeSize, string> = {
    xs: "px-1 py-0.5 text-xs",
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base"
};

const badgeBorderedClasses: Record<BadgeTheme, string> = {
    default: "border-grey-800",
    red: "border-red-800",
    blue: "border-blue-800",
    yellow: "border-yellow-800",
    green: "border-green-800",
    magenta: "border-magenta-800",
    cyan: "border-cyan-800",
    light: "border-grey-800",
    dark: "border-grey-100",
};

interface UseBadgeClassesProps {
    theme: Ref<BadgeTheme>;
    size: Ref<BadgeSize>;
    bordered: Ref<boolean>;
    rounded: Ref<boolean>;
}

export function useBadgeClasses (props: UseBadgeClassesProps) {
    return [
        defaultBadgeClasses,
        badgeThemeClasses[props.theme.value],
        badgeSizeClasses[props.size.value],
        props.bordered.value ? "border " + badgeBorderedClasses[props.theme.value] : "",
        props.rounded.value ? "rounded-full": ""
    ].join(" ");
}