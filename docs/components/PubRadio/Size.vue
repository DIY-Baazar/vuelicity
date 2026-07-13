<template>
    <pub-radio v-model="picked" name="radio" label="Small" value="sm" size="sm" />
    <pub-radio v-model="picked" name="radio" label="Medium (default)" value="md" size="md" />
    <pub-radio v-model="picked" name="radio" label="Large" value="lg" size="lg" />
    <pub-radio v-model="picked" name="radio" label="Extra large" value="xl" size="xl" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { PubRadio } from "vuelicity";

const picked = ref('sm');
</script>