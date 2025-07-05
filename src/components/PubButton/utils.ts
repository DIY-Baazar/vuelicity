import { type Ref, useSlots } from "vue";
import type { ButtonRounded, ButtonSize, ButtonTheme } from "./types";

export type ButtonClassMap<T extends string> = { hover: Record<T, string>; default: Record<T, string> };

const buttonThemeClasses: ButtonClassMap<ButtonTheme> = {
    default: {
        none: "bg-transparent text-dark p-0",
        default: "bg-light text-dark",
        primary: "bg-primary focus:ring-primary text-white",
        secondary: "bg-secondary focus:ring-secondary text-white",
        tertiary: "bg-tertiary focus:ring-tertiary text-white",
        danger: "bg-danger focus:ring-danger text-white",
        warning: "bg-warning focus:ring-warning text-white",
        success: "bg-success focus:ring-success text-white",
        info: "bg-info focus:ring-info text-white",
        light: "bg-light text-gray-800",
        dark: "bg-dark text-gray-200"
    },
    hover: {
        none: "hover:bg-gray-200 hover:text-dark",
        default: "hover:bg-gray-200 hover:text-dark",
        primary: "hover:bg-primary-dark hover:text-white",
        secondary: "hover:bg-secondary-dark hover:text-white",
        tertiary: "hover:bg-tertiary-dark hover:text-white",
        danger: "hover:bg-danger-dark hover:text-white",
        warning: "hover:bg-warning-dark hover:text-white",
        success: "hover:bg-success-dark hover:text-white",
        info: "hover:bg-info-dark hover:text-white",
        light: "hover:bg-gray-200 hover:text-dark",
        dark: "hover:bg-gray-800 hover:text-white"
    }
};

const buttonSizeClasses: Record<ButtonSize, string> = {
    xs: "text-xs px-2 py-1",
    sm: "text-sm px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-5 py-2.5",
    xl: "text-base px-6 py-3"
};

const buttonRoundedClasses: Record<ButtonRounded, string> = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full"
};

interface UseButtonClassesProps {
    theme: Ref<ButtonTheme>;
    size: Ref<ButtonSize>;
    rounded: Ref<ButtonRounded>;
    class: Ref<string>;
}

export function useButtonClasses(props: UseButtonClassesProps): { wrapperClasses: string; spanClasses: string } {
    const slots = useSlots();
    const wrapperClasses = [
        buttonThemeClasses.default[props.theme.value],
        buttonThemeClasses.hover[props.theme.value],
        buttonSizeClasses[props.size.value],
        buttonRoundedClasses[props.rounded.value],
        props.class.value
    ].join(" ");
    const spanClasses = slots.default ? "inline-flex items-center" : "flex items-center";
    return { wrapperClasses, spanClasses };
}
