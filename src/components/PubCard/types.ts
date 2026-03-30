export type CardVariant = "default" | "image" | "horizontal";
export interface CardProps {
    href?: string;
    imgAlt?: string;
    imgSrc?: string;
    variant?: CardVariant;
    class?: string;
}
