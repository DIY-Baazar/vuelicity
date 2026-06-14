<template>
    <pub-input v-model="name" label="Name" placeholder="enter your name"
        wrapper-class="border-2 border-amber-700 dark:border-green-400 bg-amber-300 dark:bg-green-800 rounded-lg p-3"
        label-class="text-xl font-bold text-amber-900 dark:text-green-200"
        class="bg-amber-100 dark:bg-green-900 border-2 border-amber-500 has-[input:focus]:border-amber-900 has-[input:focus]:ring-amber-300"
        input-class="text-amber-900 placeholder:text-amber-500"
        prepend-class="bg-amber-200 border-amber-500 text-amber-700 dark:text-green-300"
        append-class="bg-amber-200 border-amber-500 text-amber-700 dark:text-green-300">
        <template #prepend>↣</template>
        <template #append>↢</template>
    </pub-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { PubInput } from "vuelicity";

const name = ref('');
</script>