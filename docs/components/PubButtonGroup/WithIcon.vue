<template>
  <pub-button-group>
    <pub-button
      color="blue"
      outline
    >
      <template #prepend>
        <pub-icon name="download" />
      </template>
      Download
    </pub-button>
    <pub-button
      color="blue"
      outline
    >
      456k
    </pub-button>
  </pub-button-group>
</template>

<script lang="ts" setup>
import { PubButton, PubButtonGroup, PubIcon } from 'vuelicity'
</script>
