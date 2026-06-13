import type { FormElementSize, FormElementValidationStatus } from "@/types/form";
import type { ClassInput } from "@/types/global";

export type SelectOptionType = {
    name: string;
    value: string;
};

export interface SelectProps {
    class?: ClassInput;
    options: SelectOptionType[];
    disabled?: boolean;
    label?: string;
    labelClass?: ClassInput;
    placeholder?: string;
    size?: FormElementSize;
    validationStatus?: FormElementValidationStatus;
    underline?: boolean;
    wrapperClass?: ClassInput;
}
