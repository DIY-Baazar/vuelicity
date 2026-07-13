<template>
    <pub-input v-model="searchQuery" label="Search" placeholder="Type to search...">
        <template #prepend>
            <pub-icon name="search" class="text-gray-700" size="sm" type="outline" />
        </template>
        <template #append>
            <pub-button theme="blue" size="xs" rounded="md">
                Search
            </pub-button>
        </template>
    </pub-input>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { PubInput, PubIcon, PubButton} from "vuelicity";

const searchQuery = ref("");
</script>