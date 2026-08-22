import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { h } from 'vue'

import PubPagination from './PubPagination.vue'

describe('PubPagination', () => {
    describe('structure', () => {
        it('renders as a nav with pagination aria-label', () => {
            const wrapper = mount(PubPagination, {
                props: { modelValue: 1, totalPages: 5 },
            })
            expect(wrapper.element.tagName).toBe('NAV')
            expect(wrapper.attributes('aria-label')).toBe('pagination')
            expect(wrapper.classes()).toContain('pub-pagination')
        })

        it('renders page buttons for pagination layout', () => {
            const wrapper = mount(PubPagination, {
                props: { modelValue: 1, totalPages: 5 },
            })
            const buttons = wrapper.findAllComponents({ name: 'PubButton' })
            // prev + 5 pages + next
            expect(buttons.length).toBe(7)
            expect(wrapper.text()).toContain('Previous')
            expect(wrapper.text()).toContain('Next')
            expect(wrapper.text()).toContain('1')
            expect(wrapper.text()).toContain('5')
        })
    })

    describe('navigation', () => {
        it('emits update:model-value and page-changed when a page is clicked', async () => {
            const wrapper = mount(PubPagination, {
                props: { modelValue: 1, totalPages: 5 },
            })
            const pageButtons = wrapper.findAllComponents({ name: 'PubButton' })
            // index 0 is Previous, index 1 is page 1, index 2 is page 2
            await pageButtons[2].trigger('click')
            expect(wrapper.emitted('update:model-value')?.[0]).toEqual([2])
            expect(wrapper.emitted('page-changed')?.[0]).toEqual([2])
        })

        it('emits previous page when Previous is clicked', async () => {
            const wrapper = mount(PubPagination, {
                props: { modelValue: 3, totalPages: 5 },
            })
            const buttons = wrapper.findAllComponents({ name: 'PubButton' })
            await buttons[0].trigger('click')
            expect(wrapper.emitted('update:model-value')?.[0]).toEqual([2])
            expect(wrapper.emitted('page-changed')?.[0]).toEqual([2])
        })

        it('emits next page when Next is clicked', async () => {
            const wrapper = mount(PubPagination, {
                props: { modelValue: 3, totalPages: 5 },
            })
            const buttons = wrapper.findAllComponents({ name: 'PubButton' })
            await buttons[buttons.length - 1].trigger('click')
            expect(wrapper.emitted('update:model-value')?.[0]).toEqual([4])
            expect(wrapper.emitted('page-changed')?.[0]).toEqual([4])
        })

        it('disables Previous on first page', () => {
            const wrapper = mount(PubPagination, {
                props: { modelValue: 1, totalPages: 5 },
            })
            const prevButton = wrapper.findAllComponents({ name: 'PubButton' })[0]
            expect(prevButton.props('disabled')).toBe(true)
        })

        it('disables Next on last page', () => {
            const wrapper = mount(PubPagination, {
                props: { modelValue: 5, totalPages: 5 },
            })
            const buttons = wrapper.findAllComponents({ name: 'PubButton' })
            expect(buttons[buttons.length - 1].props('disabled')).toBe(true)
        })
    })

    describe('first / last', () => {
        it('renders First and Last when showFirstLast is true', () => {
            const wrapper = mount(PubPagination, {
                props: { modelValue: 2, totalPages: 5, showFirstLast: true },
            })
            expect(wrapper.text()).toContain('First')
            expect(wrapper.text()).toContain('Last')
        })

        it('goes to first page when First is clicked', async () => {
            const wrapper = mount(PubPagination, {
                props: { modelValue: 3, totalPages: 5, showFirstLast: true },
            })
            const buttons = wrapper.findAllComponents({ name: 'PubButton' })
            await buttons[0].trigger('click')
            expect(wrapper.emitted('update:model-value')?.[0]).toEqual([1])
        })

        it('goes to last page when Last is clicked', async () => {
            const wrapper = mount(PubPagination, {
                props: { modelValue: 2, totalPages: 5, showFirstLast: true },
            })
            const buttons = wrapper.findAllComponents({ name: 'PubButton' })
            await buttons[buttons.length - 1].trigger('click')
            expect(wrapper.emitted('update:model-value')?.[0]).toEqual([5])
        })
    })

    describe('labels and visibility', () => {
        it('uses custom prev and next labels', () => {
            const wrapper = mount(PubPagination, {
                props: {
                    modelValue: 2,
                    totalPages: 5,
                    prevLabel: 'Back',
                    nextLabel: 'Forward',
                },
            })
            expect(wrapper.text()).toContain('Back')
            expect(wrapper.text()).toContain('Forward')
        })

        it('hides labels when hideLabels is true', () => {
            const wrapper = mount(PubPagination, {
                props: { modelValue: 2, totalPages: 5, hideLabels: true },
            })
            expect(wrapper.text()).not.toContain('Previous')
            expect(wrapper.text()).not.toContain('Next')
        })

        it('hides prev button when hidePrev is true', () => {
            const wrapper = mount(PubPagination, {
                props: { modelValue: 2, totalPages: 5, hidePrev: true },
            })
            expect(wrapper.text()).not.toContain('Previous')
            expect(wrapper.text()).toContain('Next')
        })

        it('hides next button when hideNext is true', () => {
            const wrapper = mount(PubPagination, {
                props: { modelValue: 2, totalPages: 5, hideNext: true },
            })
            expect(wrapper.text()).toContain('Previous')
            expect(wrapper.text()).not.toContain('Next')
        })

        it('shows icons when showIcons is true', () => {
            const wrapper = mount(PubPagination, {
                props: { modelValue: 2, totalPages: 5, showIcons: true },
            })
            expect(wrapper.findAllComponents({ name: 'PubIcon' }).length).toBeGreaterThan(0)
        })
    })

    describe('layout', () => {
        it('renders table layout summary text', () => {
            const wrapper = mount(PubPagination, {
                props: {
                    modelValue: 2,
                    layout: 'table',
                    pageSize: 10,
                    totalItems: 45,
                },
            })
            expect(wrapper.text()).toContain('Showing')
            expect(wrapper.text()).toContain('11')
            expect(wrapper.text()).toContain('20')
            expect(wrapper.text()).toContain('45')
            // table layout does not render numbered page buttons
            expect(wrapper.text()).not.toMatch(/\b3\b/)
        })

        it('does not render page numbers for navigation layout', () => {
            const wrapper = mount(PubPagination, {
                props: {
                    modelValue: 2,
                    totalPages: 5,
                    layout: 'navigation',
                },
            })
            expect(wrapper.text()).toContain('Previous')
            expect(wrapper.text()).toContain('Next')
            expect(wrapper.text()).not.toContain('3')
        })
    })

    describe('sliceSize', () => {
        it('limits visible pages based on sliceSize', () => {
            const wrapper = mount(PubPagination, {
                props: { modelValue: 5, totalPages: 20, sliceSize: 1 },
            })
            // pages around current: 4, 5, 6
            expect(wrapper.text()).toContain('4')
            expect(wrapper.text()).toContain('5')
            expect(wrapper.text()).toContain('6')
            expect(wrapper.text()).not.toContain('1')
            expect(wrapper.text()).not.toContain('20')
        })
    })

    describe('slots', () => {
        it('renders start and end slots', () => {
            const wrapper = mount(PubPagination, {
                props: { modelValue: 1, totalPages: 3 },
                slots: {
                    start: 'START',
                    end: 'END',
                },
            })
            expect(wrapper.text()).toContain('START')
            expect(wrapper.text()).toContain('END')
        })

        it('renders custom prev-button slot', () => {
            const wrapper = mount(PubPagination, {
                props: { modelValue: 2, totalPages: 5 },
                slots: {
                    'prev-button': () => h('button', { class: 'custom-prev' }, 'Custom Prev'),
                },
            })
            expect(wrapper.find('.custom-prev').text()).toBe('Custom Prev')
        })
    })
})
