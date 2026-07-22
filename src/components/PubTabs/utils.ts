import { useMergeClasses } from "@/composables/useMergeClasses";
import { computed, normalizeClass, type Ref } from "vue";
import type { TabsTheme, TabsVariant } from "./types";
import type { ClassRef } from "@/types/global";

interface UseTabsClassesProps {
  variant: Ref<TabsVariant>;
  tabClass: ClassRef;
  vertical: Ref<boolean>;
}

interface UseTabClassesProps {
  active: Ref<boolean>;
  disabled: Ref<boolean>;
  variant: Ref<TabsVariant>;
  itemClass: ClassRef;
  itemActiveClass: ClassRef;
  vertical: Ref<boolean>;
  fullWidth: Ref<boolean>;
  theme: Ref<TabsTheme>;
}

export type TabClassMap = {
  active: string;
  default: string;
  disabled: string;
};

const baseTabsClasses = "flex text-sm font-medium text-gray-500";

const defaultTabClasses: TabClassMap = {
  default:
    "cursor-pointer inline-flex items-center gap-2 p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300",
  active:
    "cursor-pointer inline-flex items-center gap-2 p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500",
  disabled:
    "inline-flex items-center gap-2 p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500",
};
const underlineTabClasses: TabClassMap = {
  default:
    "cursor-pointer inline-flex items-center gap-2 p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",
  active:
    "cursor-pointer inline-flex items-center gap-2 p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500",
  disabled:
    "inline-flex items-center gap-2 p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500",
};
const pillsTabClasses: TabClassMap = {
  default:
    "cursor-pointer inline-flex items-center gap-2 py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
  active:
    "cursor-pointer inline-flex items-center gap-2 py-3 px-4 text-white bg-blue-600 rounded-lg active",
  disabled:
    "inline-flex items-center gap-2 py-3 px-4 text-gray-400 cursor-not-allowed dark:text-gray-500",
};

const verticalDefaultTabClasses: TabClassMap = {
  default:
    "cursor-pointer flex items-center gap-2 w-full text-left p-4 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300",
  active:
    "cursor-pointer flex items-center gap-2 w-full text-left p-4 text-blue-600 bg-gray-100 active dark:bg-gray-800 dark:text-blue-500",
  disabled:
    "flex items-center gap-2 w-full text-left p-4 text-gray-400 cursor-not-allowed dark:text-gray-500",
};
const verticalUnderlineTabClasses: TabClassMap = {
  default:
    "cursor-pointer flex items-center gap-2 w-full text-left p-4 border-r-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",
  active:
    "cursor-pointer flex items-center gap-2 w-full text-left p-4 text-blue-600 border-r-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500",
  disabled:
    "flex items-center gap-2 w-full text-left p-4 text-gray-400 cursor-not-allowed dark:text-gray-500",
};
const verticalPillsTabClasses: TabClassMap = {
  default:
    "cursor-pointer flex items-center gap-2 w-full text-left py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
  active:
    "cursor-pointer flex items-center gap-2 w-full text-left py-3 px-4 text-white bg-blue-600 rounded-lg active",
  disabled:
    "flex items-center gap-2 w-full text-left py-3 px-4 text-gray-400 cursor-not-allowed dark:text-gray-500",
};

const tabThemeTextClasses: Record<TabsTheme, string> = {
  default: "text-blue",
  red: "text-red-600",
  blue: "text-blue-600",
  green: "text-green-600",
  yellow: "text-yellow-600",
  cyan: "text-cyan-600",
  magenta: "text-magenta-600",
  dark: "text-white",
  light: "text-dark",
};

const tabThemeBorderClasses: Record<TabsTheme, string> = {
  default: "border-blue-600",
  red: "border-red-600",
  blue: "border-blue-600",
  green: "border-green-600",
  yellow: "border-yellow-600",
  cyan: "border-cyan-600",
  magenta: "border-magenta-600",
  dark: "border-gray-500",
  light: "border-gray-600",
};

const tabThemeBgClasses: Record<TabsTheme, string> = {
  default: "bg-blue-700",
  red: "bg-red-700",
  blue: "bg-blue-700",
  green: "bg-green-700",
  yellow: "bg-yellow-700",
  cyan: "bg-cyan-700",
  magenta: "bg-cyan-700",
  dark: "bg-gray-400",
  light: "bg-gray-700",
};

const tabFullWidthClasses = "inline-flex items-center justify-center w-full";

export function useTabsClasses(props: UseTabsClassesProps) {
  const tabsClasses = computed(() =>
    useMergeClasses([
      baseTabsClasses,
      props.vertical.value ? "flex-col" : "flex-wrap w-full",
      props.variant.value === "default" || props.variant.value === "underline"
        ? props.vertical.value
          ? "border-r border-gray-200"
          : "border-b border-gray-200"
        : "",
      props.variant.value === "underline"
        ? props.vertical.value
          ? "-mr-px"
          : "-mb-px"
        : "",
      normalizeClass(props.tabClass.value),
    ]),
  );

  return {
    tabsClasses,
  };
}

export function useTabClasses(props: UseTabClassesProps): {
  tabClasses: Ref<string>;
} {
  const tabClasses = computed(() => {
    const tabClassType: keyof TabClassMap = props.active.value
      ? "active"
      : props.disabled.value
        ? "disabled"
        : "default";

    let baseTabClasses = null,
      isActiveThemeClasses = null;
    if (props.variant.value === "pills") {
      baseTabClasses = props.vertical.value
        ? verticalPillsTabClasses
        : pillsTabClasses;
      isActiveThemeClasses =
        tabClassType === "active"
          ? [tabThemeBgClasses[props.theme.value], "text-white"]
          : [];
    } else if (props.variant.value === "underline") {
      baseTabClasses = props.vertical.value
        ? verticalUnderlineTabClasses
        : underlineTabClasses;
      isActiveThemeClasses =
        tabClassType === "active"
          ? [
              tabThemeBorderClasses[props.theme.value],
              tabThemeTextClasses[props.theme.value],
            ]
          : [];
    } else {
      baseTabClasses = props.vertical.value
        ? verticalDefaultTabClasses
        : defaultTabClasses;
      isActiveThemeClasses =
        tabClassType === "active"
          ? [tabThemeTextClasses[props.theme.value]]
          : [];
    }

    return useMergeClasses([
      baseTabClasses[tabClassType],
      ...isActiveThemeClasses,
      normalizeClass(props.itemClass.value),
      tabClassType === "active"
        ? normalizeClass(props.itemActiveClass.value)
        : "",
      props.fullWidth.value ? tabFullWidthClasses : "",
    ]);
  });

  return {
    tabClasses,
  };
}
