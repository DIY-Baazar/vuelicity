export type ModalPosition =
    | "bottom-start"
    | "bottom-end"
    | "bottom-center"
    | "top-start"
    | "top-center"
    | "top-end"
    | "center-start"
    | "center"
    | "center-end";
export type ModalSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
export type ModalZIndex = 10 | 20 | 30 | 40 | 50;
export interface ModalProps {
    position?: ModalPosition;
    size?: ModalSize;
    isOpen?: boolean;
    zIndex?: ModalZIndex;
    class?: string;
    persistent?: boolean;
    notEscapeClose?: boolean;
    notClickClose?: boolean;
    overlayBlur?: boolean;
    scrollable?: boolean;
    focusTrap?: boolean;
};