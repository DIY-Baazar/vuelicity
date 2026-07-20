import { useMergeClasses } from "@/composables/useMergeClasses";
import { normalizeClass, type Ref } from "vue";
import type { TabsVariant } from "./types";
import type { ClassRef } from "@/types/global";

interface UseTabsClassesProps {
  variant: Ref<TabsVariant>;
  tabClass: ClassRef;
  vertical: Ref<Boolean>;
}

const baseTabsClasses = "flex text-sm font-medium text-gray-500";

export function useTabsClasses(props: UseTabsClassesProps) {
  const tabClasses = useMergeClasses([
    baseTabsClasses,
    props.vertical.value ? "flex-col" : "flex-wrap",
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
    normalizeClass(props.tabClass),
  ]);

  return {
    tabClasses,
  };
}
