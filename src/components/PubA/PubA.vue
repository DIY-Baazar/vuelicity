<template>
    <a :href="href" :class="[color, 'inline-flex items-center hover:underline']">
        <slot />
    </a>
</template>

<script setup lang="ts">
interface LinkProps {
    href?: string;
    color?: string;
}

withDefaults(defineProps<LinkProps>(), {
    href: '',
    color: 'text-blue-600',
});
</script>
