<script lang="ts" setup>
import { computed, ref, toRefs } from "vue";
import type { AvatarProps } from "./types";
import { useAvatarClasses } from "./utils";

const props = withDefaults(defineProps<AvatarProps>(), {
    size: "md",
    rounded: false,
    bordered: false,
    alt: "My Avatar",
    class: "",
    status: null,
    statusPosition: null,
    initials: null,
    stacked: false
});

const imageErr = ref(false);

function setImageError() {
    imageErr.value = true;
}

const { avatarClasses } = useAvatarClasses(toRefs(props));
</script>

<template>
    <div class="pub-avatar">
        <img
            v-if="src && !imageErr"
            :alt="alt"
            class="object-cover"
            :class="avatarClasses"
            :src="src"
            @error="setImageError"
        />
    </div>
</template>
