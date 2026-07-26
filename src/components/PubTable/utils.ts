import { computed, normalizeClass, type Ref } from 'vue'

import type { TableTheme } from './types'

import { useMergeClasses } from '@/composables/useMergeClasses'
import { isThemeColor, type ThemeColor, useThemeColor } from '@/composables/useThemeColor'

const baseCellClasses = 'px-6 py-4 first:font-medium first:text-grey-900 first:whitespace-nowrap last:text-right'
const stripedCellClasses = 'even:bg-white odd:bg-grey-50'

const baseRowClasses = 'bg-white not-last:border-b'
const stripedRowClasses = 'odd:bg-white even:bg-grey-50'
const hoverableRowClasses = 'hover:bg-grey-50'

const baseHeadCellClasses = 'px-6 py-3 text-xs uppercase'
// const stripedHeadCellClasses = 'even:bg-white odd:bg-grey-50'

interface UseTableCellClassesProps {
  stripedColumns: Ref<boolean>;
}

interface UseTableHeadCellClassesProps {
  stripedColumns: Ref<boolean>;
  color: Ref<TableTheme>;
}

interface UseTableRowClassesProps {
  striped: Ref<boolean>;
  hoverable: Ref<boolean>;
}

export function useTableCellClasses (props: UseTableCellClassesProps) {
  const tableCellClasses = computed(() =>
    useMergeClasses([baseCellClasses, props.stripedColumns.value ? stripedCellClasses : '']),
  )
  return { tableCellClasses }
}

export function useTableRowClasses (props: UseTableRowClassesProps) {
  const tableRowClasses = computed(() =>
    useMergeClasses([
      baseRowClasses,
      props.striped.value ? stripedRowClasses : '',
      props.hoverable.value ? hoverableRowClasses : '',
    ]),
  )
  return { tableRowClasses }
}

export function useTableHeadCellClasses (props: UseTableHeadCellClassesProps) {
  const tableHeadCellClasses = computed(() => {
    let themeClasses = ''
    if (isThemeColor(props.color.value)) {
      const theme = useThemeColor(props.color.value as ThemeColor)
      themeClasses = normalizeClass(['text-white', theme.backgroundClasses.value])
    }
    return useMergeClasses([baseHeadCellClasses, themeClasses])
  })

  return { tableHeadCellClasses }
}
