<script lang="ts" setup>
import { computed, ref, toRefs, useSlots } from "vue";
import type { AvatarProps } from "./types";
import { useAvatarClasses } from "./utils";
import PubIcon from "@/components/PubIcon/PubIcon.vue";

const props = withDefaults(defineProps<AvatarProps>(), {
    size: "md",
    rounded: false,
    bordered: false,
    alt: "My Avatar",
    class: "",
    status: null,
    statusPosition: "top-right",
    initials: null,
    stacked: false,
    src: null
});

const imageErr = ref(false);

const slots = useSlots();
const hasPlaceholder = computed(() => slots.placeholder);

function setImageError() {
    imageErr.value = true;
}

const {
    avatarClasses,
    avatarPlaceholderClasses,
    avatarPlaceholderIconClasses,
    avatarPlaceholderWrapperClasses,
    avatarPlaceholderInitialsClasses,
    avatarDotClasses
} = useAvatarClasses(toRefs(props));
</script>

<template>
    <div class="pub-avatar relative">
        <div :class="avatarPlaceholderWrapperClasses">
            <img
                v-if="src && !imageErr"
                :alt="alt"
                class="object-cover"
                :class="avatarClasses"
                :src="src"
                @error="setImageError"
            />

            <div v-else-if="!initials && hasPlaceholder" :class="avatarPlaceholderClasses">
                <slot name="placeholder" />
            </div>

            <pub-icon
                v-else-if="!src && !initials"
                name="user"
                :class="avatarPlaceholderIconClasses"
                aschild
            ></pub-icon>

            <div v-else :class="avatarPlaceholderInitialsClasses">
                {{ initials }}
            </div>
        </div>

        <span v-if="status" :class="avatarDotClasses" :data-pos="statusPosition" />
    </div>
</template>
