<template>
  <nav
    :class="['pub-breadcrumb', breadcrumbWrapperClasses]"
    aria-label="Breadcrumb"
  >
    <ol :class="breadcrumbClasses">
      <slot name="default" />
    </ol>
  </nav>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'

import { useBreadcrumbClasses } from './utils'

import type { BreadcrumbProps } from './types'

const props = withDefaults(defineProps<BreadcrumbProps>(), {
    solid: false,
})

const { breadcrumbClasses, breadcrumbWrapperClasses } = useBreadcrumbClasses(toRefs(props))
</script>
