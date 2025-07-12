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
        warning: "bg-warning focus:ring-warning text-black",
        success: "bg-success focus:ring-success text-white",
        info: "bg-info focus:ring-info text-white",
        light: "bg-light text-dark",
        dark: "bg-dark text-white"
    },
    hover: {
        none: "hover:bg-gray-200 hover:text-black",
        default: "hover:bg-gray-200 hover:text-black",
        primary: "hover:bg-primary-dark hover:text-gray-200",
        secondary: "hover:bg-secondary-dark hover:text-gray-200",
        tertiary: "hover:bg-tertiary-dark hover:text-gray-200",
        danger: "hover:bg-danger-dark hover:text-gray-200",
        warning: "hover:bg-warning-dark hover:text-gray-800",
        success: "hover:bg-success-dark hover:text-gray-200",
        info: "hover:bg-info-dark hover:text-gray-200",
        light: "hover:bg-gray-200 hover:text-gray-800",
        dark: "hover:bg-gray-800 hover:text-gray-200"
    }
};

const buttonOutlineThemeClasses: ButtonClassMap<ButtonTheme> = {
    default: {
        none: "bg-transparent text-dark p-0",
        default: "border-light focus:ring-light text-light",
        primary: "border-primary focus:ring-primary text-primary",
        secondary: "border-secondary focus:ring-secondary text-secondary",
        tertiary: "border-tertiary focus:ring-tertiary text-tertiary",
        danger: "border-danger focus:ring-danger text-danger",
        warning: "border-warning focus:ring-warning text-warning",
        success: "border-success focus:ring-success text-success",
        info: "border-info focus:ring-info text-info",
        light: "border-light focus:ring-light text-light",
        dark: "border-dark focus:ring-dark text-dark"
    },
    hover: {
        none: "hover:bg-gray-200 hover:text-black",
        default: "hover:bg-light hover:text-dark",
        primary: "hover:bg-primary-dark hover:text-gray-200",
        secondary: "hover:bg-secondary-dark hover:text-gray-200",
        tertiary: "hover:bg-tertiary-dark hover:text-gray-200",
        danger: "hover:bg-danger-dark hover:text-gray-200",
        warning: "hover:bg-warning-dark hover:text-gray-800",
        success: "hover:bg-success-dark hover:text-gray-200",
        info: "hover:bg-info-dark hover:text-gray-200",
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
    class: Ref<string>;
    outline: Ref<boolean>;
    disabled: Ref<boolean>;
    loading: Ref<boolean>;
    skeleton: Ref<boolean>;
}

export function useButtonClasses(props: UseButtonClassesProps): { wrapperClasses: string; spanClasses: string } {
    const slots = useSlots();
    const themeClasses = [
        props.skeleton.value
            ? "animate-pulse bg-gray-200 dark:bg-gray-500 text-transparent rounded-md cursor-not-allowed"
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
        buttonSizeClasses[props.size.value],
        buttonRoundedClasses[props.rounded.value],
        props.disabled.value || props.loading.value ? "cursor-not-allowed opacity-50" : "",
        props.class.value
    ].join(" ");
    const spanClasses = slots.default ? "inline-flex items-center" : "flex items-center";
    return { wrapperClasses, spanClasses };
}
