export type ButtonTheme =
    | "none"
    | "default"
    | "blue"
    | "red"
    | "yellow"
    | "green"
    | "magenta"
    | "cyan"
    | "light"
    | "dark";
export type ButtonType = "button" | "submit" | "reset";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ButtonRounded = "none" | "sm" | "md" | "lg" | "xl" | "full";
export interface ButtonProps {
    theme?: ButtonTheme;
    type?: ButtonType;
    name?: string;
    to?: string;
    disabled?: boolean;
    class?: string;
    outline?: boolean;
    skeleton?: boolean;
    loading?: boolean;
    size?: ButtonSize;
    rounded?: ButtonRounded;
    square?: boolean;
    as?: "button" | "a";
    linkAttr?: string;
};