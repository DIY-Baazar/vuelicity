<template>
    <pub-button-group>
        <pub-button theme="blue" outline>
            <template #prepend>
                <pub-icon name="download" aschild />
            </template>
            Download
        </pub-button>
        <pub-button theme="blue" outline>
            456k
        </pub-button>
    </pub-button-group>
</template>

<script setup>
import { PubButtonGroup, PubButton, PubIcon } from "vuelicity";
</script>