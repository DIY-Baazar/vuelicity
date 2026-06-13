export type FormElementSize = "sm" | "md" | "lg" | "xl";

export const validationStatusMap = {
    Error: "error",
    Success: "success"
} as const;

export type FormElementValidationStatus = (typeof validationStatusMap)[keyof typeof validationStatusMap];
