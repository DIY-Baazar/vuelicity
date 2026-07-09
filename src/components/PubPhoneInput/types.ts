import type { FormElementAutoFill, FormElementSize, FormElementValidationStatus } from "@/types/form";
import type { ClassInput } from "@/types/global";

export interface PhoneInputISDCode {
    code: string;
    name: string;
}

export interface PhoneInputProps {
    name?: string;
    class?: ClassInput;
    disabled?: boolean;
    inputClass?: ClassInput;
    label?: string;
    labelClass?: ClassInput;
    required?: boolean;
    size?: FormElementSize;
    validationStatus?: FormElementValidationStatus;
    wrapperClass?: ClassInput;
    prependClass?: ClassInput;
    appendClass?: ClassInput;
    autocomplete?: FormElementAutoFill;
    isdCodes?: PhoneInputISDCode[];
}
