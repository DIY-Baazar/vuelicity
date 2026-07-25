<template>
    <pub-input v-model="searchQuery" placeholder="Search for products, brands and more"
     append-class="bg-blue-500 text-white"
    required>
        <template #prepend>
            <pub-dropdown>
                <template #trigger>
                    <pub-button color="none" class="border-e border-grey-200 p-1 gap-0.5">
                        <template #prepend>
                            <pub-icon name="grid" size="xs" type="outline" />
                        </template>
                        All categories
                        <template #append>
                            <pub-icon name="chevron-down" size="xs" />
                        </template>
                    </pub-button>
                </template>
                <nav class="py-2 text-sm text-grey-700">
                    <a href="#" class="block px-4 py-2 hover:bg-grey-100"> Dashboard </a>
                    <a href="#" class="block px-4 py-2 hover:bg-grey-100"> Settings </a>
                    <a href="#" class="block px-4 py-2 hover:bg-grey-100"> Earnings </a>
                    <a href="#" class="block px-4 py-2 hover:bg-grey-100"> Sign out </a>
                </nav>
            </pub-dropdown>
        </template>
        <template #append>
            <pub-icon name="search" size="sm" type="outline" />
            <!-- <pub-button color="blue" size="xs" square rounded="md">
            </pub-button> -->
        </template>
    </pub-input>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { PubInput, PubIcon, PubButton, PubDropdown } from "vuelicity";

const searchQuery = ref("");
</script>