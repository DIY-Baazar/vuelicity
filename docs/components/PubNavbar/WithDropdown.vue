<template>
    <pub-navbar>
        <template #logo>
            <pub-navbar-logo> Vuelicity </pub-navbar-logo>
        </template>

        <template #default="{ isShowMenu }">
            <pub-navbar-collapse :is-show-menu="isShowMenu">
                <pub-navbar-link is-active link="#"> Home </pub-navbar-link>
                <pub-navbar-link link="#"> Services </pub-navbar-link>
                <pub-navbar-link link="#"> Pricing </pub-navbar-link>
                <pub-navbar-link link="#"> Contact </pub-navbar-link>
                <pub-dropdown theme="none" text="Profile" type="navlink">
                    <nav class="py-2 text-sm text-gray-700">
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100"> Dashboard </a>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100"> Settings </a>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100"> Earnings </a>
                    </nav>
                </pub-dropdown>
            </pub-navbar-collapse>
        </template>
    </pub-navbar>
</template>

<script lang="ts" setup>
import { PubNavbar, PubNavbarLogo, PubNavbarCollapse, PubNavbarLink, PubDropdown } from "vuelicity";
</script>
