<template>
    <pub-textarea v-model="message" label="Your message" placeholder="Write your thoughts here..." disabled />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { PubTextarea } from "vuelicity";

const message = ref("I like Vuelicity!");
</script>