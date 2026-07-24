import { useMergeClasses } from "@/composables/useMergeClasses";
import { computed, type Ref } from "vue";
import type { SpinnerColor, SpinnerSize } from "./types";

const sizes: Record<SpinnerSize, string> = {
  0: "w-0 h-0",
  0.5: "w-0.5 h-0.5",
  1: "w-1 h-1",
  1.5: "w-1.5 h-1.5",
  10: "w-10 h-10",
  11: "w-11 h-11",
  12: "w-12 h-12",
  2: "w-2 h-2",
  2.5: "w-2.5 h-2.5",
  3: "w-3 h-3",
  4: "w-4 h-4",
  5: "w-5 h-5",
  6: "w-6 h-6",
  7: "w-7 h-7",
  8: "w-8 h-8",
  9: "w-9 h-9",
};

const colors: Record<SpinnerColor, string> = {
  blue: "fill-blue-600",
  grey: "fill-grey-600",
  green: "fill-green-500",
  pink: "fill-pink-600",
  purple: "fill-purple-600",
  red: "fill-red-600",
  white: "fill-white",
  yellow: "fill-yellow-400",
};

export type UseSpinnerClassesProps = {
  color: Ref<SpinnerColor>;
  size: Ref<SpinnerSize>;
};

export function useSpinnerClasses(props: UseSpinnerClassesProps): {
  spinnerClasses: Ref<string>;
  customColor: Ref<string | null>;
} {
  const colorClasses = computed(
    () => colors[props.color.value as SpinnerColor] ?? "",
  );
  const customColor = computed(() =>
    colorClasses.value ? null : (props.color.value as string),
  );

  const spinnerClasses = computed(() =>
    useMergeClasses([
      "animate-spin",
      "text-grey-200",
      colors[props.color.value as SpinnerColor] ?? "",
      sizes[props.size.value],
    ]),
  );

  return { spinnerClasses, customColor };
}
