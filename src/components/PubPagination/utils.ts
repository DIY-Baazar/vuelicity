import { useMergeClasses } from "@/composables/useMergeClasses";
import type { PaginationLayout, PaginationSize } from "./types";
import { computed } from "vue";

interface UsePaginationClassProps {
    layout: PaginationLayout;
    size: PaginationSize;
}


const baseNavigationButtonClasses = "items-center justify-center ";

const basePaginationButtonClasses =
    "items-center justify-center border border-r-0 gap-1 ml-0 px-3 leading-tight";
const tableLayoutClasses = "rounded-none first:rounded-l last:rounded-r";

export function UsePaginationButtonClasses (props: UsePaginationClassProps) {
    return computed(() => useMergeClasses([
        basePaginationButtonClasses,
    ]));
}


export function UseNavigationButtonClasses (props: UsePaginationClassProps) {
    return computed(() => useMergeClasses([
        baseNavigationButtonClasses,
        props.layout === "table" ? tableLayoutClasses : "",
        props.layout === "navigation" ? "not-last:mr-3 rounded-lg" : "not-last:border-r-0",
    ]));
}
