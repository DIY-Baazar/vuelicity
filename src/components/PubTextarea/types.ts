import type { FormElementAutoFill, FormElementSize, FormElementValidationStatus } from "@/types/form";
import type { ClassInput } from "@/types/global";

export interface TextareaProps {
    class?: ClassInput;
    name?: string;
    disabled?: boolean;
    inputClass?: ClassInput;
    label?: string;
    labelClass?: ClassInput;
    required?: boolean;
    size?: FormElementSize;
    validationStatus?: FormElementValidationStatus;
    wrapperClass?: ClassInput;
    autocomplete?: FormElementAutoFill;
    rows?: number;
    footerClass?: ClassInput;
}
