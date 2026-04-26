import { computed, type Ref } from "vue";
import type { CardVariant } from "./types";
import type { ClassRef } from "@/types/global";
import { normalizeClasses } from "@/composables/useMergeClasses";

interface UseCardClassesProps {
    variant: Ref<CardVariant>;
    class: ClassRef;
    href: Ref<string>;
}

const cardVariantClasses: Record<CardVariant, string> = {
    "default": "block min-w-sm rounded-lg border border-gray-200 shadow-md",
    "image": "min-w-sm rounded-lg border border-gray-200 shadow-md",
    "horizontal": "flex flex-col items-center rounded-lg border shadow-md md:flex-row md:min-w-xl"
};

export function useCardClasses (props: UseCardClassesProps): {
    cardClasses: Ref<string>;
    horizontalImgClasses: Ref<string>;
} {
    const cardClasses = computed(() => {
        return [
            cardVariantClasses[props.variant.value],
            (!props.class.value || !normalizeClasses(props.class.value).includes("bg-")) ? "bg-white" : "",
            props.href.value && !normalizeClasses(props.class.value).includes("hover:") ? "hover:bg-gray-100" : "",
        ].join(" ");
    });

    const horizontalImgClasses = computed(() => {
        return [
            props.variant.value === "horizontal" ? "object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" : "",
        ].join(" ");
    });

    return {
        cardClasses,
        horizontalImgClasses
    };
}