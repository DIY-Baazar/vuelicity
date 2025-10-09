import { ref, computed, onMounted, onUnmounted } from 'vue';

// In Tailwind CSS v4, `tailwindcss/resolveConfig` is no longer available.
// Since the project uses default breakpoints, we can define them here directly.
// This removes the problematic import and resolves the VitePress server error.
// If you add custom breakpoints to `tailwind.config.js`, you'll need to update them here as well.
const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
};

type BreakpointKey = keyof typeof breakpoints;

/**
 * A composable that provides reactive properties based on Tailwind CSS breakpoints.
 *
 * @returns An object with helper methods like `smaller`, `greater`, and the current active breakpoint.
 *
 * @example
 * const { isMobile, isTablet, isDesktop } = useBreakpoints();
 *
 * if (isMobile.value) {
 *   // do mobile-specific stuff
 * }
 */
export function useBreakpoints () {
    // A ref to hold the current window width.
    // We check for `window` to ensure it's not run on the server (SSR).
    const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 0);

    const onResize = () => {
        windowWidth.value = window.innerWidth;
    };

    // Add and remove the resize event listener.
    onMounted(() => {
        window.addEventListener('resize', onResize, { passive: true });
    });
    onUnmounted(() => {
        window.removeEventListener('resize', onResize);
    });

    // Helper functions to create computed properties
    const smaller = (key: BreakpointKey) => {
        return computed(() => windowWidth.value < breakpoints[key]);
    };

    const greater = (key: BreakpointKey) => {
        return computed(() => windowWidth.value >= breakpoints[key]);
    };

    const between = (min: BreakpointKey, max: BreakpointKey) => {
        return computed(() => windowWidth.value >= breakpoints[min] && windowWidth.value < breakpoints[max]);
    };

    // Create convenient computed properties for your breakpoints.
    // We'll define 'mobile' as anything smaller than the 'md' breakpoint (768px).
    const isMobile = smaller('md');
    const isTablet = between('md', 'lg');
    const isDesktop = greater('lg');

    return { isMobile, isTablet, isDesktop, smaller, greater, between };
}
