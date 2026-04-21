<template>
    <div class="w-full">
        <pub-carousel :pictures="pictures" slide :interval="1000"/>
    </div>
</template>

<script setup>
import { PubCarousel } from "vuelicity";

const pictures = [
    { src: "/images/img-1.svg", alt: "Image 1" },
    { src: "/images/img-2.svg", alt: "Image 2" },
    { src: "/images/img-3.svg", alt: "Image 3" }
];
</script>
