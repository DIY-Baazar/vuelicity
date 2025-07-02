<script setup>
import { computed } from "vue";

const props = defineProps({
    type: {
        type: String,
        default: "button"
    },
    name: {
        type: String,
        default: ""
    },
    value: {
        type: String,
        default: ""
    },
    disabled: {
        type: Boolean,
        default: false
    },
    className: {
        type: String,
        default: ""
    },
    as: {
        type: String,
        default: "button"
    },
    theme: {
        type: String,
        default: "primary",
        validator(value) {
            return [
                "none",
                "default",
                "primary",
                "secondary",
                "tertiary",
                "danger",
                "warning",
                "success",
                "primary-outline",
                "secondary-outline",
                "tertiary-outline",
                "danger-outline",
                "warning-outline",
                "success-outline",
                "skeletal"
            ].includes(value);
        }
    },
    rounded: {
        type: String,
        default: "none",
        validator(value) {
            return ["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"].includes(value);
        }
    }
});

const buttonThemeClassname = computed(() => {
    const baseClassname = `rounded-${
        props.rounded
    } px-0.5 md:px-2.5 py-0.5 flex items-center justify-center gap-1 shadow-${
        props.theme === "none" ? "none" : "sm"
    } focus:outline-none focus:ring-2 focus:ring-opacity-50`;
    let themeClassname = "";

    switch (props.theme) {
        case "none":
            themeClassname = "bg-transparent hover:bg-gray-200 text-dark p-0";
            break;
        case "primary":
            themeClassname = "bg-primary focus:ring-primary hover:bg-primary-dark text-white";
            break;
        case "secondary":
            themeClassname = "bg-secondary focus:ring-secondary hover:bg-secondary-dark text-white";
            break;
        case "tertiary":
            themeClassname = "bg-tertiary focus:ring-tertiary hover:bg-tertiary-dark text-white";
            break;
        case "danger":
            themeClassname = "bg-danger focus:ring-danger hover:bg-danger-dark text-white";
            break;
        case "warning":
            themeClassname = "bg-warning focus:ring-warning hover:bg-warning-dark text-white";
            break;
        case "success":
            themeClassname = "bg-success focus:ring-success hover:bg-success-dark text-white";
            break;
        case "primary-outline":
            themeClassname = "border border-primary  text-primary focus:ring-primary hover:bg-primary hover:text-white";
            break;
        case "secondary-outline":
            themeClassname =
                "border border-secondary text-secondary focus:ring-secondary hover:bg-secondary hover:text-white";
            break;
        case "tertiary-outline":
            themeClassname =
                "border border-tertiary text-tertiary focus:ring-tertiary hover:bg-tertiary hover:text-white";
            break;
        case "danger-outline":
            themeClassname = "border border-danger text-danger focus:ring-danger hover:bg-danger hover:text-white";
            break;
        case "warning-outline":
            themeClassname = "border border-warning text-warning focus:ring-warning hover:bg-warning hover:text-white";
            break;
        case "success-outline":
            themeClassname = "border border-success text-success focus:ring-success hover:bg-success hover:text-white";
            break;
        case "skeletal":
            themeClassname = "bg-gray-400 animate-pulse border-light border-t-2 cursor-not-allowed";
            break;
        default:
            themeClassname = "bg-light hover:bg-gray-200 text-dark";
    }

    return [baseClassname, themeClassname, props.disabled ? "opacity-50 cursor-not-allowed" : ""].join(" ");
});
</script>

<template>
    <button
        v-if="as === 'button'"
        :type="type"
        :name="name"
        :value="value"
        :disabled="disabled"
        :class="[buttonThemeClassname, className].join(' ')"
        v-bind="$attrs"
    >
        <slot></slot>
    </button>
    <a v-if="as === 'a'" :href="value" :class="[buttonThemeClassname, className].join(' ')" v-bind="$attrs">
        <slot></slot>
    </a>
</template>
