import { util } from "./lib/util.js";
import { global } from "./lib/global.js";
import { config } from "./lib/config.js";
import { Canvas } from "./lib/canvas.js";
import { color } from "./lib/color.js";
/** https://gist.github.com/jedfoster/7939513 **/
function d2h(d) {
    return d.toString(16);
} // convert a decimal value to hex
function h2d(h) {
    return parseInt(h, 16);
} // convert a hex value to decimal
let mixColors = (color_2, color_1, weight = 0.5) => {
    if (weight === 1) return color_1;
    if (weight === 0) return color_2;
    var col = "#";
    for (var i = 1; i <= 6; i += 2) {
        // loop through each of the 3 hex pairs—red, green, and blue, skip the '#'
        var v1 = h2d(color_1.substr(i, 2)), // extract the current pairs
            v2 = h2d(color_2.substr(i, 2)),
            // combine the current pairs from each source color, according to the specified weight
            val = d2h(Math.floor(v2 + (v1 - v2) * weight));
        while (val.length < 2) {
            val = "0" + val;
        } // prepend a '0' if val results in a single digit
        col += val; // concatenate val to our new color string
    }
    return col; // PROFIT!
};
function getRainbow(a, b, c = 0.5) {
    if (0 >= c) return a;
    if (1 <= c) return b;
    let f = 1 - c;
    a = parseInt(a.slice(1, 7), 16);
    b = parseInt(b.slice(1, 7), 16);
    return "#" + (
        (((a & 0xff0000) * f + (b & 0xff0000) * c) & 0xff0000) |
        (((a & 0x00ff00) * f + (b & 0x00ff00) * c) & 0x00ff00) |
        (((a & 0x0000ff) * f + (b & 0x0000ff) * c) & 0x0000ff)).toString(16).padStart(6, "0");
}
function getColor(colorNumber) {
    // 0-24, 30-37 and 39-41 are kept the same as standard Arras for consistency.
    // For Woomy-Arras color IDs between 20 and 44, increment the number by 30 so they'll work as intended.

    // The following Woomy-Arras color IDs are not included as they are duplicates of another color.
    /*
    Original Color ID -> Replacement Color ID
    68 -> 108
    226 -> 13
    */
    // Other Woomy-Arras color IDs will work fine with no changes.

    // The following Raxor.io color IDs are not included as they are duplicates of another color.
    /*
    Original Color ID -> Replacement Color ID
    43 -> 190
    */
    switch (colorNumber) {
        case 0:
            return color.teal;
        case 1:
            return color.lgreen;
        case 2:
            return color.orange;
        case 3:
            return color.yellow;
        case 4:
            return color.lavender;
        case 5:
            return color.pink;
        case 6:
            return color.vlgrey;
        case 7:
            return color.lgrey;
        case 8:
            return color.guiwhite;
        case 9:
            return color.black;
        case 10:
            return color.blue;
        case 11:
            return color.green;
        case 12:
            return color.red;
        case 13:
            return color.gold;
        case 14:
            return color.purple;
        case 15:
            return color.magenta;
        case 16:
            return color.grey;
        case 17:
            return color.dgrey;
        case 18:
            return color.white;
        case 19:
            return color.guiblack;
        case 20:
            return 150 > Date.now() % 300 ? color.blue : color.red;
        case 21:
            return 150 > Date.now() % 300 ? color.blue : color.grey;
        case 22:
            return 150 > Date.now() % 300 ? color.grey : color.blue;
        case 23:
            return 150 > Date.now() % 300 ? color.red : color.grey;
        case 24:
            return 150 > Date.now() % 300 ? color.grey : color.red;
        case 25:
            return "#C49608";
        case 26:
            return "#EC7B0F";
        case 27:
            return "#895918";
        case 28:
            return "#13808E";
        case 30:
            return "#a913cf";
        case 31:
            return "#226ef6";
        case 32:
            return "#ff1000";
        case 33:
            return "#ff9000";
        case 34:
            return "#00e00b";
        case 35:
            return "#ffd300";
        case 36:
            return getRainbow(
                "#ff1000 #ff9000 #ffd300 #00e00b #226ef6 #a913cf".split(" ")[ Math.floor((Date.now() / 200) % 6) ],
                "#ff9000 #ffd300 #00e00b #226ef6 #a913cf #ff1000".split(" ")[ Math.floor((Date.now() / 200) % 6) ],
                (Date.now() / 200) % 1
            );
        case 37:
            return getRainbow("#ffffff",
                2e3 > Date.now() % 4e3 ? "#55cdfc" : "#f7a8b8",
                5 * Math.sin(((Date.now() % 2e3) / 2e3) * Math.PI) - 2
            );
        case 38:
            return getRainbow(
                "#ce0063 #9c319c #00319c".split(" ")[ Math.floor((Date.now() / 200) % 3) ],
                "#ce0063 #9c319c #00319c".split(" ")[ Math.floor((Date.now() / 200) % 3) ],
                (Date.now() / 200) % 1
            );
        case 39:
            return "#654321";
        case 40:
            return "#e58100";
        case 41:
            return "#267524";
        default:
            return "#00000000";
    }
}
function getColorDark(givenColor) {
    let dark = config.graphical.neon ? color.white : color.black;
    if (config.graphical.darkBorders) return dark;
    return mixColors(givenColor, dark, color.border);
}
function getZoneColor(cell, real) {
    switch (cell) {
        case "bas1":
        case "bap1":
        case "dom1":
            return color.blue;
        case "bas2":
        case "bap2":
        case "dom2":
            return color.green;
        case "bas3":
        case "bap3":
        case "dom3":
        case "boss":
            return color.red;
        case "bas4":
        case "bap4":
        case "dom4":
            return color.pink;
        case "nest":
            return real ? color.purple : color.lavender;
        case "dom0":
            return color.gold;
        default:
            return real ? color.white : color.lgrey;
    }
}

function setColor(context, givenColor) {
    if (config.graphical.neon) {
        context.fillStyle = getColorDark(givenColor);
        context.strokeStyle = givenColor;
    } else {
        context.fillStyle = givenColor;
        context.strokeStyle = getColorDark(givenColor);
    }
}
const drawingFunctions = { mixColors, getColor, getColorDark, getZoneColor, setColor };
