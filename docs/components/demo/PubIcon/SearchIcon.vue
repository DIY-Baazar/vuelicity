<script setup>
import { ref, computed } from "vue";
import DisplayIcon from './DisplayIcon.vue';
import { iconsList } from "vuelicity/components/PubIcon/icons.ts";

const searchTerm = ref('');
const filteredIcons = computed(() => {
    const searchTermLowerCase = searchTerm.value.toLowerCase().trim();

    if (searchTermLowerCase === "") return iconsList;

    return iconsList.filter(icon => {
        return icon.toLowerCase().includes(searchTermLowerCase);
    });
});
</script>


<template>
    <div class="flex flex-col items-center">
        <input v-model="searchTerm" placeholder="Search for an icon" />
        <div class="flex flex-wrap gap-2">
            <DisplayIcon v-for="icon in filteredIcons" :key="icon" :name="icon" />
        </div>
    </div>
</template>
