import type { Ref } from "vue";

export type IconTheme =
    | "default"
    | "blue"
    | "red"
    | "yellow"
    | "green"
    | "magenta"
    | "cyan"
    | "light"
    | "dark";

export type IconSize = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";

export type IconType = "solid" | "outline" | "duotone";

export interface UseIconClassesProps {
    name: Ref<string | undefined>;
    size: Ref<IconSize | undefined>;
    type: Ref<IconType | undefined>;
    theme: Ref<IconTheme | undefined>;
    rotate: Ref<boolean | undefined>;
    flip: Ref<boolean | undefined>;
    spin: Ref<boolean | undefined>;
    mirror: Ref<boolean | undefined>;
    aschild: Ref<boolean | undefined>;
};