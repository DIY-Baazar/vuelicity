<template>
    <pub-tabs v-model="activeTab" class="p-5">
        <pub-tab name="profile" title="Profile">
            <template #icon>
                <svg class="size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                        d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
            </template>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, odio
            repudiandae reprehenderit, modi perferendis recusandae rerum minus architecto pariatur consequatur veritatis
            facere excepturi officiis veniam distinctio. Accusamus sequi atque debitis.
        </pub-tab>
        <pub-tab name="orders" title="Orders">
            <template #icon>
                <svg class="size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                        d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
            </template>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
            optio
            voluptatem, accusantium esse, aspernatur repellendus voluptas modi ipsam magnam laboriosam nemo quidem? Eos,
            obcaecati explicabo. Necessitatibus aperiam quos voluptatem harum. </pub-tab>
        <pub-tab name="address" title="Address">
            <template #icon>
                <svg class="size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                        d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
            </template> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            ipsum
            pariatur iusto error ratione facere quam, natus quas ea distinctio porro ipsam dolorum quod deserunt nemo
            repellat
            perspiciatis! Aliquam, ad? </pub-tab>
        <pub-tab name="admin" title="Admin" disabled>
            <template #icon>
                <svg class="size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                        d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
            </template>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, harum qui voluptas placeat dolorem sint
            asperiores nemo et voluptatem commodi nesciunt impedit earum perferendis odit dicta, ipsum illo aliquam
            corporis.
        </pub-tab>
    </pub-tabs>
</template>

<script setup>
import { ref } from "vue";
import { PubTab, PubTabs, PubIcon } from "vuelicity";

const activeTab = ref("profile");
</script>
