import type { FormElementColor, FormElementSize, FormElementValidationStatus, FormElementValue } from '@/types/form'
import type { ClassInput } from '@/types/global'

export interface RadioProps {
    name?: string;
    label: string;
    labelClass?: ClassInput;
    disabled?: boolean;
    class?: ClassInput;
    wrapperClass?: string;
    value?: FormElementValue;
    bordered?: boolean;
    size?: FormElementSize;
    color?: FormElementColor;
    validationStatus: FormElementValidationStatus | undefined;
}

export type RadioElementType = string | number | boolean | null | undefined | (string | number | boolean | object)[]
