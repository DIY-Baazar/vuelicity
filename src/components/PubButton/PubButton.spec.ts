import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { defineComponent, h } from 'vue'

import PubButton from './PubButton.vue'

import type { ButtonRounded, ButtonSize } from './types'
import type { ThemeColor } from '@/composables/useThemeColor'

const RouterLinkStub = defineComponent({
    name: 'RouterLink',
    props: { to: { type: [String, Object], required: true } },
    render () {
        return h('a', this.$slots.default?.())
    },
})

describe('PubButton', () => {
    describe('structure', () => {
        it('renders as a button element by default', () => {
            const wrapper = mount(PubButton, {
                slots: {
                    default: 'Click me',
                },
            })
            expect(wrapper.text()).toContain('Click me')
            expect(wrapper.element.tagName).toBe('BUTTON')
        })

        it('sets type="button" to prevent accidental form submission', () => {
            const wrapper = mount(PubButton, {
                slots: {
                    default: 'Click me',
                },
            })
            expect(wrapper.attributes('type')).toBe('button')
        })

        it('does not set href or to on a plain button', () => {
            const wrapper = mount(PubButton, {
                slots: {
                    default: 'Click me',
                },
            })
            expect(wrapper.attributes('href')).toBeUndefined()
            expect(wrapper.attributes('to')).toBeUndefined()
        })

        it('applies default classes', () => {
            const wrapper = mount(PubButton, {
                slots: {
                    default: 'Button',
                },
            })
            expect(wrapper.classes()).toContain('pub-button')
            expect(wrapper.classes()).toContain('flex')
            expect(wrapper.classes()).toContain('items-center')
            expect(wrapper.classes()).toContain('gap-2')
            expect(wrapper.classes()).toContain('rounded-none')
            expect(wrapper.classes()).toContain('border')
        })
    })

    describe('size', () => {
        it.each([
            ['xs' as ButtonSize, 'text-xs', 'px-2', 'py-1'],
            ['sm' as ButtonSize, 'text-sm', 'px-3', 'py-1.5'],
            ['md' as ButtonSize, 'text-sm', 'px-4', 'py-2'],
            ['lg' as ButtonSize, 'text-base', 'px-5', 'py-2.5'],
            ['xl' as ButtonSize, 'text-base', 'px-6', 'py-3'],
        ])('applies %s size classes', (size, textClass, pxClass, pyClass) => {
            const wrapper = mount(PubButton, {
                props: { size },
                slots: {
                    default: 'Button',
                },
            })
            expect(wrapper.classes()).toContain(textClass)
            expect(wrapper.classes()).toContain(pxClass)
            expect(wrapper.classes()).toContain(pyClass)
        })
    })

    describe('color', () => {
        it.each([
            [
                'blue',
                'border-blue-600',
                'bg-blue-600',
                'hover:bg-blue-700',
                'dark:hover:bg-blue-600',
                'text-white',
                'dark:text-grey-200',
            ],
            [
                'red',
                'border-red-600',
                'bg-red-600',
                'hover:bg-red-700',
                'dark:hover:bg-red-600',
                'text-white',
                'dark:text-grey-200',
            ],
            [
                'green',
                'border-green-600',
                'bg-green-600',
                'hover:bg-green-700',
                'dark:hover:bg-green-600',
                'text-white',
                'dark:text-grey-200',
            ],
            [
                'yellow',
                'border-yellow-600',
                'bg-yellow-600',
                'hover:bg-yellow-700',
                'dark:hover:bg-yellow-600',
                'text-white',
                'dark:text-grey-200',
            ],
            [
                'cyan',
                'border-cyan-600',
                'bg-cyan-600',
                'hover:bg-cyan-700',
                'dark:hover:bg-cyan-600',
                'text-white',
                'dark:text-grey-200',
            ],
            [
                'pink',
                'border-pink-600',
                'bg-pink-600',
                'hover:bg-pink-700',
                'dark:hover:bg-pink-600',
                'text-white',
                'dark:text-grey-200',
            ],
            [
                'grey',
                'border-gray-600',
                'bg-gray-600',
                'hover:bg-gray-700',
                'dark:hover:bg-gray-600',
                'text-white',
                'dark:text-grey-200',
            ],
            [
                'purple',
                'border-purple-600',
                'bg-purple-600',
                'hover:bg-purple-700',
                'dark:hover:bg-purple-600',
                'text-white',
                'dark:text-grey-200',
            ],
        ])(
            'applies %s color classes',
            (color, borderClass, bgClass, hoverBgClass, darkHoverBgClass, textClass, darkTextClass) => {
                const wrapper = mount(PubButton, {
                    props: {
                        color: color as ThemeColor,
                    },
                    slots: {
                        default: 'Button',
                    },
                })
                expect(wrapper.classes()).toContain(borderClass)
                expect(wrapper.classes()).toContain(bgClass)
                expect(wrapper.classes()).toContain(hoverBgClass)
                expect(wrapper.classes()).toContain(darkHoverBgClass)
                expect(wrapper.classes()).toContain(textClass)
                expect(wrapper.classes()).toContain(darkTextClass)
            },
        )
    })

    describe('outline', () => {
        it.each([
            ['blue', 'border-blue-600', 'hover:bg-blue-700', 'text-blue-500', 'dark:hover:bg-blue-600'],
            ['red', 'border-red-600', 'hover:bg-red-700', 'text-red-500', 'dark:hover:bg-red-600'],
            ['green', 'border-green-600', 'hover:bg-green-700', 'text-green-500', 'dark:hover:bg-green-600'],
            ['yellow', 'border-yellow-600', 'hover:bg-yellow-700', 'text-yellow-500', 'dark:hover:bg-yellow-600'],
            ['cyan', 'border-cyan-600', 'hover:bg-cyan-700', 'text-cyan-500', 'dark:hover:bg-cyan-600'],
            ['pink', 'border-pink-600', 'hover:bg-pink-700', 'text-pink-500', 'dark:hover:bg-pink-600'],
            ['grey', 'border-gray-600', 'hover:bg-gray-700', 'text-gray-500', 'dark:hover:bg-gray-600'],
            ['purple', 'border-purple-600', 'hover:bg-purple-700', 'text-purple-500', 'dark:hover:bg-purple-600'],
        ])('applies %s outline color classes', (color, borderClass, hoverBgClass, textClass, darkHoverBgClass) => {
            const wrapper = mount(PubButton, {
                props: {
                    color: color as ThemeColor,
                    outline: true,
                },
                slots: {
                    default: 'Button',
                },
            })
            expect(wrapper.classes()).toContain(borderClass)
            expect(wrapper.classes()).toContain(hoverBgClass)
            expect(wrapper.classes()).toContain(textClass)
            expect(wrapper.classes()).toContain(darkHoverBgClass)
        })
    })

    describe('rounded', () => {
        it.each([
            ['none', 'rounded-none'],
            ['sm', 'rounded-sm'],
            ['md', 'rounded-md'],
            ['lg', 'rounded-lg'],
            ['xl', 'rounded-xl'],
            ['full', 'rounded-full'],
        ])('applies %s rounded classes', (rounded, roundedClass) => {
            const wrapper = mount(PubButton, {
                props: {
                    rounded: rounded as ButtonRounded,
                },
                slots: {
                    default: 'Button',
                },
            })
            expect(wrapper.classes()).toContain(roundedClass)
        })
    })

    describe('square', () => {
        it('applies square rounded classes', () => {
            const wrapper = mount(PubButton, {
                props: {
                    square: true,
                },
                slots: {
                    default: 'Button',
                },
            })
            expect(wrapper.classes()).toContain('p-2')
            expect(wrapper.classes()).not.toContain('px-4')
        })
    })

    describe('custom class', () => {
        it('applies a custom string class and it wins over defaults via useMergeClasses', () => {
            const wrapper = mount(PubButton, {
                props: {
                    class: 'bg-red-500 dark:bg-red-600',
                },
                slots: {
                    default: 'Button',
                },
            })
            expect(wrapper.classes()).toContain('bg-red-500')
            expect(wrapper.classes()).not.toContain('bg-grey-100')
            expect(wrapper.classes()).toContain('dark:bg-red-600')
            expect(wrapper.classes()).not.toContain('dark:bg-grey-800')
        })

        it('applies truthy keys from an object class', () => {
            const wrapper = mount(PubButton, {
                props: { class: { 'custom-class': true, 'other-class': false } },
            })
            expect(wrapper.classes()).toContain('custom-class')
            expect(wrapper.classes()).not.toContain('other-class')
        })
    })

    describe('disabled', () => {
        it('sets the disabled attribute', () => {
            const wrapper = mount(PubButton, {
                props: {
                    disabled: true,
                },
                slots: {
                    default: 'Button',
                },
            })
            expect(wrapper.attributes('disabled')).toBeDefined()
        })

        it('applies disabled state', () => {
            const wrapper = mount(PubButton, {
                props: {
                    disabled: true,
                },
                slots: {
                    default: 'Button',
                },
            })
            expect(wrapper.classes()).toContain('cursor-not-allowed')
            expect(wrapper.classes()).toContain('opacity-50')
        })

        it('does not set disabled attribute on an anchor element', () => {
            const wrapper = mount(PubButton, {
                props: {
                    as: 'a',
                    disabled: true,
                },
                slots: {
                    default: 'Button',
                },
            })
            expect(wrapper.attributes('disabled')).toBeUndefined()
        })

        it('click event is not emitted', () => {
            const wrapper = mount(PubButton, {
                props: {
                    disabled: true,
                },
                slots: {
                    default: 'Button',
                },
            })
            wrapper.trigger('click')
            expect(wrapper.emitted('click')).toBeUndefined()
        })
    })

    describe('loading', () => {
        it('sets aria-busy="true" when loading', () => {
            const wrapper = mount(PubButton, {
                props: {
                    loading: true,
                },
                slots: {
                    default: 'Button',
                },
            })
            expect(wrapper.attributes('aria-busy')).toBe('true')
        })

        it('applies loading state', () => {
            const wrapper = mount(PubButton, {
                props: {
                    loading: true,
                },
                slots: {
                    default: 'Button',
                },
            })
            expect(wrapper.classes()).toContain('cursor-not-allowed')
            expect(wrapper.classes()).toContain('opacity-50')
        })
    })

    describe('link / navigation', () => {
        it('renders as an anchor when href is provided', () => {
            const wrapper = mount(PubButton, { props: { href: '/page' } })
            expect(wrapper.element.tagName).toBe('A')
            expect(wrapper.attributes('href')).toBe('/page')
        })

        it('does not set type attribute on an anchor', () => {
            const wrapper = mount(PubButton, { props: { href: '/page' } })
            expect(wrapper.attributes('type')).toBeUndefined()
        })

        it('passes extra attributes (e.g. target) through to the anchor', () => {
            const wrapper = mount(PubButton, { props: { href: '/page', target: '_blank', rel: 'noopener' } })
            expect(wrapper.attributes('target')).toBe('_blank')
            expect(wrapper.attributes('href')).toBe('/page')
            expect(wrapper.attributes('rel')).toBe('noopener')
        })

        it('renders as router-link when to prop is provided', () => {
            const route = { name: 'product', params: { id: 101 } }
            const wrapper = mount(PubButton, {
                props: { to: '/page' },
                global: { stubs: { 'router-link': RouterLinkStub } },
            })
            expect(wrapper.findComponent(RouterLinkStub).props('to')).toEqual(route)
        })
    })

    describe('slots', () => {
        it('renders prepend slot content', () => {
            const wrapper = mount(PubButton, {
                slots: {
                    prepend: 'prepend',
                    default: 'default',
                },
            })
            expect(wrapper.text()).toContain('prepend')
        })

        it('renders append slot content', () => {
            const wrapper = mount(PubButton, {
                slots: {
                    append: 'append',
                    default: 'default',
                },
            })
            expect(wrapper.text()).toContain('append')
        })
    })
})
