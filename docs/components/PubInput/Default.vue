<template>
    <div class="grid gap-6 mb-3 md:grid-cols-2 w-full">
        <pub-input
            v-model="form_data.first_name"
            name="first_name"
            placeholder="Enter your First Name"
            label="First name"
        />
        <pub-input
            v-model="form_data.last_name"
            name="last_name"
            placeholder="Enter your Last Name"
            label="Last name"
        />
        <pub-input v-model="form_data.company" name="company" placeholder="Enter your Company" label="Company" />
        <pub-input
            v-model="form_data.phone"
            type="tel"
            name="phone"
            placeholder="Enter your Phone number"
            label="Phone number"
        />
        <pub-input
            v-model="form_data.website"
            type="url"
            name="website"
            placeholder="Enter your Website URL"
            label="Website URL"
        />
        <pub-input
            v-model="form_data.visitors"
            type="number"
            name="visitors"
            placeholder="Enter number of visitors"
            label="Number of visitors"
        />
        <pub-input
            wrapper-class="col-span-2"
            v-model="form_data.email"
            type="email"
            name="email"
            placeholder="Enter your Email address"
            label="Email address"
        />
        <pub-input
            wrapper-class="col-span-2"
            v-model="form_data.password"
            type="password"
            name="password"
            placeholder="Enter your Password"
            label="Password"
        />
        <pub-input
            wrapper-class="col-span-2"
            v-model="form_data.confirm_password"
            type="password"
            name="confirm_password"
            placeholder="Enter your Confirm Password"
            label="Confirm password"
        />
    </div>
    <pub-button>Submit</pub-button>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { PubInput, PubButton } from "vuelicity";

const form_data = reactive({
    first_name: "",
    last_name: "",
    company: "",
    phone: "",
    email: "",
    website: "",
    visitors: 0,
    password: "",
    confirm_password: ""
});
</script>
