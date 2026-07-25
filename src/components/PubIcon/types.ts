import type { ThemeColor } from '@/composables/useThemeColor'
import type { ClassRef } from '@/types/global'
import type { Ref } from 'vue'

export type IconTheme = 'default' | ThemeColor

export type IconSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'

export type IconType = 'solid' | 'outline' | 'duotone'

export interface UseIconClassesProps {
  name: Ref<string | undefined>;
  size: Ref<IconSize | undefined>;
  type: Ref<IconType | undefined>;
  color: Ref<IconTheme | undefined>;
  rotate: Ref<boolean | undefined>;
  flip: Ref<boolean | undefined>;
  spin: Ref<boolean | undefined>;
  mirror: Ref<boolean | undefined>;
  aschild: Ref<boolean | undefined>;
  strokeWidth: Ref<number>;
  class: ClassRef;
}
