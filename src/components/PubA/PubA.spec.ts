import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import PubA from './PubA.vue'

describe('PubA', () => {
    describe('structure', () => {
        it('renders properly', () => {
            const wrapper = mount(PubA, {
                slots: {
                    default: 'Link text',
                },
            })
            expect(wrapper.text()).toContain('Link text')
            expect(wrapper.element.tagName).toBe('A')
        })

        it('applies default classes', () => {
            const wrapper = mount(PubA, {
                slots: {
                    default: 'Link text',
                },
            })
            expect(wrapper.classes()).toContain('text-blue-600')
            expect(wrapper.classes()).toContain('inline-flex')
            expect(wrapper.classes()).toContain('items-center')
            expect(wrapper.classes()).toContain('hover:underline')
        })
    })

    describe('href', () => {
        it('sets href attribute when provided', () => {
            const wrapper = mount(PubA, {
                props: {
                    href: '/about',
                },
                slots: {
                    default: 'About',
                },
            })
            expect(wrapper.attributes('href')).toBe('/about')
        })

        it('defaults href to empty string', () => {
            const wrapper = mount(PubA, {
                slots: {
                    default: 'Link',
                },
            })
            expect(wrapper.attributes('href')).toBe('')
        })
    })

    describe('color', () => {
        it('applies custom color class', () => {
            const wrapper = mount(PubA, {
                props: {
                    color: 'text-red-600',
                },
                slots: {
                    default: 'Link',
                },
            })
            expect(wrapper.classes()).toContain('text-red-600')
            expect(wrapper.classes()).not.toContain('text-blue-600')
        })
    })
})
