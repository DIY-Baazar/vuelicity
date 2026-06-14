<template>
    <pub-input v-model="email" label="Email" placeholder="Enter your email">
        <template #prepend>
            <pub-icon name="envelope" class="text-gray-800" />
        </template>
    </pub-input>
    <pub-input v-model="username" label="Username" placeholder="Enter your username">
        <template #append>
            @example.com
        </template>
    </pub-input>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { PubInput, PubIcon } from "vuelicity";

const email = ref(""),
    username = ref("");
</script>
