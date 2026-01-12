import type { Ref } from "vue";
import type { PubNavbarTheme } from "./types";


interface UseNavbarClassesProps {
    sticky: Ref<boolean>;
    rounded: Ref<boolean>;
    solid: Ref<boolean>;
    theme: Ref<PubNavbarTheme>;
}

export function useNavbarClasses (props: UseNavbarClassesProps): {
    wrapperClasses: string;
    spanClasses: string;
} {
    const themeClasses = {
        light: {
            true: "bg-light",
            false: "bg-gray-50"
        },
        dark: {
            true: "bg-dark",
            false: "bg-gray-800"
        }
    };

    const wrapperClasses = [
        "border-gray-200 w-full",
        props.sticky.value ? "fixed z-20 top-0 left-0 border-b border-gray-200" : "",
        props.rounded.value ? "rounded" : "",
        props.solid.value ? "p-3" : "px-2 sm:px-4 py-2.5",
        themeClasses[props.theme.value][props.solid.value ? "true" : "false"]
    ].join(" ");
    const spanClasses = ["max-w-screen-xl flex flex-wrap items-center justify-between mx-auto"].join(" ");

    return { wrapperClasses, spanClasses };
}

interface UseNavbarCollapseClassesProps {
    isShowMenu: Ref<boolean>;
}

export function useNavbarCollapseClasses (props: UseNavbarCollapseClassesProps) {
    const wrapperClasses = ["w-full md:block md:w-auto", props.isShowMenu.value ? "" : "hidden"].join(" ");
    const spanClasses = [
        "flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0"
    ].join(" ");

    return { wrapperClasses, spanClasses };
}

interface UsePubNavbarLinkProps {
    isActive?: Ref<boolean>;
}

export function useNavbarLinkClasses (props: UsePubNavbarLinkProps) {
    const currentPageClasses = 'bg-blue md:bg-transparent text-white md:text-blue';
    const defaultStateClasses = 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue';
    const defaultClasses = 'block py-2 pr-4 pl-3 rounded md:p-0';
    return [
        defaultClasses,
        props.isActive?.value ? currentPageClasses : defaultStateClasses
    ].join(" ");
}