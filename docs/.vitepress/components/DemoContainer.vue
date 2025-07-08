<style scoped lang="scss">
.demo-container {
    border: 1px solid var(--vp-c-default-2);
    border-radius: 5px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
}
</style>

<template>
    <div class="demo-container">
        <slot></slot>
    </div>
</template>
