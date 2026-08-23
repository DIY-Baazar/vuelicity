import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { defineComponent, h, nextTick } from 'vue'

import PubTab from './PubTab.vue'
import PubTabs from './PubTabs.vue'

import type { TabsVariant } from './types'

const TabsHarness = defineComponent({
    name: 'TabsHarness',
    components: { PubTabs, PubTab },
    props: {
        modelValue: { type: String, default: 'profile' },
        variant: { type: String, default: 'default' },
        vertical: { type: Boolean, default: false },
        fullWidth: { type: Boolean, default: false },
        directive: { type: String, default: 'if' },
        color: { type: String, default: 'blue' },
        disabledSecond: { type: Boolean, default: false },
    },
    emits: ['update:modelValue', 'click:tab'],
    setup (props, { emit, attrs }) {
        return () =>
            h(
                PubTabs,
                {
                    'modelValue': props.modelValue,
                    'variant': props.variant as TabsVariant,
                    'vertical': props.vertical,
                    'fullWidth': props.fullWidth,
                    'directive': props.directive as 'if' | 'show',
                    'color': props.color,
                    'class': attrs.class,
                    'onUpdate:modelValue': (value: string) => emit('update:modelValue', value),
                    'onClick:tab': () => emit('click:tab'),
                },
                {
                    default: () => [
                        h(PubTab, { name: 'profile', title: 'Profile' }, () => 'Profile content'),
                        h(
                            PubTab,
                            { name: 'orders', title: 'Orders', disabled: props.disabledSecond },
                            () => 'Orders content',
                        ),
                        h(PubTab, { name: 'address', title: 'Address' }, () => 'Address content'),
                    ],
                },
            )
    },
})

