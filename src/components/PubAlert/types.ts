export type AlertTheme = "green" | "blue" | "yellow" | "red" | "dark";

export interface AlertProps {
    theme: AlertTheme;
    closable: boolean;
    bordered: boolean;
    showIcon: boolean;
}