<template>
    <pub-textarea v-model="message" label="Readonly input" placeholder="Write your thoughts here..." readonly />
    <pub-textarea v-model="message" label="Disabled + readonly input" placeholder="Write your thoughts here..." readonly
        disabled />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { PubTextarea } from "vuelicity";

const message = ref("I like Vuelicity!");
</script>