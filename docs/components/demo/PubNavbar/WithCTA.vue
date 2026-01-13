<template>
    <pub-navbar>
        <template #logo>
            <pub-navbar-logo>
                Vuelicity
            </pub-navbar-logo>
        </template>

        <template #default="{ isShowMenu }">
            <pub-navbar-collapse :is-show-menu="isShowMenu">
                <pub-navbar-link is-active link="#">
                    Home
                </pub-navbar-link>
                <pub-navbar-link link="#">
                    Services
                </pub-navbar-link>
                <pub-navbar-link link="#">
                    Pricing
                </pub-navbar-link>
                <pub-navbar-link link="#">
                    Contact
                </pub-navbar-link>
            </pub-navbar-collapse>
        </template>

        <template #right-side>
            <pub-button theme="blue">
                Get started
            </pub-button>
        </template>
    </pub-navbar>
</template>

<script lang="ts" setup>
import { PubNavbar, PubNavbarLogo, PubNavbarCollapse, PubNavbarLink, PubButton } from "vuelicity"
</script>
