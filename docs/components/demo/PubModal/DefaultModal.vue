<template>
    <pub-button @click="openModal">{{ modalTriggerText }}</pub-button>

    <pub-modal :is-open="isModalOpen" :size="modalSize" :focus-trap="focusTrap" :position="modalPosition" @close="closeModal">
        <template #header>
            <h3 class="text-lg font-semibold text-gray-900">System Update Notice</h3>
        </template>
        <template #default>
            <div class="space-y-2">
                <p class="text-gray-700">
                    A new system update is available. It includes performance improvements, minor bug fixes, and
                    enhanced security patches.
                </p>
                <p class="text-sm text-gray-500">
                    We recommend updating to version <strong>2.3.4</strong> at your earliest convenience.
                </p>
            </div>
        </template>
        <template #footer>
            <div class="flex justify-end gap-2">
                <pub-button theme="secondary" outline @click="closeModal">Later</pub-button>
                <pub-button theme="primary" @click="closeModal">Update Now</pub-button>
            </div>
        </template>
    </pub-modal>
</template>

<script setup>
import { ref } from "vue";
import { PubButton, PubModal } from "vuelicity";

const isModalOpen = ref(false);

const props = defineProps({
    modalTriggerText: {
        type: String,
        default: "Default Modal"
    },
    modalSize: {
        type: String,
        default: "md"
    },
    modalPosition: {
        type: String,
        default: "center"
    },
    focusTrap: {
        type: Boolean,
        default: true
    }
});

const openModal = () => {
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};
</script>
