<script lang="ts" setup>
import { computed } from "vue";
import type { PaginationProps } from "./types";
import { UsePaginationButtonClasses, UseNavigationButtonClasses } from "./utils";
import PubIcon from "@/components/PubIcon/PubIcon.vue";
import PubButton from "@/components/PubButton/PubButton.vue";

const emit = defineEmits<{
    'update:model-value': [page: number];
    'page-changed': [page: number];
}>();

const props = withDefaults(defineProps<PaginationProps>(), {
    modelValue: 1,
    totalPages: undefined,
    sliceSize: 2,
    pageSize: 10,
    totalItems: 10,
    showIcons: false,
    showFirstLast: false,
    hidePrev: false,
    hideNext: false,
    hideLabels: false,
    prevLabel: 'Previous',
    nextLabel: 'Next',
    firstLabel: 'First',
    lastLabel: 'Last',
    size: 'sm',
    layout: 'pagination'
});


const pageButtonClasses = UsePaginationButtonClasses(props);
const navButtonClasses = UseNavigationButtonClasses(props);

// Custom Functions
function setPage (index: number) {
    emit('update:model-value', index);
    emit('page-changed', index);
}

function decreasePage () {
    emit('update:model-value', props.modelValue - 1);
    emit('page-changed', props.modelValue - 1);
}

function increasePage () {
    emit('update:model-value', props.modelValue + 1);
    emit('page-changed', props.modelValue + 1);
}

function goToFirstPage () {
    emit('update:model-value', 1);
    emit('page-changed', 1);
}

function goToLastPage () {
    emit('update:model-value', computedTotalPages.value);
    emit('page-changed', computedTotalPages.value);
}


// Computed properties
const isFirstPage = computed(() => {
    return props.modelValue === 1;
});

const isLastPage = computed(() => {
    return props.modelValue === computedTotalPages.value;
});

const computedTotalPages = computed(() => props.totalPages ? props.totalPages : Math.ceil(props.totalItems / props.pageSize));

const pagesToDisplay = computed(() => {
    if (props.layout !== 'pagination') return [];

    const total = computedTotalPages.value;
    const current = props.modelValue;
    const slice = props.sliceSize;
    const range = [];

    if (total <= (slice * 2) + 1) {
        for (let i = 1; i <= total; i++) {
            range.push(i);
        }
        return range;
    }

    let startPage = Math.max(1, current - slice);
    let endPage = Math.min(total, current + slice);

    if (current - slice <= 1) {
        endPage = Math.min(total, (slice * 2) + 1);
    }

    if (current + slice >= total) {
        startPage = Math.max(1, total - (slice * 2));
    }

    for (let i = startPage; i <= endPage; i++) {
        range.push(i);
    }
    return range;
});

const startCount = computed(() => {
    return (props.modelValue - 1) * props.pageSize + 1;
});
const endCount = computed(() => {
    return Math.min(props.modelValue * props.pageSize, props.totalItems);
});
const totalCount = computed(() => {
    if (props.totalPages) {
        return computedTotalPages.value * props.pageSize;
    }
    return props.totalItems;
});

</script>

<template>
    <nav aria-label="pagination" class="pub-pagination">
        <div v-if="layout == 'table'" class="mb-2 text-gray-700"
            :class="size == 'lg' ? 'text-base' : 'text-sm'">
            Showing
            <span class="font-semibold text-gray-900">{{ startCount }}</span>
            to
            <span class="font-semibold text-gray-900">{{ endCount }}</span>
            of
            <span class="font-semibold text-gray-900">{{ totalCount }}</span>
        </div>

        <div class="inline-flex" :class="size == 'lg' && 'text-base h-10'">
            <slot name="start"></slot>

            <slot v-if="showFirstLast" name="first-button" :disabled="isFirstPage">
                <PubButton :class="navButtonClasses" :size="size" @click="goToFirstPage" :disabled="isFirstPage">
                    <PubIcon v-if="showIcons || $slots['first-icon']" name="chevron-double-left" size="sm" />
                    <slot name="first-icon">
                        <template v-if="!hideLabels">{{ firstLabel }}</template>
                    </slot>
                </PubButton>
            </slot>

            <slot v-if="!hidePrev" name="prev-button" :disabled="isFirstPage">
                <PubButton :class="navButtonClasses" :size="size" @click="decreasePage" :disabled="isFirstPage">
                    <PubIcon v-if="showIcons || $slots['prev-icon']" name="chevron-left" size="sm" />
                    <slot name="prev-icon">
                        <template v-if="!hideLabels">{{ prevLabel }}</template>
                    </slot>
                </PubButton>
            </slot>

            <slot name="page-button" :key="index" v-for="index in pagesToDisplay">
                <PubButton :class="pageButtonClasses" :size="size" :disabled="index === props.modelValue"
                    @click="setPage(index)">
                    {{ index }}
                </PubButton>
            </slot>

            <slot v-if="!hideNext" name="next-button" :disabled="isLastPage">
                <PubButton :class="navButtonClasses" :size="size" @click="increasePage" :disabled="isLastPage">
                    <template v-if="!hideLabels">{{ nextLabel }}</template>
                    <slot name="next-icon">
                        <PubIcon v-if="showIcons || $slots['next-icon']" name="chevron-right" size="sm" />
                    </slot>
                </PubButton>
            </slot>

            <slot v-if="showFirstLast" name="last-button" :disabled="isLastPage">
                <PubButton :class="navButtonClasses" @click="goToLastPage" :size="size" :disabled="isLastPage">
                    <template v-if="!hideLabels">{{ lastLabel }}</template>
                    <slot name="last-icon">
                        <PubIcon v-if="showIcons || $slots['last-icon']" name="chevron-double-right" size="sm" />
                    </slot>
                </PubButton>
            </slot>

            <slot name="end"></slot>
        </div>
    </nav>
</template>
