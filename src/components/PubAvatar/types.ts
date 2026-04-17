export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarStatus = "online" | "offline" | "away" | "busy";
export type AvatarStatusPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left";
export type AvatarType = "rounded" | "default";

export interface AvatarProps {
    size?: AvatarSize;
    src?: string | null;
    rounded?: boolean;
    bordered?: boolean;
    class?: string;
    alt?: string;
    status?: AvatarStatus | null;
    statusPosition?: AvatarStatusPosition | null;
    initials?: string | null;
    stacked?: boolean;
}

export interface AvatarStackCounterProps {
    total: number;
    href: string;
}

export type AvatarDotIndicatorPositionClasses = `${AvatarStatusPosition}-${AvatarType}`;
