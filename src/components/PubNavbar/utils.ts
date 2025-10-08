import type { Ref } from "vue";

interface UseNavbarClassesProps {
    sticky: Ref<boolean>;
    rounded: Ref<boolean>;
    solid: Ref<boolean>;
}

export function useNavbarClasses(props: UseNavbarClassesProps): {
    wrapperClasses: string;
    spanClasses: string;
} {
    const wrapperClasses = [
        "border-gray-200",
        props.sticky ? "fixed w-full z-20 top-0 left-0 border-b border-gray-200" : "",
        props.rounded ? "rounded" : "",
        props.solid ? "p-3 bg-gray-50" : "bg-white px-2 sm:px-4 py-2.5"
    ].join(" ");
    const spanClasses = ["max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"].join(" ");

    return { wrapperClasses, spanClasses };
}
