import type { PaginationLayout, PaginationSize } from "./types";

interface UsePaginationClassProps {
    layout: PaginationLayout;
    size: PaginationSize;
}



const baseNavigationButtonClasses = "items-center justify-center ";

const basePaginationButtonClasses =
    "items-center justify-center border-r-0 border gap-1 ml-0 px-3 leading-tight";
const tableLayoutClasses = "rounded-none first:rounded-l last:rounded-r";

export function UsePaginationButtonClasses(props: UsePaginationClassProps) {
    return [
        basePaginationButtonClasses,
    ].join(" ");
}


export function UseNavigationButtonClasses(props: UsePaginationClassProps) {
    return [
        baseNavigationButtonClasses,
        props.layout === "table" ? tableLayoutClasses : "",
        props.layout === "navigation" ? "not-last:mr-3 rounded-lg" : "not-last:border-r-0",
    ].join(" ");
}
