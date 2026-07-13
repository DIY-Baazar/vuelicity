<template>
    <pub-input v-model="username" label="Username" placeholder="Enter your username" required validation-status="success">
        <template #validationMessage>
            <span class="font-medium">Well done!</span> Username is available!
        </template>
    </pub-input>
    <hr class="mb-2" />
    <pub-input v-model="password" type="password" label="Password" placeholder="Enter your password" required validation-status="error">
        <template #validationMessage>
            <span class="font-medium">Oh, snap!</span> Password doesn't contain at least 8 characters and a number.
        </template>
    </pub-input>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { PubInput } from "vuelicity";

const form_data = reactive({
    username: "",
    password: ""
});
</script>
