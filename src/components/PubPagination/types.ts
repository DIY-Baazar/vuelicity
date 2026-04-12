export type PaginationLayout = 'navigation' | 'pagination' | 'table';

export type PaginationSize = 'sm' | 'md' | 'lg';

export interface PaginationProps {
    modelValue?: number;
    totalPages?: number;
    pageSize?: number;
    totalItems?: number;
    size?: PaginationSize;
    sliceSize?: number;
    prevLabel?: string;
    nextLabel?: string;
    firstLabel?: string;
    lastLabel?: string;
    showIcons?: boolean;
    showFirstLast?: boolean;
    hidePrev?: boolean;
    hideNext?: boolean;
    hideLabels?: boolean;
    layout?: PaginationLayout;
}
