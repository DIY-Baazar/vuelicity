<template>
    <pub-button @click="openModal">Default Modal</pub-button>

    <pub-modal :is-open="isModalOpen" @close="closeModal">
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
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quidem placeat rem repudiandae
                    excepturi qui. Fuga explicabo facilis, voluptatibus quisquam fugiat saepe odit provident, corrupti
                    aperiam eos nostrum repellendus sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore quia eum dolorem neque. Perspiciatis, facere, tenetur esse impedit maiores nostrum
                    cupiditate atque itaque nam velit eos ipsam omnis ratione delectus doloremque commodi soluta animi,
                    corrupti magnam iusto optio odit! Harum optio iste dolore minus esse illum consectetur, vel rerum,
                    ipsam molestias maxime quod repudiandae laborum temporibus facilis et dolores. Quae illo earum
                    aliquam nulla ex ut dignissimos voluptatibus accusamus, laboriosam repudiandae corporis, natus quis,
                    aut corrupti alias sint facere assumenda repellat ipsam nihil. Dolore cupiditate veniam similique
                    alias delectus consectetur consequuntur explicabo ratione ad asperiores, saepe doloremque velit,
                    harum omnis!
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

const openModal = () => {
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};
</script>
