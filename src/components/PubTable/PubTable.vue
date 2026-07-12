<script lang="ts" setup>
import { provide, reactive } from "vue";
import type { TableProps } from "./types";

const props = withDefaults(
    defineProps<TableProps>(),
    {
        class: "",
        wrapperClass: "",
        theme: "default",
        hoverable: false,
        striped: false,
        stripedColumns: false,
    }
);

const tableState = reactive(props);
provide("tableState", { tableState });
</script>

<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-left text-sm text-gray-500">
            <slot />
        </table>
    </div>
</template>