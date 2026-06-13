import type { FormElementSize, FormElementValidationStatus } from "@/types/form";
import type { ClassInput } from "@/types/global";

export type InputType = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';

export type CommonAutoFill = 'on' | 'off' | 'email' | 'tel' | 'name' | 'username' | 'current-password' | 'country' | 'postal-code' | 'language' | 'bday';



export interface InputProps {
    autocomplete?: CommonAutoFill;
    class?: ClassInput;
    disabled?: boolean;
    inputClass?: ClassInput;
    label?: string;
    labelClass?: ClassInput;
    required?: boolean;
    size?: FormElementSize;
    type?: InputType;
    validationStatus?: FormElementValidationStatus;
    wrapperClass?: ClassInput;
    prependClass?: ClassInput;
    appendClass?: ClassInput;
}