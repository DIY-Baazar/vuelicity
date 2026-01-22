import { type Ref } from "vue";
import type { IconSize, IconTheme } from "./types";

const iconSizeClasses: Record<IconSize, string> = {
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

const iconThemeClasses: Record<IconTheme, string> = {
    default: "text-dark dark:text-white",
    blue: "text-blue",
    red: "text-red",
    yellow: "text-yellow",
    green: "text-green",
    magenta: "text-magenta",
    cyan: "text-cyan",
    light: "text-light",
    dark: "text-dark"
};

interface UseIconClassesProps {
    size: Ref<IconSize | undefined>;
    theme: Ref<IconTheme | undefined>;
    rotate: Ref<boolean | undefined>;
    flip: Ref<boolean | undefined>;
    spin: Ref<boolean | undefined>;
    mirror: Ref<boolean | undefined>;
    aschild: Ref<boolean | undefined>;
}

export function useIconClasses(props: UseIconClassesProps): string {
    const wrapperClasses = [
        "inline-block",
        props.size.value ? iconSizeClasses[props.aschild.value ? "sm" : props.size.value] : "",
        props.theme.value ? iconThemeClasses[props.aschild.value ? "light" : props.theme.value] : "",
        props.rotate.value ? "rotate-90" : "",
        props.flip.value ? "scale-x-[-1]" : "",
        props.spin.value ? "animate-spin" : "",
        props.mirror.value ? "scale-x-[-1] scale-y-[-1]" : ""
    ].join(" ");

    return wrapperClasses;
}
