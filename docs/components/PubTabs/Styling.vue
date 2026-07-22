<template>
    <pub-tabs v-model="activeTab"
        tab-class="bg-amber-100 dark:bg-green-900 border-b-2 border-amber-400 dark:border-green-700"
        item-class="font-bold text-amber-800 dark:text-green-300 hover:bg-amber-300 hover:text-amber-900 dark:hover:bg-green-800 dark:hover:text-green-100"
        item-active-class="bg-amber-400 dark:bg-green-700 text-amber-900 dark:text-green-100"
        class="bg-amber-50 dark:bg-green-950 p-5 border-amber-400 border-x-2 dark:border-green-700 border-b-2">
        <pub-tab name="profile" title="Profile"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            odio
            repudiandae reprehenderit, modi perferendis recusandae rerum minus architecto pariatur consequatur veritatis
            facere excepturi officiis veniam distinctio. Accusamus sequi atque debitis. </pub-tab>
        <pub-tab name="orders" title="Orders"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
            optio
            voluptatem, accusantium esse, aspernatur repellendus voluptas modi ipsam magnam laboriosam nemo quidem? Eos,
            obcaecati explicabo. Necessitatibus aperiam quos voluptatem harum. </pub-tab>
        <pub-tab name="address" title="Address"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            ipsum
            pariatur iusto error ratione facere quam, natus quas ea distinctio porro ipsam dolorum quod deserunt nemo
            repellat
            perspiciatis! Aliquam, ad? </pub-tab>
        <pub-tab name="admin" title="Admin" disabled>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, harum qui voluptas placeat dolorem sint
            asperiores nemo et voluptatem commodi nesciunt impedit earum perferendis odit dicta, ipsum illo aliquam
            corporis.
        </pub-tab>
    </pub-tabs>
</template>

<script setup>
import { ref } from "vue";
import { PubTab, PubTabs } from "vuelicity";

const activeTab = ref("profile");
</script>
