// Seed math
exports.random = x => x * Math.random()

exports.randomAngle = () => Math.PI * 2 * Math.random()

exports.randomRange = (min, max) => Math.random() * (max - min) + min

exports.irandom = i => {
  let max = Math.floor(i)
  return Math.floor(Math.random() * (max + 1)) //Inclusive
}

exports.irandomRange = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //Inclusive
}

exports.gauss = (mean, deviation) => {
  let x1, x2, w
  do {
    x1 = 2 * Math.random() - 1
    x2 = 2 * Math.random() - 1
    w = x1 * x1 + x2 * x2
  } while (0 == w || w >= 1)

  w = Math.sqrt((-2 * Math.log(w)) / w)
  return mean + deviation * x1 * w
}

exports.gaussInverse = (min, max, clustering) => {
  let range = max - min
  let output = exports.gauss(0, range / clustering)

  while (output < 0)
    output += range

  while (output > range)
    output -= range

  return output + min
}

exports.gaussRing = (radius, clustering) => {
  let r = exports.random(Math.PI * 2)
  let d = exports.gauss(radius, radius * clustering)
  return {
    x: d * Math.cos(r),
    y: d * Math.sin(r),
  }
}

exports.chance = prob => exports.random(1) < prob

exports.dice = sides => exports.random(sides) < 1

exports.choose = (arr) => arr[exports.irandom(arr.length - 1)]

exports.chooseN = (arr, n) => {
  let o = []
  for (let i = 0; i < n; i++)
    o.push(arr.splice(exports.irandom(arr.length - 1), 1)[0])
  return o
}

exports.chooseChance = (...arg) => {
  let totalProb = 0
  for (let value of arg)
    totalProb += value

  let answer = exports.random(totalProb)
  for (let i = 0; i < arg.length; i++) {
    if (answer < arg[i]) return i
    answer -= arg[i]
  }
}

exports.chooseBotName = () => {
  return exports.choose([
    "Freddy fazbear!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    "GRRRRRRRRRRRRR STOPO KILLING ME",
    "Hikidy123",
    "-KogaM-Scratch-",
    "Archimedes",
    "Akilina",
    "Anastasios",
    "Athena",
    "Alkaios",
    "Amyntas",
    "Aniketos",
    "Artemis",
    "Anaxagoras",
    "Apollon",
    "i died 2 die",
    "Rhombicosidodecahedron",
    "exodus is cool",
    "swaer woerd",
    "DUDE STOP KIL ME",
    "woomy arras is superior",
    "aps++ is funny",
    "ItsFunneh",
    "ItsNotFunneh",
    "you should kill yourself, NOW!",
    "gib token",
    "can i pls hav token",
    "PLEASE GIVE TOKEN",
    "GRRRRRRRRRRRRRRRRRRRRRRRR GIVE ME TOKEN!!!!",
    "boss",
    "definetly not an ai",
    "rude msan",
    "team?",
    "spin to team",
    "gen z",
    "don't squint your eyes",
    "die",
  ])
}

exports.chooseBossName = (code, n) => {
  switch (code) {
    case "a":
      return exports.chooseN(
        [
          "Archimedes",
          "Akilina",
          "Anastasios",
          "Athena",
          "Alkaios",
          "Amyntas",
          "Aniketos",
          "Artemis",
          "Anaxagoras",
          "Apollon",
        ],
        n
      )
    case "castle":
      return exports.chooseN(
        [
          "Berezhany",
          "Lutsk",
          "Dobromyl",
          "Akkerman",
          "Palanok",
          "Zolochiv",
          "Palanok",
          "Mangup",
          "Olseko",
          "Brody",
          "Isiaslav",
          "Kaffa",
          "Bilhorod",
        ],
        n
      )
    case "zaphkiel":
      return "Zaphkiel"
    case "paladin":
      return "Paladin"
    case "theia":
      return "Theia"
    case "freyja":
      return "Freyja"
    case "nyx":
      return "Nyx"
    case "alviss":
      return "Alviss"
    case "tyr":
      return "Tyr"
    case "fiolnir":
      return "Fiolnir"
    case "ragnarok":
      return "Ragnarok"
    case "kronos":
      return "Kronos"
    case "legion":
      return exports.chooseN(
        [
          "Vesta",
          "Juno",
          "Orcus",
          "Janus",
          "Minerva",
          "Ceres",
        ],
        n
      )
    case "pumpkin":
      return "Jack Skeleton"
    case "santa":
      return "Santa"
    case "krampus":
      return "Krampus"
    case "vesta":
      return "Vesta"
    default:
      return "missingno"
  }
}
