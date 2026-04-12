export type BadgeTheme =
    | "default"
    | "blue"
    | "red"
    | "yellow"
    | "green"
    | "magenta"
    | "cyan"
    | "light"
    | "dark";

export type BadgeSize = "xs" | "sm" | "md";

export interface BadgeProps {
    theme?: BadgeTheme;
    size?: BadgeSize;
    href?: string | null;
    bordered?: boolean;
    rounded?: boolean;
    class?: string;
};