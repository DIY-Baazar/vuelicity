<script lang="ts" setup>
import { computed, inject, toRef, type Ref, type VNode } from 'vue';
import { useTabClasses } from './utils';
import type { TabContentProps, TabsState } from './types';

const props = withDefaults(defineProps<TabContentProps>(), {
    title: '',
    disabled: false,
    active: false
})

const { tabsState, iconSlots: _iconSlots, onActivate } = inject<{
    tabsState: TabsState, iconSlots: Ref<Record<string, (() => VNode[]) | undefined>>, onActivate: (name: string) => void
}>("tabsState")!;

const variant = computed(() => tabsState.variant ?? 'default');
const itemClass = computed(() => tabsState.itemClass ?? '');
const itemActiveClass = computed(() => tabsState.itemActiveClass ?? '');
const vertical = computed(() => tabsState.vertical ?? false);
const fullWidth = computed(() => tabsState.fullWidth ?? false);
const theme = computed(() => tabsState.theme ?? 'default');
const iconPosition = computed(() => tabsState.iconPosition ?? 'left');
const iconSlots = computed(() => _iconSlots.value ?? {} as Record<string, (() => VNode[]) | undefined>)

const iconSlotFn = computed(() => iconSlots.value[props.name])
const hasIcon = computed(() => !!iconSlotFn.value)
const iconComponent = computed(() => {
    const fn = iconSlotFn.value
    return fn ? () => fn() : null
})

const tryActivateTab = () => {
    if (props.disabled) return
    if (!onActivate) return
    onActivate(props.name)
}

const handleKeydown = (event: KeyboardEvent) => {
    const target = event.currentTarget as HTMLElement
    const list = target.closest('[role="tablist"]')
    if (!list) return

    const tabs = [...list.querySelectorAll<HTMLElement>('[role="tab"]:not([disabled])')]
    const currentIndex = tabs.indexOf(target)
    if (currentIndex === -1) return

    let targetIndex: number | null = null
    switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
            targetIndex = (currentIndex + 1) % tabs.length
            break
        case 'ArrowLeft':
        case 'ArrowUp':
            targetIndex = (currentIndex - 1 + tabs.length) % tabs.length
            break
        case 'Home':
            targetIndex = 0
            break
        case 'End':
            targetIndex = tabs.length - 1
            break
        default:
            return
    }

    event.preventDefault()
    const targetTab = tabs[targetIndex]
    targetTab.focus()
    const targetName = targetTab.dataset.name
    if (targetName && onActivate) onActivate(targetName)
}

const { tabClasses } = useTabClasses({
    active: toRef(() => props.active),
    disabled: toRef(() => props.disabled),
    variant,
    itemClass,
    itemActiveClass,
    vertical,
    fullWidth,
    theme
});
</script>

<template>
    <li role="presentation" :class="{ 'flex-1': fullWidth && !vertical }">
        <button :id="`tab-${name}`" type="button" role="tab" :data-name="name" :aria-controls="`panel-${name}`"
            :aria-selected="active" :aria-label="!title ? name : undefined" :tabindex="active ? 0 : -1"
            :disabled="disabled || undefined" :class="tabClasses" @click="tryActivateTab" @keydown="handleKeydown">
            <template v-if="iconPosition === 'left'">
                <component :is="iconComponent" v-if="hasIcon" aria-hidden="true" />
                <span v-if="title">{{ title }}</span>
            </template>
            <template v-else>
                <span v-if="title">{{ title }}</span>
                <component :is="iconComponent" v-if="hasIcon" aria-hidden="true" />
            </template>
        </button>
    </li>
</template>
