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

interface AccordionStates {
    [key: string]: AccordionState;
}

interface GetAccordionStateAttributes {
    element: Ref<HTMLElement | undefined>;
}

interface GetAccordionState {
    (attributes: GetAccordionStateAttributes): AccordionState | null;
}

interface GetAccordionPanelStateAttributes {
    accordionState: Ref<AccordionState>;
    panelId: string;
}

interface GetAccordionPanelState {
    ({ accordionState, panelId }: GetAccordionPanelStateAttributes): AccordionPanel | null;
}

interface UseAccordionState {
    (accordionId?: string, options?: AccordionProps): {
        accordionStates: AccordionStates;
        getAccordionState: GetAccordionState;
        getAccordionPanelState: GetAccordionPanelState;
    };
}

export type {
    AccordionContentProps,
    AccordionHeaderProps,
    AccordionPanel,
    AccordionPanelProps,
    AccordionProps,
    AccordionState,
    AccordionPanelState,
    AccordionStates,
    GetAccordionPanelState,
    GetAccordionState,
    UseAccordionState,
    UseAccordionClassesProps,
    UseAccordionHeaderClassesProps,
    UseAccordionContentClassesProps,
};