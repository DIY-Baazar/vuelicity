import type { ThemeColor } from "@/composables/useThemeColor";
import type { ClassInput } from "@/types/global";

export type TabsVariant = "default" | "underline" | "pills";
export type TabsIconPosition = "left" | "right";
export type TabsColor = ThemeColor;
// | "default"
// | "red"
// | "blue"
// | "yellow"
// | "green"
// | "magenta"
// | "cyan"
// | "light"
// | "dark"

export interface TabsProps {
  variant?: TabsVariant;
  modelValue?: string;
  directive?: "if" | "show";
  tabClass?: ClassInput;
  itemClass?: ClassInput;
  itemActiveClass?: ClassInput;
  iconPosition?: TabsIconPosition;
  vertical?: boolean;
  fullWidth?: boolean;
  color?: TabsColor;
}

export interface TabsState extends TabsProps {}

export interface TabProps {
  name: string;
  title?: string;
  disabled?: boolean;
}

export interface TabContentProps {
  name: string;
  title: string;
  disabled: boolean;
  active: boolean;
}
