<template>
  <span
    class="pub-icon"
    :class="iconClasses"
    v-bind="$attrs"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      v-html="iconBody"
    />
  </span>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue'

import { getIconBody } from './icons'
import { useIconClasses } from './utils'

import type { IconSize, IconTheme, IconType } from './types'

interface IconProps {
    name: string;
    type?: IconType;
    size?: IconSize;
    color?: IconTheme;
    class?: string;
    rotate?: boolean;
    flip?: boolean;
    spin?: boolean;
    mirror?: boolean;
    aschild?: boolean;
    strokeWidth?: number;
}

const props = withDefaults(defineProps<IconProps>(), {
    size: 'sm',
    type: 'solid',
    icon: 'default',
    class: '',
    rotate: false,
    flip: false,
    spin: false,
    mirror: false,
    aschild: false,
    strokeWidth: 1,
    color: 'default',
})

const { iconClasses } = useIconClasses(toRefs(props))

const sanitizeSvg = (rawSvg: string) => {
    const parser = new DOMParser()
    const document = parser.parseFromString(`<svg>${rawSvg}</svg>`, 'image/svg+xml')
    const root = document.documentElement

    const allowedTags = new Set([
        'svg',
        'g',
        'path',
        'circle',
        'rect',
        'line',
        'polyline',
        'polygon',
        'ellipse',
        'title',
        'desc',
        'defs',
        'use',
        'mask',
        'pattern',
        'clipPath',
        'linearGradient',
        'radialGradient',
        'stop',
        'filter',
        'feGaussianBlur',
        'feOffset',
        'feBlend',
        'feColorMatrix',
    ])

    const allowedAttrs = new Set([
        'd',
        'fill',
        'stroke',
        'stroke-width',
        'stroke-linecap',
        'stroke-linejoin',
        'fill-rule',
        'clip-rule',
        'opacity',
        'transform',
        'x',
        'y',
        'x1',
        'y1',
        'x2',
        'y2',
        'cx',
        'cy',
        'r',
        'rx',
        'ry',
        'points',
        'viewBox',
        'width',
        'height',
        'xmlns',
        'preserveAspectRatio',
        'offset',
        'stop-color',
        'stop-opacity',
        'gradientUnits',
        'gradientTransform',
        'xlink:href',
        'href',
        'id',
        'class',
    ])

    const sanitizeNode = (node: Node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element
            const tagName = element.tagName.toLowerCase()

            if (!allowedTags.has(tagName)) {
                element.parentNode?.removeChild(element)
                return
            }

            const attrs = Array.from(element.attributes)
            for (const attr of attrs) {
                const name = attr.name.toLowerCase()
                const value = attr.value.trim().toLowerCase()

                if (name.startsWith('on') || name === 'style' || value.startsWith('javascript:') || !allowedAttrs.has(name)) {
                    element.removeAttribute(attr.name)
                }
            }
        }

        const children = Array.from(node.childNodes)
        for (const child of children) {
            sanitizeNode(child)
        }
    }

    sanitizeNode(root)
    return root.innerHTML || ''
}

const iconBody = computed(() => sanitizeSvg(getIconBody(toRefs(props))))
</script>
