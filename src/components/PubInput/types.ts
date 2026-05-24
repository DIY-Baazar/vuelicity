import type { ClassInput } from "@/types/global";

export type InputSize = 'sm' | 'md' | 'lg';

export type InputType = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';

export type CommonAutoFill = 'on' | 'off' | 'email' | 'tel' | 'name' | 'username' | 'current-password' | 'country' | 'postal-code' | 'language' | 'bday';

export const validationStatusMap = {
    Error: 'error',
    Success: 'success',
} as const;

export type ValidationStatus = typeof validationStatusMap[keyof typeof validationStatusMap];

export interface InputProps {
    autocomplete?: CommonAutoFill;
    class?: ClassInput;
    disabled?: boolean;
    inputClass?: ClassInput;
    label?: string;
    labelClass?: ClassInput;
    required?: boolean;
    size?: InputSize;
    type?: InputType;
    validationStatus?: ValidationStatus;
    wrapperClass?: ClassInput;
}