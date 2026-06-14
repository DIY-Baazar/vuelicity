import type { FormElementAutoFill, FormElementSize, FormElementValidationStatus } from "@/types/form";
import type { ClassInput } from "@/types/global";

export type InputType =
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";

export interface InputProps {
    autocomplete?: FormElementAutoFill;
    name?: string;
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
