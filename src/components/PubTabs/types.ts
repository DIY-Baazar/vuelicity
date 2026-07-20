import type { ClassInput } from "@/types/global";

export type TabsVariant = "default" | "underline" | "pills";
export type TabsIconPosition = "left" | "right";

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
}
