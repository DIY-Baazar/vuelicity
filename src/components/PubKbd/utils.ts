import { useMergeClasses } from "@/composables/useMergeClasses";
import type { ClassRef } from "@/types/global";
import { normalizeClass, type Ref } from "vue";

interface UseKbdProps {
  hasIcon: Ref<boolean>;
  class: ClassRef;
}

const defaultKbdClasses =
  "rounded-lg border border-grey-200 bg-grey-100 px-2 py-1.5 text-xs font-semibold text-grey-800 ";
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
