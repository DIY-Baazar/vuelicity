export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarStatus = "online" | "offline" | "away" | "busy";
export type AvatarStatusPosition = "top" | "right" | "bottom" | "left";


export interface AvatarProps {
    size?: AvatarSize;
    src?: string;
    rounded?: boolean;
    bordered?: boolean;
    class?: string;
    alt?: string;
    status?: AvatarStatus | null;
    statusPosition?: AvatarStatusPosition | null;
    initials?: string | null;
    stacked?: boolean;
}