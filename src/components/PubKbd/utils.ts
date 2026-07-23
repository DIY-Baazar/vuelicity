import { useMergeClasses } from "@/composables/useMergeClasses";
import type { ClassRef } from "@/types/global";
import { normalizeClass, type Ref } from "vue";

interface UseKbdProps {
  hasIcon: Ref<boolean>;
  class: ClassRef;
}

const defaultKbdClasses =
  "rounded-lg border border-gray-200 bg-gray-100 px-2 py-1.5 text-xs font-semibold text-gray-800 ";
const iconKbdClasses = "inline-flex items-center";

export function useKbdClasses(props: UseKbdProps) {
  const kbdClasses = useMergeClasses([
    defaultKbdClasses,
    props.hasIcon.value ? iconKbdClasses : "",
    normalizeClass(props.class.value),
  ]);

  return {
    kbdClasses,
  };
}
