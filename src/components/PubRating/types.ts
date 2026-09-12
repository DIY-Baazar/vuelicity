import type { ThemeColor } from '@/composables/useThemeColor'
import type { ClassInput } from '@/types/global'

export type RatingSize = 'sm' | 'md' | 'lg'

export type RatingColor = ThemeColor | ClassInput

export interface RatingProps {
    rating?: number;
    reviewLink?: string;
    reviewText?: string;
    scale?: number;
    size?: RatingSize;
    color?: RatingColor;
}
