import chroma from "chroma-js";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const themeColors = {
    blue: "#3457d5",
    red: "#ed2939",
    green: "#32cd32",
    yellow: "#ffd700",
    cyan: "#00CCCC",
    magenta: "#8B008B",
    grey: "#666666"
};

function generateScale (hex) {
    // target lightness values for 100..900 (tuned)
    const lightness = [97, 90, 80, 70, 60, 50, 40, 30, 20];
    // Use LCH to preserve hue/chroma better across shades
    const c = chroma(hex).lch();
    const chromaVal = c[1]; // Don't fallback to 50  
    const hue = c[2]; // Use LCH hue directly  

    return lightness.map((L) => {
        let col = chroma.lch(L, chromaVal, hue);
        // If the color is out of sRGB gamut, get the closest in-gamut color
        if (col.clipped()) {
            col = col.unclipped();
        }
        return col.hex();
    });
}

let result = "";
for (const [name, hex] of Object.entries(themeColors)) {
    const shades = generateScale(hex);
    result += `
    /* ${name} shades */
    --color-${name}-100: ${shades[0]};
    --color-${name}-200: ${shades[1]};
    --color-${name}-300: ${shades[2]};
    --color-${name}-400: ${shades[3]};
    --color-${name}-500: ${chroma(hex).hex()};
    --color-${name}-600: ${shades[5]};
    --color-${name}-700: ${shades[6]};
    --color-${name}-800: ${shades[7]};
    --color-${name}-900: ${shades[8]};
    --color-${name}: ${chroma(hex).hex()};
    `;
}

const stylesFile = join(__dirname, "..", "src", "styles", "main.css");
const stylesContent = fs.readFileSync(stylesFile, "utf8");

const startMarker = '/\\* Themes \\*/';
const endMarker = '/\\* \\\\Themes \\*/';
const regex = new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`, 'm');
const newStylesContent = stylesContent.replace(regex, `/* Themes */\n${result}\n    /* \\Themes */`);

fs.writeFileSync(stylesFile, newStylesContent, "utf8");
console.log("Theme updated successfully!");
