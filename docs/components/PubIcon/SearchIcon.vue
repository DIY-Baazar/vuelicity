<script setup>
import { ref, computed } from "vue";
import DisplayIcon from "./DisplayIcon.vue";
import { iconsList } from "vuelicity/components/PubIcon/icons.ts";
import { PubInput, PubIcon, PubCheckBox } from "vuelicity";

const searchTerm = ref(""),
    isSolid = ref(false);
const filteredIcons = computed(() => {
    const searchTermLowerCase = searchTerm.value.toLowerCase().trim();

    if (searchTermLowerCase === "") return iconsList;

    return iconsList.filter((icon) => {
        return icon.toLowerCase().includes(searchTermLowerCase);
    });
});
</script>

<template>
    <div class="flex flex-col items-center">
        <div class="mb-2">
            <pub-input v-model="searchTerm" placeholder="Search for an icon" wrapper-class="w-full">
                <template #prepend>
                    <pub-icon name="search" type="outline" class="text-gray-700" />
                </template>
            </pub-input>
            <pub-check-box
                v-model="isSolid"
                type="checkbox"
                name="isSolid"
                :label="`Show '${isSolid ? 'Outline' : 'Solid'}' Icons`"
                wrapper-class="mt-2 flex items-center gap-2"
            />
        </div>
        <div class="flex flex-wrap gap-2">
            <DisplayIcon :type="isSolid ? 'solid' : 'outline'" v-for="icon in filteredIcons" :key="icon" :name="icon" />
        </div>
    </div>
</template>
