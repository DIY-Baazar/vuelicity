export type NavbarTheme = "default" | "light" | "dark";

interface NavbarProps {
    class?: string;
    containerClass?: string;
    sticky?: boolean;
    rounded?: boolean;
    solid?: boolean;
    theme?: NavbarTheme;
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
}

interface NavbarLinkProps {
    link?: string;
    isActive?: boolean;
    as?: string;
    linkAttr?: string;
    disabled?: boolean;
}

export type { NavbarLogoProps, NavbarProps, NavbarCollapseProps, NavbarLinkProps };