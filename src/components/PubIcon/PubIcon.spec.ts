import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import PubIcon from './PubIcon.vue'

import type { IconSize, IconType } from './types'
import type { ThemeColor } from '@/composables/useThemeColor'

describe('PubIcon', () => {
    describe('structure', () => {
        it('renders as a span with an inner svg', () => {
            const wrapper = mount(PubIcon, {
                props: { name: 'check' },
            })
            expect(wrapper.element.tagName).toBe('SPAN')
            expect(wrapper.classes()).toContain('pub-icon')
            expect(wrapper.find('svg').exists()).toBe(true)
        })

        it('applies default classes', () => {
            const wrapper = mount(PubIcon, {
                props: { name: 'check' },
            })
            expect(wrapper.classes()).toContain('inline-block')
            expect(wrapper.classes()).toContain('w-6')
            expect(wrapper.classes()).toContain('h-6')
            expect(wrapper.classes()).toContain('text-inherit')
            expect(wrapper.classes()).toContain('icon-solid')
        })

        it('renders svg path content for a known icon', () => {
            const wrapper = mount(PubIcon, {
                props: { name: 'check' },
            })
            expect(wrapper.find('svg').html()).toContain('path')
        })
    })

    describe('size', () => {
        it.each([
            ['2xs' as IconSize, 'w-2', 'h-2'],
            ['xs' as IconSize, 'w-4', 'h-4'],
            ['sm' as IconSize, 'w-6', 'h-6'],
            ['md' as IconSize, 'w-8', 'h-8'],
            ['lg' as IconSize, 'w-10', 'h-10'],
            ['xl' as IconSize, 'w-12', 'h-12'],
        ])('applies %s size classes', (size, wClass, hClass) => {
            const wrapper = mount(PubIcon, {
                props: { name: 'check', size },
            })
            expect(wrapper.classes()).toContain(wClass)
            expect(wrapper.classes()).toContain(hClass)
        })
    })

    describe('type', () => {
        it.each([
            ['solid' as IconType, 'icon-solid'],
            ['outline' as IconType, 'icon-outline'],
            ['duotone' as IconType, 'icon-duotone'],
        ])('applies %s type class', (type, typeClass) => {
            const wrapper = mount(PubIcon, {
                props: { name: 'check', type },
            })
            expect(wrapper.classes()).toContain(typeClass)
        })
    })

    describe('color', () => {
        it('applies text-inherit for default color', () => {
            const wrapper = mount(PubIcon, {
                props: { name: 'check', color: 'default' },
            })
            expect(wrapper.classes()).toContain('text-inherit')
        })

        it.each([
            ['blue', 'text-blue-500'],
            ['red', 'text-red-500'],
            ['green', 'text-green-500'],
        ])('applies %s theme color classes', (color, textClass) => {
            const wrapper = mount(PubIcon, {
                props: { name: 'check', color: color as ThemeColor },
            })
            expect(wrapper.classes()).toContain(textClass)
        })
    })

    describe('modifiers', () => {
        it('applies rotate class when rotate is true', () => {
            const wrapper = mount(PubIcon, {
                props: { name: 'check', rotate: true },
            })
            expect(wrapper.classes()).toContain('rotate-90')
        })

        it('applies flip class when flip is true', () => {
            const wrapper = mount(PubIcon, {
                props: { name: 'check', flip: true },
            })
            expect(wrapper.classes()).toContain('scale-x-[-1]')
        })

        it('applies spin class when spin is true', () => {
            const wrapper = mount(PubIcon, {
                props: { name: 'check', spin: true },
            })
            expect(wrapper.classes()).toContain('animate-spin')
        })

        it('applies mirror class when mirror is true', () => {
            const wrapper = mount(PubIcon, {
                props: { name: 'check', mirror: true },
            })
            expect(wrapper.classes()).toContain('scale-x-[-1]')
            expect(wrapper.classes()).toContain('scale-y-[-1]')
        })
    })

    describe('aschild', () => {
        it('omits size and color classes when aschild is true', () => {
            const wrapper = mount(PubIcon, {
                props: { name: 'check', aschild: true, color: 'blue', size: 'lg' },
            })
            expect(wrapper.classes()).not.toContain('w-10')
            expect(wrapper.classes()).not.toContain('text-blue-500')
        })
    })

    describe('custom class', () => {
        it('accepts custom class', () => {
            const wrapper = mount(PubIcon, {
                props: { name: 'check', class: 'custom-icon' },
            })
            expect(wrapper.classes()).toContain('custom-icon')
        })
    })

    describe('attributes', () => {
        it('passes through extra attributes', () => {
            const wrapper = mount(PubIcon, {
                props: { name: 'check' },
                attrs: { 'aria-hidden': 'true', 'data-testid': 'icon-check' },
            })
            expect(wrapper.attributes('aria-hidden')).toBe('true')
            expect(wrapper.attributes('data-testid')).toBe('icon-check')
        })
    })
})
