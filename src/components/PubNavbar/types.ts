export type PubNavbarTheme = "default" | "light" | "dark";

interface PubNavbarProps {
    class: string;
    containerClass?: string;
    sticky?: boolean;
    rounded?: boolean;
    solid?: boolean;
    theme?: PubNavbarTheme;
}

interface PubNavbarLogoProps {
    link?: string;
    imageUrl?: string;
    alt?: string;
    as?: string;
    linkAttr?: string;
}

interface PubNavbarCollapseProps {
    isShowMenu: boolean;
}

interface PubNavbarLinkProps {
    link?: string;
    isActive?: boolean;
    as?: string;
    linkAttr?: string;
    disabled?: boolean;
}

export type { PubNavbarLogoProps, PubNavbarProps, PubNavbarCollapseProps, PubNavbarLinkProps };