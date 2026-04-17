import { computed, type Ref } from "vue";
import type { AvatarDotIndicatorPositionClasses, AvatarSize, AvatarStatus, AvatarStatusPosition } from "./types";
import { useMergeClasses } from "@/composables/useMergeClasses";

interface UseAvatarClassesProps {
    size: Ref<AvatarSize>;
    rounded?: Ref<boolean>;
    bordered?: Ref<boolean>;
    status?: Ref<AvatarStatus | null>;
    statusPosition?: Ref<AvatarStatusPosition | null>;
    stacked?: Ref<boolean>;
    src?: Ref<string | null>;
}

const avatarSizeClasses: Record<AvatarSize, string> = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-20 h-20',
    xl: 'w-36 h-36',
};

const avatarPlaceholderSizes: Record<AvatarSize, string> = {
    xs: "bottom-0",
    sm: "bottom-0",
    md: "-bottom-1",
    lg: "-bottom-2",
    xl: "-bottom-4"
};

const avatarBorderedClasses = "ring-2 ring-gray-300 p-1";
const avatarPlaceholderDefaultClasses = "w-full h-full text-gray-400";
const avatarPlaceholderWrapperDefaultClasses = "flex overflow-hidden relative justify-center items-center";
const avatarPlaceholderWrapperBackgroundClasses = "bg-gray-100";
const avatarPlaceholderDefaultIconClasses = "absolute";
const avatarStatusDotDefaultClasses = "absolute w-3.5 h-3.5 rounded-full border-2 border-white";
const avatarStatusDotClasses: Record<AvatarStatus, string> = {
    away: 'bg-gray-400',
    busy: 'bg-yellow-400',
    offline: 'bg-red-400',
    online: 'bg-green-400',
};
const avatarStatusDotPositionClasses: Record<AvatarDotIndicatorPositionClasses, string> = {
    'top-right-rounded': 'top-0 -right-0.5',
    'top-right-default': '-top-1.5 -right-1.5',
    'top-left-rounded': 'top-0 left-0',
    'top-left-default': 'top-0 left-0 transform -translate-y-1/2 -translate-x-1/2',
    'bottom-right-rounded': 'bottom-0 -right-0.5',
    'bottom-right-default': 'bottom-0 -right-1.5 translate-y-1/2',
    'bottom-left-rounded': 'bottom-0 left-0',
    'bottom-left-default': '-bottom-1.5 left-0 transform -translate-x-1/2 ',
};

export function useAvatarClasses (props: UseAvatarClassesProps) {
    const avatarClasses = computed(() =>
        useMergeClasses([
            avatarSizeClasses[props.size.value],
            props.rounded?.value ? "rounded-full" : "rounded",
            props.stacked?.value ? "border-2 border-white" : "",
            props.bordered?.value ? avatarBorderedClasses : ""
        ])
    );

    const avatarPlaceholderClasses = computed(() => useMergeClasses([avatarPlaceholderDefaultClasses]));

    const avatarPlaceholderIconClasses = computed(() =>
        useMergeClasses([
            avatarPlaceholderDefaultClasses,
            avatarPlaceholderDefaultIconClasses,
            avatarPlaceholderSizes[props.size.value]
        ])
    );

    const avatarPlaceholderWrapperClasses = computed(() =>
        useMergeClasses([
            avatarPlaceholderWrapperDefaultClasses,
            avatarSizeClasses[props.size.value],
            props.rounded?.value ? "rounded-full" : "rounded",
            props.src!.value && props.bordered!.value ? "" : avatarPlaceholderWrapperBackgroundClasses,
            props.bordered!.value ? "overflow-visible" : ""
        ])
    );

    const avatarPlaceholderInitialsClasses = computed(() => useMergeClasses([]));

    const avatarDotClasses = computed(() => {
        const avatarType = `${props.statusPosition?.value}-${props.rounded?.value ? 'rounded' : 'default'}`;
        return useMergeClasses([
            avatarStatusDotDefaultClasses,
            avatarStatusDotClasses[props.status?.value ?? 'online'],
            avatarStatusDotPositionClasses[avatarType as AvatarDotIndicatorPositionClasses]
        ]);
    });

    return {
        avatarClasses,
        avatarPlaceholderClasses,
        avatarPlaceholderIconClasses,
        avatarPlaceholderWrapperClasses,
        avatarPlaceholderInitialsClasses,
        avatarDotClasses
    };
}
