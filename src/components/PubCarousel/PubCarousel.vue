<script lang="ts" setup>
import { onMounted, onUnmounted, ref, toRefs } from "vue";
import type { CarouselProps } from "./types";
import PubIcon from "@/components/PubIcon/PubIcon.vue";
import { useCarouselClasses } from "./utils";

const props = withDefaults(defineProps<CarouselProps>(), {
    hideIndicators: false,
    hideControls: false,
    slide: false,
    interval: 3000,
    isStatic: false
});

const currentPicture = ref(0);
const direction = ref("");
const interval = ref();
const size = ref(56);

const automaticSlide = () => {
    if (!props.isStatic) {
        interval.value = setInterval(() => {
            nextPicture();
        }, props.interval);
    }
};

const resetInterval = () => {
    clearInterval(interval.value);
    automaticSlide();
};

const slideTo = (index: number) => {
    currentPicture.value = index;
    resetInterval();
};

const nextPicture = () => {
    currentPicture.value = props.pictures.length > 0 ? (currentPicture.value + 1) % props.pictures.length : 0;
    direction.value = "right";
    resetInterval();
};

const previousPicture = () => {
    currentPicture.value = (currentPicture.value + props.pictures.length - 1) % props.pictures.length;
    direction.value = "left";
    resetInterval();
};

onMounted(() => {
    automaticSlide();
});

onUnmounted(() => {
    clearInterval(interval.value);
});

const { wrapperClasses } = useCarouselClasses(toRefs({ ...props, size }));
</script>

<template>
    <div class="pub-carousel relative">
        <!-- Images -->
        <div :class="[wrapperClasses, 'sm:h-64 xl:h-80 2xl:h-96']">
            <div
                v-for="(picture, index) in props.pictures"
                :key="index"
                :aria-current="index === currentPicture"
                :class="index === currentPicture ? 'z-30' : 'z-0'"
                class="size-3 rounded-full"
            >
                <img
                    :src="picture.src"
                    :alt="picture.alt"
                    class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                />
            </div>
        </div>

        <!-- Indicators -->
        <div v-if="!hideIndicators" class="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
            <button
                v-for="(picture, index) in props.pictures"
                :key="index"
                :aria-label="'Slide ' + index"
                :aria-current="index === currentPicture"
                :class="index === currentPicture ? 'bg-white' : 'bg-white/50'"
                class="size-3 rounded-full bg-white"
                type="button"
                @click.prevent="slideTo(index)"
            />
        </div>

        <!-- Controls -->
        <template v-if="!hideControls">
            <button
                class="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
                type="button"
                @click.prevent="previousPicture"
            >
                <span
                    class="inline-flex size-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:size-10"
                >
                    <pub-icon name="chevron-left" aschild />
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button
                class="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
                type="button"
                @click.prevent="nextPicture"
            >
                <span
                    class="inline-flex size-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:size-10"
                >
                    <pub-icon name="chevron-right" aschild />
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </template>
    </div>
</template>
