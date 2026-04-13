import type { ClassInput } from "@/types/global";

export type AlertTheme = "green" | "blue" | "yellow" | "red" | "dark";

export interface AlertProps {
    theme: AlertTheme;
    dismissible: boolean;
    bordered: boolean;
    showIcon: boolean;
    duration?: number;
    class: ClassInput;
}