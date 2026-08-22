import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import PubAlert from './PubAlert.vue'

import type { AlertTheme } from './types'

describe('PubAlert', () => {
    describe('structure', () => {
        it('renders properly', () => {
            const wrapper = mount(PubAlert, {
                props: {
                    color: 'blue' as const,
                    dismissible: false,
                    bordered: false,
                    showIcon: false,
                    class: '',
                },
                slots: {
                    default: 'Alert Content',
                },
            })
            expect(wrapper.find('.pub-alert').text()).toContain('Alert Content')
        })

        it('renders as div by default', () => {
            const wrapper = mount(PubAlert, {
                props: {
                    color: 'blue' as const,
                    dismissible: false,
                    bordered: false,
                    showIcon: false,
                    class: '',
                },
                slots: {
                    default: 'Alert Content',
                },
            })
            expect(wrapper.find('.pub-alert').element.tagName).toBe('DIV')
        })

        it('applies default classes', () => {
            const wrapper = mount(PubAlert, {
                props: {
                    color: 'blue' as const,
                    dismissible: false,
                    bordered: false,
                    showIcon: false,
                    class: '',
                },
                slots: {
                    default: 'Alert Content',
                },
            })
            const alertElement = wrapper.find('.pub-alert')
            expect(alertElement.classes()).toContain('pub-alert')
            expect(alertElement.classes()).toContain('p-4')
            expect(alertElement.classes()).toContain('gap-3')
            expect(alertElement.classes()).toContain('text-sm')
            expect(alertElement.classes()).toContain('rounded-lg')
            expect(alertElement.attributes('role')).toBe('alert')
        })

        it('renders with custom class', () => {
            const wrapper = mount(PubAlert, {
                props: {
                    color: 'blue' as const,
                    dismissible: false,
                    bordered: false,
                    showIcon: false,
                    class: 'custom-class',
                },
                slots: {
                    default: 'Alert Content',
                },
            })
            expect(wrapper.find('.pub-alert').classes()).toContain('custom-class')
        })

        it('applies bordered class when bordered is true', () => {
            const wrapper = mount(PubAlert, {
                props: {
                    color: 'blue' as const,
                    dismissible: false,
                    bordered: true,
                    showIcon: false,
                    class: '',
                },
                slots: {
                    default: 'Alert Content',
                },
            })
            expect(wrapper.find('.pub-alert').classes()).toContain('border')
        })

        it('does not apply bordered class when bordered is false', () => {
            const wrapper = mount(PubAlert, {
                props: {
                    color: 'blue' as const,
                    dismissible: false,
                    bordered: false,
                    showIcon: false,
                    class: '',
                },
                slots: {
                    default: 'Alert Content',
                },
            })
            expect(wrapper.find('.pub-alert').classes()).not.toContain('border')
        })

        it('applies showIcon class when showIcon is true', () => {
            const wrapper = mount(PubAlert, {
                props: {
                    color: 'blue' as const,
                    dismissible: false,
                    bordered: false,
                    showIcon: true,
                    class: '',
                },
                slots: {
                    default: 'Alert Content',
                },
            })
            const alertElement = wrapper.find('.pub-alert')
            expect(alertElement.classes()).toContain('flex')
            expect(alertElement.classes()).toContain('items-center')
        })

        it('applies showIcon class when showIcon is false and no title slot', () => {
            const wrapper = mount(PubAlert, {
                props: {
                    color: 'blue' as const,
                    dismissible: false,
                    bordered: false,
                    showIcon: false,
                    class: '',
                },
                slots: {
                    default: 'Alert Content',
                },
            })
            const alertElement = wrapper.find('.pub-alert')
            // Should have flex items-center when no title slot (due to || !slots.title in logic)
            expect(alertElement.classes()).toContain('flex')
            expect(alertElement.classes()).toContain('items-center')
        })

        it('does not apply showIcon class when showIcon is false but title slot exists', () => {
            const wrapper = mount(PubAlert, {
                props: {
                    color: 'blue' as const,
                    dismissible: false,
                    bordered: false,
                    showIcon: false,
                    class: '',
                },
                slots: {
                    default: 'Alert Content',
                    title: 'Alert Title',
                },
            })
            const alertElement = wrapper.find('.pub-alert')
            // When we have a title slot but no showIcon/dismissible, we should NOT get flex classes
            // From the logic: (showIcon || dismissible) && !slots.title
            // (false || false) && !true = false && false = false -> returns ''
            // So it should NOT have flex items-center
            expect(alertElement.classes()).not.toContain('flex')
            expect(alertElement.classes()).not.toContain('items-center')
        })
    })

    describe('color', () => {
        it.each([
            ['blue', 'bg-blue-50', 'text-blue-800', 'border-blue-600'],
            ['red', 'bg-red-50', 'text-red-800', 'border-red-600'],
            ['green', 'bg-green-50', 'text-green-800', 'border-green-600'],
            ['yellow', 'bg-yellow-50', 'text-yellow-800', 'border-yellow-600'],
            ['cyan', 'bg-cyan-50', 'text-cyan-800', 'border-cyan-600'],
            ['pink', 'bg-pink-50', 'text-pink-800', 'border-pink-600'],
            ['grey', 'bg-grey-100', 'text-grey-800', 'border-grey-600'],
            ['purple', 'bg-purple-50', 'text-purple-800', 'border-purple-600'],
        ])('applies %s color classes', (color, bgClass, textClass, borderClass) => {
            const wrapper = mount(PubAlert, {
                props: {
                    color: color as AlertTheme,
                    dismissible: false,
                    bordered: false,
                    showIcon: false,
                    class: '',
                },
                slots: {
                    default: 'Alert Content',
                },
            })
            const alertElement = wrapper.find('.pub-alert')
            // Debug: let's see what classes we actually get
            // console.log(`Color ${color} classes:`, Array.from(alertElement.classes()))
            expect(alertElement.classes()).toContain(bgClass)
            expect(alertElement.classes()).toContain(textClass)
            expect(alertElement.classes()).toContain(borderClass)
        })
    })

    describe('dismissible', () => {
        it('renders close button when dismissible is true', () => {
            const wrapper = mount(PubAlert, {
                props: {
                    color: 'blue' as const,
                    dismissible: true,
                    bordered: false,
                    showIcon: false,
                    class: '',
                },
                slots: {
                    default: 'Alert Content',
                },
            })
            expect(wrapper.findComponent({ name: 'PubButton' }).exists()).toBe(true)
            expect(wrapper.find('.sr-only').text()).toBe('Dismiss')
            expect(wrapper.findComponent({ name: 'PubIcon' }).exists()).toBe(true)
        })

        it('does not render close button when dismissible is false', () => {
            const wrapper = mount(PubAlert, {
                props: {
                    color: 'blue' as const,
                    dismissible: false,
                    bordered: false,
                    showIcon: false,
                    class: '',
                },
                slots: {
                    default: 'Alert Content',
                },
            })
            expect(wrapper.findComponent({ name: 'PubButton' }).exists()).toBe(false)
        })

        it('emits close event when close button is clicked', async () => {
            const wrapper = mount(PubAlert, {
                props: {
                    color: 'blue' as const,
                    dismissible: true,
                    bordered: false,
                    showIcon: false,
                    class: '',
                },
                slots: {
                    default: 'Alert Content',
                },
            })

            await wrapper.findComponent({ name: 'PubButton' }).trigger('click')
            expect(wrapper.emitted('close')).toBeTruthy()
            expect(wrapper.emitted('close')?.length).toBe(1)
        })

        it('does not emit close event when dismissible is false', async () => {
            const wrapper = mount(PubAlert, {
                props: {
                    color: 'blue' as const,
                    dismissible: false,
                    bordered: false,
                    showIcon: false,
                    class: '',
                },
                slots: {
                    default: 'Alert Content',
                },
            })

            // Try to click where close button would be - should not emit
            await wrapper.trigger('click')
            expect(wrapper.emitted('close')).toBeFalsy()
        })
    })

    describe('slots', () => {
        it('renders default slot', () => {
            const wrapper = mount(PubAlert, {
                props: {
                    color: 'blue' as const,
                    dismissible: false,
                    bordered: false,
                    showIcon: false,
                    class: '',
                },
                slots: {
                    default: 'Alert Content',
                },
            })
            expect(wrapper.text()).toContain('Alert Content')
        })

        it('renders title slot', () => {
            const wrapper = mount(PubAlert, {
                props: {
                    color: 'blue' as const,
                    dismissible: false,
                    bordered: false,
                    showIcon: false,
                    class: '',
                },
                slots: {
                    default: 'Alert Content',
                    title: 'Alert Title',
                },
            })
            expect(wrapper.text()).toContain('Alert Title')
        })

        it('renders icon slot', () => {
            const wrapper = mount(PubAlert, {
                props: {
                    color: 'blue' as const,
                    dismissible: false,
                    bordered: false,
                    showIcon: false,
                    class: '',
                },
                slots: {
                    default: 'Alert Content',
                    icon: '<i class="custom-icon">Icon</i>',
                },
            })
            expect(wrapper.html()).toContain('<i class="custom-icon">Icon</i>')
        })

        it('renders close-button slot', () => {
            const wrapper = mount(PubAlert, {
                props: {
                    color: 'blue' as const,
                    dismissible: false,
                    bordered: false,
                    showIcon: false,
                    class: '',
                },
                slots: {
                    'default': 'Alert Content',
                    'close-button': '<button class="custom-close">X</button>',
                },
            })
            expect(wrapper.html()).toContain('<button class="custom-close">X</button>')
            // Should not render the default close button
            expect(wrapper.findComponent({ name: 'PubButton' }).exists()).toBe(false)
        })

        it('overrides default icon when icon slot is provided', () => {
            const wrapper = mount(PubAlert, {
                props: {
                    color: 'blue' as const,
                    dismissible: false,
                    bordered: false,
                    showIcon: true,
                    class: '',
                },
                slots: {
                    default: 'Alert Content',
                    icon: '<i class="custom-icon">Custom Icon</i>',
                },
            })
            expect(wrapper.html()).toContain('<i class="custom-icon">Custom Icon</i>')
            // Should not have the default info-circle icon
            expect(wrapper.findComponent({ name: 'PubIcon' }).exists()).toBe(false)
        })
    })

    describe('transition', () => {
        it('has fade transition classes', () => {
            const wrapper = mount(PubAlert, {
                props: {
                    color: 'blue' as const,
                    dismissible: false,
                    bordered: false,
                    showIcon: false,
                    class: '',
                },
                slots: {
                    default: 'Alert Content',
                },
            })
            expect(wrapper.findComponent({ name: 'transition' }).exists()).toBe(true)
            // The transition element should have the name "fade"
            expect(wrapper.findComponent({ name: 'transition' }).props('name')).toBe('fade')
        })

        it('starts visible by default', () => {
            const wrapper = mount(PubAlert, {
                props: {
                    color: 'blue' as const,
                    dismissible: false,
                    bordered: false,
                    showIcon: false,
                    class: '',
                },
                slots: {
                    default: 'Alert Content',
                },
            })
            expect(wrapper.find('.pub-alert').isVisible()).toBe(true)
        })

        it('hides when close is emitted', async () => {
            const wrapper = mount(PubAlert, {
                props: {
                    color: 'blue' as const,
                    dismissible: true,
                    bordered: false,
                    showIcon: false,
                    class: '',
                },
                slots: {
                    default: 'Alert Content',
                },
            })

            expect(wrapper.find('.pub-alert').isVisible()).toBe(true)

            await wrapper.findComponent({ name: 'PubButton' }).trigger('click')

            // Wait for transition to complete (duration is 300ms from props, plus some buffer)
            // Since the element is removed from DOM with v-if, we need to wait and then check
            // that it's no longer found
            await new Promise(resolve => setTimeout(resolve, 400))

            // The element should be removed from DOM due to v-if="visible" becoming false
            expect(wrapper.find('.pub-alert').exists()).toBe(false)
        })
    })

    describe('custom events', () => {
        it('emits close event when close method is called', async () => {
            const wrapper = mount(PubAlert, {
                props: {
                    color: 'blue' as const,
                    dismissible: false,
                    bordered: false,
                    showIcon: false,
                    class: '',
                },
                slots: {
                    default: 'Alert Content',
                },
            })

            // Access the component instance to call close method
            wrapper.vm.handleClose()

            const emitted = wrapper.emitted('close')
            expect(emitted).toBeTruthy()
            expect(emitted?.length).toBe(1)
        })
    })
})
