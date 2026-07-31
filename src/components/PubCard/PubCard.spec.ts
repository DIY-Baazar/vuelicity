import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import PubCard from './PubCard.vue'

import type { CardVariant } from './types'

describe('PubCard', () => {
    describe('structure', () => {
        it('renders properly', () => {
            const wrapper = mount(PubCard, {
                slots: {
                    default: 'Card Content',
                },
            })
            expect(wrapper.text()).toContain('Card Content')
        })

        it('renders as div by default', () => {
            const wrapper = mount(PubCard, {
                slots: {
                    default: 'Card Content',
                },
            })
            expect(wrapper.element.tagName).toBe('DIV')
        })

        it('renders as anchor when href is provided', () => {
            const wrapper = mount(PubCard, {
                props: {
                    href: '/test',
                },
                slots: {
                    default: 'Card Content',
                },
            })
            expect(wrapper.element.tagName).toBe('A')
            expect(wrapper.attributes('href')).toBe('/test')
        })

        it('applies default classes', () => {
            const wrapper = mount(PubCard, {
                slots: {
                    default: 'Card Content',
                },
            })
            expect(wrapper.classes()).toContain('pub-card')
            expect(wrapper.classes()).toContain('block')
            expect(wrapper.classes()).toContain('min-w-xs')
            expect(wrapper.classes()).toContain('rounded-lg')
            expect(wrapper.classes()).toContain('border')
            expect(wrapper.classes()).toContain('border-grey-200')
            expect(wrapper.classes()).toContain('shadow-md')
            expect(wrapper.classes()).toContain('bg-white')
        })

        it('does not render an image when imgSrc is not provided', () => {
            const wrapper = mount(PubCard, {
                slots: {
                    default: 'Card Content',
                },
            })
            expect(wrapper.find('img').exists()).toBe(false)
        })

        it('renders an image when imgSrc is provided', () => {
            const wrapper = mount(PubCard, {
                props: {
                    imgSrc: '/images/desk.jpg',
                    imgAlt: 'Desk',
                },
                slots: {
                    default: 'Card Content',
                },
            })
            const img = wrapper.find('img')
            expect(img.exists()).toBe(true)
            expect(img.attributes('src')).toBe('/images/desk.jpg')
            expect(img.attributes('alt')).toBe('Desk')
            expect(img.classes()).toContain('rounded-t-lg')
        })
    })

    describe('variant', () => {
        it.each([
            [
                'default' as CardVariant,
                ['block', 'min-w-xs', 'rounded-lg', 'border', 'border-grey-200', 'shadow-md'],
            ],
            [
                'image' as CardVariant,
                ['min-w-xs', 'rounded-lg', 'border', 'border-grey-200', 'shadow-md'],
            ],
            [
                'horizontal' as CardVariant,
                ['flex', 'flex-col', 'items-center', 'rounded-lg', 'border', 'shadow-md', 'md:flex-row', 'md:min-w-xl'],
            ],
        ])('applies %s variant classes', (variant, expectedClasses) => {
            const wrapper = mount(PubCard, {
                props: {
                    variant,
                },
                slots: {
                    default: 'Card Content',
                },
            })
            expectedClasses.forEach((cls) => {
                expect(wrapper.classes()).toContain(cls)
            })
        })

        it('applies horizontal image classes when variant is horizontal', () => {
            const wrapper = mount(PubCard, {
                props: {
                    variant: 'horizontal',
                    imgSrc: '/images/desk.jpg',
                    imgAlt: 'Desk',
                },
                slots: {
                    default: 'Card Content',
                },
            })
            const img = wrapper.find('img')
            expect(img.classes()).toContain('object-cover')
            expect(img.classes()).toContain('w-full')
            expect(img.classes()).toContain('h-96')
            expect(img.classes()).toContain('rounded-t-lg')
            expect(img.classes()).toContain('md:h-auto')
            expect(img.classes()).toContain('md:w-48')
            expect(img.classes()).toContain('md:rounded-none')
            expect(img.classes()).toContain('md:rounded-l-lg')
        })

        it('does not apply horizontal image classes for non-horizontal variants', () => {
            const wrapper = mount(PubCard, {
                props: {
                    variant: 'image',
                    imgSrc: '/images/desk.jpg',
                    imgAlt: 'Desk',
                },
                slots: {
                    default: 'Card Content',
                },
            })
            const img = wrapper.find('img')
            expect(img.classes()).not.toContain('object-cover')
            expect(img.classes()).not.toContain('md:w-48')
        })
    })

    describe('href', () => {
        it('adds hover:bg-grey-100 when href is provided', () => {
            const wrapper = mount(PubCard, {
                props: {
                    href: '/page',
                },
                slots: {
                    default: 'Card Content',
                },
            })
            expect(wrapper.classes()).toContain('hover:bg-grey-100')
        })

        it('does not add hover:bg-grey-100 when href is empty', () => {
            const wrapper = mount(PubCard, {
                slots: {
                    default: 'Card Content',
                },
            })
            expect(wrapper.classes()).not.toContain('hover:bg-grey-100')
        })

        it('does not add hover:bg-grey-100 when custom class already includes hover:', () => {
            const wrapper = mount(PubCard, {
                props: {
                    href: '/page',
                    class: 'hover:bg-blue-100',
                },
                slots: {
                    default: 'Card Content',
                },
            })
            expect(wrapper.classes()).toContain('hover:bg-blue-100')
            expect(wrapper.classes()).not.toContain('hover:bg-grey-100')
        })
    })

    describe('custom class', () => {
        it('accepts custom class', () => {
            const wrapper = mount(PubCard, {
                props: {
                    class: 'custom-class',
                },
                slots: {
                    default: 'Card Content',
                },
            })
            expect(wrapper.classes()).toContain('custom-class')
        })

        it('applies bg-white when custom class does not include bg-', () => {
            const wrapper = mount(PubCard, {
                props: {
                    class: 'w-sm',
                },
                slots: {
                    default: 'Card Content',
                },
            })
            expect(wrapper.classes()).toContain('bg-white')
        })

        it('does not apply bg-white when custom class includes bg-', () => {
            const wrapper = mount(PubCard, {
                props: {
                    class: 'bg-grey-50',
                },
                slots: {
                    default: 'Card Content',
                },
            })
            expect(wrapper.classes()).toContain('bg-grey-50')
            expect(wrapper.classes()).not.toContain('bg-white')
        })
    })

    describe('slots', () => {
        it('renders default slot content', () => {
            const wrapper = mount(PubCard, {
                slots: {
                    default: '<h5>Card Title</h5><p>Card body</p>',
                },
            })
            expect(wrapper.html()).toContain('<h5>Card Title</h5>')
            expect(wrapper.html()).toContain('<p>Card body</p>')
        })
    })
})
