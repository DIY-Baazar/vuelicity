import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import PubBadge from './PubBadge.vue'

import type { BadgeSize } from './types'
import type { ThemeColor } from '@/composables/useThemeColor'

describe('PubBadge', () => {
    describe('structure', () => {
        it('renders properly', () => {
            const wrapper = mount(PubBadge, {
                slots: {
                    default: 'Badge',
                },
            })
            expect(wrapper.text()).toContain('Badge')
        })

        it('renders as span by default', () => {
            const wrapper = mount(PubBadge, {
                slots: {
                    default: 'Badge',
                },
            })
            expect(wrapper.element.tagName).toBe('SPAN')
        })

        it('renders as anchor when href is provided', () => {
            const wrapper = mount(PubBadge, {
                props: {
                    href: '/test',
                },
                slots: {
                    default: 'Badge',
                },
            })
            expect(wrapper.element.tagName).toBe('A')
            expect(wrapper.attributes('href')).toBe('/test')
        })

        it('applies default classes', () => {
            const wrapper = mount(PubBadge, {
                slots: {
                    default: 'Badge',
                },
            })
            expect(wrapper.classes()).toContain('pub-badge')
            expect(wrapper.classes()).toContain('rounded')
            expect(wrapper.classes()).toContain('flex')
            expect(wrapper.classes()).toContain('items-center')
            expect(wrapper.classes()).toContain('gap-2')
            expect(wrapper.classes()).toContain('font-semibold')
        })
    })

    describe('size', () => {
        it.each([
            ['xs' as BadgeSize, 'px-1', 'py-0.5', 'text-xs'],
            ['sm' as BadgeSize, 'px-2', 'py-1', 'text-sm'],
            ['md' as BadgeSize, 'px-4', 'py-2', 'text-base'],
        ])('applies %s size classes', (size, pxClass, pyClass, textClass) => {
            const wrapper = mount(PubBadge, {
                props: {
                    size,
                },
                slots: {
                    default: 'Badge',
                },
            })
            expect(wrapper.classes()).toContain(pxClass)
            expect(wrapper.classes()).toContain(pyClass)
            expect(wrapper.classes()).toContain(textClass)
        })
    })

    describe('color', () => {
        it.each([
            ['default', 'bg-light', 'text-grey-800'],
            ['blue', 'bg-blue-100', 'text-blue-800'],
            ['red', 'bg-red-100', 'text-red-800'],
            ['green', 'bg-green-100', 'text-green-800'],
            ['yellow', 'bg-yellow-100', 'text-yellow-800'],
            ['cyan', 'bg-cyan-100', 'text-cyan-800'],
            ['pink', 'bg-pink-100', 'text-pink-800'],
            ['grey', 'bg-grey-200', 'text-grey-800'],
            ['purple', 'bg-purple-100', 'text-purple-800'],
        ])('applies %s color classes', (color, bgClass, textClass) => {
            const wrapper = mount(PubBadge, {
                props: {
                    color: color as ThemeColor,
                },
                slots: {
                    default: 'Badge',
                },
            })
            console.log(`Classes for ${color}:`, Array.from(wrapper.classes()))
            expect(wrapper.classes()).toContain(bgClass)
            expect(wrapper.classes()).toContain(textClass)
        })
    })

    describe('bordered', () => {
        it('adds border when bordered is true', () => {
            const wrapper = mount(PubBadge, {
                props: {
                    bordered: true,
                },
                slots: {
                    default: 'Badge',
                },
            })
            expect(wrapper.classes()).toContain('border')
            expect(wrapper.classes()).toContain('border-grey-800')
        })

        it('does not add border when bordered is false', () => {
            const wrapper = mount(PubBadge, {
                props: {
                    bordered: false,
                },
                slots: {
                    default: 'Badge',
                },
            })
            expect(wrapper.classes()).not.toContain('border')
            expect(wrapper.classes()).not.toContain('border-grey-800')
        })
    })

    describe('rounded', () => {
        it('adds rounded-full when rounded is true', () => {
            const wrapper = mount(PubBadge, {
                props: {
                    rounded: true,
                },
                slots: {
                    default: 'Badge',
                },
            })
            expect(wrapper.classes()).toContain('rounded-full')
        })

        it('does not add rounded-full when rounded is false', () => {
            const wrapper = mount(PubBadge, {
                props: {
                    rounded: false,
                },
                slots: {
                    default: 'Badge',
                },
            })
            expect(wrapper.classes()).not.toContain('rounded-full')
            // Should still have the default rounded class
            expect(wrapper.classes()).toContain('rounded')
        })
    })

    describe('custom class', () => {
        it('accepts custom class', () => {
            const wrapper = mount(PubBadge, {
                props: {
                    class: 'custom-class',
                },
                slots: {
                    default: 'Badge',
                },
            })
            expect(wrapper.classes()).toContain('custom-class')
        })
    })

    describe('slots', () => {
        it('renders icon slot', () => {
            const wrapper = mount(PubBadge, {
                slots: {
                    icon: '<i class="icon">Icon</i>',
                    default: 'Badge',
                },
            })
            expect(wrapper.html()).toContain('<i class="icon">Icon</i>')
        })

        it('renders default slot', () => {
            const wrapper = mount(PubBadge, {
                slots: {
                    default: 'Badge Content',
                },
            })
            expect(wrapper.text()).toContain('Badge Content')
        })
    })
})
