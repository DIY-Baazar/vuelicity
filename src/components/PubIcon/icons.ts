const iconPathMap: Record<string, string> = {
    times: `<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18 6l-6 6m0 0l-6 6m6-6l6 6m-6-6L6 6" color="currentColor" />`
};

const iconAliasMap: Record<string, string> = {
    close: "times",
    x: "times",
    "cross-alt": "times"
};

export function getIconBody(name: string): string {
    return iconPathMap[iconAliasMap[name] || name] || "";
}
