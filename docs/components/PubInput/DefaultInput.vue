<template>
  <div class="grid gap-6 mb-3 md:grid-cols-2 w-full">
    <pub-input
      v-model="formData.first_name"
      name="first_name"
      placeholder="Enter your First Name"
      label="First name"
    />
    <pub-input
      v-model="formData.last_name"
      name="last_name"
      placeholder="Enter your Last Name"
      label="Last name"
    />
    <pub-input
      v-model="formData.company"
      name="company"
      placeholder="Enter your Company"
      label="Company"
    />
    <pub-input
      v-model="formData.phone"
      type="tel"
      name="phone"
      placeholder="Enter your Phone number"
      label="Phone number"
    />
    <pub-input
      v-model="formData.website"
      type="url"
      name="website"
      placeholder="Enter your Website URL"
      label="Website URL"
    />
    <pub-input
      v-model="formData.visitors"
      type="number"
      name="visitors"
      placeholder="Enter number of visitors"
      label="Number of visitors"
    />
    <pub-input
      v-model="formData.email"
      wrapper-class="col-span-2"
      type="email"
      name="email"
      placeholder="Enter your Email address"
      label="Email address"
    />
    <pub-input
      v-model="formData.password"
      wrapper-class="col-span-2"
      type="password"
      name="password"
      placeholder="Enter your Password"
      label="Password"
    />
    <pub-input
      v-model="formData.confirm_password"
      wrapper-class="col-span-2"
      type="password"
      name="confirm_password"
      placeholder="Enter your Confirm Password"
      label="Confirm password"
    />
  </div>
  <pub-button>Submit</pub-button>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { PubButton, PubInput } from 'vuelicity'

const formData = reactive({
    first_name: '',
    last_name: '',
    company: '',
    phone: '',
    email: '',
    website: '',
    visitors: 0,
    password: '',
    confirm_password: '',
})
</script>
