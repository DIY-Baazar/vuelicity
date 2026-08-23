import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import PubTextarea from './PubTextarea.vue'

import type { FormElementAutoFill, FormElementSize, FormElementValidationStatus } from '@/types/form'

describe('PubTextarea', () => {
    describe('structure', () => {
        it('renders properly', () => {
            const wrapper = mount(PubTextarea, {
                props: {
                    label: 'Description',
                },
            })
            const label = wrapper.find('label')
            const textarea = wrapper.find('textarea')
            expect(label.exists()).toBe(true)
            expect(textarea.exists()).toBe(true)
            expect(label.text()).toBe('Description')
            expect(label.attributes('for')).toBe(textarea.attributes('name'))
        })

        it('renders as div wrapper by default', () => {
            const wrapper = mount(PubTextarea)
            expect(wrapper.element.tagName).toBe('DIV')
            expect(wrapper.classes()).toContain('pub-textarea-container')
        })

        it('applies default classes', () => {
            const wrapper = mount(PubTextarea)
            expect(wrapper.classes()).toContain('pub-textarea-container')
            expect(wrapper.classes()).toContain('w-full')

            const inputWrapper = wrapper.find('.relative')
            expect(inputWrapper.classes()).toContain('bg-grey-50')
            expect(inputWrapper.classes()).toContain('border')
            expect(inputWrapper.classes()).toContain('border-grey-300')
            expect(inputWrapper.classes()).toContain('rounded-lg')
            expect(inputWrapper.classes()).toContain('text-grey-900')

            const textarea = wrapper.find('textarea')
            expect(textarea.classes()).toContain('pub-textarea')
            expect(textarea.classes()).toContain('w-full')
            expect(textarea.classes()).toContain('block')
            expect(textarea.classes()).toContain('bg-transparent')
            expect(textarea.classes()).toContain('border-0')
            expect(textarea.classes()).toContain('focus:outline-none')
        })

        it('applies custom wrapper class', () => {
            const wrapper = mount(PubTextarea, {
                props: {
                    wrapperClass: 'custom-wrapper-class',
                },
            })
            expect(wrapper.classes()).toContain('custom-wrapper-class')
        })

        it('applies custom input class', () => {
            const wrapper = mount(PubTextarea, {
                props: {
                    inputClass: 'custom-input-class',
                },
            })
            expect(wrapper.find('textarea').classes()).toContain('custom-input-class')
        })

        it('renders label when provided', () => {
            const wrapper = mount(PubTextarea, {
                props: {
                    label: 'Bio',
                },
            })
            expect(wrapper.find('label').text()).toBe('Bio')
            expect(wrapper.find('label').classes()).toContain('pub-textarea-label')
            expect(wrapper.find('label').classes()).toContain('block')
            expect(wrapper.find('label').classes()).toContain('mb-2')
            expect(wrapper.find('label').classes()).toContain('text-sm')
            expect(wrapper.find('label').classes()).toContain('font-medium')
        })

        it('does not render label when not provided', () => {
            const wrapper = mount(PubTextarea)
            expect(wrapper.find('label').exists()).toBe(false)
        })

        it('sets correct textarea id via name and label association', () => {
            const wrapper = mount(PubTextarea, {
                props: {
                    label: 'Notes',
                    name: 'notes-input',
                },
            })
            expect(wrapper.find('textarea').attributes('name')).toBe('notes-input')
            expect(wrapper.find('label').attributes('for')).toBe('notes-input')
        })

        it('generates name when name not provided', () => {
            const wrapper = mount(PubTextarea, {
                props: {
                    label: 'Comments',
                },
            })
            const textareaName = wrapper.find('textarea').attributes('name')
            expect(textareaName).toMatch(/^input-/)
            expect(wrapper.find('label').attributes('for')).toBe(textareaName)
        })

        it('sets required attribute when required is true', () => {
            const wrapper = mount(PubTextarea, {
                props: {
                    required: true,
                },
            })
            expect(wrapper.find('textarea').attributes('required')).toBeDefined()
        })

        it('does not set required attribute when required is false', () => {
            const wrapper = mount(PubTextarea, {
                props: {
                    required: false,
                },
            })
            expect(wrapper.find('textarea').attributes('required')).toBeUndefined()
        })

        it('sets autocomplete attribute', () => {
            const wrapper = mount(PubTextarea, {
                props: {
                    autocomplete: 'name' as FormElementAutoFill,
                },
            })
            expect(wrapper.find('textarea').attributes('autocomplete')).toBe('name')
        })

        it('sets rows attribute', () => {
            const wrapper = mount(PubTextarea, {
                props: {
                    rows: 6,
                },
            })
            expect(wrapper.find('textarea').attributes('rows')).toBe('6')
        })

        it('defaults rows to 4', () => {
            const wrapper = mount(PubTextarea)
            expect(wrapper.find('textarea').attributes('rows')).toBe('4')
        })
    })

    describe('size', () => {
        it.each([
            ['sm' as FormElementSize, 'px-2.5', 'py-2', 'text-sm'],
            ['md' as FormElementSize, 'px-3', 'py-2.5', 'text-sm'],
            ['lg' as FormElementSize, 'px-3.5', 'py-3', 'text-base'],
            ['xl' as FormElementSize, 'px-4', 'py-3.5', 'text-base'],
        ])('applies %s size classes', (size, pxClass, pyClass, textClass) => {
            const wrapper = mount(PubTextarea, {
                props: { size },
            })
            const textarea = wrapper.find('textarea')
            expect(textarea.classes()).toContain(pxClass)
            expect(textarea.classes()).toContain(pyClass)
            expect(textarea.classes()).toContain(textClass)
        })
    })

    describe('validation status', () => {
        it.each([
            [undefined as undefined | FormElementValidationStatus, ''],
            ['success' as FormElementValidationStatus, 'text-green-700'],
            ['error' as FormElementValidationStatus, 'text-red-700'],
        ])('applies %s validation message classes', (status, expectedClass) => {
            const wrapper = mount(PubTextarea, {
                props: {
                    validationStatus: status,
                },
                slots: {
                    validationMessage: 'Validation text',
                },
            })
            const message = wrapper.findAll('p').find(p => p.text() === 'Validation text')
            expect(message).toBeDefined()
            if (expectedClass) {
                if (!message) throw new Error('Validation message was not found')
                expect(message.classes()).toContain(expectedClass)
            } else {
                if (!message) throw new Error('Validation message was not found')
                expect(message.classes()).not.toContain('text-green-700')
                expect(message.classes()).not.toContain('text-red-700')
            }
        })

        it.each([
            [undefined as undefined | FormElementValidationStatus, false],
            // [null as null | FormElementValidationStatus, false],
            ['success' as FormElementValidationStatus, true],
            ['error' as FormElementValidationStatus, true],
        ])('applies %s input wrapper classes for validation status', (status, hasValidationClasses) => {
            const wrapper = mount(PubTextarea, {
                props: {
                    validationStatus: status,
                },
            })
            const inputWrapper = wrapper.find('.relative')
            if (hasValidationClasses) {
                const classList = inputWrapper.classes()
                expect(classList.some(cls => cls.includes('bg-green-50') || cls.includes('bg-red-50'))).toBe(true)
            } else {
                expect(inputWrapper.classes()).toContain('bg-grey-50')
                expect(inputWrapper.classes()).toContain('border-grey-300')
            }
        })

        it.each([
            ['success' as FormElementValidationStatus, 'text-green-900', 'placeholder:text-green-500'],
            ['error' as FormElementValidationStatus, 'text-red-900', 'placeholder:text-red-500'],
        ])('applies %s textarea classes for validation status', (status, textClass, placeholderClass) => {
            const wrapper = mount(PubTextarea, {
                props: {
                    validationStatus: status,
                },
            })
            const textarea = wrapper.find('textarea')
            expect(textarea.classes()).toContain(textClass)
            expect(textarea.classes()).toContain(placeholderClass)
        })
    })

    describe('disabled state', () => {
        it('disables textarea when disabled is true', () => {
            const wrapper = mount(PubTextarea, {
                props: {
                    disabled: true,
                },
            })
            expect(wrapper.find('textarea').attributes('disabled')).toBeDefined()
            expect(wrapper.find('textarea').classes()).toContain('cursor-not-allowed')
            expect(wrapper.find('textarea').classes()).toContain('text-grey-400')
            expect(wrapper.find('.relative').classes()).toContain('bg-grey-100')
        })

        it('does not disable textarea when disabled is false', () => {
            const wrapper = mount(PubTextarea, {
                props: {
                    disabled: false,
                },
            })
            expect(wrapper.find('textarea').attributes('disabled')).toBeUndefined()
            expect(wrapper.find('textarea').classes()).not.toContain('cursor-not-allowed')
            expect(wrapper.find('.relative').classes()).not.toContain('bg-grey-100')
        })
    })

    describe('slots', () => {
        it('renders footer slot content', () => {
            const wrapper = mount(PubTextarea, {
                slots: {
                    footer: '0 / 500 characters',
                },
            })
            expect(wrapper.text()).toContain('0 / 500 characters')
            expect(wrapper.find('.border-t').classes()).toContain('border-grey-300')
            expect(wrapper.find('.border-t').classes()).toContain('px-3.5')
            expect(wrapper.find('.border-t').classes()).toContain('py-2')
        })

        it('does not render footer slot when not provided', () => {
            const wrapper = mount(PubTextarea)
            expect(wrapper.find('.border-t').exists()).toBe(false)
        })

        it('renders validation message slot', () => {
            const wrapper = mount(PubTextarea, {
                slots: {
                    validationMessage: 'Please enter a valid description',
                },
            })
            expect(wrapper.text()).toContain('Please enter a valid description')
        })

        it('renders helper slot', () => {
            const wrapper = mount(PubTextarea, {
                slots: {
                    helper: 'This field is optional',
                },
            })
            expect(wrapper.text()).toContain('This field is optional')
        })

        it('does not render validation message slot when not provided', () => {
            const wrapper = mount(PubTextarea, {
                slots: {
                    helper: 'Helper only',
                },
            })
            expect(wrapper.text()).not.toContain('Validation')
            expect(wrapper.text()).toContain('Helper only')
        })

        it('does not render helper slot when not provided', () => {
            const wrapper = mount(PubTextarea)
            expect(wrapper.findAll('p')).toHaveLength(0)
        })
    })

    describe('model binding', () => {
        it('updates model when textarea changes', async () => {
            const wrapper = mount(PubTextarea, {
                props: {
                    modelValue: 'initial',
                },
            })

            await wrapper.find('textarea').setValue('updated value')
            expect(wrapper.emitted('update:modelValue')).toBeTruthy()
            expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['updated value'])
        })

        it('reflects modelValue on textarea', () => {
            const wrapper = mount(PubTextarea, {
                props: {
                    modelValue: 'existing text',
                },
            })
            expect((wrapper.find('textarea').element as HTMLTextAreaElement).value).toBe('existing text')
        })
    })
})