describe('PubTabs', () => {
    describe('structure', () => {
        it('renders a tablist with tab buttons', () => {
            const wrapper = mount(TabsHarness)
            expect(wrapper.find('[role="tablist"]').exists()).toBe(true)
            const tabs = wrapper.findAll('[role="tab"]')
            expect(tabs).toHaveLength(3)
            expect(tabs[0].text()).toBe('Profile')
            expect(tabs[1].text()).toBe('Orders')
            expect(tabs[2].text()).toBe('Address')
        })

        it('applies default tablist classes', () => {
            const wrapper = mount(TabsHarness)
            const tablist = wrapper.find('[role="tablist"]')
            expect(tablist.classes()).toContain('flex')
            expect(tablist.classes()).toContain('text-sm')
            expect(tablist.classes()).toContain('font-medium')
            expect(tablist.classes()).toContain('text-grey-500')
            expect(tablist.classes()).toContain('border-b')
            expect(tablist.classes()).toContain('border-grey-200')
        })

        it('shows the active tab panel content', () => {
            const wrapper = mount(TabsHarness, {
                props: { modelValue: 'profile' },
            })
            expect(wrapper.find('[role="tabpanel"]').text()).toContain('Profile content')
            expect(wrapper.text()).not.toContain('Orders content')
        })

        it('marks the active tab with aria-selected', () => {
            const wrapper = mount(TabsHarness, {
                props: { modelValue: 'orders' },
            })
            const tabs = wrapper.findAll('[role="tab"]')
            expect(tabs[0].attributes('aria-selected')).toBe('false')
            expect(tabs[1].attributes('aria-selected')).toBe('true')
            expect(tabs[1].attributes('tabindex')).toBe('0')
            expect(tabs[0].attributes('tabindex')).toBe('-1')
        })
    })

    describe('interaction', () => {
        it('emits update:modelValue when a tab is clicked', async () => {
            const wrapper = mount(TabsHarness, {
                props: { modelValue: 'profile' },
            })
            await wrapper.findAll('[role="tab"]')[1].trigger('click')
            expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['orders'])
        })

        it('emits click:tab when a tab is clicked', async () => {
            const wrapper = mount(TabsHarness, {
                props: { modelValue: 'profile' },
            })
            await wrapper.findAll('[role="tab"]')[1].trigger('click')
            expect(wrapper.emitted('click:tab')).toBeTruthy()
        })

        it('does not activate a disabled tab', async () => {
            const wrapper = mount(TabsHarness, {
                props: { modelValue: 'profile', disabledSecond: true },
            })
            const ordersTab = wrapper.findAll('[role="tab"]')[1]
            expect(ordersTab.attributes('disabled')).toBeDefined()
            await ordersTab.trigger('click')
            expect(wrapper.emitted('update:modelValue')).toBeUndefined()
        })
    })

    describe('variant', () => {
        it.each([
            ['default' as TabsVariant, 'border-b'],
            ['underline' as TabsVariant, 'border-b'],
            ['pills' as TabsVariant, null],
        ])('applies %s variant tablist classes', (variant, borderClass) => {
            const wrapper = mount(TabsHarness, {
                props: { variant },
            })
            const tablist = wrapper.find('[role="tablist"]')
            if (borderClass) {
                expect(tablist.classes()).toContain(borderClass)
            } else {
                expect(tablist.classes()).not.toContain('border-b')
            }
        })

        it('applies active classes for pills variant', () => {
            const wrapper = mount(TabsHarness, {
                props: { modelValue: 'profile', variant: 'pills' },
            })
            const activeTab = wrapper.find('[role="tab"][aria-selected="true"]')
            expect(activeTab.classes()).toContain('bg-blue-600')
            expect(activeTab.classes()).toContain('rounded-lg')
            expect(activeTab.classes()).toContain('text-white')
        })

        it('applies active classes for underline variant', () => {
            const wrapper = mount(TabsHarness, {
                props: { modelValue: 'profile', variant: 'underline' },
            })
            const activeTab = wrapper.find('[role="tab"][aria-selected="true"]')
            expect(activeTab.classes()).toContain('border-b-2')
            expect(activeTab.classes()).toContain('border-blue-600')
            expect(activeTab.classes()).toContain('text-blue-500')
        })
    })

    describe('vertical', () => {
        it('renders vertical orientation attributes and classes', () => {
            const wrapper = mount(TabsHarness, {
                props: { vertical: true },
            })
            const tablist = wrapper.find('[role="tablist"]')
            expect(tablist.attributes('aria-orientation')).toBe('vertical')
            expect(tablist.classes()).toContain('flex-col')
            expect(tablist.classes()).toContain('border-r')
            expect(wrapper.find('.flex').exists()).toBe(true)
        })
    })

    describe('fullWidth', () => {
        it('makes tab items flex-1 when fullWidth is true', () => {
            const wrapper = mount(TabsHarness, {
                props: { fullWidth: true },
            })
            const items = wrapper.findAll('[role="presentation"]')
            items.forEach((item) => {
                expect(item.classes()).toContain('flex-1')
            })
        })
    })

    describe('directive', () => {
        it('keeps inactive panels in DOM when directive is show', async () => {
            const wrapper = mount(TabsHarness, {
                props: { modelValue: 'profile', directive: 'show' },
            })
            await nextTick()
            const panels = wrapper.findAll('[role="tabpanel"]')
            expect(panels).toHaveLength(3)
            expect(panels[0].isVisible()).toBe(true)
            expect(panels[1].isVisible()).toBe(false)
        })

        it('removes inactive panels from DOM when directive is if', () => {
            const wrapper = mount(TabsHarness, {
                props: { modelValue: 'profile', directive: 'if' },
            })
            expect(wrapper.findAll('[role="tabpanel"]')).toHaveLength(1)
        })
    })

    describe('keyboard', () => {
        it('activates next tab on ArrowRight', async () => {
            const wrapper = mount(TabsHarness, {
                props: { modelValue: 'profile' },
            })
            const firstTab = wrapper.findAll('[role="tab"]')[0]
            await firstTab.trigger('keydown', { key: 'ArrowRight' })
            expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['orders'])
        })

        it('activates last tab on End', async () => {
            const wrapper = mount(TabsHarness, {
                props: { modelValue: 'profile' },
            })
            const firstTab = wrapper.findAll('[role="tab"]')[0]
            await firstTab.trigger('keydown', { key: 'End' })
            expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['address'])
        })

        it('activates first tab on Home', async () => {
            const wrapper = mount(TabsHarness, {
                props: { modelValue: 'address' },
            })
            const lastTab = wrapper.findAll('[role="tab"]')[2]
            await lastTab.trigger('keydown', { key: 'Home' })
            expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['profile'])
        })
    })
})
