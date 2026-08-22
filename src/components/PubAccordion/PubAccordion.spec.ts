import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { defineComponent, h, nextTick } from 'vue'

import PubAccordion from './PubAccordion.vue'
import PubAccordionContent from './PubAccordionContent.vue'
import PubAccordionHeader from './PubAccordionHeader.vue'
import PubAccordionPanel from './PubAccordionPanel.vue'

const AccordionHarness = defineComponent({
    name: 'AccordionHarness',
    components: {
        PubAccordion,
        PubAccordionPanel,
        PubAccordionHeader,
        PubAccordionContent,
    },
    props: {
        collapsed: { type: Boolean, default: false },
        flushed: { type: Boolean, default: false },
        persistent: { type: Boolean, default: false },
        class: { type: String, default: '' },
    },
    setup (props) {
        return () =>
            h(
                PubAccordion,
                {
                    collapsed: props.collapsed,
                    flushed: props.flushed,
                    persistent: props.persistent,
                    class: props.class,
                },
                {
                    default: () => [
                        h(PubAccordionPanel, null, {
                            default: () => [
                                h(PubAccordionHeader, null, () => 'Panel One'),
                                h(PubAccordionContent, null, () => 'Content One'),
                            ],
                        }),
                        h(PubAccordionPanel, null, {
                            default: () => [
                                h(PubAccordionHeader, null, () => 'Panel Two'),
                                h(PubAccordionContent, null, () => 'Content Two'),
                            ],
                        }),
                        h(PubAccordionPanel, null, {
                            default: () => [
                                h(PubAccordionHeader, null, () => 'Panel Three'),
                                h(PubAccordionContent, null, () => 'Content Three'),
                            ],
                        }),
                    ],
                },
            )
    },
})

describe('PubAccordion', () => {
    describe('structure', () => {
        it('renders accordion with panels', async () => {
            const wrapper = mount(AccordionHarness)
            await nextTick()
            expect(wrapper.find('.pub-accordion').exists()).toBe(true)
            expect(wrapper.findAll('.pub-accordion-panel')).toHaveLength(3)
            expect(wrapper.findAll('.pub-accordion-header')).toHaveLength(3)
            expect(wrapper.findAll('.pub-accordion-content')).toHaveLength(3)
            expect(wrapper.text()).toContain('Panel One')
            expect(wrapper.text()).toContain('Panel Two')
            expect(wrapper.text()).toContain('Panel Three')
        })

        it('applies default accordion classes', () => {
            const wrapper = mount(AccordionHarness)
            expect(wrapper.find('.pub-accordion').classes()).toContain('w-full')
        })

        it('accepts custom class', () => {
            const wrapper = mount(AccordionHarness, {
                props: { class: 'custom-accordion' },
            })
            expect(wrapper.find('.pub-accordion').classes()).toContain('custom-accordion')
        })
    })

    describe('collapsed', () => {
        it('opens the first panel by default when not collapsed', async () => {
            const wrapper = mount(AccordionHarness, {
                props: { collapsed: false },
            })
            await nextTick()
            const contents = wrapper.findAll('.pub-accordion-content')
            expect(contents[0].classes()).not.toContain('hidden')
            expect(contents[1].classes()).toContain('hidden')
            expect(contents[2].classes()).toContain('hidden')
        })

        it('keeps all panels closed when collapsed is true', async () => {
            const wrapper = mount(AccordionHarness, {
                props: { collapsed: true },
            })
            await nextTick()
            const contents = wrapper.findAll('.pub-accordion-content')
            contents.forEach((content) => {
                expect(content.classes()).toContain('hidden')
            })
        })
    })

    describe('toggle', () => {
        it('opens a closed panel when its header is clicked', async () => {
            const wrapper = mount(AccordionHarness, {
                props: { collapsed: true },
            })
            await nextTick()
            const headers = wrapper.findAll('.pub-accordion-header button')
            await headers[1].trigger('click')
            await nextTick()

            const contents = wrapper.findAll('.pub-accordion-content')
            expect(contents[1].classes()).not.toContain('hidden')
            expect(contents[0].classes()).toContain('hidden')
            expect(contents[2].classes()).toContain('hidden')
        })

        it('closes other panels when opening one (non-persistent)', async () => {
            const wrapper = mount(AccordionHarness)
            await nextTick()

            const headers = wrapper.findAll('.pub-accordion-header button')
            await headers[1].trigger('click')
            await nextTick()

            const contents = wrapper.findAll('.pub-accordion-content')
            expect(contents[0].classes()).toContain('hidden')
            expect(contents[1].classes()).not.toContain('hidden')
        })

        it('closes an open panel when clicked again', async () => {
            const wrapper = mount(AccordionHarness)
            await nextTick()

            const headers = wrapper.findAll('.pub-accordion-header button')
            await headers[0].trigger('click')
            await nextTick()

            expect(wrapper.findAll('.pub-accordion-content')[0].classes()).toContain('hidden')
        })
    })

    describe('persistent', () => {
        it('allows multiple panels open when persistent is true', async () => {
            const wrapper = mount(AccordionHarness, {
                props: { persistent: true },
            })
            await nextTick()

            const headers = wrapper.findAll('.pub-accordion-header button')
            await headers[1].trigger('click')
            await nextTick()

            const contents = wrapper.findAll('.pub-accordion-content')
            expect(contents[0].classes()).not.toContain('hidden')
            expect(contents[1].classes()).not.toContain('hidden')
        })
    })

    describe('flushed', () => {
        it('applies flushed header classes', async () => {
            const wrapper = mount(AccordionHarness, {
                props: { flushed: true },
            })
            await nextTick()
            const headerButton = wrapper.find('.pub-accordion-header button')
            expect(headerButton.classes()).toContain('border-b')
            expect(headerButton.classes()).toContain('border-x-0')
        })

        it('applies default bordered header classes when not flushed', async () => {
            const wrapper = mount(AccordionHarness)
            await nextTick()
            const headerButton = wrapper.find('.pub-accordion-header button')
            expect(headerButton.classes()).toContain('border')
            expect(headerButton.classes()).toContain('border-grey-200')
            expect(headerButton.classes()).toContain('rounded-t-xl')
        })
    })

    describe('header icon', () => {
        it('rotates chevron when panel is open', async () => {
            const wrapper = mount(AccordionHarness)
            await nextTick()
            const icon = wrapper.findAllComponents({ name: 'PubIcon' })[0]
            expect(icon.classes()).toContain('rotate-180')
        })

        it('does not rotate chevron when panel is closed', async () => {
            const wrapper = mount(AccordionHarness, {
                props: { collapsed: true },
            })
            await nextTick()
            const icon = wrapper.findAllComponents({ name: 'PubIcon' })[0]
            expect(icon.classes()).not.toContain('rotate-180')
        })
    })

    describe('events', () => {
        it('emits show and hide on panel visibility change', async () => {
            const wrapper = mount(AccordionHarness, {
                props: { collapsed: true },
            })
            await nextTick()

            const panels = wrapper.findAllComponents(PubAccordionPanel)
            const headers = wrapper.findAll('.pub-accordion-header button')

            await headers[0].trigger('click')
            await nextTick()
            expect(panels[0].emitted('show')).toBeTruthy()

            await headers[0].trigger('click')
            await nextTick()
            expect(panels[0].emitted('hide')).toBeTruthy()
        })
    })
})
