import { computed } from "vue";

export type ThemeColor =
  | "blue"
  | "red"
  | "green"
  | "yellow"
  | "cyan"
  | "pink"
  | "grey";

type ThemeMap = {
  background: string;
  border: string;
  disabled: string;
  focus: string;
  hover: string;
  text: string;
};

type Themes<T extends string = string> = Record<T, ThemeMap>;

const themeClasses: Themes<ThemeColor> = {
  blue: {
    background: "bg-blue-700 dark:bg-blue-600",
    border: "border-blue-600 dark:border-blue-500",
    disabled: "",
    focus: "focus:ring-blue-300 dark:focus:ring-blue-800",
    hover: "hover:bg-blue-800 dark:hover:bg-blue-700",
    text: "text-blue-600 dark:text-blue-500",
  },

  red: {
    background: "bg-red-700 dark:bg-red-600",
    border: "border-red-600 dark:border-red-500",
    disabled: "",
    focus: "focus:ring-red-300 dark:focus:ring-red-800",
    hover: "hover:bg-red-800 dark:hover:bg-red-700",
    text: "text-red-600 dark:text-red-500",
  },

  green: {
    background: "bg-green-700 dark:bg-green-600",
    border: "border-green-600 dark:border-green-500",
    disabled: "",
    focus: "focus:ring-green-300 dark:focus:ring-green-800",
    hover: "hover:bg-green-800 dark:hover:bg-green-700",
    text: "text-green-600 dark:text-green-500",
  },

  yellow: {
    background: "bg-yellow-500 dark:bg-yellow-400",
    border: "border-yellow-400 dark:border-yellow-300",
    disabled: "",
    focus: "focus:ring-yellow-300 dark:focus:ring-yellow-800",
    hover: "hover:bg-yellow-600 dark:hover:bg-yellow-500",
    text: "text-yellow-600 dark:text-yellow-500",
  },

  cyan: {
    background: "bg-cyan-700 dark:bg-cyan-600",
    border: "border-cyan-600 dark:border-cyan-500",
    disabled: "",
    focus: "focus:ring-cyan-300 dark:focus:ring-cyan-800",
    hover: "hover:bg-cyan-800 dark:hover:bg-cyan-700",
    text: "text-cyan-600 dark:text-cyan-500",
  },

  pink: {
    background: "bg-pink-700 dark:bg-pink-600",
    border: "border-pink-600 dark:border-pink-500",
    disabled: "",
    focus: "focus:ring-pink-300 dark:focus:ring-pink-800",
    hover: "hover:bg-pink-800 dark:hover:bg-pink-700",
    text: "text-pink-600 dark:text-pink-500",
  },

  grey: {
    background: "bg-gray-700 dark:bg-gray-600",
    border: "border-gray-600 dark:border-gray-500",
    disabled: "",
    focus: "focus:ring-gray-300 dark:focus:ring-gray-800",
    hover: "hover:bg-gray-800 dark:hover:bg-gray-700",
    text: "text-gray-600 dark:text-gray-500",
  },
};

export function useThemeColor(color: ThemeColor) {
  const backgroundClasses = computed(() =>
    color ? themeClasses[color].background : "",
  );

  const borderClasses = computed(() =>
    color ? themeClasses[color].border : "",
  );

  const disabledClasses = computed(() =>
    color ? themeClasses[color].disabled : "",
  );

  const focusClasses = computed(() => (color ? themeClasses[color].focus : ""));

  const hoverClasses = computed(() => (color ? themeClasses[color].hover : ""));

  const textClasses = computed(() => (color ? themeClasses[color].text : ""));

  return {
    backgroundClasses,
    borderClasses,
    disabledClasses,
    focusClasses,
    hoverClasses,
    textClasses,
  };
}
