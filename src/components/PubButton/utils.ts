import { type Ref, useSlots } from "vue";
import type { ButtonRounded, ButtonSize, ButtonTheme } from "./types";

export type ButtonClassMap<T extends string> = { hover: Record<T, string>; default: Record<T, string> };

const defaultSpanButtonClasses = "flex items-center gap-2";
const skletonButtonClasses = "animate-pulse bg-gray-200 dark:bg-gray-500 text-transparent rounded-md cursor-not-allowed";

const buttonThemeClasses: ButtonClassMap<ButtonTheme> = {
    default: {
        none: "bg-transparent text-grey-900",
        default: "bg-grey-100 text-grey-900",
        blue: "border-blue bg-blue focus:ring-blue text-white",
        red: "border-red bg-red focus:ring-red text-white",
        yellow: "border-yellow bg-yellow focus:ring-yellow text-black",
        green: "border-green bg-green focus:ring-green text-white",
        magenta: "border-magenta bg-magenta focus:ring-magenta text-white",
        cyan: "border-cyan bg-cyan focus:ring-cyan text-white",
        light: "border-light bg-light text-dark",
        dark: "border-dark bg-dark text-white"
    },
    hover: {
        none: "hover:bg-grey-200 hover:text-black",
        default: "hover:bg-grey-200 hover:text-black",
        blue: "hover:bg-blue-600 hover:text-grey-200",
        red: "hover:bg-red-600 hover:text-grey-200",
        yellow: "hover:bg-yellow-600 hover:text-grey-800",
        green: "hover:bg-green-600 hover:text-grey-200",
        magenta: "hover:bg-magenta-600 hover:text-grey-200",
        cyan: "hover:bg-cyan-600 hover:text-grey-200",
        light: "hover:bg-grey-200 hover:text-grey-800",
        dark: "hover:bg-grey-600 hover:text-grey-200"
    }
};

const buttonOutlineThemeClasses: ButtonClassMap<ButtonTheme> = {
    default: {
        none: "bg-transparent text-dark p-0",
        default: "border-light focus:ring-light text-light",
        blue: "border-blue focus:ring-blue text-blue",
        red: "border-red focus:ring-red text-red",
        yellow: "border-yellow focus:ring-yellow text-yellow",
        green: "border-green focus:ring-green text-green",
        magenta: "border-magenta focus:ring-magenta text-magenta",
        cyan: "border-cyan focus:ring-cyan text-cyan",
        light: "border-grey-500 focus:ring-light text-grey-500",
        dark: "border-dark focus:ring-dark text-dark"
    },
    hover: {
        none: "hover:bg-gray-200 hover:text-black",
        default: "hover:bg-light hover:text-dark",
        blue: "hover:bg-blue-600 hover:text-gray-200",
        red: "hover:bg-red-600 hover:text-gray-200",
        yellow: "hover:bg-yellow-600 hover:text-gray-800",
        green: "hover:bg-green-600 hover:text-gray-200",
        magenta: "hover:bg-magenta-600 hover:text-gray-200",
        cyan: "hover:bg-cyan-600 hover:text-gray-200",
        light: "hover:bg-gray-200 hover:text-gray-800",
        dark: "hover:bg-gray-800 hover:text-gray-200"
    }
};

const buttonSizeClasses: Record<ButtonSize, string> = {
    xs: "text-xs px-2 py-1",
    sm: "text-sm px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-5 py-2.5",
    xl: "text-base px-6 py-3"
};

const buttonSquareSizeClasses: Record<ButtonSize, string> = {
    xs: 'text-xs p-1',
    sm: 'text-sm p-1.5',
    md: 'text-sm p-2',
    lg: 'text-base p-2.5',
    xl: 'text-base p-3',
};

const buttonRoundedClasses: Record<ButtonRounded, string> = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full"
};

interface UseButtonClassesProps {
    theme: Ref<ButtonTheme>;
    size: Ref<ButtonSize>;
    rounded: Ref<ButtonRounded>;
    outline: Ref<boolean | undefined>;
    disabled: Ref<boolean | undefined>;
    loading: Ref<boolean | undefined>;
    skeleton: Ref<boolean | undefined>;
    square: Ref<boolean>;
}

export function useButtonClasses(props: UseButtonClassesProps): { wrapperClasses: string; spanClasses: string } {
    const slots = useSlots();
    const themeClasses = [
        props.skeleton.value
            ? skletonButtonClasses
            : [
                props.outline.value
                    ? buttonOutlineThemeClasses.default[props.theme.value]
                    : buttonThemeClasses.default[props.theme.value],
                props.outline.value
                    ? buttonOutlineThemeClasses.hover[props.theme.value]
                    : buttonThemeClasses.hover[props.theme.value]
            ].join(" ")
    ];
    const wrapperClasses = [
        ...themeClasses,
        props.square.value ? buttonSquareSizeClasses[props.size.value] : buttonSizeClasses[props.size.value],
        buttonRoundedClasses[props.rounded.value],
        props.disabled.value || props.loading.value ? "cursor-not-allowed opacity-50" : "",
        props.theme.value === "none" ? "border-0" : "border",
    ].join(" ");
    const spanClasses = [defaultSpanButtonClasses].join(" ");
    return { wrapperClasses, spanClasses };
}
