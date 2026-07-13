import type { ClassInput } from "@/types/global";

export type TableTheme = "default" | "red" | "blue" | "yellow" | "green" | "magenta" | "cyan" | "light" | "dark";

export interface TableProps {
    class?: ClassInput;
    wrapperClass?: ClassInput;
    striped?: boolean;
    stripedColumns?: boolean;
    hoverable?: boolean;
    theme?: TableTheme;
}

export interface TableState {
    class?: ClassInput;
    wrapperClass?: ClassInput;
    striped?: boolean;
    stripedColumns?: boolean;
    hoverable?: boolean;
    theme?: TableTheme;
}
