import type { FormElementSize, FormElementValue } from '@/types/form'
import type { ClassInput } from '@/types/global'

export interface CheckboxProps {
    label: string;
    labelClass?: ClassInput;
    disabled?: boolean;
    class?: ClassInput;
    wrapperClass?: ClassInput;
    name?: string;
    value?: FormElementValue;
    bordered?: boolean;
    size?: FormElementSize;
}
