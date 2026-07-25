import type { ThemeColor } from "@/composables/useThemeColor";
import type { ClassInput } from "@/types/global";

export type ButtonTheme = "none" | "default" | ThemeColor;
export type ButtonType = "button" | "submit" | "reset";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ButtonRounded = "none" | "sm" | "md" | "lg" | "xl" | "full";
export interface ButtonProps {
    color?: ButtonTheme;
    type?: ButtonType;
    name?: string;
    to?: string;
    disabled?: boolean;
    class?: ClassInput;
    outline?: boolean;
    skeleton?: boolean;
    loading?: boolean;
    size?: ButtonSize;
    rounded?: ButtonRounded;
    square?: boolean;
    as?: "button" | "a";
    linkAttr?: string;
}
