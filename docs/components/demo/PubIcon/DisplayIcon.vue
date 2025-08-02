<template>
    <div class="size-16 border border-gray-200 flex flex-col items-center overflow-hidden p-1" @click="onClickCopy">
        <pub-icon :name="name" class="border border-gray-300" />
        <p class="text-xs p-1 whitespace-nowrap overflow-hidden text-ellipsis" :title="name">{{ name }}</p>
    </div>
</template>

<script setup>
import { PubIcon } from "vuelicity";

const props = defineProps({
    name: {
        type: String,
        required: true
    }
});

function onClickCopy() {
    navigator.clipboard.writeText(props.name);
    alert("Copied to clipboard");
}
</script>
