<template>
    <pub-alert show-icon theme="green">
        <template #title>
            <p class="font-bold">This is a success alert</p>
        </template>
        <template #default="{ handleClose }">
            <div class="mt-2 mb-4">
                More info about this success alert goes here. This example text is going to run a bit longer so that you
                can see how spacing within an alert works with this kind of content.
            </div>
            <div class="flex gap-2">
                <pub-button theme="green" size="sm" rounded="md">
                    <template #prepend>
                        <pub-icon name="eye" />
                    </template>
                    View More
                </pub-button>
                <pub-button theme="green" size="sm" rounded="md" outline aria-label="Close" @click="handleClose">
                    Close
                </pub-button>
            </div>
        </template>
    </pub-alert>
    <pub-alert show-icon theme="red">
        <template #title>
            <p class="font-bold">This is a danger alert</p>
        </template>
        <template #default="{ handleClose }">
            <div class="mt-2 mb-4">
                More info about this danger alert goes here. This example text is going to run a bit longer so that you
                can see how spacing within an alert works with this kind of content.
            </div>
            <div class="flex gap-2">
                <pub-button theme="red" size="sm" rounded="md">
                    <template #prepend>
                        <pub-icon name="eye" />
                    </template>
                    View More
                </pub-button>
                <pub-button theme="red" size="sm" rounded="md" outline aria-label="Close" @click="handleClose">
                    Close
                </pub-button>
            </div>
        </template>
    </pub-alert>
</template>

<script setup>
import { PubAlert, PubButton, PubIcon } from "vuelicity";
</script>
