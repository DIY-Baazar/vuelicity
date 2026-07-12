import { useMergeClasses } from "@/composables/useMergeClasses";
import { computed } from "vue";

export function useTableCellClasses() {
    const tableCellClasses = computed(() => useMergeClasses([]));
    return { tableCellClasses };
}

export function useTableRowClasses() {
    const tableRowClasses = computed(() => useMergeClasses([]));
    return { tableRowClasses };
}

export function useTableHeadCellClasses() {
    const tableHeadCellClasses = computed(() => useMergeClasses([]));

    return { tableHeadCellClasses };
}
