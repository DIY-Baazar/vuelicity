<template>
    <pub-input v-model="searchQuery" label="Search" placeholder="Type to search...">
        <template #prepend>
            <pub-icon name="search" class="text-gray-700" />
        </template>
    </pub-input>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { PubInput, PubIcon} from "vuelicity";

const searchQuery = ref("");
</script>