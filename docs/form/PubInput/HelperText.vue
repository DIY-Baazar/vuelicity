<template>
    <pub-input v-model="email" label="Name" placeholder="Enter your email">
        <template #prepend>
            <pub-icon name="envelope" class="text-gray-800" />
        </template>
        <template #helper>
            We'll never share your details. Read our
            <a href="#" class="text-blue-600 dark:text-blue-500"> Privacy Policy </a>.
        </template>
    </pub-input>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { PubInput, PubIcon } from "vuelicity";

const email = ref("");
</script>
