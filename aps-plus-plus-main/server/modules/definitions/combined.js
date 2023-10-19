let fs = require('fs'),
	path = require('path'),
	groups = fs.readdirSync(path.resolve(__dirname, './groups')),
	addons = fs.readdirSync(path.resolve(__dirname, './addons')),
	Class = {},
	definitionCount = 0;

console.log(`Loading ${groups.length} groups...`);
for (let filename of groups) {
	console.log(`Loading group: ${filename}`);
	let group = require('./groups/' + filename);
	for (let key in group) {
		if (key in Class) {
			console.warn(`WARNING: ${key} is present in multiple definition groups!`);
		} else {
			definitionCount++;
		}
		Class[key] = group[key];
	}
}

console.log(`Loading ${addons.length} addons...`);
for (let filename of addons) {
	if (!filename.endsWith('.js')) continue;
	
	console.log(`Loading addon: ${filename}`);

	require('./addons/' + filename)({ Config: c, Class, Events: events });
}

// "Flattening" refers to removing PARENT attributes and applying the parents' attributes to the definition themselves, if not overwritten later on.
if (c.flattenDefintions) {
	console.log(`Flattening ${definitionCount} definitions...`);
	let flattened = {},
		flatten = definition => {

			// Support for string definition references
	        if ("string" == typeof definition) {
	            if (definition in Class) {
	                definition = Class[definition];
	            } else {
	            	throw Error(`Definition ${definition} is attempted to be gotten but does not exist!`);
	            }
	        }

			let output = {};
			for (let parent in definition.PARENT) {

				// Some people spell a class reference wrong
				if ("undefined" == typeof definition.PARENT[parent]) {
					throw Error(`Definition ${definition} has an undefined parent at index ${parent}!`)
				}

				// Flatten parents too!
				let toApply = flatten(definition.PARENT[parent]);
				for (let key in toApply) {
					output[key] = toApply[key];
				}
			}
			for (let key in definition) {
				if (key !== "PARENT") {
					output[key] = definition[key];
				}
			}
			return output;
		};

	for (let key in Class) {
		flattened[key] = flatten(Class[key]);
	}
	Class = flattened;
	definitionCount = Object.keys(Class).length;
}

console.log(`Combined ${groups.length} definition groups and ${addons.length} addons into ${definitionCount} ${c.flattenDefintions ? 'flattened ' : ''}definitions!`);
module.exports = Class;