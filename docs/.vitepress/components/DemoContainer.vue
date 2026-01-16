<style lang="scss">
.vp-raw {
    border: 1px solid var(--vp-c-default-2);
    border-radius: 5px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;

    // h1,
    // h2,
    // h3,
    // h4,
    // h5,
    // h6,
    // p {
    //     margin: 0;
    //     line-height: 1;
    // }

    // a {
    //     text-decoration: inherit;
    //     color: inherit;
    // }

    // ul,
    // ol {
    //     list-style: none;
    //     margin: 0;
    //     padding: 0;
    // }
}
</style>

<template>
    <div :class="`vp-raw flex flex-${flexType} gap-3`">
        <slot></slot>
    </div>
</template>


<script lang="ts" setup>
interface DCProps {
    flexType?: 'col' | 'row';
}

const props = withDefaults(defineProps<DCProps>(), {
    flexType: 'row'
});
</script>