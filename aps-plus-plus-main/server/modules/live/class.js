let Class = require("../definitions/combined.js"),
    i = 0;
for (let key in Class) {
    if (!Class.hasOwnProperty(key)) continue;
    Class[key].index = i++;
}

global.ensureIsClass = str => {
    if ("object" == typeof str) {
        return str;
    }
    if (str in Class) {
        return Class[str];
    }
    throw Error(`Definition ${str} is attempted to be gotten but does not exist!`);
}

module.exports = { Class, ensureIsClass };