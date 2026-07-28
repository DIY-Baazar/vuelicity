import type { CustomColor } from '@/types/global'

export type SpinnerColor =
  | 'blue'
  | 'grey'
  | 'green'
  | 'red'
  | 'yellow'
  | 'pink'
  | 'purple'
  | 'white'
  | CustomColor

export type SpinnerSize =
  | '0'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'

export interface SpinnerProps {
    color?: SpinnerColor;
    size?: SpinnerSize;
}
