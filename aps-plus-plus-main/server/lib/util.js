/* jslint node: true */
("use strict")

let cfg = require("../config.js")

exports.addArticle = string => {
  let article = /^[aeiou]/i.test(string) ? 'an' : 'a'
  return `${article} ${string}`
}

exports.getDistance = (p1, p2) => Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2))

exports.getDirection = (p1, p2) => Math.atan2(p2.y - p1.y, p2.x - p1.x)

exports.clamp = (value, min, max) => Math.min(Math.max(value, min), max)

exports.listify = list => {
  if (list.length === 0) return ''
  if (list.length === 1) return list[0]
  if (list.length === 2) return `${list[0]} and ${list[1]}.`
  
  let output = ''
  for (let [i, item] of list.entries()) {
    if (typeof item !== 'string') throw Error(`Item #${i + 1} (${item} of list is not a string.`)
    output += i !== list.length - 1 ? `${item}, ` : ` and ${item}.`
  }
  return output
}

exports.angleDifference = (a1, a2) => ((a2 - a1) % (2 * Math.PI) + Math.PI * 3) % (2 * Math.PI) - Math.PI

exports.loopSmooth = (angle, desired, slowness) => exports.angleDifference(angle, desired) / slowness

exports.deepClone = (obj, hash = new WeakMap()) => {
  let result
  // Do not try to clone primitives or functions
  if (Object(obj) !== obj || obj instanceof Function) return obj
  if (hash.has(obj)) return hash.get(obj) // Cyclic reference
  try {
    // Try to run constructor (without arguments, as we don't know them)
    result = new obj.constructor()
  } catch (e) {
    // Constructor failed, create object without running the constructor
    result = Object.create(Object.getPrototypeOf(obj))
  }
  // Optional: support for some standard constructors (extend as desired)
  if (obj instanceof Map) {
    Array.from(obj, ([key, val]) => result.set(exports.deepClone(key, hash), exports.deepClone(val, hash)))
  } else if (obj instanceof Set) {
    Array.from(obj, (key) => result.add(exports.deepClone(key, hash)))
  }
  // Register in hash
  hash.set(obj, result)
  // Clone and assign enumerable own properties recursively
  return Object.assign(result, ...Object.keys(obj).map((key) => ({ [key]: exports.deepClone(obj[key], hash), })))
}

exports.averageArray = arr => {
  if (!arr.length) return 0
  let sum = arr.reduce((a, b) => a + b)
  return sum / arr.length
}

exports.sumArray = arr => {
  if (!arr.length) return 0
  let sum = arr.reduce((a, b) => a + b)
  return sum
}

exports.signedSqrt = x => Math.sign(x) * Math.sqrt(Math.abs(x))

exports.getJackpot = x => x > 39450 ? Math.pow(x - 26300, 0.85) + 26300 : x / 1.5

exports.serverStartTime = Date.now()

// Get a better logging function
exports.time = () => Date.now() - exports.serverStartTime

// create a custom timestamp format for log statements
exports.log = text => console.log("[" + (exports.time() / 1000).toFixed(3) + "]: " + text)
exports.warn = text => console.log("[" + (exports.time() / 1000).toFixed(3) + "]: " + "[WARNING] " + text)
exports.error = text => console.log(text)

exports.remove = (array, index) => {
  // there is more than one object in the container
  if (index === array.length - 1) {
    // special case if the obj is the newest in the container
    return array.pop()
  } else {
    let o = array[index]
    array[index] = array.pop()
    return o
  }
}
