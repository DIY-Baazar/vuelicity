<script lang="ts" setup>
import {
    computed,
    provide,
    reactive,
    toRefs,
    useAttrs,
    useSlots,
    type VNode,
} from "vue";
import type { TabsProps } from "./types";
import { useTabsClasses } from "./utils";
import PubTabContent from "./PubTabContent.vue";
import { flatten } from "@/utils/flatten";

const props = withDefaults(defineProps<TabsProps>(), {
    variant: "default",
    modelValue: "",
    directive: "if",
    tabClass: "",
    itemClass: "",
    itemActiveClass: "",
    iconPosition: "left",
    vertical: false,
    fullWidth: false,
    color: 'blue'
});

const emit = defineEmits(["update:modelValue", "click:tab"]);

defineOptions({ inheritAttrs: false });
const attrs = useAttrs();

const slots = useSlots();
const defaultSlot = slots.default;
const tabsChildren = computed(() => {
    return defaultSlot
        ? flatten(defaultSlot({})).filter((v) => {
            return (v.type as { __PUB_TAB__?: true }).__PUB_TAB__;
        })
        : [];
});

const iconSlots = computed(() => {
    const map: Record<string, (() => VNode[]) | undefined> = {};
    for (const item of tabsChildren.value) {
        const name = item.props?.name as string | undefined;
        if (name) {
            map[name] = (item.children as { icon?: () => VNode[] } | null)?.icon;
        }
    }
    return map;
});

const modelValueRef = computed({
    get: () => props.modelValue,
    set: (value: string) => emit("update:modelValue", value),
});

const onActivate = (value: string) => {
    modelValueRef.value = value
}

const tabsState = reactive(props);
provide("tabsState", {
    tabsState, iconSlots, modelValue: modelValueRef, onActivate
});

const { tabsClasses } = useTabsClasses(toRefs(props));
</script>

<template>
    <template v-if="!vertical">
        <ul role="tablist" :class="tabsClasses">
            <pub-tab-content v-for="(item, id) in tabsChildren" :key="id" :active="modelValueRef === item.props?.name"
                :disabled="item.props?.disabled" :name="item.props?.name" :title="item.props?.title"
                @click="emit('click:tab')" />
        </ul>
        <div v-bind="attrs">
            <slot />
        </div>
    </template>
    <template v-else>
        <div class="flex">
            <ul role="tablist" aria-orientation="vertical" :class="tabsClasses">
                <pub-tab-content v-for="(item, id) in tabsChildren" :key="id"
                    :active="modelValueRef === item.props?.name" :disabled="item.props?.disabled"
                    :name="item.props?.name" :title="item.props?.title" @click="emit('click:tab')" />
            </ul>
            <div class="flex-1" v-bind="attrs">
                <slot />
            </div>
        </div>
    </template>
</template>
