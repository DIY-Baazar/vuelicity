import { useMergeClasses } from "@/composables/useMergeClasses";
import { computed, type Ref } from "vue";

interface UseBreadcrumbClassesProps {
    solid: Ref<boolean>;
}

interface UseBreadcrumbItemProps {
    href: Ref<string | null>;
    home: Ref<boolean>;
}

const breadcrumbDefaultClasses = 'inline-flex items-center space-x-1 md:space-x-3';
const breadcrumbItemDefaultClasses = 'ml-1 inline-flex items-center text-sm font-medium';

export function useBreadcrumbClasses (props: UseBreadcrumbClassesProps) {
    const breadcrumbClasses = computed(() => useMergeClasses([breadcrumbDefaultClasses]));
    const breadcrumbWrapperClasses = computed(() => useMergeClasses([
        "flex",
        props.solid.value ? "px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50" : ""
    ]));

    return {
        breadcrumbClasses,
        breadcrumbWrapperClasses,
    };
}

export function useBreadcrumbItemClasses (props: UseBreadcrumbItemProps) {
    const breadcrumbItemClasses = computed(() => useMergeClasses([
        breadcrumbItemDefaultClasses,
        props.href?.value ? "text-gray-700" : "text-gray-400 hover:text-gray-700"
    ]));

    return {
        breadcrumbItemClasses,
    };
}