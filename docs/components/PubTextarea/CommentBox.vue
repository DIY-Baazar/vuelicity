<template>
    <pub-textarea v-model="message" label="Your message" placeholder="Write your thoughts here...">
        <template #footer>
            <div class="flex items-center justify-between">
                <pub-button type="submit" theme="blue" rounded="lg">
                    Post comment
                </pub-button>
                <div class="flex gap-2">
                    <pub-icon name="attachment" size="sm" />
                    <pub-icon name="location" size="sm" />
                    <pub-icon name="image" size="sm" />
                </div>
            </div>
        </template>
    </pub-textarea>
</template>

<script setup>
import { ref } from 'vue';
import { PubTextarea, PubButton, PubIcon } from 'vuelicity';

const message = ref('');
</script>