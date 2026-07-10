<template>
    <form class="flex flex-col gap-4 w-full" @submit.prevent="submitted = true">
        <pub-textarea v-model="message" :validation-status="validationStatus" label="Message (10–15 characters)"
            minlength="10" maxlength="15" required>
            <template v-if="validationStatus === 'error'" #validationMessage>
                {{ message.length === 0 ? 'This field is required.' : `Too short — ${message.length}/10 characters minimum.` }}
            </template>
            <template v-if="validationStatus === 'success'" #helper>
                Looks good!
            </template>
        </pub-textarea>
        <pub-button class="self-start" type="submit" theme="blue" rounded="md">Validate</pub-button>
    </form>
</template>

<script setup>
import { ref, computed } from 'vue';
import { PubTextarea, PubButton } from 'vuelicity';

const message = ref('');
const submitted = ref(false);

const validationStatus = computed(() => {
    if (!submitted.value) return undefined;
    return message.value.length >= 10 ? 'success' : 'error';
});
</script>