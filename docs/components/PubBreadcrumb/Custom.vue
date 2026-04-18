<template>
    <pub-breadcrumb>
        <pub-breadcrumb-item home href="#">
            <template #home-icon>
                <pub-icon name="folder" />
            </template>
            Home
        </pub-breadcrumb-item>
        <pub-breadcrumb-item href="#">
            <template #arrow-icon>
                <pub-icon name="arrow-right" />
            </template>
            Projects
        </pub-breadcrumb-item>
        <pub-breadcrumb-item>
            <template #arrow-icon>
                <pub-icon name="arrow-right" />
            </template>
            Flowbite
        </pub-breadcrumb-item>
    </pub-breadcrumb>
</template>

<script setup>
import { PubBreadcrumb, PubBreadcrumbItem, PubIcon } from "vuelicity";
</script>
