import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import PubSpinner from './PubSpinner.vue'

import type { SpinnerColor, SpinnerSize } from './types'

describe('PubSpinner', () => {
    describe('structure', () => {
        it('renders as an svg', () => {
            const wrapper = mount(PubSpinner)
            expect(wrapper.element.tagName).toBe('svg')
            expect(wrapper.attributes('role')).toBe('status')
            expect(wrapper.attributes('viewBox')).toBe('0 0 100 101')
            expect(wrapper.attributes('fill')).toBe('none')
        })

        it('applies default classes', () => {
            const wrapper = mount(PubSpinner)
            expect(wrapper.classes()).toContain('animate-spin')
            expect(wrapper.classes()).toContain('text-grey-200')
            expect(wrapper.classes()).toContain('fill-blue-600')
            expect(wrapper.classes()).toContain('w-4')
            expect(wrapper.classes()).toContain('h-4')
        })
    })

    describe('color', () => {
        it.each([
            ['blue' as SpinnerColor, 'fill-blue-600'],
            ['grey' as SpinnerColor, 'fill-grey-600'],
            ['green' as SpinnerColor, 'fill-green-500'],
            ['red' as SpinnerColor, 'fill-red-600'],
            ['yellow' as SpinnerColor, 'fill-yellow-400'],
            ['pink' as SpinnerColor, 'fill-pink-600'],
            ['purple' as SpinnerColor, 'fill-purple-600'],
            ['white' as SpinnerColor, 'fill-white'],
        ])('applies %s color class', (color, fillClass) => {
            const wrapper = mount(PubSpinner, {
                props: { color },
            })
            expect(wrapper.classes()).toContain(fillClass)
        })

        it('applies custom color via css variable when color is not a theme color', () => {
            const wrapper = mount(PubSpinner, {
                props: { color: '#ff5500' },
            })
            expect(wrapper.attributes('style')).toContain('--custom-fill: #ff5500')
            expect(wrapper.classes()).not.toContain('fill-blue-600')
        })
    })

    describe('size', () => {
        it.each([
            ['0' as SpinnerSize, 'w-0', 'h-0'],
            ['1' as SpinnerSize, 'w-1', 'h-1'],
            ['2' as SpinnerSize, 'w-2', 'h-2'],
            ['3' as SpinnerSize, 'w-3', 'h-3'],
            ['4' as SpinnerSize, 'w-4', 'h-4'],
            ['5' as SpinnerSize, 'w-5', 'h-5'],
            ['6' as SpinnerSize, 'w-6', 'h-6'],
            ['8' as SpinnerSize, 'w-8', 'h-8'],
            ['10' as SpinnerSize, 'w-10', 'h-10'],
            ['12' as SpinnerSize, 'w-12', 'h-12'],
        ])('applies %s size classes', (size, wClass, hClass) => {
            const wrapper = mount(PubSpinner, {
                props: { size },
            })
            expect(wrapper.classes()).toContain(wClass)
            expect(wrapper.classes()).toContain(hClass)
        })
    })
})
