import { computed, normalizeClass, type Ref } from "vue";
import { useMergeClasses } from "@/composables/useMergeClasses";
import type { IconSize, IconTheme, IconType, UseIconClassesProps } from "./types";
import { isThemeColor, useThemeColor, type ThemeColor } from "@/composables/useThemeColor";

const iconSizeClasses: Record<IconSize, string> = {
    "2xs": "w-2 h-2",
    xs: "w-4 h-4",
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
    xl: "w-12 h-12",
    "2xl": "w-16 h-16",
    "3xl": "w-20 h-20",
    "4xl": "w-24 h-24",
    "5xl": "w-28 h-28",
    "6xl": "w-32 h-32",
    "7xl": "w-36 h-36"
};

type NonThemeColor = Exclude<IconTheme, ThemeColor>;

const iconThemeClasses: Record<NonThemeColor, string> = {
    default: "text-inherit"
    // blue: "text-blue",
    // red: "text-red",
    // yellow: "text-yellow",
    // green: "text-green",
    // magenta: "text-magenta",
    // cyan: "text-cyan",
    // light: "text-light",
    // dark: "text-dark"
};

const iconTypeClasses: Record<IconType, string> = {
    solid: "icon-solid",
    outline: "icon-outline",
    duotone: "icon-duotone"
};

export function useIconClasses(props: UseIconClassesProps): {
    iconClasses: Ref<string>;
} {
    const iconClasses = computed(() => {
        let themeClasses = "";
        if (props.color.value && isThemeColor(props.color.value)) {
            const theme = useThemeColor(props.color.value as ThemeColor);
            themeClasses = theme.textClasses.value;
        } else {
            themeClasses = iconThemeClasses[props.color.value as NonThemeColor];
        }
        return useMergeClasses([
            "inline-block",
            props.size.value && !props.aschild.value ? iconSizeClasses[props.size.value] : "",
            props.color.value && !props.aschild.value ? themeClasses : "",
            props.rotate.value ? "rotate-90" : "",
            props.flip.value ? "scale-x-[-1]" : "",
            props.spin.value ? "animate-spin" : "",
            props.mirror.value ? "scale-x-[-1] scale-y-[-1]" : "",
            props.type.value ? iconTypeClasses[props.type.value] : "",
            normalizeClass(props.class?.value)
        ]);
    });

    return { iconClasses };
}
