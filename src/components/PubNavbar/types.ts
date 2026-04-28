import type { ClassInput } from "@/types/global";
import type { Ref } from "vue";

export type NavbarTheme = "default" | "light" | "dark";

interface NavbarProps {
    class?: ClassInput;
    containerClass?: ClassInput;
    sticky?: boolean;
    rounded?: boolean;
    solid?: boolean;
    theme?: NavbarTheme;
    noToggleButton: boolean;
}

interface NavbarLogoProps {
    link?: string;
    imageUrl?: string;
    alt?: string;
    as?: string;
    linkAttr?: string;
}

interface NavbarCollapseProps {
    isShowMenu: boolean;
    class: ClassInput;
}

interface NavbarLinkProps {
    link?: string;
    isActive?: boolean;
    as?: string;
    linkAttr?: string;
    disabled?: boolean;
    class?: ClassInput;
}

interface NavbarState extends NavbarProps {
}

export type { NavbarLogoProps, NavbarProps, NavbarCollapseProps, NavbarLinkProps, NavbarState };