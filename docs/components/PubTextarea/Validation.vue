<template>
    <pub-textarea v-model="message" label="Your message" placeholder="Write your thoughts here..."
        validation-status="error">
        <template #validationMessage>
            This field is required.
        </template>
    </pub-textarea>
    <pub-textarea v-model="message" label="Your message" placeholder="Write your thoughts here..."
        validation-status="success">
        <template #validationMessage>
            Looks good!
        </template>
    </pub-textarea>
</template>

<script setup>
import { ref } from 'vue';
import { PubTextarea } from 'vuelicity';

const message = ref('');
</script>