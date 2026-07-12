<template>
    <pub-radio v-model="picked" name="radio" label="Red" value="red" color="red" />
    <pub-radio v-model="picked" name="radio" label="Green" value="green" color="green" />
    <pub-radio v-model="picked" name="radio" label="Blue" value="blue" color="blue" />
    <pub-radio v-model="picked" name="radio" label="Yellow" value="yellow" color="yellow" />
    <pub-radio v-model="picked" name="radio" label="Magenta" value="magenta" color="magenta" />
    <pub-radio v-model="picked" name="radio" label="Cyan" value="cyan" color="cyan" />
    <pub-radio v-model="picked" name="radio" label="Dark" value="dark" color="dark" />
    <pub-radio v-model="picked" name="radio" label="Light" value="light" color="light" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { PubRadio } from "vuelicity";

const picked = ref('red');
</script>