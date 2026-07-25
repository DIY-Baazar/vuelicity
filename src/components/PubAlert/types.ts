import type { ThemeColor } from "@/composables/useThemeColor";
import type { ClassInput } from "@/types/global";

export type AlertTheme = ThemeColor;

export interface AlertProps {
    color: AlertTheme;
    dismissible: boolean;
    bordered: boolean;
    showIcon: boolean;
    duration?: number;
    class: ClassInput;
}