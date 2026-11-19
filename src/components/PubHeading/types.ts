import type { ClassInput } from '@/types/global'

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export interface HeadingProps {
    level: HeadingLevel;
    color: string;
    class: ClassInput;
}
