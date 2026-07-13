import { useMergeClasses } from "@/composables/useMergeClasses";
import { computed, type Ref } from "vue";

const baseCellClasses = "px-6 py-4 first:font-medium first:text-gray-900 first:whitespace-nowrap last:text-right";
const stripedCellClasses = "even:bg-white odd:bg-gray-50";

const baseRowClasses = "bg-white not-last:border-b";
const stripedRowClasses = "odd:bg-white even:bg-gray-50";
const hoverableRowClasses = "hover:bg-gray-50";

const baseHeadCellClasses = "px-6 py-3 text-xs uppercase";
const stripedHeadCellClasses = "even:bg-white odd:bg-gray-50";

interface UseTableCellClassesProps {
    stripedColumns: Ref<boolean>;
}

interface UseTableHeadCellClassesProps {
    stripedColumns: Ref<boolean>;
}

interface UseTableRowClassesProps {
    striped: Ref<boolean>;
    hoverable: Ref<boolean>;
}

export function useTableCellClasses(props: UseTableCellClassesProps) {
    const tableCellClasses = computed(() =>
        useMergeClasses([baseCellClasses, props.stripedColumns.value ? stripedCellClasses : ""])
    );
    return { tableCellClasses };
}

export function useTableRowClasses(props: UseTableRowClassesProps) {
    const tableRowClasses = computed(() =>
        useMergeClasses([
            baseRowClasses,
            props.striped.value ? stripedRowClasses : "",
            props.hoverable.value ? hoverableRowClasses : "",
        ])
    );
    return { tableRowClasses };
}

export function useTableHeadCellClasses(props: UseTableHeadCellClassesProps) {
    const tableHeadCellClasses = computed(() =>
        useMergeClasses([baseHeadCellClasses, props.stripedColumns.value ? stripedHeadCellClasses : ""])
    );

    return { tableHeadCellClasses };
}
