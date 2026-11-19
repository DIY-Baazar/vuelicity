<template>
  <div class="pub-rating flex items-center">
    <pub-icon
      v-for="index in props.scale"
      :key="index"
      name="star"
      :type="props.rating >= index ? 'solid' : 'outline'"
      :size="props.size"
      :color="props.rating >= index && props.color ? props.color : 'text-grey-300'"
    />

    <!-- text -->
    <slot name="besideText" />

    <!-- review link -->
    <template v-if="(reviewText && reviewLink)">
      <span class="mx-1.5 size-1 rounded-full bg-gray-500 dark:bg-gray-400" />
      <a
        :href="reviewLink"
        class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
      >
        {{ reviewText }}
      </a>
    </template>
  </div>
</template>

<script lang="ts" setup>
// import { toRefs } from 'vue'

// import { useRatingClasses } from './utils'

import type { RatingProps } from './types'

import PubIcon from '@/components/PubIcon/PubIcon.vue'

const props = withDefaults(defineProps<RatingProps>(), {
    rating: 3,
    reviewLink: '',
    reviewText: '',
    scale: 5,
    size: 'md',
    color: 'yellow',
})

// const { sizeClasses } = useRatingClasses(toRefs(props))
</script>
