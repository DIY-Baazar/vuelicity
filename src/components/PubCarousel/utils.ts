import { useMergeClasses } from "@/composables/useMergeClasses";
import { computed, type Ref } from "vue";

interface UseCarouselClassesProps {
    size: Ref<number>;
}

const baseCarouselClasses = "relative overflow-hidden rounded-lg";

export const useCarouselClasses = (props: UseCarouselClassesProps) => {
    const wrapperClasses = computed(() => useMergeClasses([
        baseCarouselClasses,
        props.size.value === 56 ? "h-56" : "",
    ]));

    return { wrapperClasses };
};