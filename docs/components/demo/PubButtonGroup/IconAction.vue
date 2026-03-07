<template>
    <pub-button-group>
        <pub-button theme="blue" outline>
            Save Book
        </pub-button>
        <pub-button theme="blue" outline>
            <pub-icon name="bookmark" aschild />
        </pub-button>
    </pub-button-group>
</template>

<script setup>
import { PubButtonGroup, PubButton, PubIcon } from "vuelicity";
</script>