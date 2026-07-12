<template>
  <pub-checkbox
    v-model="check"
    label="Custom styled checkbox"
    class="text-amber-600 dark:text-green-500 bg-amber-50 dark:bg-green-900 border-amber-400 dark:border-green-600 focus:ring-amber-500 dark:focus:ring-green-400"
    label-class="font-bold text-amber-900 dark:text-green-200"
    wrapper-class="border-2 border-amber-700 dark:border-green-400 bg-amber-300 dark:bg-green-800 rounded-lg p-3"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { PubCheckbox } from "vuelicity";

const check = ref(false);
</script>