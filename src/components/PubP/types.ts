import type { ThemeColor } from '@/composables/useThemeColor'
import type { ClassInput } from '@/types/global'

export interface ParagraphProps {
    color: ThemeColor | string;
    class: ClassInput;
}
