import type { ClassInput } from "@/types/global";
import type { ButtonTheme } from "../PubButton/types";

export type DropdownPlacement = 'top' | 'bottom' | 'left' | 'right';
export type DropdownAlignment = 'horizontal' | 'vertical' | 'horizontal_reverse' | 'vertical_reverse';
export type DropdownType = 'button' | 'navlink';

export interface DropdownProps {
    alignToEnd: boolean;
    class: ClassInput;
    closeInside: boolean;
    theme?: ButtonTheme;
    contentWrapperClass: ClassInput;
    disabled: boolean;
    placement: DropdownPlacement;
    text: string;
    transition: string;
    triggerClass: ClassInput;
    triggerWrapperClass: ClassInput;
    duration: number;
    offsetDistance: number;
    offsetSkidding: number;
    type: DropdownType;
    isActive: boolean;
}
