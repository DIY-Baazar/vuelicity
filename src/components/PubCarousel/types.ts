export type PictureItem = {
    alt?: string;
    src: string;
};

export interface CarouselProps {
    pictures: PictureItem[];
    hideIndicators: boolean;
    hideControls: boolean;
    slide: boolean;
    interval: number;
    static: boolean;
}