import { computed } from "vue";

export type ThemeColor = "blue" | "red" | "green" | "yellow" | "cyan" | "pink" | "grey" | "purple";

type ThemeMap = {
    background: string;
    backgroundLight: string;
    backgroundLighter: string;
    border: string;
    disabled: string;
    focus: string;
    hover: string;
    fill: string;
    text: string;
    textDark: string;
};

type Themes<T extends string = string> = Record<T, ThemeMap>;

export function isThemeColor(color: string): color is ThemeColor {
    return ["blue", "red", "green", "yellow", "cyan", "pink", "grey", "purple"].includes(color);
}

const themeClasses: Themes<ThemeColor> = {
    blue: {
        background: "bg-blue-600 dark:bg-blue-500",
        backgroundLight: "bg-blue-100 dark:bg-blue-800",
        backgroundLighter: "bg-blue-50 dark:bg-blue-900",
        border: "border-blue-600 dark:border-blue-500",
        disabled: "",
        focus: "focus:ring-blue-300 dark:focus:ring-blue-800",
        hover: "hover:bg-blue-700 dark:hover:bg-blue-600",
        text: "text-blue-500 dark:text-blue-400",
        textDark: "text-blue-800 dark:text-blue-200",
        fill: "fill-blue-600 dark:fill-blue-500"
    },

    red: {
        background: "bg-red-600 dark:bg-red-500",
        backgroundLight: "bg-red-100 dark:bg-red-800",
        backgroundLighter: "bg-red-50 dark:bg-red-900",
        border: "border-red-600 dark:border-red-500",
        disabled: "",
        focus: "focus:ring-red-300 dark:focus:ring-red-800",
        hover: "hover:bg-red-700 dark:hover:bg-red-600",
        text: "text-red-500 dark:text-red-400",
        textDark: "text-red-800 dark:text-red-200",
        fill: "fill-red-600 dark:fill-red-500"
    },

    green: {
        background: "bg-green-600 dark:bg-green-500",
        backgroundLight: "bg-green-100 dark:bg-green-800",
        backgroundLighter: "bg-green-50 dark:bg-green-900",
        border: "border-green-600 dark:border-green-500",
        disabled: "",
        focus: "focus:ring-green-300 dark:focus:ring-green-800",
        hover: "hover:bg-green-700 dark:hover:bg-green-600",
        text: "text-green-500 dark:text-green-400",
        textDark: "text-green-800 dark:text-green-200",
        fill: "fill-green-600 dark:fill-green-500"
    },

    yellow: {
        background: "bg-yellow-600 dark:bg-yellow-500",
        backgroundLight: "bg-yellow-100 dark:bg-yellow-800",
        backgroundLighter: "bg-yellow-50 dark:bg-yellow-900",
        border: "border-yellow-600 dark:border-yellow-500",
        disabled: "",
        focus: "focus:ring-yellow-300 dark:focus:ring-yellow-800",
        hover: "hover:bg-yellow-700 dark:hover:bg-yellow-600",
        text: "text-yellow-500 dark:text-yellow-400",
        textDark: "text-yellow-800 dark:text-yellow-200",
        fill: "fill-yellow-600 dark:fill-yellow-500"
    },

    cyan: {
        background: "bg-cyan-600 dark:bg-cyan-500",
        backgroundLight: "bg-cyan-100 dark:bg-cyan-800",
        backgroundLighter: "bg-cyan-50 dark:bg-cyan-900",
        border: "border-cyan-600 dark:border-cyan-500",
        disabled: "",
        focus: "focus:ring-cyan-300 dark:focus:ring-cyan-800",
        hover: "hover:bg-cyan-700 dark:hover:bg-cyan-600",
        text: "text-cyan-500 dark:text-cyan-400",
        textDark: "text-cyan-800 dark:text-cyan-200",
        fill: "fill-cyan-600 dark:fill-cyan-500"
    },

    pink: {
        background: "bg-pink-600 dark:bg-pink-500",
        backgroundLight: "bg-pink-100 dark:bg-pink-800",
        backgroundLighter: "bg-pink-50 dark:bg-pink-900",
        border: "border-pink-600 dark:border-pink-500",
        disabled: "",
        focus: "focus:ring-pink-300 dark:focus:ring-pink-800",
        hover: "hover:bg-pink-700 dark:hover:bg-pink-600",
        text: "text-pink-500 dark:text-pink-400",
        textDark: "text-pink-800 dark:text-pink-200",
        fill: "fill-pink-600 dark:fill-pink-500"
    },

    grey: {
        background: "bg-gray-600 dark:bg-gray-500",
        backgroundLight: "bg-gray-200 dark:bg-gray-800",
        backgroundLighter: "bg-gray-100 dark:bg-gray-900",
        border: "border-gray-600 dark:border-gray-500",
        disabled: "",
        focus: "focus:ring-gray-300 dark:focus:ring-gray-800",
        hover: "hover:bg-gray-700 dark:hover:bg-gray-600",
        text: "text-gray-500 dark:text-gray-400",
        textDark: "text-gray-800 dark:text-gray-200",
        fill: "fill-gray-600 dark:fill-gray-500"
    },

    purple: {
        background: "bg-purple-600 dark:bg-purple-500",
        backgroundLight: "bg-purple-100 dark:bg-purple-800",
        backgroundLighter: "bg-purple-50 dark:bg-purple-900",
        border: "border-purple-600 dark:border-purple-500",
        disabled: "",
        focus: "focus:ring-purple-300 dark:focus:ring-purple-800",
        hover: "hover:bg-purple-700 dark:hover:bg-purple-600",
        text: "text-purple-500 dark:text-purple-400",
        textDark: "text-purple-800 dark:text-purple-200",
        fill: "fill-purple-600 dark:fill-purple-500"
    }
};

export function useThemeColor(color: ThemeColor) {
    if(!isThemeColor(color)) {
        throw new Error(`Color '${color}' is not a valid theme color`);
    }
    const backgroundClasses = computed(() => (color ? themeClasses[color].background : ""));

    const backgroundLightClasses = computed(() => (color ? themeClasses[color].backgroundLight : ""));

    const backgroundLighterClasses = computed(() => (color ? themeClasses[color].backgroundLighter : ""));

    const borderClasses = computed(() => (color ? themeClasses[color].border : ""));

    const disabledClasses = computed(() => (color ? themeClasses[color].disabled : ""));

    const focusClasses = computed(() => (color ? themeClasses[color].focus : ""));

    const hoverClasses = computed(() => (color ? themeClasses[color].hover : ""));

    const textClasses = computed(() => (color ? themeClasses[color].text : ""));

    const textDarkClasses = computed(() => (color ? themeClasses[color].textDark : ""));

    const fillClasses = computed(() => (color ? themeClasses[color].fill : ""));

    return {
        backgroundClasses,
        backgroundLightClasses,
        backgroundLighterClasses,
        borderClasses,
        disabledClasses,
        focusClasses,
        hoverClasses,
        textClasses,
        textDarkClasses,
        fillClasses
    };
}
