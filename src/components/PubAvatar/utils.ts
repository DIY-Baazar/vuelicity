import { computed, type Ref } from "vue";
import type { AvatarSize, AvatarStatus, AvatarStatusPosition } from "./types";
import { useMergeClasses } from "@/composables/useMergeClasses";

interface UseAvatarClassesProps {
    size: Ref<AvatarSize>;
    rounded?: Ref<boolean>;
    bordered?: Ref<boolean>;
    status?: Ref<AvatarStatus | null>;
    statusPosition?: Ref<AvatarStatusPosition | null>;
    stacked?: Ref<boolean>;
}

const avatarSizeClasses: Record<AvatarSize, string> = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-14 h-14"
};

const avatarBorderedClasses = "ring-2 ring-gray-300 p-1";

export function useAvatarClasses (props: UseAvatarClassesProps) {
    const avatarClasses = computed(() =>
        useMergeClasses([
            avatarSizeClasses[props.size.value],
            props.rounded?.value ? "rounded-full" : "rounded",
            props.stacked?.value ? "border-2 border-white dark:border-gray-800" : "",
            props.bordered?.value ? avatarBorderedClasses : ""
        ])
    );

    return { avatarClasses };
}
