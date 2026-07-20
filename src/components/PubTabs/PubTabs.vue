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
});

const emit = defineEmits(["update:modelValue", "click:tab"]);

defineOptions({ inheritAttrs: false });
const attrs = useAttrs();

const slots = useSlots();
const defaultSlot = slots.default;
const tabsChildren = computed(() => {
    return defaultSlot
        ? flatten(defaultSlot({})).filter((v) => {
            return v.type;
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

const tabsState = reactive(props);
provide("tabsState", { tabsState });

const { tabClasses } = useTabsClasses(toRefs(props));
</script>

<template>
    <template v-if="!vertical">
        <ul role="tablist" :class="tabClasses">
            <pub-tab-content v-for="(item, id) in tabsChildren" :key="id" :active="modelValueRef === item.props?.name"
                :disabled="item.props?.disabled" :name="item.props?.name" :title="item.props?.title"
                @click="emit('click:tab')" />
        </ul>
        <div v-bind="attrs">
            <slot />
        </div>
    </template>
</template>
