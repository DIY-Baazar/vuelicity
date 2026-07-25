<template>
  <pub-button-group>
    <pub-button
      color="blue"
      outline
    >
      Save Book
    </pub-button>
    <pub-button
      color="blue"
      outline
    >
      <pub-icon
        name="bookmark"
        type="outline"
      />
    </pub-button>
  </pub-button-group>
</template>

<script lang="ts" setup>
import { PubButton, PubButtonGroup, PubIcon } from 'vuelicity'
</script>
