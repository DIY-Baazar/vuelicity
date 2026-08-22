import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import PubModal from './PubModal.vue'

import type { ModalPosition, ModalSize, ModalZIndex } from './types'

describe('PubModal', () => {
    describe('structure', () => {
        it('does not render when isOpen is false', () => {
            const wrapper = mount(PubModal, {
                props: { isOpen: false },
                slots: { default: 'Modal body' },
            })
            expect(wrapper.find('.pub-modal').exists()).toBe(false)
        })

        it('renders when isOpen is true', () => {
            const wrapper = mount(PubModal, {
                props: { isOpen: true },
                slots: { default: 'Modal body' },
            })
            const modal = wrapper.find('.pub-modal')
            expect(modal.exists()).toBe(true)
            expect(modal.text()).toContain('Modal body')
            expect(modal.attributes('role')).toBe('dialog')
            expect(modal.attributes('aria-modal')).toBe('true')
            expect(modal.attributes('tabindex')).toBe('0')
        })

        it('applies default wrapper classes', () => {
            const wrapper = mount(PubModal, {
                props: { isOpen: true },
                slots: { default: 'Modal body' },
            })
            const modal = wrapper.find('.pub-modal')
            expect(modal.classes()).toContain('pub-modal')
            expect(modal.classes()).toContain('fixed')
            expect(modal.classes()).toContain('inset-0')
            expect(modal.classes()).toContain('grid')
            expect(modal.classes()).toContain('z-40')
            expect(modal.classes()).toContain('bg-grey-900/50')
        })

        it('renders close button', () => {
            const wrapper = mount(PubModal, {
                props: { isOpen: true },
                slots: { default: 'Modal body' },
            })
            expect(wrapper.find('button[aria-label="close"]').exists()).toBe(true)
            expect(wrapper.find('.sr-only').text()).toBe('Close')
        })
    })

    describe('size', () => {
        it.each([
            ['xs' as ModalSize, 'max-w-xs'],
            ['sm' as ModalSize, 'max-w-sm'],
            ['md' as ModalSize, 'max-w-md'],
            ['lg' as ModalSize, 'max-w-lg'],
            ['xl' as ModalSize, 'max-w-xl'],
            ['2xl' as ModalSize, 'max-w-2xl'],
            ['3xl' as ModalSize, 'max-w-3xl'],
        ])('applies %s size class', (size, sizeClass) => {
            const wrapper = mount(PubModal, {
                props: { isOpen: true, size },
                slots: { default: 'Modal body' },
            })
            expect(wrapper.find('.pub-modal > div').classes()).toContain(sizeClass)
        })
    })

    describe('position', () => {
        it.each([
            ['center' as ModalPosition, 'self-center', 'justify-self-center'],
            ['top-start' as ModalPosition, 'self-start', 'justify-self-start'],
            ['top-center' as ModalPosition, 'self-start', 'justify-self-center'],
            ['top-end' as ModalPosition, 'self-start', 'justify-self-end'],
            ['bottom-start' as ModalPosition, 'self-end', 'justify-self-start'],
            ['bottom-center' as ModalPosition, 'self-end', 'justify-self-center'],
            ['bottom-end' as ModalPosition, 'self-end', 'justify-self-end'],
            ['center-start' as ModalPosition, 'self-center', 'justify-self-start'],
            ['center-end' as ModalPosition, 'self-center', 'justify-self-end'],
        ])('applies %s position classes', (position, selfClass, justifyClass) => {
            const wrapper = mount(PubModal, {
                props: { isOpen: true, position },
                slots: { default: 'Modal body' },
            })
            const span = wrapper.find('.pub-modal > div')
            expect(span.classes()).toContain(selfClass)
            expect(span.classes()).toContain(justifyClass)
        })
    })

    describe('zIndex', () => {
        it.each([
            [10 as ModalZIndex, 'z-10'],
            [20 as ModalZIndex, 'z-20'],
            [30 as ModalZIndex, 'z-30'],
            [40 as ModalZIndex, 'z-40'],
            [50 as ModalZIndex, 'z-50'],
        ])('applies z-%s class', (zIndex, zClass) => {
            const wrapper = mount(PubModal, {
                props: { isOpen: true, zIndex },
                slots: { default: 'Modal body' },
            })
            expect(wrapper.find('.pub-modal').classes()).toContain(zClass)
        })
    })

    describe('overlayBlur', () => {
        it('applies blur classes when overlayBlur is true', () => {
            const wrapper = mount(PubModal, {
                props: { isOpen: true, overlayBlur: true },
                slots: { default: 'Modal body' },
            })
            const modal = wrapper.find('.pub-modal')
            expect(modal.classes()).toContain('backdrop-blur')
            expect(modal.classes()).toContain('bg-grey-900/20')
            expect(modal.classes()).not.toContain('bg-grey-900/50')
        })
    })

    describe('scrollable', () => {
        it('applies overflow-auto when scrollable is true', () => {
            const wrapper = mount(PubModal, {
                props: { isOpen: true, scrollable: true },
                slots: { default: 'Modal body' },
            })
            expect(wrapper.find('.p-3.flex-1').classes()).toContain('overflow-auto')
        })

        it('applies overflow-hidden when scrollable is false', () => {
            const wrapper = mount(PubModal, {
                props: { isOpen: true, scrollable: false },
                slots: { default: 'Modal body' },
            })
            expect(wrapper.find('.p-3.flex-1').classes()).toContain('overflow-hidden')
        })
    })

    describe('close behavior', () => {
        it('emits close when close button is clicked', async () => {
            const wrapper = mount(PubModal, {
                props: { isOpen: true },
                slots: { default: 'Modal body' },
            })
            await wrapper.find('button[aria-label="close"]').trigger('click')
            expect(wrapper.emitted('close')).toHaveLength(1)
        })

        it('emits close on Escape when allowed', async () => {
            const wrapper = mount(PubModal, {
                props: { isOpen: true },
                slots: { default: 'Modal body' },
            })
            await wrapper.find('.pub-modal').trigger('keyup.esc')
            expect(wrapper.emitted('close')).toHaveLength(1)
        })

        it('does not emit close on Escape when notEscapeClose is true', async () => {
            const wrapper = mount(PubModal, {
                props: { isOpen: true, notEscapeClose: true },
                slots: { default: 'Modal body' },
            })
            await wrapper.find('.pub-modal').trigger('keyup.esc')
            expect(wrapper.emitted('close')).toBeUndefined()
        })

        it('does not emit close on Escape when persistent is true', async () => {
            const wrapper = mount(PubModal, {
                props: { isOpen: true, persistent: true },
                slots: { default: 'Modal body' },
            })
            await wrapper.find('.pub-modal').trigger('keyup.esc')
            expect(wrapper.emitted('close')).toBeUndefined()
        })

        it('emits close on outside click when allowed', async () => {
            const wrapper = mount(PubModal, {
                props: { isOpen: true },
                slots: { default: 'Modal body' },
            })
            await wrapper.find('.pub-modal').trigger('click')
            expect(wrapper.emitted('close')).toHaveLength(1)
        })

        it('does not emit close on outside click when notClickClose is true', async () => {
            const wrapper = mount(PubModal, {
                props: { isOpen: true, notClickClose: true },
                slots: { default: 'Modal body' },
            })
            await wrapper.find('.pub-modal').trigger('click')
            expect(wrapper.emitted('close')).toBeUndefined()
        })

        it('does not emit close on outside click when persistent is true', async () => {
            const wrapper = mount(PubModal, {
                props: { isOpen: true, persistent: true },
                slots: { default: 'Modal body' },
            })
            await wrapper.find('.pub-modal').trigger('click')
            expect(wrapper.emitted('close')).toBeUndefined()
        })
    })

    describe('slots', () => {
        it('renders header slot and applies header border', () => {
            const wrapper = mount(PubModal, {
                props: { isOpen: true },
                slots: {
                    header: 'Modal Title',
                    default: 'Modal body',
                },
            })
            expect(wrapper.text()).toContain('Modal Title')
            expect(wrapper.find('.flex.items-center.justify-between.p-2').classes()).toContain('border-b')
        })

        it('renders footer slot', () => {
            const wrapper = mount(PubModal, {
                props: { isOpen: true },
                slots: {
                    default: 'Modal body',
                    footer: '<button>Save</button>',
                },
            })
            expect(wrapper.html()).toContain('<button>Save</button>')
            expect(wrapper.find('.border-t.border-grey-200').exists()).toBe(true)
        })

        it('does not render footer when footer slot is missing', () => {
            const wrapper = mount(PubModal, {
                props: { isOpen: true },
                slots: { default: 'Modal body' },
            })
            expect(wrapper.find('.border-t.border-grey-200').exists()).toBe(false)
        })

        it('applies custom class to content panel', () => {
            const wrapper = mount(PubModal, {
                props: { isOpen: true, class: 'custom-modal' },
                slots: { default: 'Modal body' },
            })
            expect(wrapper.find('.relative.bg-white').classes()).toContain('custom-modal')
        })
    })
})
