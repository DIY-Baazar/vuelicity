import type { ClassInput } from "@/types/global";

export interface CheckBoxProps {
    label: string;
    labelClass?: ClassInput;
    disabled?: boolean;
    class?: ClassInput;
    wrapperClass?: ClassInput;
    name?: string;
    value?: string | number | boolean | object;
    bordered?: boolean;
}
