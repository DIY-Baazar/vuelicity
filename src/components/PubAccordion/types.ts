import type { ClassInput, ClassRef } from "@/types/global";
import type { Ref } from "vue";

interface AccordionProps {
    class?: ClassInput;
    collapsed?: boolean;
    flushed?: boolean;
    persistent?: boolean;
}

interface AccordionContentProps {
    class?: ClassInput;
    activeClass?: string;
}

interface AccordionHeaderProps {
    class?: ClassInput;
    activeClass?: string;
}

interface AccordionPanelProps {
    activeClass?: string;
}

interface UseAccordionClassesProps {
    class: ClassRef;
    collapsed: Ref<boolean>;
    flushed: Ref<boolean>;
    persistent: Ref<boolean>;
}

interface UseAccordionHeaderClassesProps {
    class: ClassRef;
    activeClass: Ref<string>;
}

interface UseAccordionContentClassesProps {
    class: ClassRef;
    activeClass: Ref<string>;
}

interface AccordionPanel {
    id: string;
    isVisible: boolean;
    order: number;
}

interface AccordionState extends AccordionProps {
    id: string;
    panels: AccordionPanelState[];
}

interface AccordionPanelState extends AccordionPanelProps {
    id: string;
    isVisible: boolean;
    order: number;
}

export type {
    AccordionContentProps,
    AccordionHeaderProps,
    AccordionPanel,
    AccordionPanelProps,
    AccordionProps,
    AccordionState,
    AccordionPanelState,
    UseAccordionClassesProps,
    UseAccordionHeaderClassesProps,
    UseAccordionContentClassesProps,
};