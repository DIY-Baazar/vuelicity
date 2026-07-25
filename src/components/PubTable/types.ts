import type { ThemeColor } from "@/composables/useThemeColor";
import type { ClassInput } from "@/types/global";

export type TableTheme = "default" | ThemeColor;

export interface TableProps {
    class?: ClassInput;
    wrapperClass?: ClassInput;
    striped?: boolean;
    stripedColumns?: boolean;
    hoverable?: boolean;
    color?: TableTheme;
}

export interface TableState extends TableProps {}
