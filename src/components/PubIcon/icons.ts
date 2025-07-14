export const iconPathMap: Record<string, string> = {
    alert: `<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 5v11m0 4h0.02" />`,
    "alert-circle": `<g><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v5m0 3h.01" />
    <circle fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" cx="12" cy="12" r="10" /></g>`,
    close: `<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 6 L18 18 M18 6 L6 18" />`,
    "close-circle": `<g><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 9 L15 15 M15 9 L9 15" />
    <circle fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" cx="12" cy="12" r="10" /></g>`,
    check: `<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13 L10 17 L19 6" />`,
    "check-circle": `<g><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 13.75 L11.5 15.75 L16 10.25" />
    <circle fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" cx="12" cy="12" r="10" /></g>`,
    plus: `<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 5v14M5 12h14" />`,
    "plus-circle": `<g><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.5 9v7M9 12.5h7" />
    <circle fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" cx="12" cy="12" r="10" /></g>`,
    minus: `<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14" />`,
    "minus-circle": `<g><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6" />
    <circle fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" cx="12" cy="12" r="10" /></g>`
};

const iconAliasMap: Record<string, string> = {
    times: "close",
    x: "close",
    "cross-alt": "close",
    "circle-alert": "alert-circle"
};

export function getIconBody(name: string): string {
    return iconPathMap[iconAliasMap[name] || name] || "";
}
