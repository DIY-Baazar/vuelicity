import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import PubKbd from './PubKbd.vue'

describe('PubKbd', () => {
    describe('structure', () => {
        it('renders properly', () => {
            const wrapper = mount(PubKbd, {
                slots: {
                    default: 'Ctrl',
                },
            })
            expect(wrapper.text()).toContain('Ctrl')
            expect(wrapper.element.tagName).toBe('KBD')
        })

        it('applies default classes', () => {
            const wrapper = mount(PubKbd, {
                slots: {
                    default: 'Ctrl',
                },
            })
            expect(wrapper.classes()).toContain('rounded-lg')
            expect(wrapper.classes()).toContain('border')
            expect(wrapper.classes()).toContain('border-grey-200')
            expect(wrapper.classes()).toContain('bg-grey-100')
            expect(wrapper.classes()).toContain('px-2')
            expect(wrapper.classes()).toContain('py-1.5')
            expect(wrapper.classes()).toContain('text-xs')
            expect(wrapper.classes()).toContain('font-semibold')
            expect(wrapper.classes()).toContain('text-grey-800')
        })
    })

    describe('custom class', () => {
        it('accepts custom class', () => {
            const wrapper = mount(PubKbd, {
                props: {
                    class: 'custom-class',
                },
                slots: {
                    default: 'Ctrl',
                },
            })
            expect(wrapper.classes()).toContain('custom-class')
        })
    })

    describe('slots', () => {
        it('renders default slot content', () => {
            const wrapper = mount(PubKbd, {
                slots: {
                    default: 'Shift',
                },
            })
            expect(wrapper.text()).toContain('Shift')
        })

        it('renders icon slot and applies icon classes', () => {
            const wrapper = mount(PubKbd, {
                slots: {
                    icon: '<svg class="icon" />',
                    default: 'K',
                },
            })
            expect(wrapper.html()).toContain('<svg class="icon"')
            expect(wrapper.classes()).toContain('inline-flex')
            expect(wrapper.classes()).toContain('items-center')
        })

        it('does not apply icon classes without icon slot', () => {
            const wrapper = mount(PubKbd, {
                slots: {
                    default: 'K',
                },
            })
            expect(wrapper.classes()).not.toContain('inline-flex')
            expect(wrapper.classes()).not.toContain('items-center')
        })
    })
})
