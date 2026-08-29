<template>
  <pub-button
    size="xs"
    color="blue"
    class="relative"
    square
  >
    <pub-icon
      name="envelope"
      type="solid"
    />
    <pub-badge
      class="size-5 absolute -top-2.5 -right-2.5 text-[0.6rem]"
      color="pink"
      rounded
    >
      99
    </pub-badge>
  </pub-button>
</template>

<script lang="ts" setup>
import { PubBadge, PubButton, PubIcon } from 'vuelicity'
</script>
