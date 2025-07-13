import { useSlots, type Ref } from "vue";
import type { ModalPosition, ModalSize, ModalZIndex } from "./types";

const modalSizeClasses: Record<ModalSize, string> = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl"
};

const modalPositionClasses: Record<ModalPosition, string> = {
    "top-start": "self-start justify-self-start",
    "top-center": "self-start justify-self-center",
    "top-end": "self-start justify-self-end",
    "center-start": "self-center justify-self-start",
    center: "self-center justify-self-center",
    "center-end": "self-center justify-self-end",
    "bottom-start": "self-end justify-self-start",
    "bottom-center": "self-end justify-self-center",
    "bottom-end": "self-end justify-self-end"
};

const modalZIndexClasses: Record<ModalZIndex, string> = {
    10: "z-10",
    20: "z-20",
    30: "z-30",
    40: "z-40",
    50: "z-50"
};

interface UseModalClassesProps {
    size: Ref<ModalSize>;
    position: Ref<ModalPosition>;
    zIndex: Ref<ModalZIndex>;
    overlayBlur: Ref<boolean>;
    scrollable: Ref<boolean>;
}

export function useModalClasses(props: UseModalClassesProps): {
    wrapperClasses: string;
    spanClasses: string;
} {
    const wrapperClasses = [
        modalZIndexClasses[props.zIndex.value],
        props.overlayBlur.value ? "backdrop-blur bg-gray-900/20" : "bg-gray-900/50"
    ].join(" ");

    const spanClasses = [
        modalSizeClasses[props.size.value],
        modalPositionClasses[props.position.value],
    ].join(" ");

    return { wrapperClasses, spanClasses };
}
