<template>
    <pub-button @click="openModal">Default Modal</pub-button>

    <pub-modal :is-open="isModalOpen" @close="closeModal">
        <template #header>
            <h3 class="text-lg font-semibold text-gray-900">Modal Header</h3>
        </template>
        <template #default>
            <p class="mt-1 text-sm text-gray-600">Modal body text goes here.</p>
        </template>
        <template #footer>
            <pub-button @click="closeModal">Close</pub-button>
        </template>
    </pub-modal>
</template>

<script setup>
import { ref } from "vue";
import { PubButton, PubModal } from "vuelicity";

const isModalOpen = ref(false);

const openModal = () => {
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};
</script>
