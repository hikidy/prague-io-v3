/*
    DEFINITIONS.JS IS DEPRECATED!
    definitions.js is no longer being maintained and will be removed in a future update.
    Move to the new definitions folder at server/modules/definitions

    If you still need this file for some reason,
    you can toggle back the setting to use this definitions.js instead of using the new one,
    but once this file is removed you'll have to use servers/modules/definitions
*/
console.error(`
/------------------------------------------------------------------------------------/

DEFINITIONS.JS IS DEPRECATED!
definitions.js is no longer being maintained and will be removed in a future update.
Move to the new definitions system at server/modules/definitions

/------------------------------------------------------------------------------------/
`)

// GUN DEFINITIONS
const combineStats = function (array_of_objects) {
    try {
        // Build a blank array of the appropiate length
        let data = {
            reload: 1,
            recoil: 1,
            shudder: 1,
            size: 1,
            health: 1,
            damage: 1,
            pen: 1,
            speed: 1,
            maxSpeed: 1,
            range: 1,
            density: 1,
            spray: 1,
            resist: 1
        };

        for (let object = 0; object < array_of_objects.length; object++) {
            let gStat = array_of_objects[object];
            data.reload *= gStat.reload ?? 1;
            data.recoil *= gStat.recoil ?? 1;
            data.shudder *= gStat.shudder ?? 1;
            data.size *= gStat.size ?? 1;
            data.health *= gStat.health ?? 1;
            data.damage *= gStat.damage ?? 1;
            data.pen *= gStat.pen ?? 1;
            data.speed *= gStat.speed ?? 1;
            data.maxSpeed *= gStat.maxSpeed ?? 1;
            data.range *= gStat.range ?? 1;
            data.density *= gStat.density ?? 1;
            data.spray *= gStat.spray ?? 1;
            data.resist *= gStat.resist ?? 1;
        }
        return data;
    } catch (err) {
        console.log(err);
        console.log(JSON.stringify(array_of_objects));
    }
};
const setBuild = (build) => {
    let skills = build.split(build.includes("/") ? "/" : "").map((r) => +r);
    if (skills.length !== 10)
        throw new RangeError("Build must be made up of 10 numbers");
    return [6, 4, 3, 5, 2, 9, 0, 1, 8, 7].map((r) => skills[r]);
};
let config = require("../config.js");
let skcnv = {
    atk: 6,
    spd: 4,
    dam: 3,
    shi: 5,
    str: 2,
    mob: 9,
    rld: 0,
    pen: 1,
    rgn: 8,
    hlt: 7,
};
const skillSet = (args) => {
    let skills = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let s in args) {
        if (!args.hasOwnProperty(s)) continue;
        skills[skcnv[s]] = Math.round(config.MAX_SKILL * args[s]);
    }
    return skills;
};
const g = {
    blank: {
        reload: 1,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    small: {
        reload: 1,
        recoil: 1,
        shudder: 1,
        size: 0.8,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    micro: {
        reload: 1,
        recoil: 1,
        shudder: 1,
        size: 0.4,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    weak: {
        reload: 2,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 0.6,
        damage: 0.6,
        pen: 0.8,
        speed: 0.5,
        maxSpeed: 0.7,
        range: 0.25,
        density: 0.3,
        spray: 1,
        resist: 1
    },
    power: {
        reload: 1,
        recoil: 1,
        shudder: 0.6,
        size: 1.2,
        health: 1,
        damage: 1,
        pen: 1.25,
        speed: 2,
        maxSpeed: 1.7,
        range: 1,
        density: 2,
        spray: 0.5,
        resist: 1.5
    },
    fake: {
        reload: 1,
        recoil: 1,
        shudder: 1,
        size: 0.00001,
        health: 0.0001,
        damage: 1,
        pen: 1,
        speed: 0.00001,
        maxSpeed: 2,
        range: 0,
        density: 1,
        spray: 1,
        resist: 1
    },
    op: {
        reload: 0.5,
        recoil: 1.3,
        shudder: 1,
        size: 1,
        health: 4,
        damage: 4,
        pen: 4,
        speed: 3,
        maxSpeed: 2,
        range: 1,
        density: 5,
        spray: 2,
        resist: 1
    },
    basic: {
        reload: 18,
        recoil: 1.4,
        shudder: 0.1,
        size: 1,
        health: 1,
        damage: 0.75,
        pen: 1,
        speed: 4.5,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 15,
        resist: 1
    },
    drone: {
        reload: 50,
        recoil: 0.25,
        shudder: 0.1,
        size: 0.6,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 2,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 0.1,
        resist: 1
    },
    trap: {
        reload: 36,
        recoil: 1,
        shudder: 0.25,
        size: 0.6,
        health: 1,
        damage: 0.75,
        pen: 1,
        speed: 5,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 15,
        resist: 3
    },
    swarm: {
        reload: 18,
        recoil: 0.25,
        shudder: 0.05,
        size: 0.4,
        health: 1,
        damage: 0.75,
        pen: 1,
        speed: 4,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 5,
        resist: 1
    },
    factory: {
        reload: 60,
        recoil: 1,
        shudder: 0.1,
        size: 0.7,
        health: 1,
        damage: 0.75,
        pen: 1,
        speed: 3,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 0.1,
        resist: 1
    },
    productionist: {
        reload: 75,
        recoil: 0.25,
        shudder: 0.05,
        size: 0.7,
        health: 1,
        damage: 0.75,
        pen: 1,
        speed: 4,
        maxSpeed: 1,
        range: 1.5,
        density: 1,
        spray: 5,
        resist: 1
    },
    single: {
        reload: 1.05,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 1.05,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    twin: {
        reload: 1,
        recoil: 0.5,
        shudder: 0.9,
        size: 1,
        health: 0.9,
        damage: 0.7,
        pen: 1,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 1.2,
        resist: 1
    },
    double: {
        reload: 1,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 0.9,
        pen: 1,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    hewn: {
        reload: 1.25,
        recoil: 1.5,
        shudder: 1,
        size: 1,
        health: 0.9,
        damage: 0.85,
        pen: 1,
        speed: 1,
        maxSpeed: 0.9,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    bent: {
        reload: 1.1,
        recoil: 1,
        shudder: 0.8,
        size: 1,
        health: 0.9,
        damage: 1,
        pen: 0.8,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 0.8,
        spray: 0.5,
        resist: 1
    },
    spreadmain: {
        reload: 0.781,
        recoil: 0.25,
        shudder: 0.5,
        size: 1,
        health: 0.5,
        damage: 1,
        pen: 1,
        speed: 1.923,
        maxSpeed: 2.436,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    spread: {
        reload: 1.5,
        recoil: 1,
        shudder: 0.25,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 0.7,
        maxSpeed: 0.7,
        range: 1,
        density: 1,
        spray: 0.25,
        resist: 1
    },
    triple: {
        reload: 1.2,
        recoil: 0.667,
        shudder: 0.9,
        size: 1,
        health: 0.85,
        damage: 0.85,
        pen: 0.9,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1.1,
        spray: 0.9,
        resist: 0.95
    },
    quint: {
        reload: 1.5,
        recoil: 0.667,
        shudder: 0.9,
        size: 1,
        health: 1,
        damage: 1,
        pen: 0.9,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1.1,
        spray: 0.9,
        resist: 0.95
    },
    turret: {
        reload: 2,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 0.8,
        damage: 0.6,
        pen: 0.7,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 0.1,
        spray: 1,
        resist: 1
    },
    sniper: {
        reload: 1.35,
        recoil: 1,
        shudder: 0.25,
        size: 1,
        health: 1,
        damage: 0.8,
        pen: 1.1,
        speed: 1.5,
        maxSpeed: 1.5,
        range: 1,
        density: 1.5,
        spray: 0.2,
        resist: 1.15
    },
    assass: {
        reload: 1.65,
        recoil: 1,
        shudder: 0.25,
        size: 1,
        health: 1.15,
        damage: 1,
        pen: 1.1,
        speed: 1.18,
        maxSpeed: 1.18,
        range: 1,
        density: 3,
        spray: 1,
        resist: 1.3
    },
    hunter: {
        reload: 1.5,
        recoil: 0.7,
        shudder: 1,
        size: 0.95,
        health: 1,
        damage: 0.9,
        pen: 1,
        speed: 1.1,
        maxSpeed: 0.8,
        range: 1,
        density: 1.2,
        spray: 1,
        resist: 1.15
    },
    hunter2: {
        reload: 1,
        recoil: 1,
        shudder: 1,
        size: 0.9,
        health: 2,
        damage: 0.5,
        pen: 1.5,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1.2,
        spray: 1,
        resist: 1.1
    },
    preda: {
        reload: 1.4,
        recoil: 1,
        shudder: 1,
        size: 0.8,
        health: 1.5,
        damage: 0.9,
        pen: 1.2,
        speed: 0.9,
        maxSpeed: 0.9,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    dual: {
        reload: 2,
        recoil: 1,
        shudder: 0.8,
        size: 1,
        health: 1.5,
        damage: 1,
        pen: 1,
        speed: 1.3,
        maxSpeed: 1.1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1.25
    },
    rifle: {
        reload: 0.8,
        recoil: 0.8,
        shudder: 1.5,
        size: 1,
        health: 0.8,
        damage: 0.8,
        pen: 0.9,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 2,
        resist: 1
    },
    blunderbuss: {
        reload: 1,
        recoil: 0.1,
        shudder: 0.5,
        size: 1,
        health: 0.4,
        damage: 0.2,
        pen: 0.4,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 0.5,
        resist: 1
    },
    mach: {
        reload: 0.5,
        recoil: 0.8,
        shudder: 1.7,
        size: 1,
        health: 0.7,
        damage: 0.7,
        pen: 1,
        speed: 1,
        maxSpeed: 0.8,
        range: 1,
        density: 1,
        spray: 2.5,
        resist: 1
    },
    mini: {
        reload: 1.25,
        recoil: 0.6,
        shudder: 1,
        size: 0.8,
        health: 0.55,
        damage: 0.45,
        pen: 1.25,
        speed: 1.33,
        maxSpeed: 1,
        range: 1,
        density: 1.25,
        spray: 0.5,
        resist: 1.1
    },
    stream: {
        reload: 1.1,
        recoil: 0.6,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 0.65,
        pen: 1,
        speed: 1.24,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    nail: {
        reload: 0.85,
        recoil: 2.5,
        shudder: 1,
        size: 0.8,
        health: 1,
        damage: 0.7,
        pen: 1,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 2,
        spray: 1,
        resist: 1
    },
    gunner: {
        reload: 1.25,
        recoil: 0.25,
        shudder: 1.5,
        size: 1.1,
        health: 1,
        damage: 0.35,
        pen: 1.35,
        speed: 0.9,
        maxSpeed: 0.8,
        range: 1,
        density: 1.5,
        spray: 1.5,
        resist: 1.2
    },
    puregunner: {
        reload: 1,
        recoil: 0.25,
        shudder: 1.5,
        size: 1.2,
        health: 1.35,
        damage: 0.25,
        pen: 1.25,
        speed: 0.8,
        maxSpeed: 0.65,
        range: 1,
        density: 1.5,
        spray: 1.5,
        resist: 1.2
    },
    machgun: {
        reload: 0.66,
        recoil: 0.8,
        shudder: 2,
        size: 1,
        health: 1,
        damage: 0.75,
        pen: 1,
        speed: 1.2,
        maxSpeed: 0.8,
        range: 1,
        density: 1,
        spray: 2.5,
        resist: 1
    },
    blaster: {
        reload: 1,
        recoil: 1.2,
        shudder: 1.25,
        size: 1.1,
        health: 1.5,
        damage: 1,
        pen: 0.6,
        speed: 0.8,
        maxSpeed: 0.33,
        range: 0.6,
        density: 0.5,
        spray: 1.5,
        resist: 0.8
    },
    chain: {
        reload: 1.25,
        recoil: 1.33,
        shudder: 0.8,
        size: 1,
        health: 0.8,
        damage: 1,
        pen: 1.1,
        speed: 1.25,
        maxSpeed: 1.25,
        range: 1.1,
        density: 1.25,
        spray: 0.5,
        resist: 1.1
    },
    atomizer: {
        reload: 0.3,
        recoil: 0.8,
        shudder: 1,
        size: 0.5,
        health: 1,
        damage: 0.75,
        pen: 1,
        speed: 1.2,
        maxSpeed: 0.8,
        range: 1,
        density: 1,
        spray: 2.25,
        resist: 1
    },
    spam: {
        reload: 1.1,
        recoil: 1,
        shudder: 1,
        size: 1.05,
        health: 1,
        damage: 1.1,
        pen: 1,
        speed: 0.9,
        maxSpeed: 0.7,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1.05
    },
    gunnerDominator: {
        reload: 1.1,
        recoil: 0,
        shudder: 1.1,
        size: 0.5,
        health: 0.5,
        damage: 0.5,
        pen: 1,
        speed: 1.1,
        maxSpeed: 1,
        range: 1,
        density: 0.9,
        spray: 1.2,
        resist: 0.8
    },
    flank: {
        reload: 1,
        recoil: 1.2,
        shudder: 1,
        size: 1,
        health: 1.02,
        damage: 0.81,
        pen: 0.9,
        speed: 1,
        maxSpeed: 0.85,
        range: 1,
        density: 1.2,
        spray: 1,
        resist: 1
    },
    hurricane: {
        reload: 1,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 1.3,
        damage: 1.3,
        pen: 1.1,
        speed: 1.5,
        maxSpeed: 1.15,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    tri: {
        reload: 1,
        recoil: 0.9,
        shudder: 1,
        size: 1,
        health: 0.9,
        damage: 1,
        pen: 1,
        speed: 0.8,
        maxSpeed: 0.8,
        range: 0.6,
        density: 1,
        spray: 1,
        resist: 1
    },
    trifront: {
        reload: 1,
        recoil: 0.2,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 1.3,
        maxSpeed: 1.1,
        range: 1.5,
        density: 1,
        spray: 1,
        resist: 1
    },
    thruster: {
        reload: 1,
        recoil: 1.5,
        shudder: 2,
        size: 1,
        health: 0.5,
        damage: 0.5,
        pen: 0.7,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 0.5,
        resist: 0.7
    },
    missileTrail: {
        reload: 0.6,
        recoil: 0.25,
        shudder: 2,
        size: 1,
        health: 1,
        damage: 0.9,
        pen: 0.7,
        speed: 0.4,
        maxSpeed: 1,
        range: 0.5,
        density: 1,
        spray: 1,
        resist: 1
    },
    rocketeerMissileTrail: {
        reload: 0.5,
        recoil: 7,
        shudder: 1.5,
        size: 0.8,
        health: 0.8,
        damage: 0.7,
        pen: 1,
        speed: 0.9,
        maxSpeed: 0.8,
        range: 1,
        density: 1,
        spray: 5,
        resist: 1
    },
    auto: {
        reload: 0.9,
        recoil: 0.75,
        shudder: 0.5,
        size: 0.8,
        health: 0.9,
        damage: 0.6,
        pen: 1.2,
        speed: 1.1,
        maxSpeed: 1,
        range: 0.8,
        density: 1.3,
        spray: 1,
        resist: 1.25
    },
    five: {
        reload: 1.15,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 1.05,
        maxSpeed: 1.05,
        range: 1.1,
        density: 2,
        spray: 1,
        resist: 1
    },
    autosnipe: {
        reload: 1,
        recoil: 1,
        shudder: 1,
        size: 1.4,
        health: 2,
        damage: 1,
        pen: 1,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    over: {
        reload: 1.25,
        recoil: 1,
        shudder: 1,
        size: 0.85,
        health: 0.7,
        damage: 0.8,
        pen: 1,
        speed: 1,
        maxSpeed: 0.9,
        range: 1,
        density: 2,
        spray: 1,
        resist: 1
    },
    meta: {
        reload: 1.333,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 0.667,
        pen: 1,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    overdrive: {
        reload: 5,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 0.8,
        damage: 0.8,
        pen: 0.8,
        speed: 0.9,
        maxSpeed: 0.9,
        range: 0.9,
        density: 1,
        spray: 1.2,
        resist: 1
    },
    commander: {
        reload: 3,
        recoil: 1,
        shudder: 1,
        size: 0.7,
        health: 0.4,
        damage: 0.7,
        pen: 1,
        speed: 1,
        maxSpeed: 1,
        range: 0.1,
        density: 0.5,
        spray: 1,
        resist: 1
    },
    protectorswarm: {
        reload: 5,
        recoil: 0.000001,
        shudder: 1,
        size: 1,
        health: 100,
        damage: 1,
        pen: 1,
        speed: 1,
        maxSpeed: 1,
        range: 0.5,
        density: 5,
        spray: 1,
        resist: 10
    },
    battle: {
        reload: 1,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 1.25,
        damage: 1.15,
        pen: 1,
        speed: 1,
        maxSpeed: 0.85,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1.1
    },
    carrier: {
        reload: 1.5,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 0.8,
        pen: 1,
        speed: 1.3,
        maxSpeed: 1.2,
        range: 1.2,
        density: 1,
        spray: 1,
        resist: 1
    },
    bees: {
        reload: 1.3,
        recoil: 1,
        shudder: 1,
        size: 1.4,
        health: 1,
        damage: 1.5,
        pen: 0.5,
        speed: 3,
        maxSpeed: 1.5,
        range: 1,
        density: 0.25,
        spray: 1,
        resist: 1
    },
    sunchip: {
        reload: 5,
        recoil: 1,
        shudder: 1,
        size: 1.4,
        health: 0.5,
        damage: 0.4,
        pen: 0.6,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 0.8,
        spray: 1,
        resist: 1
    },
    maleficitor: {
        reload: 0.5,
        recoil: 1,
        shudder: 1,
        size: 1.05,
        health: 1.15,
        damage: 1.15,
        pen: 1.15,
        speed: 0.8,
        maxSpeed: 0.8,
        range: 1,
        density: 1.15,
        spray: 1,
        resist: 1
    },
    summoner: {
        reload: 0.3,
        recoil: 1,
        shudder: 1,
        size: 1.125,
        health: 0.4,
        damage: 0.345,
        pen: 0.4,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 0.8,
        spray: 1,
        resist: 1
    },
    minion: {
        reload: 1,
        recoil: 1,
        shudder: 2,
        size: 1,
        health: 0.4,
        damage: 0.4,
        pen: 1.2,
        speed: 1,
        maxSpeed: 1,
        range: 0.75,
        density: 1,
        spray: 2,
        resist: 1
    },
    babyfactory: {
        reload: 1.5,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 1,
        maxSpeed: 1.35,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    mehdrone: {
        reload: 1,
        recoil: 1,
        shudder: 1,
        size: 1.35,
        health: 1.75,
        damage: 1,
        pen: 1,
        speed: 1.125,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    bigdrone: {
        reload: 1,
        recoil: 1,
        shudder: 1,
        size: 1.8,
        health: 2.5,
        damage: 1,
        pen: 1,
        speed: 1.25,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    mothership: {
        reload: 1.25,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1.1,
        speed: 0.775,
        maxSpeed: 0.8,
        range: 15,
        density: 1,
        spray: 1,
        resist: 1.15
    },
    pound: {
        reload: 2,
        recoil: 1.6,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 2,
        pen: 1,
        speed: 0.85,
        maxSpeed: 0.8,
        range: 1,
        density: 1.5,
        spray: 1,
        resist: 1.15
    },
    destroy: {
        reload: 2.2,
        recoil: 1.8,
        shudder: 0.5,
        size: 1,
        health: 2,
        damage: 2,
        pen: 1.2,
        speed: 0.65,
        maxSpeed: 0.5,
        range: 1,
        density: 2,
        spray: 1,
        resist: 3
    },
    anni: {
        reload: 0.8,
        recoil: 1.25,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    hive: {
        reload: 1.5,
        recoil: 0.8,
        shudder: 1,
        size: 0.8,
        health: 0.7,
        damage: 0.3,
        pen: 1,
        speed: 1,
        maxSpeed: 0.6,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    arty: {
        reload: 1.2,
        recoil: 0.7,
        shudder: 1,
        size: 0.9,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 1.15,
        maxSpeed: 1.1,
        range: 1,
        density: 1.5,
        spray: 1,
        resist: 1
    },
    mortar: {
        reload: 1.2,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 1.1,
        damage: 1,
        pen: 1,
        speed: 0.8,
        maxSpeed: 0.8,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    launcher: {
        reload: 1.5,
        recoil: 1.5,
        shudder: 0.1,
        size: 0.72,
        health: 1.05,
        damage: 0.925,
        pen: 1,
        speed: 0.9,
        maxSpeed: 1.2,
        range: 1.1,
        density: 1,
        spray: 1,
        resist: 1.5
    },
    skim: {
        reload: 1,
        recoil: 0.8,
        shudder: 0.8,
        size: 0.9,
        health: 1.35,
        damage: 0.8,
        pen: 2,
        speed: 0.3,
        maxSpeed: 0.3,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1.1
    },
    snake: {
        reload: 0.4,
        recoil: 1,
        shudder: 4,
        size: 1,
        health: 1.5,
        damage: 0.9,
        pen: 1.2,
        speed: 0.2,
        maxSpeed: 0.35,
        range: 1,
        density: 3,
        spray: 6,
        resist: 0.5
    },
    sidewind: {
        reload: 1.5,
        recoil: 2,
        shudder: 1,
        size: 1,
        health: 1.5,
        damage: 0.9,
        pen: 1,
        speed: 0.15,
        maxSpeed: 0.5,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    snakeskin: {
        reload: 0.6,
        recoil: 1,
        shudder: 2,
        size: 1,
        health: 0.5,
        damage: 0.5,
        pen: 1,
        speed: 1,
        maxSpeed: 0.2,
        range: 0.4,
        density: 1,
        spray: 5,
        resist: 1
    },
    rocketeer: {
        reload: 1.4,
        recoil: 1,
        shudder: 0.9,
        size: 1.2,
        health: 1.5,
        damage: 1.4,
        pen: 1.4,
        speed: 0.3,
        maxSpeed: 1,
        range: 1.2,
        density: 1,
        spray: 1,
        resist: 1.4
    },
    shotgun: {
        reload: 8,
        recoil: 0.4,
        shudder: 1,
        size: 1.5,
        health: 1,
        damage: 0.4,
        pen: 0.8,
        speed: 1.8,
        maxSpeed: 0.6,
        range: 1,
        density: 1.2,
        spray: 1.2,
        resist: 1
    },
    acc: {
        reload: 1,
        recoil: 1,
        shudder: 0.1,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    destroyerDominator: {
        reload: 6.5,
        recoil: 0,
        shudder: 1,
        size: 0.975,
        health: 6,
        damage: 6,
        pen: 6,
        speed: 0.575,
        maxSpeed: 0.475,
        range: 1,
        density: 1,
        spray: 0.5,
        resist: 1
    },
    closer: {
        reload: 1.25,
        recoil: 0.25,
        shudder: 1,
        size: 1,
        health: 1000,
        damage: 1000,
        pen: 1000,
        speed: 2.5,
        maxSpeed: 2.25,
        range: 1.4,
        density: 4,
        spray: 0.25,
        resist: 1
    },
    block: {
        reload: 1.1,
        recoil: 2,
        shudder: 0.1,
        size: 1.5,
        health: 2,
        damage: 1,
        pen: 1.25,
        speed: 1.5,
        maxSpeed: 2.5,
        range: 1.25,
        density: 1,
        spray: 1,
        resist: 1.25
    },
    construct: {
        reload: 1.3,
        recoil: 1,
        shudder: 1,
        size: 0.9,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 1,
        maxSpeed: 1.1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    boomerang: {
        reload: 0.8,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 0.5,
        damage: 0.5,
        pen: 1,
        speed: 0.75,
        maxSpeed: 0.75,
        range: 1.333,
        density: 1,
        spray: 1,
        resist: 1
    },
    nest_keeper: {
        reload: 3,
        recoil: 1,
        shudder: 1,
        size: 0.75,
        health: 1.05,
        damage: 1.05,
        pen: 1.1,
        speed: 0.5,
        maxSpeed: 0.5,
        range: 0.5,
        density: 1.1,
        spray: 1,
        resist: 1
    },
    hexatrap: {
        reload: 1.3,
        recoil: 1,
        shudder: 1.25,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 0.8,
        maxSpeed: 1,
        range: 0.5,
        density: 1,
        spray: 1,
        resist: 1
    },
    megatrap: {
        reload: 2,
        recoil: 1.5,
        shudder: 0.75,
        size: 1.8,
        health: 1.52,
        damage: 1.52,
        pen: 1.52,
        speed: 0.9,
        maxSpeed: 0.8,
        range: 1.4,
        density: 1,
        spray: 1,
        resist: 2.5
    },
    trapperDominator: {
        reload: 1.26,
        recoil: 0,
        shudder: 0.25,
        size: 1,
        health: 1.25,
        damage: 1.45,
        pen: 1.6,
        speed: 0.5,
        maxSpeed: 2,
        range: 0.7,
        density: 1,
        spray: 0.5,
        resist: 1
    },
    healer: {
        reload: 1,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 1,
        damage: -1,
        pen: 1,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    lancer: {
        reload: 0.4,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 0.1,
        maxSpeed: 0.1,
        range: 0.1,
        density: 1,
        spray: 1,
        resist: 1
    },
    celeslower: {
        reload: 1,
        recoil: 1,
        shudder: 1,
        size: 0.5,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    tonsmorrecoil: {
        reload: 1,
        recoil: 4,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    lotsmorrecoil: {
        reload: 1,
        recoil: 1.8,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    muchmorerecoil: {
        reload: 1,
        recoil: 1.35,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    morerecoil: {
        reload: 1,
        recoil: 1.15,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    halfrecoil: {
        reload: 1,
        recoil: 0.5,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    halfreload: {
        reload: 2,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    lessreload: {
        reload: 1.5,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    one_third_reload: {
        reload: 1.333,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    morereload: {
        reload: 0.75,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    doublereload: {
        reload: 0.5,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    fast: {
        reload: 1,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 1.2,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    veryfast: {
        reload: 1,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 2.5,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    morespeed: {
        reload: 1,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 1.3,
        maxSpeed: 1.3,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    bitlessspeed: {
        reload: 1,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 0.93,
        maxSpeed: 0.93,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    slow: {
        reload: 1,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 0.7,
        maxSpeed: 0.7,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    halfspeed: {
        reload: 1,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 0.5,
        maxSpeed: 0.5,
        range: 1,
        density: 1,
        spray: 1,
        resist: 1
    },
    lowpower: {
        reload: 1,
        recoil: 1,
        shudder: 2,
        size: 1,
        health: 0.5,
        damage: 0.5,
        pen: 0.7,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 0.5,
        resist: 0.7
    },
    notdense: {
        reload: 1,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 0.1,
        spray: 1,
        resist: 1
    },
    halfrange: {
        reload: 1,
        recoil: 1,
        shudder: 1,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 1,
        maxSpeed: 1,
        range: 0.5,
        density: 1,
        spray: 1,
        resist: 1
    },
    aura: {
        reload: 0.001,
        recoil: 0.001,
        shudder: 0.001,
        size: 6,
        health: 1,
        damage: 3,
        pen: 1,
        speed: 0.001,
        maxSpeed: 0.001,
        range: 1,
        density: 1,
        spray: 0.001,
        resist: 1
    },
    noRandom: {
        reload: 1,
        recoil: 1,
        shudder: 0.00001,
        size: 1,
        health: 1,
        damage: 1,
        pen: 1,
        speed: 1,
        maxSpeed: 1,
        range: 1,
        density: 1,
        spray: 0.00001,
        resist: 1
    }
}

// SKILL DEFINITIONS
const dfltskl = 9;
const smshskl = 12;

// NAMES
const statnames = {
    smasher: 1,
    drone: 2,
    necro: 3,
    swarm: 4,
    trap: 5,
    generic: 6,
    lancer: 7,
};
const gunCalcNames = {
    default: 0,
    bullet: 1,
    drone: 2,
    swarm: 3,
    fixedReload: 4,
    thruster: 5,
    sustained: 6,
    necro: 7,
    trap: 8,
};
const basePolygonDamage = 1;
const basePolygonHealth = 2;
const base = {
    ACCEL: 1.6,
    SPEED: 5.25,
    HEALTH: 20,
    DAMAGE: 3,
    RESIST: 1,
    PENETRATION: 1.05,
    SHIELD: 8,
    REGEN: 0.025,
    FOV: 1,
    DENSITY: 0.5,
};

// FUNCTIONS
function dereference(type) {
    let output = JSON.parse(JSON.stringify(type));
    if (type.GUNS) {
        for (let i = 0; i < type.GUNS.length; i++) {
            if (output.GUNS[i].PROPERTIES) {
                output.GUNS[i].PROPERTIES.TYPE = type.GUNS[i].PROPERTIES.TYPE;
            }
        }
    }
    if (type.TURRETS) {
        for (let i = 0; i < type.TURRETS.length; i++) {
            output.TURRETS[i].TYPE = type.TURRETS[i].TYPE;
        }
    }
    return output;
}

// CANNON FUNCTIONS
function makeGuard(type, name = -1) {
    let output = dereference(type),
        cannons = [{
            POSITION: [13, 8, 1, 0, 0, 180, 0],
        }, {
            POSITION: [4, 8, 1.7, 13, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }];
    output.GUNS = type.GUNS == null ? cannons : type.GUNS.concat(cannons);
    output.LABEL = name == -1 ? type.LABEL + " Guard" : name;
    return output;
}
function makeConq(type, name = -1) {
    let output = dereference(type),
        cannons = [{
            POSITION: [18, 14, 1, 0, 0, 180, 0],
        }, {
            POSITION: [2, 14, 1.1, 18, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block]),
                TYPE: exports.setTrap,
            },
        }];
    output.GUNS = type.GUNS == null ? cannons : type.GUNS.concat(cannons);
    output.LABEL = name == -1 ? type.LABEL + " Conqueror" : name;
    return output;
}
function makeSplit(type, name = -1) {
    let output = dereference(type);
    let cannon1 = {
        POSITION: [18, 8, 1, 0, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    };
    let cannon2 = {
        POSITION: [18, 8, 1, 0, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
            TYPE: exports.bullet,
        },
    };
    output.GUNS = type.GUNS == null ? cannons : type.GUNS.concat(cannons);
    output.LABEL = name == -1 ? "Split " + type.LABEL : name;
    return output;
}
function addBackGunner(type, name = -1) {
    let output = dereference(type);
    let cannons = [{
        POSITION: [19, 2, 1, 0, -2.5, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil, g.lotsmorrecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 180, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil, g.lotsmorrecoil]),
            TYPE: exports.bullet,
        },
    }, {
        POSITION: [12, 11, 1, 0, 0, 180, 0],
    }];
    output.GUNS = type.GUNS == null ? cannons : type.GUNS.concat(cannons);
    output.LABEL = name == -1 ? type.LABEL : name;
    return output;
}

// SPAWNER FUNCTIONS
function makeHybrid(type, name = -1) {
    let output = dereference(type);
    let spawner = {
        /********* LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.weak]),
            TYPE: [exports.drone, { INDEPENDENT: true }],
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: false,
            MAX_CHILDREN: 3,
        },
    };
    output.GUNS = type.GUNS == null ? [spawner] : type.GUNS.concat([spawner]);
    output.LABEL = name == -1 ? "Hybrid " + type.LABEL : name;
    return output;
}
function makeOver(type, name = -1) {
    let output = dereference(type);
    let spawners = [{
        POSITION: [6, 12, 1.2, 8, 0, 125, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 3,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 235, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 3,
        },
    }];
    output.GUNS = type.GUNS == null ? spawners : type.GUNS.concat(spawners);
    output.LABEL = name == -1 ? "Over" + type.LABEL.toLowerCase() : name;
    return output;
}
function makeOversplit(type, name = -1) {
    let output = dereference(type);
    let spawners = [{
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 3,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 3,
        },
    }];
    output.GUNS = type.GUNS == null ? spawners : type.GUNS.concat(spawners);
    output.LABEL = name == -1 ? "Over" + type.LABEL.toLowerCase() : name;
    return output;
}
function makeBattle(type, name = -1) {
    let output = dereference(type);
    let spawner1 = {
        POSITION: [7, 7.5, 0.6, 7, 4, 125, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    };
    let spawner2 = {
        POSITION: [7, 7.5, 0.6, 7, -4, 125, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    };
    let spawner3 = {
        POSITION: [7, 7.5, 0.6, 7, 4, 235, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    };
    let spawner4 = {
        POSITION: [7, 7.5, 0.6, 7, -4, 235, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    };
    if (type.TURRETS != null) {
        output.TURRETS = type.TURRETS;
    }
    if (type.GUNS == null) {
        output.GUNS = [spawner1, spawner2, spawner3, spawner4];
    } else {
        output.GUNS = [...type.GUNS, spawner1, spawner2, spawner3, spawner4];
    }
    if (name == -1) {
        output.LABEL = "Battle" + type.LABEL.toLowerCase();
    } else {
        output.LABEL = name;
    }
    return output;
}
function makeCap(type, name = -1) {
    let output = dereference(type);
    let spawner1 = {
        /**** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [4.5, 10, 1, 10.5, 0, 125, 0],
    };
    let spawner2 = {
        POSITION: [1, 12, 1, 15, 0, 125, 0],
        PROPERTIES: {
            MAX_CHILDREN: 4,
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
            TYPE: exports.minion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    };
    let spawner3 = {
        POSITION: [11.5, 12, 1, 0, 0, 125, 0],
    };
    let spawner4 = {
        /**** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [4.5, 10, 1, 10.5, 0, 235, 0],
    };
    let spawner5 = {
        POSITION: [1, 12, 1, 15, 0, 235, 0],
        PROPERTIES: {
            MAX_CHILDREN: 4,
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
            TYPE: exports.minion,
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    };
    let spawner6 = {
        POSITION: [11.5, 12, 1, 0, 0, 235, 0],
    };
    if (type.TURRETS != null) {
        output.TURRETS = type.TURRETS;
    }
    if (type.GUNS == null) {
        output.GUNS = [spawner1, spawner2, spawner3, spawner4, spawner5, spawner6];
    } else {
        output.GUNS = [
            ...type.GUNS,
            spawner1,
            spawner2,
            spawner3,
            spawner4,
            spawner5,
            spawner6,
        ];
    }
    if (name == -1) {
        output.LABEL = "Cap" + type.LABEL.toLowerCase();
    } else {
        output.LABEL = name;
    }
    return output;
}
function makeCross(type, name = -1) {
    let output = dereference(type);
    let spawner1 = {
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 2,
        },
    };
    let spawner2 = {
        POSITION: [6, 12, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 2,
        },
    };
    let spawner3 = {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
            TYPE: exports.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 2,
        },
    };
    if (type.TURRETS != null) {
        output.TURRETS = type.TURRETS;
    }
    if (type.GUNS == null) {
        output.GUNS = [spawner1, spawner2, spawner3];
    } else {
        output.GUNS = [...type.GUNS, spawner1, spawner2, spawner3];
    }
    if (name == -1) {
        output.LABEL = "Cross-" + type.LABEL;
    } else {
        output.LABEL = name;
    }
    return output;
}
function makeZipper(type, name = -1) {
    let output = dereference(type);
    let spawner1 = {
        /********* LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [7, 7.5, 0.6, 7, 2.5, 20, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    };
    let spawner2 = {
        /********* LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [7, 7.5, 0.6, 7, -2.5, -20, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    };
    if (type.TURRETS != null) {
        output.TURRETS = type.TURRETS;
    }
    if (type.GUNS == null) {
        output.GUNS = [spawner1, spawner2];
    } else {
        output.GUNS = [spawner1, spawner2, ...type.GUNS];
    }
    if (name == -1) {
        output.LABEL = "Bi-Swarming " + type.LABEL;
    } else {
        output.LABEL = name;
    }
    return output;
}
function makeSwarming(type, name = -1) {
    let output = dereference(type);
    let spawner = {
        /********* LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.autoswarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    };
    if (type.TURRETS != null) {
        output.TURRETS = type.TURRETS;
    }
    if (type.GUNS == null) {
        output.GUNS = [spawner];
    } else {
        output.GUNS = [...type.GUNS, spawner];
    }
    if (name == -1) {
        output.LABEL = "Swarming " + type.LABEL;
    } else {
        output.LABEL = name;
    }
    return output;
}
function makeBiSwarming(type, name = -1) {
    let output = dereference(type);
    let spawner1 = {
        /********* LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [7, 7.5, 0.6, 7, 0, 25, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.autoswarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    };
    let spawner2 = {
        /********* LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [7, 7.5, 0.6, 7, 0, -25, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.autoswarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    };
    if (type.TURRETS != null) {
        output.TURRETS = type.TURRETS;
    }
    if (type.GUNS == null) {
        output.GUNS = [spawner1, spawner2];
    } else {
        output.GUNS = [...type.GUNS, spawner1, spawner2];
    }
    if (name == -1) {
        output.LABEL = "Bi-Swarming " + type.LABEL;
    } else {
        output.LABEL = name;
    }
    return output;
}
function makeTriSwarming(type, name = -1) {
    let output = dereference(type);
    let spawner1 = {
        /********* LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [7, 7.5, 0.6, 7, 0, 45, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.autoswarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    };
    let spawner2 = {
        /********* LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [7, 7.5, 0.6, 7, 0, -45, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.autoswarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    };
    let spawner3 = {
        /********* LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: exports.autoswarm,
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    };
    if (type.TURRETS != null) {
        output.TURRETS = type.TURRETS;
    }
    if (type.GUNS == null) {
        output.GUNS = [spawner1, spawner2, spawner3];
    } else {
        output.GUNS = [...type.GUNS, spawner1, spawner2, spawner3];
    }
    if (name == -1) {
        output.LABEL = "Tri-Swarming " + type.LABEL;
    } else {
        output.LABEL = name;
    }
    return output;
}

// AUTO FUNCTIONS
function makeAuto(type, name = -1, options = {}) {
    let turret = { type: exports.autoTurret, size: 10, independent: true };
    if (options.type != null) {
        turret.type = options.type;
    }
    if (options.size != null) {
        turret.size = options.size;
    }
    if (options.independent != null) {
        turret.independent = options.independent;
    }
    let output = dereference(type);
    let autogun = {
        /*********    SIZE                             X             Y         ANGLE        ARC */
        POSITION: [turret.size, 0, 0, 180, 360, 1],
        TYPE: [
            turret.type,
            {
                CONTROLLERS: ["nearestDifferentMaster"],
                INDEPENDENT: turret.independent,
            },
        ],
    };
    if (type.GUNS != null) {
        output.GUNS = type.GUNS;
    }
    if (type.TURRETS == null) {
        output.TURRETS = [autogun];
    } else {
        output.TURRETS = [...type.TURRETS, autogun];
    }
    if (name == -1) {
        output.LABEL = "Auto-" + type.LABEL;
    } else {
        output.LABEL = name;
    }
    output.DANGER = type.DANGER + 1;
    return output;
}
function makeCeption(type, name = -1, options = {}) {
    let turret = {
        type: exports.autoTurret,
        size: 12.5,
        independent: true,
    };
    if (options.type != null) {
        type = options.type;
    }
    if (options.size != null) {
        turret.size = options.size;
    }
    if (options.independent != null) {
        turret.independent = options.independent;
    }
    let output = dereference(type);
    let autogun = {
        /********* SIZE X Y ANGLE ARC */
        POSITION: [turret.size, 0, 0, 180, 360, 1],
        TYPE: [
            type,
            {
                CONTROLLERS: ["nearestDifferentMaster"],
                INDEPENDENT: turret.independent,
            },
        ],
    };
    if (type.GUNS != null) {
        output.GUNS = type.GUNS;
    }
    if (type.TURRETS == null) {
        output.TURRETS = [autogun];
    } else {
        output.TURRETS = [...type.TURRETS, autogun];
    }
    if (name == -1) {
        output.LABEL = type.LABEL + "-Ception";
    } else {
        output.LABEL = name;
    }
    output.DANGER = type.DANGER + 1;
    return output;
}
function makeDeco(shapes, color = 16, borderless = false) {
    if (exports["deco" + shapes + "_" + color] == null) {
        exports["deco" + shapes + "_" + color] = {
            PARENT: [exports.genericEntity],
            SHAPE: shapes,
            COLOR: color,
            INDEPENDENT: true,
            BORDERLESS: borderless,
        };
    }
    return exports["deco" + shapes + "_" + color];
}

function makeLabyrinthShape(type) {
    let output = dereference(type);
    let downscale = Math.max(output.SHAPE, 3);
    return output;
}

// ENTITY BASES
exports.genericEntity = {
    NAME: "",
    LABEL: "Unknown Entity",
    TYPE: "unknown",
    DAMAGE_CLASS: 0,
    DANGER: 0,
    VALUE: 0,
    SHAPE: 0,
    COLOR: {
        BASE: 16, // ID
        HUE_SHIFT: 0, // Additive, degrees
        SATURATION_SHIFT: 1, // Multiplicative
        BRIGHTNESS_SHIFT: 0, // Additive, ranges from -100 to 100
        ALLOW_BRIGHTNESS_INVERT: true, // Toggles offset invert if exceeding normal color bounds
    },
    INDEPENDENT: false,
    CONTROLLERS: ["doNothing"],
    HAS_NO_MASTER: false,
    MOTION_TYPE: "glide",
    FACING_TYPE: "toTarget",
    DRAW_HEALTH: false,
    DRAW_SELF: true,
    DAMAGE_EFFECTS: true,
    RATEFFECTS: true,
    MOTION_EFFECTS: true,
    INTANGIBLE: false,
    ACCEPTS_SCORE: true,
    GIVE_KILL_MESSAGE: false,
    CAN_GO_OUTSIDE_ROOM: false,
    HITS_OWN_TYPE: "normal",
    DIE_AT_LOW_SPEED: false,
    DIE_AT_RANGE: false,
    CLEAR_ON_MASTER_UPGRADE: false,
    PERSISTS_AFTER_DEATH: false,
    VARIES_IN_SIZE: false,
    HEALTH_WITH_LEVEL: true,
    CAN_BE_ON_LEADERBOARD: true,
    HAS_NO_RECOIL: false,
    BUFF_VS_FOOD: false,
    OBSTACLE: false,
    CRAVES_ATTENTION: false,
    NECRO: false,
    UPGRADES_TIER_0: [],
    UPGRADES_TIER_1: [],
    UPGRADES_TIER_2: [],
    UPGRADES_TIER_3: [],
    UPGRADES_TIER_4: [],
    UPGRADES_TIER_5: [],
    UPGRADES_TIER_6: [],
    UPGRADES_TIER_7: [],
    UPGRADES_TIER_8: [],
    UPGRADES_TIER_9: [],
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    LEVEL: 0,
    BORDERLESS: false,
    DRAW_FILL: true,
    SKILL_CAP: [
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
    ],
    GUNS: [],
    MAX_CHILDREN: 0,
    BODY: {
        ACCELERATION: 1,
        SPEED: 0,
        HEALTH: 1,
        RESIST: 1,
        SHIELD: 0,
        REGEN: 0,
        DAMAGE: 1,
        PENETRATION: 1,
        RANGE: 0,
        FOV: 1,
        DENSITY: 1,
        STEALTH: 1,
        PUSHABILITY: 1,
        HETERO: 2,
    },
    FOOD: {
        LEVEL: -1,
    },
};
exports.genericTank = {
    LABEL: "Unknown Class",
    TYPE: "tank",
    DAMAGE_CLASS: 2,
    DANGER: 5,
    MOTION_TYPE: "motor",
    FACING_TYPE: "toTarget",
    SIZE: 12,
    MAX_CHILDREN: 0,
    DAMAGE_EFFECTS: false,
    IGNORED_BY_AI: false,
    BODY: {
        ACCELERATION: base.ACCEL,
        SPEED: base.SPEED,
        HEALTH: base.HEALTH,
        DAMAGE: base.DAMAGE,
        PENETRATION: base.PENETRATION,
        SHIELD: base.SHIELD,
        REGEN: base.REGEN,
        FOV: base.FOV,
        DENSITY: base.DENSITY,
        PUSHABILITY: 1,
        HETERO: 3,
    },
    GUNS: [],
    TURRETS: [],
    GIVE_KILL_MESSAGE: true,
    DRAW_HEALTH: true,
    HITS_OWN_TYPE: "hardOnlyTanks",
};

// POLYGONS
exports.food = {
    TYPE: "food",
    DAMAGE_CLASS: 1,
    CONTROLLERS: ["moveInCircles"],
    HITS_OWN_TYPE: "repel",
    MOTION_TYPE: "drift",
    FACING_TYPE: "turnWithSpeed",
    VARIES_IN_SIZE: true,
    BODY: {
        STEALTH: 30,
        PUSHABILITY: 1,
    },
    DAMAGE_EFFECTS: false,
    RATEFFECTS: false,
    HEALTH_WITH_LEVEL: false,
};

// EGGS
exports.egg = {
    PARENT: [exports.food],
    LABEL: "Egg",
    FOOD: {
        LEVEL: 0,
    },
    VALUE: 10,
    SHAPE: 0,
    SIZE: 5,
    COLOR: 6,
    INTANGIBLE: true,
    BODY: {
        DAMAGE: 0,
        DENSITY: 2,
        HEALTH: 0.0011,
        PUSHABILITY: 0,
    },
    DRAW_HEALTH: false,
};
exports.gem = {
    PARENT: [exports.food],
    LABEL: "Gem",
    FOOD: {
        LEVEL: 0,
    },
    VALUE: 2e3,
    SHAPE: 6,
    SIZE: 5,
    COLOR: 0,
    BODY: {
        DAMAGE: basePolygonDamage / 4,
        DENSITY: 4,
        HEALTH: 10,
        PENETRATION: 2,
        RESIST: 2,
        PUSHABILITY: 0.25,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
};
exports.jewel = {
    PARENT: [exports.food],
    LABEL: "Jewel",
    FOOD: {
        LEVEL: 0,
    },
    VALUE: 1e5,
    SHAPE: 6,
    SIZE: 12,
    COLOR: 3,
    BODY: {
        DAMAGE: basePolygonDamage / 4,
        DENSITY: 4,
        HEALTH: 50,
        PENETRATION: 2,
        RESIST: 2,
        PUSHABILITY: 0.25,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
    GIVE_KILL_MESSAGE: true,
};

// SQUARES
exports.square = {
    PARENT: [exports.food],
    LABEL: "Square",
    FOOD: {
        LEVEL: 1,
    },
    VALUE: 30,
    SHAPE: 4,
    SIZE: 10,
    COLOR: 13,
    BODY: {
        DAMAGE: basePolygonDamage,
        DENSITY: 4,
        HEALTH: basePolygonHealth,
        PENETRATION: 2,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
};
exports.shinySquare = {
    PARENT: [exports.food],
    LABEL: "Shiny Square",
    FOOD: {
        LEVEL: 1,
    },
    VALUE: 2e3,
    SHAPE: 4,
    SIZE: 10,
    COLOR: 1,
    BODY: {
        DAMAGE: 0.5,
        DENSITY: 4,
        HEALTH: 20,
        PENETRATION: 2,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
    GIVE_KILL_MESSAGE: true,
};
exports.legendarySquare = {
    PARENT: [exports.food],
    LABEL: "Legendary Square",
    FOOD: {
        LEVEL: 1,
    },
    VALUE: 3e4,
    SHAPE: 4,
    SIZE: 10,
    COLOR: 0,
    BODY: {
        DAMAGE: 2,
        DENSITY: 6,
        HEALTH: 60,
        PENETRATION: 6,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
    GIVE_KILL_MESSAGE: true,
};
exports.shadowSquare = {
    PARENT: [exports.food],
    LABEL: "Shadow Square",
    FOOD: {
        LEVEL: 1,
    },
    VALUE: 75e3,
    SHAPE: 4,
    SIZE: 10,
    COLOR: 19,
    ALPHA: 0.25,
    BODY: {
        DAMAGE: 4,
        DENSITY: 10,
        HEALTH: 100,
        PENETRATION: 8,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
    GIVE_KILL_MESSAGE: true,
};
exports.rainbowSquare = {
    PARENT: [exports.food],
    LABEL: "Rainbow Square",
    FOOD: {
        LEVEL: 1,
    },
    VALUE: 5e7,
    SHAPE: 4,
    SIZE: 10,
    COLOR: 36,
    BODY: {
        DAMAGE: 8,
        DENSITY: 15,
        HEALTH: 200,
        PENETRATION: 12.5,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
    GIVE_KILL_MESSAGE: true,
};

// TRIANGLES
exports.triangle = {
    PARENT: [exports.food],
    LABEL: "Triangle",
    FOOD: {
        LEVEL: 2,
    },
    VALUE: 120,
    SHAPE: 3,
    SIZE: 9,
    COLOR: 2,
    BODY: {
        DAMAGE: basePolygonDamage,
        DENSITY: 6,
        HEALTH: 3 * basePolygonHealth,
        RESIST: 1.15,
        PENETRATION: 1.5,
    },
    DRAW_HEALTH: true,
};
exports.shinyTriangle = {
    PARENT: [exports.food],
    LABEL: "Shiny Triangle",
    FOOD: {
        LEVEL: 2,
    },
    VALUE: 7e3,
    SHAPE: 3,
    SIZE: 9,
    COLOR: 1,
    BODY: {
        DAMAGE: 1,
        DENSITY: 6,
        HEALTH: 60,
        RESIST: 1.15,
        PENETRATION: 1.5,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.legendaryTriangle = {
    PARENT: [exports.food],
    LABEL: "Legendary Triangle",
    FOOD: {
        LEVEL: 2,
    },
    VALUE: 6e4,
    SHAPE: 3,
    SIZE: 9,
    COLOR: 0,
    BODY: {
        DAMAGE: 4,
        DENSITY: 8,
        HEALTH: 90,
        RESIST: 1.25,
        PENETRATION: 10,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.shadowTriangle = {
    PARENT: [exports.food],
    LABEL: "Shadow Triangle",
    FOOD: {
        LEVEL: 2,
    },
    VALUE: 25e4,
    SHAPE: 3,
    SIZE: 9,
    COLOR: 19,
    ALPHA: 0.25,
    BODY: {
        DAMAGE: 8,
        DENSITY: 15,
        HEALTH: 200,
        RESIST: 3.25,
        PENETRATION: 14,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.rainbowTriangle = {
    PARENT: [exports.food],
    LABEL: "Rainbow Triangle",
    FOOD: {
        LEVEL: 2,
    },
    VALUE: 75e6,
    SHAPE: 3,
    SIZE: 9,
    COLOR: 36,
    BODY: {
        DAMAGE: 12,
        DENSITY: 20,
        HEALTH: 300,
        RESIST: 4.25,
        PENETRATION: 17.5,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};

// PENTAGONS
exports.pentagon = {
    PARENT: [exports.food],
    LABEL: "Pentagon",
    FOOD: {
        LEVEL: 3,
    },
    VALUE: 400,
    SHAPE: 5,
    SIZE: 16,
    COLOR: 14,
    BODY: {
        DAMAGE: 1.5 * basePolygonDamage,
        DENSITY: 8,
        HEALTH: 10 * basePolygonHealth,
        RESIST: 1.25,
        PENETRATION: 1.1,
    },
    DRAW_HEALTH: true,
};
exports.shinyPentagon = {
    PARENT: [exports.food],
    LABEL: "Shiny Pentagon",
    FOOD: {
        LEVEL: 3,
    },
    VALUE: 3e4,
    SHAPE: 5,
    SIZE: 16,
    COLOR: 1,
    BODY: {
        DAMAGE: 3,
        DENSITY: 8,
        HEALTH: 200,
        RESIST: 1.25,
        PENETRATION: 1.1,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.legendaryPentagon = {
    PARENT: [exports.food],
    LABEL: "Legendary Pentagon",
    FOOD: {
        LEVEL: 3,
    },
    VALUE: 12e4,
    SHAPE: 5,
    SIZE: 16,
    COLOR: 0,
    BODY: {
        DAMAGE: 6,
        DENSITY: 12,
        HEALTH: 240,
        RESIST: 1.75,
        PENETRATION: 15,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.shadowPentagon = {
    PARENT: [exports.food],
    LABEL: "Shadow Pentagon",
    FOOD: {
        LEVEL: 3,
    },
    VALUE: 1e6,
    SHAPE: 5,
    SIZE: 16,
    COLOR: 19,
    ALPHA: 0.25,
    BODY: {
        DAMAGE: 14,
        DENSITY: 20,
        HEALTH: 300,
        RESIST: 4.75,
        PENETRATION: 20,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.rainbowPentagon = {
    PARENT: [exports.food],
    LABEL: "Rainbow Pentagon",
    FOOD: {
        LEVEL: 3,
    },
    VALUE: 1e9,
    SHAPE: 5,
    SIZE: 16,
    COLOR: 36,
    BODY: {
        DAMAGE: 17.5,
        DENSITY: 25,
        HEALTH: 500,
        RESIST: 5.5,
        PENETRATION: 25,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};

// BETA PENTAGONS
exports.betaPentagon = {
    PARENT: [exports.food],
    LABEL: "Beta Pentagon",
    FOOD: {
        LEVEL: 4,
    },
    VALUE: 2500,
    SHAPE: 5,
    SIZE: 30,
    COLOR: 14,
    BODY: {
        DAMAGE: 2 * basePolygonDamage,
        DENSITY: 30,
        HEALTH: 50 * basePolygonHealth,
        RESIST: Math.pow(1.25, 2),
        SHIELD: 20 * basePolygonHealth,
        REGEN: 0.2,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.shinyBetaPentagon = {
    PARENT: [exports.food],
    LABEL: "Shiny Beta Pentagon",
    FOOD: {
        LEVEL: 4,
    },
    VALUE: 6e4,
    SHAPE: 5,
    SIZE: 30,
    COLOR: 1,
    BODY: {
        DAMAGE: 4 * basePolygonDamage,
        DENSITY: 30,
        HEALTH: 1000 * basePolygonHealth,
        RESIST: Math.pow(1.25, 2),
        SHIELD: 20 * basePolygonHealth,
        REGEN: 0.2,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.legendaryBetaPentagon = {
    PARENT: [exports.food],
    LABEL: "Legendary Beta Pentagon",
    FOOD: {
        LEVEL: 4,
    },
    VALUE: 5e5,
    SHAPE: 5,
    SIZE: 30,
    COLOR: 0,
    BODY: {
        DAMAGE: 11,
        DENSITY: 17,
        HEALTH: 480,
        RESIST: 2.5,
        PENETRATION: 25,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.shadowBetaPentagon = {
    PARENT: [exports.food],
    LABEL: "Shadow Beta Pentagon",
    FOOD: {
        LEVEL: 4,
    },
    VALUE: 1e7,
    SHAPE: 5,
    SIZE: 30,
    COLOR: 19,
    ALPHA: 0.25,
    BODY: {
        DAMAGE: 20,
        DENSITY: 25,
        HEALTH: 600,
        RESIST: 6,
        PENETRATION: 30,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.rainbowBetaPentagon = {
    PARENT: [exports.food],
    LABEL: "Rainbow Beta Pentagon",
    FOOD: {
        LEVEL: 4,
    },
    VALUE: 5e9,
    SHAPE: 5,
    SIZE: 30,
    COLOR: 36,
    BODY: {
        DAMAGE: 27.5,
        DENSITY: 30,
        HEALTH: 750,
        RESIST: 8.75,
        PENETRATION: 35,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};

// ALPHA PENTAGONS
exports.alphaPentagon = {
    PARENT: [exports.food],
    LABEL: "Alpha Pentagon",
    FOOD: {
        LEVEL: 5,
    },
    VALUE: 15e3,
    SHAPE: 5,
    SIZE: 58,
    COLOR: 14,
    BODY: {
        DAMAGE: 2 * basePolygonDamage,
        DENSITY: 80,
        HEALTH: 300 * basePolygonHealth,
        RESIST: Math.pow(1.25, 3),
        SHIELD: 40 * basePolygonHealth,
        REGEN: 0.6,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.shinyAlphaPentagon = {
    PARENT: [exports.food],
    LABEL: "Shiny Alpha Pentagon",
    FOOD: {
        LEVEL: 5,
    },
    VALUE: 2e5,
    SHAPE: 5,
    SIZE: 58,
    COLOR: 1,
    BODY: {
        DAMAGE: 4 * basePolygonDamage,
        DENSITY: 80,
        HEALTH: 6000 * basePolygonHealth,
        RESIST: Math.pow(1.25, 3),
        SHIELD: 40 * basePolygonHealth,
        REGEN: 0.6,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.legendaryAlphaPentagon = {
    PARENT: [exports.food],
    LABEL: "Legendary Alpha Pentagon",
    FOOD: {
        LEVEL: 5,
    },
    VALUE: 2e5,
    SHAPE: 5,
    SIZE: 58,
    COLOR: 0,
    BODY: {
        DAMAGE: 15,
        DENSITY: 28,
        HEALTH: 550,
        RESIST: 3.75,
        PENETRATION: 35,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.shadowAlphaPentagon = {
    PARENT: [exports.food],
    LABEL: "Shadow Alpha Pentagon",
    FOOD: {
        LEVEL: 5,
    },
    VALUE: 25e5,
    SHAPE: 5,
    SIZE: 58,
    COLOR: 19,
    ALPHA: 0.25,
    BODY: {
        DAMAGE: 15,
        DENSITY: 30,
        HEALTH: 750,
        RESIST: 8,
        PENETRATION: 45,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.rainbowAlphaPentagon = {
    PARENT: [exports.food],
    LABEL: "Rainbow Alpha Pentagon",
    FOOD: {
        LEVEL: 5,
    },
    VALUE: 1e9,
    SHAPE: 5,
    SIZE: 58,
    COLOR: 36,
    BODY: {
        DAMAGE: 35,
        DENSITY: 35,
        HEALTH: 1250,
        RESIST: 12.5,
        PENETRATION: 42.5,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};

// 3D POLYGONS
exports.cube = {
    PARENT: [exports.food],
    LABEL: "The Cube",
    FOOD: {
        LEVEL: 0,
    },
    VALUE: 2e7,
    SHAPE: 4,
    SIZE: 7,
    COLOR: 18,
    SHAPE:
        "M -0.355 -0.39 V 2 L 1.735 0.802 V -1.585 L -0.355 -0.39 Z M -0.647 -0.39 V 2 L -2.735 0.8 V -1.585 L -0.647 -0.39 Z M -0.5 -0.64 L 1.589 -1.827 L -0.5 -3.02 L -2.58 -1.828 L -0.5 -0.64",
    BODY: {
        DAMAGE: 12,
        DENSITY: 20,
        HEALTH: 500,
        PENETRATION: 17.5,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
    GIVE_KILL_MESSAGE: true,
};
exports.dodecahedron = {
    PARENT: [exports.food],
    LABEL: "The Dodecahedron",
    FOOD: {
        LEVEL: 0,
    },
    VALUE: 5e7,
    SIZE: 10,
    COLOR: 18,
    SHAPE:
        "M -1.22 -1.45 H 0.17 L 0.615 -0.12 L -0.52 0.7 L -1.65 -0.12 L -1.22 -1.45 Z M -1.835 0.09 L -0.67 0.94 V 1.61 L -1.81 1.255 L -2.51 0.28 L -1.835 0.09 Z M 0.8 0.09 L -0.385 0.95 V 1.62 L 0.77 1.25 L 1.47 0.28 L 0.8 0.09 Z M -1.93 -0.18 L -1.485 -1.56 L -1.89 -2.151 L -2.6 -1.2 V 0.01 L -1.93 -0.18 Z M 0.44 -1.565 L 0.89 -0.18 L 1.555 0.015 V -1.19 L 0.852 -2.17 L 0.44 -1.565 Z M -0.52 -2.7 L -1.67 -2.335 L -1.26 -1.734 H 0.21 L 0.635 -2.329 L -0.52 -2.7",
    BODY: {
        DAMAGE: 22.5,
        DENSITY: 30,
        HEALTH: 1000,
        RESIST: 10,
        PENETRATION: 35,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.icosahedron = {
    PARENT: [exports.food],
    LABEL: "The Icosahedron",
    FOOD: {
        LEVEL: 0,
    },
    VALUE: 1e8,
    SIZE: 18,
    COLOR: 18,
    SHAPE:
        "M -0.39 -0.245 L 0.392 -0.245 L 0 0.47 L -0.39 -0.245 Z M -0.465 -0.2 L -0.893 0.475 L -0.073 0.51 L -0.465 -0.2 Z M 0.4636 -0.2 L 0.073 0.509 L 0.891 0.4736 L 0.4636 -0.2 Z M 0 -1 L -0.39 -0.33 L 0.389 -0.328 L 0 -1 Z M -0.142 -0.925 L -0.875 -0.506 L -0.48 -0.339 L -0.142 -0.925 Z M -0.925 0.366 L -0.925 -0.431 L -0.525 -0.266 L -0.925 0.366 Z M -0.042 0.595 L -0.808 0.562 L -0.042 1 L -0.042 0.595 Z M 0.042 0.595 L 0.808 0.562 L 0.042 1 L 0.042 0.595 Z M 0.142 -0.925 L 0.858 -0.516 L 0.48 -0.339 L 0.142 -0.925 Z M 0.925 0.366 L 0.925 -0.452 L 0.523 -0.269 L 0.925 0.366 Z",
    BODY: {
        DAMAGE: 17.5,
        DENSITY: 25,
        HEALTH: 750,
        RESIST: 7.5,
        PENETRATION: 22.5,
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};

// OBSTACLES
exports.rock = {
    TYPE: "wall",
    DAMAGE_CLASS: 1,
    LABEL: "Rock",
    FACING_TYPE: "turnWithSpeed",
    SHAPE: -9,
    BODY: {
        PUSHABILITY: 0,
        HEALTH: 10000,
        SHIELD: 10000,
        REGEN: 1000,
        DAMAGE: 1,
        RESIST: 100,
        STEALTH: 1,
    },
    VALUE: 0,
    SIZE: 60,
    COLOR: 16,
    VARIES_IN_SIZE: true,
    ACCEPTS_SCORE: false,
};
exports.stone = {
    PARENT: [exports.rock],
    LABEL: "Stone",
    SIZE: 32,
    SHAPE: -7,
};
exports.moon = {
    PARENT: [exports.rock],
    LABEL: "Moon",
    SIZE: 60,
    SHAPE: 0,
};
exports.gravel = {
    PARENT: [exports.rock],
    LABEL: "Gravel",
    SIZE: 16,
    SHAPE: -7,
};
exports.wall = {
    PARENT: [exports.rock],
    LABEL: "Wall",
    SIZE: 25,
    SHAPE: 4,
};

// AMMUNITION
// BULLETS
exports.bullet = {
    LABEL: "Bullet",
    TYPE: "bullet",
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.165,
        DAMAGE: 6,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: true,
};
exports.speedBullet = {
    PARENT: [exports.bullet],
    MOTION_TYPE: "accel",
};
exports.growBullet = {
    PARENT: [exports.bullet],
    MOTION_TYPE: "grow",
};
exports.flare = {
    PARENT: [exports.growBullet],
    LABEL: "Flare",
    SHAPE: 4,
};
exports.developerBullet = {
    PARENT: [exports.bullet],
    SHAPE: [
        [-1, -1],
        [1, -1],
        [2, 0],
        [1, 1],
        [-1, 1],
    ],
};
exports.healerBullet = {
    PARENT: [exports.bullet],
    HEALER: true,
    HITS_OWN_TYPE: "normal",
};
exports.casing = {
    PARENT: [exports.bullet],
    LABEL: "Shell",
    TYPE: "swarm",
};

// DRONES
exports.drone = {
    LABEL: "Drone",
    TYPE: "drone",
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: 3,
    MOTION_TYPE: "chase",
    FACING_TYPE: "smoothToTarget",
    CONTROLLERS: [
        "nearestDifferentMaster",
        "canRepel",
        "mapTargetToGoal",
        "hangOutNearMaster",
    ],
    AI: {
        BLIND: true,
    },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.3,
        DAMAGE: 3.375,
        SPEED: 3.8,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.5,
    },
    HITS_OWN_TYPE: "hard",
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
};

// SWARMS
exports.swarm = {
    LABEL: "Swarm Drone",
    TYPE: "swarm",
    ACCEPTS_SCORE: false,
    SHAPE: 3,
    MOTION_TYPE: "swarm",
    FACING_TYPE: "smoothWithMotion",
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    CRAVES_ATTENTION: true,
    BODY: {
        ACCELERATION: 3,
        PENETRATION: 1.5,
        HEALTH: 0.175,
        DAMAGE: 2.25,
        SPEED: 4.5,
        RESIST: 1.6,
        RANGE: 225,
        DENSITY: 12,
        PUSHABILITY: 0.6,
        FOV: 1.5,
    },
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
};
exports.autoswarm = {
    PARENT: [exports.swarm],
    AI: {
        FARMER: true,
    },
    INDEPENDENT: true,
};
exports.bee = {
    PARENT: [exports.swarm],
    PERSISTS_AFTER_DEATH: true,
    SHAPE: 4,
    LABEL: "Drone",
    HITS_OWN_TYPE: "hardWithBuffer",
};
exports.homingBullet = {
    PARENT: [exports.autoswarm],
    SHAPE: 0,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.165,
        DAMAGE: 6,
        PUSHABILITY: 0.3,
    },
    CAN_GO_OUTSIDE_ROOM: true,
};

// SUNCHIPS
exports.sunchip = {
    PARENT: [exports.drone],
    SHAPE: 4,
    NECRO: true,
    HITS_OWN_TYPE: "hard",
    BODY: {
        FOV: 0.5,
    },
    AI: {
        BLIND: true,
        FARMER: true,
    },
    DRAW_HEALTH: false,
};
exports.autosunchip = {
    PARENT: [exports.sunchip],
    AI: {
        BLIND: true,
        FARMER: true,
    },
    INDEPENDENT: true,
};
exports.eggchip = {
    PARENT: [exports.sunchip],
    SHAPE: 0,
};
exports.autoeggchip = {
    PARENT: [exports.eggchip],
    AI: {
        BLIND: true,
        FARMER: true,
    },
    INDEPENDENT: true,
};
exports.pentachip = {
    PARENT: [exports.sunchip],
    SHAPE: 5,
};
exports.summonerDrone = {
    PARENT: [exports.sunchip],
    NECRO: false,
};
exports.gunchip = {
    PARENT: [exports.drone],
    SHAPE: -2,
    NECRO: true,
    HITS_OWN_TYPE: "hard",
    BODY: {
        FOV: 0.5,
    },
    AI: {
        BLIND: true,
        FARMER: true,
    },
    DRAW_HEALTH: false,
};

// MINIONS
exports.minion = {
    PARENT: [exports.genericTank],
    LABEL: "Minion",
    TYPE: "minion",
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: "hardWithBuffer",
    FACING_TYPE: "smoothToTarget",
    BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    GUNS: [
        {
            POSITION: [17, 9, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
                WAIT_TO_CYCLE: true,
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.megaMinion = {
    PARENT: [exports.minion],
    LABEL: "Mega Minion",
    BODY: {
        ACCELERATION: base.ACCEL * 0.8,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [19.5, 13, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.minion]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.tinyMinion = {
    PARENT: [exports.minion],
    LABEL: "Tiny Minion",
    ACCEPTS_SCORE: false,
    SHAPE: 0,
    MOTION_TYPE: 'swarm',
    CRAVES_ATTENTION: true,
    BODY: {
        ACCELERATION: 3,
        PENETRATION: 1.5,
        HEALTH: 0.35 * 0.5,
        DAMAGE: 2.25,
        RESIST: 1.6,
        RANGE: 300,
        DENSITY: 12,
        PUSHABILITY: 0.5,
        FOV: 1.5,
    },
    AI: {
        BLIND: true,
    },
    GUNS: [{ /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [17, 9, 1, 0, 0, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.lowpower]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        },
    },
    ],
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
};

// TRAPS
exports.trap = {
    LABEL: "Thrown Trap",
    TYPE: "trap",
    ACCEPTS_SCORE: false,
    SHAPE: -3,
    MOTION_TYPE: "glide",
    FACING_TYPE: "turnWithSpeed",
    HITS_OWN_TYPE: "push",
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 0.5,
        DAMAGE: 3,
        RANGE: 450,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
};
exports.setTrap = {
    LABEL: "Set Trap",
    PARENT: [exports.trap],
    SHAPE: -4,
    MOTION_TYPE: "motor",
    CONTROLLERS: ["goToMasterTarget"],
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
};
exports.boomerang = {
    LABEL: "Boomerang",
    PARENT: [exports.trap],
    CONTROLLERS: ["boomerang"],
    MOTION_TYPE: "motor",
    HITS_OWN_TYPE: "never",
    SHAPE: -5,
    BODY: {
        SPEED: 1.25,
        RANGE: 120,
    },
};
exports.masterBullet = {
    PARENT: [exports.trap],
    SHAPE: 0,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.trifront,
                    g.tonsmorrecoil,
                    g.minion,
                    g.weak,
                ]),
                TYPE: exports.bullet,
                LABEL: "Front",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [13, 8, 1, 0, -1, 140, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.minion,
                    g.weak,
                ]),
                TYPE: exports.bullet,
                LABEL: "Thruster",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [13, 8, 1, 0, 1, 220, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.minion,
                    g.weak,
                ]),
                TYPE: exports.bullet,
                LABEL: "Thruster",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.minion,
                    g.weak,
                ]),
                TYPE: exports.bullet,
                LABEL: "Thruster",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.minion,
                    g.weak,
                ]),
                TYPE: exports.bullet,
                LABEL: "Thruster",
                AUTOFIRE: true,
            },
        },
    ],
};

// MISSILES
exports.missile = {
    PARENT: [exports.bullet],
    LABEL: "Missile",
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, -2, 130, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.muchmorerecoil,
                    g.morespeed,
                    g.morespeed,
                ]),
                TYPE: [
                    exports.bullet,
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 6, 1, 0, 2, 230, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.muchmorerecoil,
                    g.morespeed,
                    g.morespeed,
                ]),
                TYPE: [
                    exports.bullet,
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
};
exports.hypermissile = {
    PARENT: [exports.missile],
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, -2, 150, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                ]),
                TYPE: [
                    exports.bullet,
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 6, 1, 0, 2, 210, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                ]),
                TYPE: [
                    exports.bullet,
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 6, 1, 0, -2, 90, 0.5],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                ]),
                TYPE: [
                    exports.bullet,
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
            },
        },
        {
            POSITION: [14, 6, 1, 0, 2, 270, 0.5],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                ]),
                TYPE: [
                    exports.bullet,
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
            },
        },
    ],
};
exports.minimissile = {
    PARENT: [exports.missile],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [14, 6, 1, 0, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.muchmorerecoil,
                    g.morespeed,
                ]),
                TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
};
exports.spinmissile = {
    PARENT: [exports.bullet],
    LABEL: "Missile",
    INDEPENDENT: !0,
    BODY: {
        RANGE: 120,
    },
    FACING_TYPE: "fastspin",
    GUNS: [
        {
            POSITION: [14, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.morereload,
                    g.morespeed,
                ]),
                TYPE: [
                    exports.bullet,
                    {
                        PERSISTS_AFTER_DEATH: !0,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 8, 1, 0, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.morereload,
                    g.morespeed,
                ]),
                TYPE: [
                    exports.bullet,
                    {
                        PERSISTS_AFTER_DEATH: !0,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
};
exports.hyperspinmissile = {
    PARENT: [exports.bullet],
    LABEL: "Missile",
    INDEPENDENT: !0,
    BODY: {
        RANGE: 120,
    },
    FACING_TYPE: "fastspin",
    GUNS: [
        {
            POSITION: [14, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.morereload,
                    g.morespeed,
                ]),
                TYPE: [
                    exports.bullet,
                    {
                        PERSISTS_AFTER_DEATH: !0,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 8, 1, 0, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.morereload,
                    g.morespeed,
                ]),
                TYPE: [
                    exports.bullet,
                    {
                        PERSISTS_AFTER_DEATH: !0,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 8, 1, 0, 0, 90, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.morereload,
                    g.morespeed,
                ]),
                TYPE: [
                    exports.bullet,
                    {
                        PERSISTS_AFTER_DEATH: !0,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 8, 1, 0, 0, 270, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.morereload,
                    g.morespeed,
                ]),
                TYPE: [
                    exports.bullet,
                    {
                        PERSISTS_AFTER_DEATH: !0,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
};
exports.hive = {
    PARENT: [exports.bullet],
    LABEL: "Hive",
    BODY: {
        RANGE: 90,
        FOV: 0.5,
    },
    FACING_TYPE: "turnWithSpeed",
    INDEPENDENT: true,
    CONTROLLERS: ["alwaysFire", "nearestDifferentMaster", "targetSelf"],
    AI: {
        NO_LEAD: true,
    },
    GUNS: [
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 108, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                TYPE: exports.bee,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 180, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                TYPE: exports.bee,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 252, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                TYPE: exports.bee,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 324, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                TYPE: exports.bee,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 36, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                TYPE: exports.bee,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.snake = {
    PARENT: [exports.bullet],
    LABEL: "Snake",
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [
        {
            POSITION: [6, 12, 1.4, 8, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                STAT_CALCULATOR: gunCalcNames.thruster,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.hunter,
                    g.hunter2,
                    g.snake,
                    g.snakeskin,
                ]),
                TYPE: [
                    exports.bullet,
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
            },
        },
        {
            POSITION: [10, 12, 0.8, 8, 0, 180, 0.5],
            PROPERTIES: {
                AUTOFIRE: true,
                NEGATIVE_RECOIL: true,
                STAT_CALCULATOR: gunCalcNames.thruster,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.hunter,
                    g.hunter2,
                    g.snake,
                ]),
                TYPE: [
                    exports.bullet,
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
            },
        },
    ],
};
exports.rocketeerMissile = {
    PARENT: [exports.bullet],
    LABEL: "Missile",
    BODY: {
        RANGE: 120,
    },
    GUNS: [
        {
            POSITION: [16.5, 10, 1.5, 0, 0, 180, 7.5],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.missileTrail,
                    g.rocketeerMissileTrail,
                ]),
                TYPE: [
                    exports.bullet,
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
};

// TURRETS
exports.turretParent = {
    PARENT: [exports.genericTank],
    LABEL: "Turret",
    DANGER: 0,
    BODY: {
        FOV: 4,
    },
    AI: {
        BLIND: true,
        SKYNET: true,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
};
exports.autoTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Turret",
    BODY: {
        FOV: 0.8,
    },
    COLOR: 16,
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.morerecoil,
                    g.turret,
                ]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.machineAutoTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Turret",
    COLOR: 16,
    GUNS: [
        {
            POSITION: [14, 11, 1.3, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.mach, g.slow]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.droneAutoTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Turret",
    BODY: {
        FOV: 0.8,
    },
    COLOR: 16,
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.overdrive]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.autoSmasherTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Turret",
    COLOR: 16,
    GUNS: [
        {
            POSITION: [20, 6, 1, 0, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.fast, g.mach, g.pound, g.morereload, g.morereload]),
                TYPE: exports.bullet,
                STAT_CALCULATOR: gunCalcNames.fixedReload,
            },
        },
        {
            POSITION: [20, 6, 1, 0, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.fast, g.mach, g.pound, g.morereload, g.morereload]),
                TYPE: exports.bullet,
                STAT_CALCULATOR: gunCalcNames.fixedReload,
            },
        },
    ],
};
exports.oldAutoSmasherTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Turret",
    COLOR: 16,
    GUNS: [
        {
            POSITION: [20, 7, 1, 0, -5.75, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.lotsmorrecoil, g.morereload]),
                TYPE: exports.bullet,
                STAT_CALCULATOR: gunCalcNames.fixedReload,
            },
        },
        {
            POSITION: [20, 7, 1, 0, 5.75, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.lotsmorrecoil, g.morereload]),
                TYPE: exports.bullet,
                STAT_CALCULATOR: gunCalcNames.fixedReload,
            },
        },
    ],
};
exports.baseSwarmTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Protector",
    COLOR: 16,
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: ["nearestDifferentMaster"],
    AI: {
        NO_LEAD: true,
        LIKES_SHAPES: true,
    },
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [5, 4.5, 0.6, 7, 2, 0, 0.15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [5, 4.5, 0.6, 7, -2, 0, 0.15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [5, 4.5, 0.6, 7.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
                TYPE: [
                    exports.swarm,
                    {
                        INDEPENDENT: true,
                        AI: {
                            LIKES_SHAPES: true,
                        },
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.baseGunTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Protector",
    BODY: {
        FOV: 5,
    },
    ACCEPTS_SCORE: false,
    CONTROLLERS: ["nearestDifferentMaster"],
    INDEPENDENT: true,
    COLOR: 16,
    GUNS: [
        {
            POSITION: [12, 12, 1, 6, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.destroy]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [11, 13, 1, 6, 0, 0, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.destroy]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [7, 13, -1.3, 6, 0, 0, 0],
        },
    ],
};
exports.pillboxTurret = {
    PARENT: [exports.genericTank],
    LABEL: "",
    COLOR: 16,
    BODY: {
        FOV: 2,
    },
    HAS_NO_RECOIL: true,
    GUNS: [
        {
            POSITION: [22, 11, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.minion,
                    g.turret,
                    g.power,
                    g.auto,
                    g.notdense,
                ]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.pillbox = {
    LABEL: "Pillbox",
    PARENT: [exports.trap],
    SHAPE: -4,
    MOTION_TYPE: "motor",
    CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
    INDEPENDENT: true,
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: exports.pillboxTurret,
        },
    ],
};
exports.skimmerTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Skimmer",
    BODY: {
        FOV: 2 * base.FOV,
    },
    COLOR: 2,
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    GUNS: [
        {
            POSITION: [10, 14, -0.5, 9, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.arty,
                    g.arty,
                    g.skim,
                ]),
                TYPE: exports.hypermissile,
            },
        },
        {
            POSITION: [17, 15, 1, 0, 0, 0, 0],
        },
    ],
};
exports.twisterTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Twister",
    BODY: {
        FOV: 2,
    },
    COLOR: 13,
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    GUNS: [
        {
            POSITION: [10, 13, -0.5, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 14, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.arty,
                    g.arty,
                    g.skim,
                    g.morespeed,
                    g.one_third_reload,
                ]),
                TYPE: exports.hyperspinmissile,
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};
exports.architectGun = {
    PARENT: [exports.genericTank],
    LABEL: "",
    COLOR: 16,
    GUNS: [
        {
            POSITION: [20, 16, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 16, 1.1, 20, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.auto]),
                TYPE: exports.setTrap,
            },
        },
    ],
};

// AUTO GUNS
exports.autoTankGun = {
    PARENT: [exports.genericTank],
    LABEL: "",
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.oldAuto5Gun = {
    PARENT: [exports.genericTank],
    LABEL: "",
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [24, 11, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.five]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.megaAutoTankgun = {
    PARENT: [exports.genericTank],
    LABEL: "",
    BODY: {
        FOV: 2,
        SPEED: 0.9,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [22, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.artilleryAutoTankgun = {
    PARENT: [exports.genericTank],
    LABEL: "",
    BODY: {
        FOV: 2,
        SPEED: 0.9,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [17, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: exports.bullet,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: exports.bullet,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
                TYPE: exports.bullet,
                LABEL: "Heavy",
            },
        },
    ],
};
exports.oldCommanderGun = {
    PARENT: [exports.genericTank],
    LABEL: "",
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ["nearestDifferentMaster"],
    COLOR: 16,
    MAX_CHILDREN: 6,
    AI: {
        NO_LEAD: true,
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [
        {
            POSITION: [8, 14, 1.3, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.commander]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
    ],
};
exports.sniper3gun = {
    PARENT: [exports.genericTank],
    LABEL: "",
    BODY: {
        FOV: 5,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [27, 9, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.auto,
                    g.assass,
                    g.autosnipe,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [5, 9, -1.5, 8, 0, 0, 0],
        },
    ],
};
exports.bansheegun = {
    PARENT: [exports.genericTank],
    LABEL: "",
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [26, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.lessreload]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.auto4gun = {
    PARENT: [exports.genericTank],
    LABEL: "",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [16, 4, 1, 0, -3.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.auto,
                    g.gunner,
                    g.twin,
                    g.power,
                    g.slow,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 4, 1, 0, 3.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.auto,
                    g.gunner,
                    g.twin,
                    g.power,
                    g.slow,
                ]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.bigauto4gun = {
    PARENT: [exports.genericTank],
    LABEL: "",
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [14, 5, 1, 0, -4.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.auto,
                    g.gunner,
                    g.twin,
                    g.twin,
                    g.power,
                    g.halfreload,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [14, 5, 1, 0, 4.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.auto,
                    g.gunner,
                    g.twin,
                    g.twin,
                    g.power,
                    g.halfreload,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 5, 1, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.auto,
                    g.gunner,
                    g.twin,
                    g.twin,
                    g.power,
                    g.halfreload,
                ]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.tracker3gun = {
    PARENT: [exports.genericTank],
    LABEL: "",
    COLOR: 34,
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [22, 10, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [10, 10, -2, 20, 0, 0, 0],
        },
    ],
};

// TANK BODIES
exports.smasherBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true }]],
    COLOR: 9,
    SHAPE: 6,
    INDEPENDENT: true,
};
exports.landmineBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.08 }]],
    COLOR: 9,
    SHAPE: 6,
    INDEPENDENT: !0,
};
exports.spikeBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true }]],
    COLOR: 9,
    SHAPE: 3,
    INDEPENDENT: true,
};
exports.weirdSpikeBody1 = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.08 }]],
    COLOR: 9,
    SHAPE: 3,
    INDEPENDENT: true,
};
exports.weirdSpikeBody2 = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.05 }]],
    COLOR: 9,
    SHAPE: 3,
    INDEPENDENT: true,
};
exports.physicianBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true }]],
    COLOR: 9,
    SHAPE: 4,
    INDEPENDENT: true,
};

// SYMBOLS
exports.mendersymbol = {
    PARENT: [exports.genericTank],
    COLOR: 16,
    LABEL: "",
    SHAPE: 3,
};
exports.healerSymbol = {
    PARENT: [exports.genericEntity],
    SHAPE: [
        [0.3, -0.3],
        [1, -0.3],
        [1, 0.3],
        [0.3, 0.3],
        [0.3, 1],
        [-0.3, 1],
        [-0.3, 0.3],
        [-1, 0.3],
        [-1, -0.3],
        [-0.3, -0.3],
        [-0.3, -1],
        [0.3, -1],
    ],
    SIZE: 13,
    COLOR: 12,
};

// HEALER "WEAPONS"
exports.surgeonPillboxTurret = {
    PARENT: [exports.genericTank],
    LABEL: "",
    COLOR: 16,
    BODY: {
        FOV: 3,
    },
    HAS_NO_RECOIL: true,
    CONTROLLERS: [["spin", { independent: true, speed: 0.08 }]],
    //CONTROLLERS: ['nearestDifferentMaster'],
    TURRETS: [
        {
            /** SIZE         X             Y         ANGLE        ARC */
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: exports.healerSymbol,
        },
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [17, 11, 1, 0, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.turret]),
                TYPE: exports.healerBullet,
                AUTOFIRE: true,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [14, 11, 1, 0, 0, 90, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.turret]),
                TYPE: exports.healerBullet,
                AUTOFIRE: true,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [17, 11, 1, 0, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.turret]),
                TYPE: exports.healerBullet,
                AUTOFIRE: true,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [14, 11, 1, 0, 0, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.turret]),
                TYPE: exports.healerBullet,
                AUTOFIRE: true,
            },
        },
    ],
};
exports.surgeonPillbox = {
    LABEL: "Pillbox",
    PARENT: [exports.trap],
    SHAPE: -6,
    MOTION_TYPE: "motor",
    CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
    INDEPENDENT: true,
    BODY: {
        SPEED: 1,
        DENSITY: 5,
        DAMAGE: 0
    },
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            /*    SIZE         X             Y         ANGLE        ARC */
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: exports.surgeonPillboxTurret,
        },
    ],
};
exports.doctorDrone = {
    PARENT: [exports.drone],
    HITS_OWN_TYPE: "normal",
    TURRETS: [
        {
            /** SIZE         X             Y         ANGLE        ARC */
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: exports.healerSymbol,
        },
    ],
};

// AURAS
// Foundation credits: DogeisCut on Discord
exports.auraBase = {
    TYPE: "aura",
    ACCEPTS_SCORE: false,
    FACING_TYPE: "smoothWithMotion",
    MOTION_TYPE: "withMaster",
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: "never",
    DAMAGE_EFFECTS: false,
    DIE_AT_RANGE: false,
    ALPHA: 0.3,
    CLEAR_ON_MASTER_UPGRADE: true,
    CAN_GO_OUTSIDE_ROOM: true,
    BODY: {
        SHIELD: 1000000,
        REGEN: 100000,
        HEALTH: 1000000,
        DENSITY: 0,
        SPEED: 0,
        PUSHABILITY: 0,
    }
};
exports.aura = {
    PARENT: ["auraBase"],
    LABEL: "Aura",
    COLOR: 0,
    BODY: {
        DAMAGE: 0.25,
    },
};
exports.healAura = {
    PARENT: ["auraBase"],
    LABEL: "Heal Aura",
    HEALER: true,
    COLOR: 12,
    BODY: {
        DAMAGE: 0.25/3,
    },
};
exports.auraSymbol = {
    PARENT: [exports.genericTank],
    CONTROLLERS: [["spin", { speed: -0.04 }]],
    INDEPENDENT: true,
    COLOR: 0,
    SHAPE: [[-0.598, -0.7796], [-0.3817, -0.9053], [0.9688, -0.1275], [0.97, 0.125], [-0.3732, 0.9116], [-0.593, 0.785]]
};

function addAura(damageFactor = 1, sizeFactor = 1, auraColor) {
    let name = "aura" + damageFactor + "_" + sizeFactor;
    let isHeal = damageFactor < 0;
    let auraType = isHeal ? "healAura" : "aura";
    let symbolType = isHeal ? "healerSymbol" : "auraSymbol";
    auraColor = auraColor ?? (isHeal ? 12 : 0);
    if (exports[name] == null) {
        exports[name] = {
            PARENT: [exports.genericTank],
            LABEL: "",
            COLOR: 17,
            GUNS: [
                {
                    POSITION: [0, 20, 1, 0, 0, 0, 0,],
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.aura, [1, 1, 1, sizeFactor, 1, damageFactor, 1, 1, 1, 1, 1, 1, 1]]),
                        TYPE: [exports[auraType], { COLOR: auraColor }],
                        MAX_CHILDREN: 1,
                        AUTOFIRE: true,
                        SYNCS_SKILLS: true,
                    },
                },
            ],
            TURRETS: [
                {
                    POSITION: [20 - 5 * isHeal, 0, 0, 0, 360, 1],
                    TYPE: [exports[symbolType], { COLOR: auraColor }],
                },
            ]
        };
    }
    return exports[name];
}

// TESTBED TANKS
exports.testbedBase = {
    PARENT: [exports.genericTank],
    LABEL: "",
    RESET_UPGRADES: true,
    SKILL_CAP: [
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
    ],
    IGNORED_BY_AI: true,
    TURRETS: [],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 10, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.developer = {
    PARENT: [exports.testbedBase],
    LABEL: "Developer",
    BODY: {
        SHIELD: 1000,
        REGEN: 10,
        HEALTH: 100,
        DAMAGE: 10,
        DENSITY: 20,
        FOV: 2,
    },
    SHAPE: [
        [-1, -0.8],
        [-0.8, -1],
        [0.8, -1],
        [1, -0.8],
        [0.2, 0],
        [1, 0.8],
        [0.8, 1],
        [-0.8, 1],
        [-1, 0.8],
    ],
    GUNS: [
        {
            /*** LENGTH WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 10, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                TYPE: exports.developerBullet,
            },
        },
    ],
};
exports.developerB = {
    PARENT: [exports.testbedBase],
    LABEL: "Developer B",
    BODY: {
        SHIELD: 1000,
        REGEN: 10,
        HEALTH: 100,
        DAMAGE: 10,
        DENSITY: 20,
        FOV: 2,
    },
    SHAPE: [
        [-1, -0.8],
        [-0.8, -1],
        [0.8, -1],
        [1, -0.8],
        [0.2, 0],
        [1, 0.8],
        [0.8, 1],
        [-0.8, 1],
        [-1, 0.8],
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 10, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                TYPE: exports.developerBullet,
            },
        },
    ],
};
exports.gameAdminMenu = {
    PARENT: [exports.testbedBase],
    LABEL: "Game Admin Menu",
};
exports.gameModMenu = {
    PARENT: [exports.testbedBase],
    LABEL: "Game Mod Menu",
};
exports.betaTesterMenu = {
    PARENT: [exports.testbedBase],
    LABEL: "Beta Tester Menu",
};
exports.spectator = {
    PARENT: [exports.testbedBase],
    LABEL: "Spectator",
    ALPHA: 0,
    CAN_BE_ON_LEADERBOARD: false,
    ACCEPTS_SCORE: false,
    DRAW_HEALTH: false,
    HITS_OWN_TYPE: "never",
    ARENA_CLOSER: true,
    SKILL_CAP: [0, 0, 0, 0, 0, 0, 0, 0, 0, 255],
    BODY: {
        DAMAGE: 0,
        SPEED: 5,
        FOV: 2.5,
        HEALTH: 1e100,
        SHIELD: 1e100,
        REGEN: 1e100,
    },
};
exports.tankChangesMenu = {
    PARENT: [exports.testbedBase],
    LABEL: "Tank Changes Menu",
};
exports.btTanksMenu = {
    PARENT: [exports.testbedBase],
    LABEL: "BT Tanks Menu",
};
exports.specialTanksMenu = {
    PARENT: [exports.testbedBase],
    LABEL: "Special Tanks Menu",
};
exports.bossesMenu = {
    PARENT: [exports.testbedBase],
    LABEL: "Bosses Menu",
};
exports.memes = {
    PARENT: [exports.testbedBase],
    LABEL: "Memes",
};
exports.retrograde = {
    PARENT: [exports.testbedBase],
    LABEL: "Retrograde",
};
exports.diepTanks = {
    PARENT: [exports.testbedBase],
    LABEL: "Diep Tanks",
};
exports.diep2Tanks = {
    PARENT: [exports.testbedBase],
    LABEL: "Diep2 Tanks",
};
exports.digDig = {
    PARENT: [exports.testbedBase],
    LABEL: "DigDig",
};
exports.bosses = {
    PARENT: [exports.testbedBase],
    LABEL: "Bosses",
};
exports.celestialBosses = {
    PARENT: [exports.testbedBase],
    LABEL: "Celestial Bosses",
};
exports.eliteBosses = {
    PARENT: [exports.testbedBase],
    LABEL: "Elite Bosses",
};
exports.strangeBosses = {
    PARENT: [exports.testbedBase],
    LABEL: "Strange Bosses",
};
exports.diepBosses = {
    PARENT: [exports.testbedBase],
    LABEL: "Diep Bosses",
};
exports.taleOfDiepBosses = {
    PARENT: [exports.testbedBase],
    LABEL: "ToD Bosses",
};
exports.otherTanks = {
    PARENT: [exports.testbedBase],
    LABEL: "Tanks",
};
exports.nostalgiaMenu = {
    PARENT: [exports.testbedBase],
    LABEL: "Nostalgia Menu",
};
exports.scrappedMenu = {
    PARENT: [exports.testbedBase],
    LABEL: "Scrapped Menu",
};
exports.scrappedMenu2 = {
    PARENT: [exports.testbedBase],
    LABEL: "Scrapped Menu 2",
};
exports.miscRetrograde = {
    PARENT: [exports.testbedBase],
    LABEL: "Misc Retrograde",
};
exports.finalBosses = {
    PARENT: [exports.testbedBase],
    LABEL: "Final Bosses",
};
exports.miscEntities = {
    PARENT: [exports.testbedBase],
    LABEL: "Misc Entities",
};
exports.dominators = {
    PARENT: [exports.testbedBase],
    LABEL: "Dominators",
};
exports.nostalgiaMenu2 = {
    PARENT: [exports.testbedBase],
    LABEL: "Nostalgia Menu 2",
};
exports.sentries = {
    PARENT: [exports.testbedBase],
    LABEL: "Sentries",
};

// BASIC BRANCH
exports.basic = {
    PARENT: [exports.genericTank],
    LABEL: "Basic",
    BODY: {
        ACCELERATION: base.ACCEL * 1,
        SPEED: base.SPEED * 1,
        HEALTH: base.HEALTH * 1,
        DAMAGE: base.DAMAGE * 1,
        PENETRATION: base.PENETRATION * 1,
        SHIELD: base.SHIELD * 1,
        REGEN: base.REGEN * 1,
        FOV: base.FOV * 1,
        DENSITY: base.DENSITY * 1,
        PUSHABILITY: 1,
        HETERO: 3,
    },
    BORDERLESS: false,
    DRAW_FILL: true,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: exports.bullet,
                COLOR: 16,
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false,
                BORDERLESS: false,
            },
        },
    ],
};
exports.uzi = {
    PARENT: ["genericTank"],
    LABEL: "Uzi",
    BODY: {
        ACCELERATION: base.ACCEL * 1,
        SPEED: base.SPEED * 1,
        HEALTH: base.HEALTH * 1,
        DAMAGE: base.DAMAGE * 1,
        PENETRATION: base.PENETRATION * 1,
        SHIELD: base.SHIELD * 1,
        REGEN: base.REGEN * 1,
        FOV: base.FOV * 1,
        DENSITY: base.DENSITY * 1,
        PUSHABILITY: 1,
        HETERO: 3,
    },
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.master = {
    PARENT: [exports.genericTank],
    LABEL: "Master",
    STAT_NAMES: statnames.drone,
    BODY: {
        HEALTH: base.HEALTH * 0.4,
        SHIELD: base.SHIELD * 0.4,
        DENSITY: base.DENSITY * 0.3,
    },
    MAX_CHILDREN: 6,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 16, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: exports.masterBullet,
            },
        },
        {
            POSITION: [13, 8, 1, 0, -1, 140, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [13, 8, 1, 0, 1, 220, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};

// TWIN BRANCH
exports.twin = {
    PARENT: [exports.genericTank],
    LABEL: "Twin",
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.doubleTwin = {
    PARENT: [exports.genericTank],
    LABEL: "Double Twin",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.tripleShot = {
    PARENT: [exports.genericTank],
    LABEL: "Triple Shot",
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [19, 8, 1, 0, -2, -17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [19, 8, 1, 0, 2, 17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [22, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: exports.bullet,
            },
        },
    ],
};

// DOUBLE TWIN BRANCH
exports.tripleTwin = {
    PARENT: [exports.genericTank],
    LABEL: "Triple Twin",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 120, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 240, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.autoDouble = makeAuto(exports.doubleTwin, "Auto-Double");
exports.hewnDouble = {
    PARENT: [exports.genericTank],
    LABEL: "Hewn Double",
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [19, 8, 1, 0, 5.5, 205, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [19, 8, 1, 0, -5.5, -205, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.doubleFlankTwin = {
    PARENT: [exports.genericTank],
    LABEL: "Double Flank Twin",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, 0, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.doubleGunner = {
    PARENT: [exports.genericTank],
    LABEL: "Double Gunner",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [12, 3.5, 1, 0, 7.25, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [12, 3.5, 1, 0, -7.25, 180, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 3.5, 1, 0, 3.75, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 3.5, 1, 0, -3.75, 180, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.doubleDual = {
    PARENT: [exports.genericTank],
    LABEL: "Double Dual",
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [18, 7, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
                TYPE: exports.bullet,
                LABEL: "Small",
            },
        },
        {
            POSITION: [18, 7, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
                TYPE: exports.bullet,
                LABEL: "Small",
            },
        },
        {
            POSITION: [16, 8.5, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 8.5, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 7, 1, 0, 5.5, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
                TYPE: exports.bullet,
                LABEL: "Small",
            },
        },
        {
            POSITION: [18, 7, 1, 0, -5.5, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
                TYPE: exports.bullet,
                LABEL: "Small",
            },
        },
        {
            POSITION: [16, 8.5, 1, 0, 5.5, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 8.5, 1, 0, -5.5, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.doubleMusket = {
    PARENT: [exports.genericTank],
    LABEL: "Double Musket",
    BODY: {
        FOV: base.FOV * 1.225,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [16, 19, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [18, 7, 1, 0, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 7, 1, 0, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
                TYPE: exports.bullet,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [16, 19, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [18, 7, 1, 0, 4, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 7, 1, 0, -4, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.warkwark = {
    PARENT: [exports.genericTank],
    LABEL: "Warkwark",
    STAT_NAMES: statnames.generic,
    DANGER: 8,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [14, 8, 1, 0, 5.5, 5, 0],
        },
        {
            POSITION: [3.25, 8, 1.7, 14, 5.5, 5, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [14, 8, 1, 0, -5.5, -5, 0],
        },
        {
            POSITION: [3.25, 8, 1.7, 14, -5.5, -5, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [14, 8, 1, 0, 5.5, 185, 0],
        },
        {
            POSITION: [3.25, 8, 1.7, 14, 5.5, 185, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [14, 8, 1, 0, -5.5, 175, 0],
        },
        {
            POSITION: [3.25, 8, 1.7, 14, -5.5, 175, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.overdoubleTwin = makeOversplit(exports.doubleTwin);

// TRIPLE TWIN BRANCH
exports.quadTwin = {
    PARENT: [exports.genericTank],
    LABEL: "Quad Twin",
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 90, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: exports.bullet,
            },
        },
    ],
};

// HEWN DOUBLE BRANCH
exports.autoHewnDouble = makeAuto(exports.hewnDouble);
exports.cleft = {
    PARENT: [exports.genericTank],
    LABEL: "Cleft",
    DANGER: 8,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [19, 8, 1, 0, 5.5, 205, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [19, 8, 1, 0, -5.5, -205, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [19, 8, 1, 0, 5.5, 25, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [19, 8, 1, 0, -5.5, -25, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
                TYPE: exports.bullet,
            },
        },
    ],
};

// TRIPLE SHOT BRANCH
exports.pentaShot = {
    PARENT: [exports.genericTank],
    LABEL: "Penta Shot",
    DANGER: 7,
    BODY: {
        SPEED: 0.85 * base.SPEED,
    },
    GUNS: [
        {
            POSITION: [16, 8, 1, 0, -3, -30, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 3, 30, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [19, 8, 1, 0, -2, -15, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [19, 8, 1, 0, 2, 15, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [22, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.spreadshot = {
    PARENT: [exports.genericTank],
    LABEL: "Spreadshot",
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [13, 4, 1, 0, -0.5, -75, 5 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: exports.bullet,
                LABEL: "Spread",
            },
        },
        {
            POSITION: [13, 4, 1, 0, 0.5, 75, 5 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: exports.bullet,
                LABEL: "Spread",
            },
        },
        {
            POSITION: [14.5, 4, 1, 0, -0.5, -60, 4 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: exports.bullet,
                LABEL: "Spread",
            },
        },
        {
            POSITION: [14.5, 4, 1, 0, 0.5, 60, 4 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: exports.bullet,
                LABEL: "Spread",
            },
        },
        {
            POSITION: [16, 4, 1, 0, -0.5, -45, 3 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: exports.bullet,
                LABEL: "Spread",
            },
        },
        {
            POSITION: [16, 4, 1, 0, 0.5, 45, 3 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: exports.bullet,
                LABEL: "Spread",
            },
        },
        {
            POSITION: [17.5, 4, 1, 0, -0.5, -30, 2 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: exports.bullet,
                LABEL: "Spread",
            },
        },
        {
            POSITION: [17.5, 4, 1, 0, 0.5, 30, 2 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: exports.bullet,
                LABEL: "Spread",
            },
        },
        {
            POSITION: [19, 4, 1, 0, -1, -15, 1 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: exports.bullet,
                LABEL: "Spread",
            },
        },
        {
            POSITION: [19, 4, 1, 0, 1, 15, 1 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: exports.bullet,
                LABEL: "Spread",
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [12, 8, 1, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.spreadmain,
                    g.spread,
                ]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.oldSpreadshot = {
    PARENT: [exports.genericTank],
    LABEL: "Old Spreadshot",
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [13, 4, 1, 0, -0.8, -75, 5 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: exports.bullet,
                LABEL: "Spread",
            },
        },
        {
            POSITION: [14.5, 4, 1, 0, -1.0, -60, 4 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: exports.bullet,
                LABEL: "Spread",
            },
        },
        {
            POSITION: [16, 4, 1, 0, -1.6, -45, 3 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: exports.bullet,
                LABEL: "Spread",
            },
        },
        {
            POSITION: [17.5, 4, 1, 0, -2.4, -30, 2 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: exports.bullet,
                LABEL: "Spread",
            },
        },
        {
            POSITION: [19, 4, 1, 0, -3.0, -15, 1 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: exports.bullet,
                LABEL: "Spread",
            },
        },
        {
            POSITION: [13, 4, 1, 0, 0.8, 75, 5 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: exports.bullet,
                LABEL: "Spread",
            },
        },
        {
            POSITION: [14.5, 4, 1, 0, 1.0, 60, 4 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: exports.bullet,
                LABEL: "Spread",
            },
        },
        {
            POSITION: [16, 4, 1, 0, 1.6, 45, 3 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: exports.bullet,
                LABEL: "Spread",
            },
        },
        {
            POSITION: [17.5, 4, 1, 0, 2.4, 30, 2 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: exports.bullet,
                LABEL: "Spread",
            },
        },
        {
            POSITION: [19, 4, 1, 0, 3.0, 15, 1 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: exports.bullet,
                LABEL: "Spread",
            },
        },
        {
            POSITION: [13, 10, 1.3, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.spreadmain,
                    g.spread,
                ]),
                TYPE: exports.bullet,
                LABEL: "Pounder",
            },
        },
    ],
};
exports.bentHybrid = makeHybrid(exports.tripleShot, "Bent Hybrid");
exports.bentDouble = {
    PARENT: [exports.genericTank],
    LABEL: "Bent Double",
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [19, 8, 1, 0, -2, -17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [19, 8, 1, 0, 2, 17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [22, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [19, 8, 1, 0, -2, -197.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [19, 8, 1, 0, 2, 197.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [22, 8, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.triplet = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    BODY: {
        FOV: 1.05 * base.FOV,
    },
    LABEL: "Triplet",
    GUNS: [
        {
            POSITION: [18, 10, 1, 0, 5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 10, 1, 0, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [21, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.autoTripleShot = makeAuto(exports.tripleShot);
exports.defect = {
    PARENT: [exports.genericTank],
    LABEL: "Defect",
    DANGER: 7,
    TOOLTIP: "Right click to fire your main barrels.",
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [19, 8, 1, 0, -2, -17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: exports.bullet,
                LABEL: "Triple Shot",
                ALT_FIRE: !0,
            },
        },
        {
            POSITION: [19, 8, 1, 0, 2, 17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: exports.bullet,
                LABEL: "Triple Shot",
                ALT_FIRE: !0,
            },
        },
        {
            POSITION: [22, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: exports.bullet,
                LABEL: "Triple Shot",
                ALT_FIRE: !0,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 180, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};

// BENT HYBRID BRANCH
exports.overshot = makeOver(exports.tripleShot, "Overshot");

// TRIPLET BRANCH
exports.quintuplet = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
    },
    LABEL: "Quintuplet",
    GUNS: [
        {
            POSITION: [16, 10, 1, 0, -5, 0, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 10, 1, 0, 5, 0, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [19, 10, 1, 0, -3, 0, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [19, 10, 1, 0, 3, 0, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
                TYPE: exports.bullet,
            },
        },
    ],
};

// SNIPER BRANCH
exports.sniper = {
    PARENT: [exports.genericTank],
    LABEL: "Sniper",
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [24, 8.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.assassin = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: "Assassin",
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.4 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [27, 8.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [5, 8.5, -1.6, 8, 0, 0, 0],
        },
    ],
};
exports.hunter = {
    PARENT: [exports.genericTank],
    LABEL: "Hunter",
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25,
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [21, 12, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.rifle = {
    PARENT: [exports.genericTank],
    LABEL: "Rifle",
    BODY: {
        FOV: base.FOV * 1.225,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [24, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.retroRifle = {
    PARENT: [exports.genericTank],
    LABEL: "Retro Rifle",
    BODY: {
        FOV: base.FOV * 1.225,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [22, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [14, 10, 1, 0, 0, 0, 0],
        },
    ],
};

// ASSASSIN BRANCH
exports.ranger = {
    PARENT: [exports.genericTank],
    LABEL: "Ranger",
    DANGER: 7,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.5 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [32, 8.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [5, 8.5, -1.6, 8, 0, 0, 0],
        },
    ],
};
exports.falcon = {
    PARENT: [exports.genericTank],
    LABEL: "Falcon",
    DANGER: 7,
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    TOOLTIP: "Right click to fire your main barrel.",
    GUNS: [
        {
            POSITION: [27, 8.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.assass,
                    g.lessreload,
                ]),
                TYPE: exports.bullet,
                LABEL: "Assassin",
                ALT_FIRE: true,
            },
        },
        {
            POSITION: [5, 8.5, -1.6, 8, 0, 0, 0],
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 180, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};
exports.stalker = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Stalker",
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.35 * base.FOV,
    },
    INVISIBLE: [0.08, 0.03],
    TOOLTIP: "Stay still to turn invisible.",
    GUNS: [
        {
            POSITION: [27, 8, -1.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.autoAssassin = makeAuto(exports.assassin);
exports.railgun = {
    PARENT: [exports.genericTank],
    LABEL: "Railgun",
    BODY: {
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.225,
    },
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20, 10.5, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [24, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.veryfast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [5, 8.5, -1.6, 8, 0, 0, 0],
        },
    ],
};
exports.buttbuttin = addBackGunner(exports.assassin, "Buttbuttin");

// HUNTER BRANCH
exports.predator = {
    PARENT: [exports.genericTank],
    LABEL: "Predator",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25,
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.hunter,
                    g.hunter2,
                    g.hunter2,
                    g.preda,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [21, 12, 1, 0, 0, 0, 0.15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.hunter,
                    g.hunter2,
                    g.preda,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 16, 1, 0, 0, 0, 0.3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.xHunter = {
    PARENT: [exports.genericTank],
    LABEL: "X-Hunter",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25,
    },
    CONTROLLERS: [["zoom", { distance: 550 }]],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.hunter,
                    g.hunter2,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [21, 12, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.hunter,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [5, 11.5, -1.25, 7, 0, 0, 0],
        },
    ],
};
exports.poacher = makeHybrid(exports.hunter, "Poacher");
exports.dual = {
    PARENT: [exports.genericTank],
    LABEL: "Dual",
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [18, 7, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
                TYPE: exports.bullet,
                LABEL: "Small",
            },
        },
        {
            POSITION: [18, 7, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
                TYPE: exports.bullet,
                LABEL: "Small",
            },
        },
        {
            POSITION: [16, 8.5, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 8.5, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.butcher = makeGuard(exports.hunter, "Butcher");

// RIFLE BRANCH
exports.musket = {
    PARENT: [exports.genericTank],
    LABEL: "Musket",
    BODY: {
        FOV: base.FOV * 1.225,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [16, 19, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [18, 7, 1, 0, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 7, 1, 0, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.crossbow = {
    PARENT: [exports.genericTank],
    LABEL: "Crossbow",
    BODY: {
        FOV: base.FOV * 1.225,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [12.5, 3.5, 1, 0, 4, 25, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.halfspeed,
                    g.halfreload,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [12.5, 3.5, 1, 0, -4, -25, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.halfspeed,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 4, 12.5, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.halfspeed,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, -4, -12.5, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.halfspeed,
                    g.halfreload,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 3.5, 1, 0, 4, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.halfspeed,
                    g.halfreload,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 3.5, 1, 0, -4, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.halfspeed,
                    g.halfreload,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [24, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.halfreload,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.armsman = makeHybrid(exports.rifle, "Armsman");
exports.ransacker = {
    PARENT: [exports.genericTank],
    LABEL: "Ransacker",
    BODY: {
        FOV: base.FOV * 1.225,
    },
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [24, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [13, 8.5, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 8.5, 1.7, 13, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.blunderbuss = {
    PARENT: [exports.genericTank],
    LABEL: "Blunderbuss",
    DANGER: 7,
    BODY: exports.rifle.BODY,
    GUNS: [
        {
            POSITION: [13, 4, 1, 0, -3, -9, 0.3],
            PROPERTIES: {
                TYPE: exports.bullet,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.blunderbuss,
                ]),
            },
        },
        {
            POSITION: [15, 4, 1, 0, -2.5, -6, 0.2],
            PROPERTIES: {
                TYPE: exports.bullet,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.blunderbuss,
                ]),
            },
        },
        {
            POSITION: [16, 4, 1, 0, -2, -3, 0.1],
            PROPERTIES: {
                TYPE: exports.bullet,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.blunderbuss,
                ]),
            },
        },
        {
            POSITION: [13, 4, 1, 0, 3, 9, 0.3],
            PROPERTIES: {
                TYPE: exports.bullet,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.blunderbuss,
                ]),
            },
        },
        {
            POSITION: [15, 4, 1, 0, 2.5, 6, 0.2],
            PROPERTIES: {
                TYPE: exports.bullet,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.blunderbuss,
                ]),
            },
        },
        {
            POSITION: [16, 4, 1, 0, 2, 3, 0.1],
            PROPERTIES: {
                TYPE: exports.bullet,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.blunderbuss,
                ]),
            },
        },
        {
            POSITION: [25, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                TYPE: exports.bullet,
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
            },
        },
        {
            POSITION: [14, 10.5, 1, 0, 0, 0, 0],
        },
    ],
};

// RETRO RIFLE BRANCH
exports.sniperRifle = {
    PARENT: [exports.genericTank],
    LABEL: "Sniper Rifle",
    BODY: {
        FOV: 1.4 * base.FOV,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [28, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.rifle]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [14, 10, 1, 0, 0, 0, 0],
        },
    ],
};
exports.rifleGuard = {
    PARENT: [exports.genericTank],
    LABEL: "Rifle Guard",
    BODY: {
        FOV: base.FOV * 1.225,
    },
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [22, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [14, 10, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [13, 8.5, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 8.5, 1.7, 13, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.spreadRifle = {
    PARENT: [exports.genericTank],
    LABEL: "Spread Rifle",
    BODY: {
        FOV: base.FOV * 1.225,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 2, 1, 0, 5, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.halfspeed,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 2, 1, 0, -5, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.halfspeed,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [14, 2, 1, 0, 6, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.halfspeed,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [14, 2, 1, 0, -6, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.halfspeed,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [10, 2, 1, 0, 7, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.halfspeed,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [10, 2, 1, 0, -7, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.halfspeed,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [22, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [14, 10, 1, 0, 0, 0, 0],
        },
    ],
};

// MACHINE GUN BRANCH
exports.machineGun = {
    PARENT: [exports.genericTank],
    LABEL: "Machine Gun",
    GUNS: [
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.minigun = {
    PARENT: [exports.genericTank],
    LABEL: "Minigun",
    DANGER: 6,
    BODY: {
        FOV: 1.2,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [21, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 1 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 2 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.gunner = {
    PARENT: [exports.genericTank],
    LABEL: "Gunner",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.weirdGunner = {
    PARENT: [exports.genericTank],
    LABEL: "Gunner",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [19, 2, 1, 0, -2.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.slow,
                    g.flank,
                    g.lotsmorrecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.slow,
                    g.flank,
                    g.lotsmorrecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [12, 11, 1, 0, 0, 0, 0],
        },
    ],
};
exports.sprayer = {
    PARENT: [exports.genericTank],
    LABEL: "Sprayer",
    GUNS: [
        {
            POSITION: [23, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.lowpower,
                    g.mach,
                    g.morerecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.blaster = {
    PARENT: [exports.genericTank],
    LABEL: "Blaster",
    DANGER: 6,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [11.5, 10.5, 1.4, 4, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.gatlingGun = {
    PARENT: [exports.genericTank],
    LABEL: "Gatling Gun",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [16, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.machineFlank = {
    PARENT: [exports.genericTank],
    LABEL: "Machine Flank",
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank]),
                TYPE: exports.bullet,
            },
        },
    ],
};

// MINIGUN BRANCH
exports.streamliner = {
    PARENT: [exports.genericTank],
    LABEL: "Streamliner",
    DANGER: 7,
    BODY: {
        FOV: 1.3,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [25, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [23, 8, 1, 0, 0, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [21, 8, 1, 0, 0, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.cropDuster = makeHybrid(exports.minigun, "Crop Duster");
exports.barricade = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: "Barricade",
    STAT_NAMES: statnames.trap,
    BODY: {
        FOV: 1.15,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [24, 8, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 8, 1.3, 22, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [4, 8, 1.3, 18, 0, 0, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [4, 8, 1.3, 14, 0, 0, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.subverter = {
    PARENT: [exports.genericTank],
    LABEL: "Subverter",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [21, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.mini]),
                TYPE: exports.bullet,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [19, 14, 1, 0, 0, 0, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.mini]),
                TYPE: exports.bullet,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [17, 14, 1, 0, 0, 0, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.mini]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.vulture = {
    PARENT: [exports.genericTank],
    LABEL: "Vulture",
    DANGER: 7,
    SKILL_CAP: [
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        0,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20, 6, -2, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.trifront,
                    g.veryfast,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 6.5, -2, 0, 0, 0, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.trifront,
                    g.veryfast,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 7, -2, 0, 0, 0, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.trifront,
                    g.veryfast,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 180, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};
exports.zipper = makeZipper(exports.minigun, "Zipper");
exports.autoMinigun = makeAuto(exports.minigun);
exports.tommy = makeGuard(exports.minigun, "Tommy");

// STREAMLINER BRANCH
exports.rationalizer = {
    PARENT: [exports.genericTank],
    LABEL: "Rationalizer",
    DANGER: 8,
    BODY: {
        FOV: 1.4,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [29, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [27, 8, 1, 0, 0, 0, 1 / 7],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [25, 8, 1, 0, 0, 0, 2 / 7],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [23, 8, 1, 0, 0, 0, 3 / 7],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [21, 8, 1, 0, 0, 0, 4 / 7],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 5 / 7],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 6 / 7],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.disperser = makeHybrid(exports.streamliner, "Disperser");
exports.autoStreamliner = makeAuto(exports.streamliner);

// BARRICADE BRANCH
exports.barrier = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Barrier",
    STAT_NAMES: statnames.trap,
    BODY: {
        FOV: 1.15,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [32, 8, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 8, 1.3, 30, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [4, 8, 1.3, 26, 0, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [4, 8, 1.3, 22, 0, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [4, 8, 1.3, 18, 0, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [4, 8, 1.3, 14, 0, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.rampart = makeHybrid(exports.barricade, "Rampart");
exports.autoBarricade = makeAuto(exports.barricade);

// SUBVERTER BRANCH
exports.deposer = makeHybrid(exports.subverter, "Deposer");
exports.autoSubverter = makeAuto(exports.subverter);

// ZIPPER BRANCH
exports.gusher = {
    PARENT: [exports.genericTank],
    LABEL: "Gusher",
    DANGER: 8,
    BODY: {
        FOV: 1.3,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [7, 7.5, 0.6, 7, 2.5, 20, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -2.5, -20, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [25, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [23, 8, 1, 0, 0, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [21, 8, 1, 0, 0, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.strapper = makeHybrid(exports.zipper, "Strapper");
exports.autoZipper = makeAuto(exports.zipper);

// GUNNER BRANCH
exports.autoGunner = makeAuto(exports.gunner);
exports.nailgun = {
    PARENT: [exports.genericTank],
    LABEL: "Nailgun",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.nail,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.nail,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 2, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.nail,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [5.5, 7, -1.8, 6.5, 0, 0, 0],
        },
    ],
};
exports.machineGunner = {
    PARENT: [exports.genericTank],
    LABEL: "Machine Gunner",
    DANGER: 6,
    BODY: {
        SPEED: 0.9 * base.SPEED,
    },
    GUNS: [
        {
            POSITION: [14, 3, 4, -3, 5, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [14, 3, 4, -3, -5, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [14, 3, 4, 0, 2.5, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [14, 3, 4, 0, -2.5, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [14, 3, 4, 3, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                ]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.worstTank = {
    PARENT: [exports.genericTank],
    LABEL: "Worst Tank",
    DANGER: 1,
    BODY: {
        HEALTH: base.HEALTH * 0.4,
        SHIELD: base.SHIELD * 0.4,
        DENSITY: base.DENSITY * 0.3,
        SPEED: 0.8 * base.SPEED,
    },
    GUNS: [
        {
            POSITION: [14, 3, 4, -3, 5, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [14, 3, 4, -3, -5, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [14, 3, 4, 0, 2.5, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [14, 3, 4, 0, -2.5, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [14, 3, 4, 3, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                ]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.overgunner = makeOver(exports.weirdGunner);
exports.rimfire = {
    PARENT: [exports.genericTank],
    LABEL: "Rimfire",
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [10, 3.5, 1, 0, 7.25, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [10, 3.5, 1, 0, -7.25, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 2, 1, 0, -2.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.tonsmorrecoil,
                    g.lotsmorrecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 2, 1, 0, 2.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.tonsmorrecoil,
                    g.lotsmorrecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [13, 11, 1, 0, 0, 0, 0],
        },
    ],
};
exports.oldRimfire = {
    PARENT: [exports.genericTank],
    LABEL: "Old Rimfire",
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [12, 5, 1, 0, 7.25, 15, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [12, 5, 1, 0, -7.25, -15, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 5, 1, 0, 3.75, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 5, 1, 0, -3.75, -0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.battery = {
    PARENT: [exports.genericTank],
    LABEL: "Battery",
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 3.5, 1, 0, 3.75, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [20, 3.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.tetraGunner = {
    PARENT: [exports.genericTank],
    LABEL: "Tetra Gunner",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [14, 3.5, 1, 0, 4, 90, 1 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [14, 3.5, 1, 0, -4, 90, 2 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [14, 3.5, 1, 0, 4, 270, 1 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [14, 3.5, 1, 0, -4, 270, 2 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 3.5, 1, 0, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 3.5, 1, 0, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [14, 3.5, 1, 0, 4, 0, 1 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [14, 3.5, 1, 0, -4, 0, 2 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [14, 3.5, 1, 0, 4, 180, 1 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [14, 3.5, 1, 0, -4, 180, 2 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 3.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 3.5, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: exports.bullet,
            },
        },
    ],
};

// NAILGUN BRANCH
exports.vulcan = {
    PARENT: [exports.genericTank],
    LABEL: "Vulcan",
    DANGER: 8,
    GUNS: [
        {
            POSITION: [28, 2, 1, 0, 2.25, 0, 7 / 8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lotsmorrecoil]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [28, 2, 1, 0, -2.25, 0, 5 / 8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lotsmorrecoil]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [28, 2, 1, 0, 0, 0, 6 / 8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lotsmorrecoil]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [28, 2, 1, 0, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lotsmorrecoil]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [28, 2, 1, 0, -4, 0, 4 / 8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lotsmorrecoil]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [28, 2, 1, 0, 2.25, 0, 1 / 8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lotsmorrecoil]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [28, 2, 1, 0, -2.25, 0, 3 / 8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lotsmorrecoil]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [28, 2, 1, 0, 0, 0, 2 / 8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lotsmorrecoil]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [5, 13, 1, 7, 0, 0, 0],
        },
        {
            POSITION: [5, 13, 1, 20, 0, 0, 0],
        },
    ],
};
exports.augur = makeOver(exports.nailgun, "Augur");
exports.autoNailgun = makeAuto(exports.nailgun);

// OVERGUNNER BRANCH
exports.despot = makeCross(exports.weirdGunner, "Despot");
exports.battlegunner = makeBattle(exports.weirdGunner);
exports.capgunner = makeCap(exports.weirdGunner);

// RIMFIRE BRANCH
exports.harbinger = makeOver(exports.rimfire, "Harbinger");

// SPRAYER BRANCH
exports.redistributor = {
    PARENT: [exports.genericTank],
    LABEL: "Redistributor",
    GUNS: [
        {
            POSITION: [26, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.lowpower,
                    g.mach,
                    g.morerecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [23, 10, 1, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.lowpower,
                    g.mach,
                    g.morerecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.phoenix = {
    PARENT: [exports.genericTank],
    LABEL: "Phoenix",
    DANGER: 7,
    TOOLTIP: "Right click to fire your main barrel.",
    GUNS: [
        {
            POSITION: [23, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.lowpower,
                    g.mach,
                    g.morerecoil,
                ]),
                TYPE: exports.bullet,
                LABEL: "Sprayer",
                ALT_FIRE: !0,
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: exports.bullet,
                LABEL: "Sprayer",
                ALT_FIRE: !0,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 180, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};
exports.atomizer = {
    PARENT: [exports.genericTank],
    LABEL: "Atomizer",
    GUNS: [
        {
            POSITION: [5, 7.5, 1.3, 18.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.lowpower,
                    g.mach,
                    g.morerecoil,
                    g.atomizer,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.focal = {
    PARENT: [exports.genericTank],
    LABEL: "Focal",
    GUNS: [
        {
            POSITION: [25, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.lowpower,
                    g.mach,
                    g.morerecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [14, 10, 1.3, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.shower = makeHybrid(exports.sprayer, "Shower");
exports.autoSprayer = makeAuto(exports.sprayer);

// BLASTER BRANCH
exports.triBlaster = {
    PARENT: [exports.genericTank],
    LABEL: "Tri-Blaster",
    DANGER: 7,
    HAS_NO_RECOIL: true,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [11.5, 10.5, 1.4, 1.75, -0.75, 27.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster, g.bent]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [11.5, 10.5, 1.4, 1.75, 0.75, -27.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster, g.bent]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [11.5, 10.5, 1.4, 4, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster, g.bent]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.splasher = {
    PARENT: [exports.genericTank],
    LABEL: "Splasher",
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [17, 7, 1, 4, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.lowpower,
                    g.mach,
                    g.morerecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [10, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.flamethrower = {
    PARENT: [exports.genericTank],
    LABEL: "Flamethrower",
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [4, 11, -1.8, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.mach,
                    g.blaster,
                    g.bitlessspeed,
                    g.bitlessspeed,
                ]),
                TYPE: exports.growBullet,
            },
        },
        {
            POSITION: [10, 14, 1.8, 8, 0, 0, 0],
        },
    ],
};

// GATLING GUN BRANCH
exports.retroSprayer = {
    PARENT: [exports.genericTank],
    LABEL: "Retro Sprayer",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [14, 8, 1.4, 8, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain]),
                TYPE: exports.bullet,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.accurator = {
    PARENT: [exports.genericTank],
    LABEL: "Accurator",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.5,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [5, 1, -5, 24, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, g.fake]),
                TYPE: exports.speedBullet,
                HAS_NO_RECOIL: true,
            },
        },
        {
            POSITION: [16, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain]),
                TYPE: exports.speedBullet,
            },
        },
    ],
};

// MACHINE FLANK BRANCH
exports.machineTriple = {
    PARENT: [exports.genericTank],
    LABEL: "Machine Triple",
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.halfNHalf = {
    PARENT: [exports.genericTank],
    LABEL: "Half 'n Half",
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [12, 10, 1.4, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, g.flank]),
                TYPE: exports.bullet,
            },
        },
    ],
};

// FLANK GUARD BRANCH
exports.flankGuard = {
    PARENT: [exports.genericTank],
    LABEL: "Flank Guard",
    BODY: {
        SPEED: 1.1 * base.SPEED,
    },
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.hexaTank = {
    PARENT: [exports.genericTank],
    LABEL: "Hexa Tank",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 300, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.triAngle = {
    PARENT: [exports.genericTank],
    LABEL: "Tri-Angle",
    BODY: {
        HEALTH: 0.8 * base.HEALTH,
        SHIELD: 0.8 * base.SHIELD,
        DENSITY: 0.6 * base.DENSITY,
    },
    DANGER: 6,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.trifront,
                    g.tonsmorrecoil,
                ]),
                TYPE: exports.bullet,
                LABEL: "Front",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};
exports.auto3 = {
    PARENT: [exports.genericTank],
    LABEL: "Auto-3",
    DANGER: 6,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [11, 8, 0, 0, 190, 0],
            TYPE: exports.autoTankGun,
        },
        {
            POSITION: [11, 8, 0, 120, 190, 0],
            TYPE: exports.autoTankGun,
        },
        {
            POSITION: [11, 8, 0, 240, 190, 0],
            TYPE: exports.autoTankGun,
        },
    ],
};

// HEXA TANK BRANCH
exports.octoTank = {
    PARENT: [exports.genericTank],
    LABEL: "Octo Tank",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 45, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 135, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 225, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 315, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.cyclone = {
    PARENT: [exports.genericTank],
    LABEL: "Cyclone",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [15, 3.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 60, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 90, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 150, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 180, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 210, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 300, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 330, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.tornado = {
    PARENT: [exports.genericTank],
    LABEL: "Tornado",
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [16, 6, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 6, 1, 0, 0, 30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 6, 1, 0, 0, 60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 6, 1, 0, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 6, 1, 0, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 6, 1, 0, 0, 150, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 6, 1, 0, 0, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 6, 1, 0, 0, 210, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 6, 1, 0, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 6, 1, 0, 0, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 6, 1, 0, 0, 300, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [16, 6, 1, 0, 0, 330, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.deathStar = {
    PARENT: [exports.genericTank],
    LABEL: "Death Star",
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20.5, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                TYPE: exports.bullet,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20.5, 12, 1, 0, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                TYPE: exports.bullet,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20.5, 12, 1, 0, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                TYPE: exports.bullet,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20.5, 12, 1, 0, 0, 60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                TYPE: exports.bullet,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20.5, 12, 1, 0, 0, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                TYPE: exports.bullet,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20.5, 12, 1, 0, 0, 300, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                TYPE: exports.bullet,
            },
        },
    ],
};

// OCTO TANK BRANCH
exports.demise = {
    PARENT: [exports.genericTank],
    LABEL: "Demise",
    DANGER: 8,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20.5, 12, 1, 0, 0, 45, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                TYPE: exports.bullet,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20.5, 12, 1, 0, 0, 135, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                TYPE: exports.bullet,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20.5, 12, 1, 0, 0, 225, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                TYPE: exports.bullet,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20.5, 12, 1, 0, 0, 315, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                TYPE: exports.bullet,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20.5, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                TYPE: exports.bullet,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20.5, 12, 1, 0, 0, 90, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                TYPE: exports.bullet,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20.5, 12, 1, 0, 0, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                TYPE: exports.bullet,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20.5, 12, 1, 0, 0, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                TYPE: exports.bullet,
            },
        },
    ],
};

// TRI-ANGLE BRANCH
exports.fighter = {
    PARENT: [exports.genericTank],
    LABEL: "Fighter",
    BODY: {
        DENSITY: 0.6 * base.DENSITY,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                TYPE: exports.bullet,
                LABEL: "Front",
            },
        },
        {
            POSITION: [16, 8, 1, 0, -1, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                TYPE: exports.bullet,
                LABEL: "Side",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 1, -90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                TYPE: exports.bullet,
                LABEL: "Side",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};
exports.booster = {
    PARENT: [exports.genericTank],
    LABEL: "Booster",
    BODY: {
        HEALTH: base.HEALTH * 0.4,
        SHIELD: base.SHIELD * 0.4,
        DENSITY: base.DENSITY * 0.3,
    },
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.trifront,
                    g.tonsmorrecoil,
                ]),
                TYPE: exports.bullet,
                LABEL: "Front",
            },
        },
        {
            POSITION: [13, 8, 1, 0, -1, 140, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [13, 8, 1, 0, 1, 220, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};
exports.autoTriAngle = makeAuto(exports.triAngle), exports.autoTriAngle.BODY = { SPEED: base.SPEED };
exports.surfer = {
    PARENT: [exports.genericTank],
    LABEL: "Surfer",
    BODY: {
        DENSITY: 0.6 * base.DENSITY,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                TYPE: exports.bullet,
                LABEL: "Front",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -1, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: [exports.autoswarm],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 1, -90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: [exports.autoswarm],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};
exports.integrator = makeHybrid(exports.triAngle, "Integrator");
exports.quadAngle = {
    PARENT: [exports.genericTank],
    LABEL: "Quad-Angle",
    BODY: {
        HEALTH: 0.8 * base.HEALTH,
        SHIELD: 0.8 * base.SHIELD,
        DENSITY: 0.6 * base.DENSITY,
    },
    DANGER: 7,
    TURRETS: [
        {
            POSITION: [9, 8, 0, 45, 190, 0],
            TYPE: exports.autoTankGun,
        },
        {
            POSITION: [9, 8, 0, -45, 190, 0],
            TYPE: exports.autoTankGun,
        },
    ],
    GUNS: [
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};

// AUTO-3 BRANCH
exports.auto5 = {
    PARENT: [exports.genericTank],
    LABEL: "Auto-5",
    DANGER: 7,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [11, 8, 0, 0, 190, 0],
            TYPE: exports.autoTankGun,
        },
        {
            POSITION: [11, 8, 0, 72, 190, 0],
            TYPE: exports.autoTankGun,
        },
        {
            POSITION: [11, 8, 0, 144, 190, 0],
            TYPE: exports.autoTankGun,
        },
        {
            POSITION: [11, 8, 0, 216, 190, 0],
            TYPE: exports.autoTankGun,
        },
        {
            POSITION: [11, 8, 0, 288, 190, 0],
            TYPE: exports.autoTankGun,
        },
    ],
};
exports.oldAuto5 = {
    PARENT: [exports.genericTank],
    LABEL: "Old Auto-5",
    DANGER: 7,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [11, 8, 0, 0, 190, 0],
            TYPE: exports.oldAuto5Gun,
        },
        {
            POSITION: [11, 8, 0, 72, 190, 0],
            TYPE: exports.oldAuto5Gun,
        },
        {
            POSITION: [11, 8, 0, 144, 190, 0],
            TYPE: exports.oldAuto5Gun,
        },
        {
            POSITION: [11, 8, 0, 216, 190, 0],
            TYPE: exports.oldAuto5Gun,
        },
        {
            POSITION: [11, 8, 0, 288, 190, 0],
            TYPE: exports.oldAuto5Gun,
        },
    ],
};
exports.mega3 = {
    PARENT: [exports.genericTank],
    LABEL: "Mega-3",
    BODY: {
        SPEED: 0.95 * base.SPEED,
    },
    DANGER: 7,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [14, 8, 0, 0, 190, 0],
            TYPE: exports.megaAutoTankgun,
        },
        {
            POSITION: [14, 8, 0, 120, 190, 0],
            TYPE: exports.megaAutoTankgun,
        },
        {
            POSITION: [14, 8, 0, 240, 190, 0],
            TYPE: exports.megaAutoTankgun,
        },
    ],
};
exports.auto4 = {
    PARENT: [exports.genericTank],
    LABEL: "Auto-4",
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [13, 6, 0, 45, 160, 0],
            TYPE: exports.auto4gun,
        },
        {
            POSITION: [13, 6, 0, 135, 160, 0],
            TYPE: exports.auto4gun,
        },
        {
            POSITION: [13, 6, 0, 225, 160, 0],
            TYPE: exports.auto4gun,
        },
        {
            POSITION: [13, 6, 0, 315, 160, 0],
            TYPE: exports.auto4gun,
        },
    ],
};
exports.banshee = {
    PARENT: [exports.genericTank],
    LABEL: "Banshee",
    DANGER: 7,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [10, 8, 0, 0, 80, 0],
            TYPE: exports.bansheegun,
        },
        {
            POSITION: [10, 8, 0, 120, 80, 0],
            TYPE: exports.bansheegun,
        },
        {
            POSITION: [10, 8, 0, 240, 80, 0],
            TYPE: exports.bansheegun,
        },
    ],
    GUNS: [
        {
            POSITION: [6, 11, 1.2, 8, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 2,
            },
        },
        {
            POSITION: [6, 11, 1.2, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 2,
            },
        },
        {
            POSITION: [6, 11, 1.2, 8, 0, 300, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 2,
            },
        },
    ],
};
exports.sniper3 = {
    PARENT: [exports.genericTank],
    LABEL: "Sniper-3",
    DANGER: 7,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.25 * base.FOV,
    },
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [13, 8, 0, 0, 170, 0],
            TYPE: exports.sniper3gun,
        },
        {
            POSITION: [13, 8, 0, 120, 170, 0],
            TYPE: exports.sniper3gun,
        },
        {
            POSITION: [13, 8, 0, 240, 170, 0],
            TYPE: exports.sniper3gun,
        },
    ],
};
exports.crowbar = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Crowbar",
    BODY: {
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.4,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [37, 6.5, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [5, 8.5, -1.5, 8, 0, 0, 0],
        },
    ],
    TURRETS: [
        {
            /*    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6, 38, 0, 0, 360, 1],
            TYPE: [
                exports.autoTankGun,
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6, 28, 0, 0, 360, 1],
            TYPE: [
                exports.autoTankGun,
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6, 18, 0, 0, 360, 1],
            TYPE: [
                exports.autoTankGun,
                {
                    INDEPENDENT: true,
                },
            ],
        },
    ],
};
exports.autoAuto3 = makeAuto(exports.auto3);
exports.combo = {
    PARENT: [exports.genericTank],
    LABEL: "Combo",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: exports.bullet,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [11, 8, 0, 60, 190, 0],
            TYPE: exports.autoTankGun,
            INDEPENDENT: true,
        },
        {
            POSITION: [11, 8, 0, 180, 190, 0],
            TYPE: exports.autoTankGun,
            INDEPENDENT: true,
        },
        {
            POSITION: [11, 8, 0, 300, 190, 0],
            TYPE: exports.autoTankGun,
            INDEPENDENT: true,
        },
    ],
};
exports.tracker3 = {
    PARENT: [exports.genericTank],
    LABEL: "Tracker-3",
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            /*    SIZE         X             Y         ANGLE        ARC */
            POSITION: [11, 8, 0, 0, 190, 0],
            TYPE: [exports.tracker3gun, { INDEPENDENT: true }],
        },
        {
            POSITION: [11, 8, 0, 120, 190, 0],
            TYPE: [exports.tracker3gun, { INDEPENDENT: true }],
        },
        {
            POSITION: [11, 8, 0, 240, 190, 0],
            TYPE: [exports.tracker3gun, { INDEPENDENT: true }],
        },
    ],
};

// AUTO-5 BRANCH
exports.auto7 = (() => {
    let a = 360 / 7;
    return {
        PARENT: [exports.genericTank],
        LABEL: "Auto-7",
        DANGER: 7,
        FACING_TYPE: "autospin",
        TURRETS: [
            {
                POSITION: [11, 8, 0, 0, 190, 0],
                TYPE: exports.autoTankGun,
            },
            {
                POSITION: [11, 8, 0, a, 190, 0],
                TYPE: exports.autoTankGun,
            },
            {
                POSITION: [11, 8, 0, 2 * a, 190, 0],
                TYPE: exports.autoTankGun,
            },
            {
                POSITION: [11, 8, 0, 3 * a, 190, 0],
                TYPE: exports.autoTankGun,
            },
            {
                POSITION: [11, 8, 0, 4 * a, 190, 0],
                TYPE: exports.autoTankGun,
            },
            {
                POSITION: [11, 8, 0, 5 * a, 190, 0],
                TYPE: exports.autoTankGun,
            },
            {
                POSITION: [11, 8, 0, 6 * a, 190, 0],
                TYPE: exports.autoTankGun,
            },
        ],
    };
})();
exports.mega5 = {
    PARENT: [exports.genericTank],
    LABEL: "Mega-5",
    BODY: {
        SPEED: 0.95 * base.SPEED,
    },
    DANGER: 8,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [14, 8, 0, 0, 190, 0],
            TYPE: exports.megaAutoTankgun,
        },
        {
            POSITION: [14, 8, 0, 72, 190, 0],
            TYPE: exports.megaAutoTankgun,
        },
        {
            POSITION: [14, 8, 0, 144, 190, 0],
            TYPE: exports.megaAutoTankgun,
        },
        {
            POSITION: [14, 8, 0, 216, 190, 0],
            TYPE: exports.megaAutoTankgun,
        },
        {
            POSITION: [14, 8, 0, 288, 190, 0],
            TYPE: exports.megaAutoTankgun,
        },
    ],
};
exports.auto6 = {
    PARENT: [exports.genericTank],
    LABEL: "Auto-6",
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [13, 6, 0, 60, 160, 0],
            TYPE: exports.auto4gun,
        },
        {
            POSITION: [13, 6, 0, 180, 160, 0],
            TYPE: exports.auto4gun,
        },
        {
            POSITION: [13, 6, 0, 300, 160, 0],
            TYPE: exports.auto4gun,
        },
        {
            POSITION: [13, 6, 0, 0, 160, 0],
            TYPE: exports.auto4gun,
        },
        {
            POSITION: [13, 6, 0, 120, 160, 0],
            TYPE: exports.auto4gun,
        },
        {
            POSITION: [13, 6, 0, 240, 160, 0],
            TYPE: exports.auto4gun,
        },
    ],
};
exports.sniper5 = {
    PARENT: [exports.genericTank],
    LABEL: "Sniper-5",
    DANGER: 8,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.25 * base.FOV,
    },
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [13, 8, 0, 0, 170, 0],
            TYPE: exports.sniper3gun,
        },
        {
            POSITION: [13, 8, 0, 72, 170, 0],
            TYPE: exports.sniper3gun,
        },
        {
            POSITION: [13, 8, 0, 144, 170, 0],
            TYPE: exports.sniper3gun,
        },
        {
            POSITION: [13, 8, 0, 216, 170, 0],
            TYPE: exports.sniper3gun,
        },
        {
            POSITION: [13, 8, 0, 288, 170, 0],
            TYPE: exports.sniper3gun,
        },
    ],
};

// BANSHEE BRANCH
exports.spectre = {
    PARENT: [exports.genericTank],
    LABEL: "Spectre",
    DANGER: 8,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [10, 8, 0, 0, 80, 0],
            TYPE: exports.bansheegun,
        },
        {
            POSITION: [10, 8, 0, 72, 80, 0],
            TYPE: exports.bansheegun,
        },
        {
            POSITION: [10, 8, 0, 144, 80, 0],
            TYPE: exports.bansheegun,
        },
        {
            POSITION: [10, 8, 0, 216, 80, 0],
            TYPE: exports.bansheegun,
        },
        {
            POSITION: [10, 8, 0, 288, 80, 0],
            TYPE: exports.bansheegun,
        },
    ],
    GUNS: [
        {
            POSITION: [6, 11, 1.2, 8, 0, 36, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 2,
            },
        },
        {
            POSITION: [6, 11, 1.2, 8, 0, 108, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 2,
            },
        },
        {
            POSITION: [6, 11, 1.2, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 2,
            },
        },
        {
            POSITION: [6, 11, 1.2, 8, 0, 252, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 2,
            },
        },
        {
            POSITION: [6, 11, 1.2, 8, 0, 324, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 2,
            },
        },
    ],
};

// CROWBAR BRANCH
exports.pryer = {
    PARENT: [exports.genericTank],
    DANGER: 8,
    LABEL: "Pryer",
    BODY: {
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.4,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [57, 6.5, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [5, 8.5, -1.5, 8, 0, 0, 0],
        },
    ],
    TURRETS: [
        {
            /*    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6, 58, 0, 0, 360, 1],
            TYPE: [
                exports.autoTankGun,
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6, 48, 0, 0, 360, 1],
            TYPE: [
                exports.autoTankGun,
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6, 38, 0, 0, 360, 1],
            TYPE: [
                exports.autoTankGun,
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6, 28, 0, 0, 360, 1],
            TYPE: [
                exports.autoTankGun,
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6, 18, 0, 0, 360, 1],
            TYPE: [
                exports.autoTankGun,
                {
                    INDEPENDENT: true,
                },
            ],
        },
    ],
};
exports.crank = {
    PARENT: [exports.genericTank],
    DANGER: 8,
    LABEL: "Crank",
    BODY: {
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.4,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [37, 7.5, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [5, 8.5, -1.5, 8, 0, 0, 0],
        },
    ],
    TURRETS: [
        {
            /*    SIZE         X             Y         ANGLE        ARC */
            POSITION: [8, 38, 0, 0, 360, 1],
            TYPE: [
                exports.megaAutoTankgun,
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [8, 28, 0, 0, 360, 1],
            TYPE: [
                exports.megaAutoTankgun,
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [8, 18, 0, 0, 360, 1],
            TYPE: [
                exports.megaAutoTankgun,
                {
                    INDEPENDENT: true,
                },
            ],
        },
    ],
};
exports.chisel = {
    PARENT: [exports.genericTank],
    DANGER: 8,
    LABEL: "Chisel",
    BODY: {
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.4,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [37, 7.5, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [5, 8.5, -1.5, 8, 0, 0, 0],
        },
    ],
    TURRETS: [
        {
            /*    SIZE         X             Y         ANGLE        ARC */
            POSITION: [8, 38, 0, 0, 360, 1],
            TYPE: [
                exports.auto4gun,
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [8, 28, 0, 0, 360, 1],
            TYPE: [
                exports.auto4gun,
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [8, 18, 0, 0, 360, 1],
            TYPE: [
                exports.auto4gun,
                {
                    INDEPENDENT: true,
                },
            ],
        },
    ],
};
exports.lever = {
    PARENT: [exports.genericTank],
    DANGER: 8,
    LABEL: "Lever",
    BODY: {
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.4,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [37, 7.5, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [5, 8.5, -1.5, 8, 0, 0, 0],
        },
    ],
    TURRETS: [
        {
            /*    SIZE         X             Y         ANGLE        ARC */
            POSITION: [8, 38, 0, 0, 360, 1],
            TYPE: [
                exports.sniper3gun,
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [8, 28, 0, 0, 360, 1],
            TYPE: [
                exports.sniper3gun,
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [8, 18, 0, 0, 360, 1],
            TYPE: [
                exports.sniper3gun,
                {
                    INDEPENDENT: true,
                },
            ],
        },
    ],
};
exports.spindle = makeHybrid(exports.crowbar, "Spindle");

// AUTO-AUTO-3 BRANCH
exports.autoAuto5 = makeAuto(exports.auto5);
exports.autoMega3 = makeAuto(exports.mega3);
exports.autoAuto4 = makeAuto(exports.auto4);
exports.autoBanshee = makeAuto(exports.banshee);
exports.autoSniper3 = makeAuto(exports.sniper3);
exports.autoCrowbar = makeAuto(exports.crowbar);
exports.autoCombo = makeAuto(exports.combo);

// DIRECTOR BRANCH
exports.director = {
    PARENT: [exports.genericTank],
    LABEL: "Director",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 6,
            },
        },
    ],
};
exports.oldDirector = {
    PARENT: [exports.genericTank],
    LABEL: "Old Director",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    MAX_CHILDREN: 5,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [6, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
    ],
};
exports.overseer = {
    PARENT: [exports.genericTank],
    LABEL: "Overseer",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    MAX_CHILDREN: 8,
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
    ],
};
exports.cruiser = {
    PARENT: [exports.genericTank],
    LABEL: "Cruiser",
    DANGER: 6,
    FACING_TYPE: "locksFacing",
    STAT_NAMES: statnames.swarm,
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.underseer = {
    PARENT: [exports.genericTank],
    LABEL: "Underseer",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
    },
    SHAPE: 4,
    MAX_CHILDREN: 14,
    GUNS: [
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: exports.sunchip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: exports.sunchip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
    ],
};
exports.spawner = {
    PARENT: [exports.genericTank],
    LABEL: "Spawner",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    GUNS: [
        {
            /**** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [1, 12, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 4,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: exports.minion,
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 12, 1, 0, 0, 0, 0],
        },
    ],
};
exports.turretedDrone = makeAuto(exports.drone);
exports.directordrive = {
    PARENT: [exports.genericTank],
    LABEL: "Directordrive",
    STAT_NAMES: statnames.drone,
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: makeDeco(4),
        },
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.turretedDrone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 5,
            },
        },
    ],
};
exports.honcho = {
    PARENT: [exports.genericTank],
    LABEL: "Honcho",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [13, 14, 1.3, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.mehdrone]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 3,
            },
        },
    ],
};
exports.manager = {
    PARENT: [exports.genericTank],
    LABEL: "Manager",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    INVISIBLE: [0.08, 0.03],
    TOOLTIP: "Stay still to turn invisible.",
    MAX_CHILDREN: 8,
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.doublereload]),
                TYPE: exports.drone,
                AUTOFIRE: !0,
                SYNCS_SKILLS: !0,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
    ],
};

// OVERSEER BRANCH
exports.overlord = {
    PARENT: [exports.genericTank],
    LABEL: "Overlord",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    MAX_CHILDREN: 8,
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
    ],
};
exports.autoOverseer = makeAuto(exports.overseer);
exports.commander = {
    PARENT: [exports.genericTank],
    LABEL: "Commander",
    STAT_NAMES: statnames.drone,
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.15,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [8, 11, 1.3, 6, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.commander]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 2,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [8, 11, 1.3, 6, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.commander]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 2,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [8, 11, 1.3, 6, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.commander]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 2,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [7, 7.5, 0.6, 7, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 300, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.oldCommander = {
    PARENT: [exports.genericTank],
    LABEL: "Old Commander",
    STAT_NAMES: statnames.drone,
    DANGER: 7,
    BODY: {
        FOV: 1.15 * base.FOV,
    },
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [16, 1, 0, 0, 0, 0],
            TYPE: exports.oldCommanderGun,
        },
        {
            POSITION: [16, 1, 0, 120, 0, 0],
            TYPE: [
                exports.oldCommanderGun,
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [16, 1, 0, 240, 0, 0],
            TYPE: [
                exports.oldCommanderGun,
                {
                    INDEPENDENT: true,
                },
            ],
        },
    ],
};

// OVERLORD BRANCH
exports.overczar = {
    PARENT: [exports.genericTank],
    LABEL: "Overczar",
    DANGER: 8,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    MAX_CHILDREN: 12,
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 300, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
    ],
};
exports.autoOverlord = makeAuto(exports.overlord);

// CRUISER BRANCH
exports.carrier = {
    PARENT: [exports.genericTank],
    LABEL: "Carrier",
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: "locksFacing",
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [7, 8, 0.6, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, 2, 30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, -2, -30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.oldCarrier = {
    PARENT: [exports.genericTank],
    LABEL: "Old Carrier",
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: "locksFacing",
    BODY: {
        FOV: base.FOV * 1.3,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 2, 40, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -2, -40, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.battleship = {
    PARENT: [exports.genericTank],
    LABEL: "Battleship",
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: "locksFacing",
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Guided",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: [exports.autoswarm],
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Autonomous",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: [exports.autoswarm],
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Autonomous",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Guided",
            },
        },
    ],
};
exports.fortress = {
    PARENT: [exports.genericTank],
    LABEL: "Fortress",
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: [
                    exports.swarm,
                    {
                        CONTROLLERS: ["canRepel"],
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 180, 1 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: [
                    exports.swarm,
                    {
                        CONTROLLERS: ["canRepel"],
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 300, 2 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: [
                    exports.swarm,
                    {
                        CONTROLLERS: ["canRepel"],
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [14, 9, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 9, 1.5, 14, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [14, 9, 1, 0, 0, 120, 0],
        },
        {
            POSITION: [4, 9, 1.5, 14, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [14, 9, 1, 0, 0, 240, 0],
        },
        {
            POSITION: [4, 9, 1.5, 14, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.autoCruiser = makeAuto(exports.cruiser);
exports.badDreadnought = {
    PARENT: [exports.genericTank],
    LABEL: "Bad Dreadnought",
    DANGER: 7,
    FACING_TYPE: "locksFacing",
    STAT_NAMES: statnames.swarm,
    BODY: {
        FOV: base.FOV * 1.2,
    },
    TURRETS: [
        {
            /*    SIZE         X             Y         ANGLE        ARC */
            POSITION: [20, -4, 0, 0, 0, 0],
            TYPE: exports.genericEntity,
        },
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 8, 1, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [6, 16, 1, 16, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.fake]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [1, 3, 1, 3, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                    g.thruster,
                    [0.1, 3, 1, 1, 1, 1, 1, 1, 1, 0.075, 1, 2, 1],
                ]),
                TYPE: exports.bullet,
            },
        },
    ],
};

// CARRIER BRANCH
exports.autoCarrier = makeAuto(exports.carrier);

// UNDERSEER BRANCH
exports.necromancer = {
    PARENT: [exports.genericTank],
    LABEL: "Necromancer",
    DANGER: 7,
    STAT_NAMES: statnames.necro,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    SHAPE: 4,
    MAX_CHILDREN: 14,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [5.25, 12, 1.2, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: exports.sunchip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: exports.sunchip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.drone,
                    g.sunchip,
                    g.weak,
                    g.doublereload,
                ]),
                TYPE: exports.sunchip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 4,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 180, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.drone,
                    g.sunchip,
                    g.weak,
                    g.doublereload,
                ]),
                TYPE: exports.sunchip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 4,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
    ],
};
exports.maleficitor = {
    PARENT: [exports.genericTank],
    LABEL: "Maleficitor",
    DANGER: 7,
    TOOLTIP: "Press R and wait to turn your drones invisible.",
    STAT_NAMES: statnames.necro,
    BODY: {
        SPEED: base.SPEED * 0.85,
    },
    SHAPE: 4,
    MAX_CHILDREN: 20,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [5.25, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.maleficitor]),
                TYPE: [
                    exports.sunchip,
                    {
                        INVISIBLE: [0.06, 0.03],
                    },
                ],
                AUTOFIRE: !0,
                SYNCS_SKILLS: !0,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
    ],
};
exports.autoUnderseer = makeAuto(exports.underseer);
exports.infestor = {
    PARENT: [exports.genericTank],
    LABEL: "Infestor",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    MAX_CHILDREN: 20,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [7.25, 6, 1.2, 6, -5, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: exports.eggchip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [7.25, 6, 1.2, 6, 5, 90, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: exports.autoeggchip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [7.25, 6, 1.2, 6, -5, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: exports.autoeggchip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [7.25, 6, 1.2, 6, 5, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: exports.eggchip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
    ],
};
exports.pentaseer = {
    PARENT: [exports.genericTank],
    LABEL: "Pentaseer",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
    },
    SHAPE: 5,
    MAX_CHILDREN: 20,
    GUNS: [
        {
            POSITION: [5.25, 11, 1.2, 8, 0, 36, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: exports.pentachip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5.25, 11, 1.2, 8, 0, -36, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: exports.pentachip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
    ],
};
exports.prodigy = {
    PARENT: [exports.genericTank],
    LABEL: "Prodigy",
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    SHAPE: 6,
    MAX_CHILDREN: 14,
    BODY: {
        FOV: base.FOV * 1.15,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [8, 11, 1.3, 6, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: exports.sunchip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [8, 11, 1.3, 6, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: exports.sunchip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [8, 11, 1.3, 6, 0, 300, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: exports.sunchip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [14, 9, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 9, 1.5, 14, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [14, 9, 1, 0, 0, 120, 0],
        },
        {
            POSITION: [4, 9, 1.5, 14, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [14, 9, 1, 0, 0, 240, 0],
        },
        {
            POSITION: [4, 9, 1.5, 14, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};

// NECROMANCER BRANCH
exports.diviner = {
    PARENT: [exports.genericTank],
    LABEL: "Diviner",
    DANGER: 8,
    STAT_NAMES: statnames.necro,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    SHAPE: 6,
    MAX_CHILDREN: 14,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [5.25, 12, 1.2, 8, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: exports.sunchip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: exports.sunchip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 300, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: exports.sunchip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.drone,
                    g.sunchip,
                    g.weak,
                    g.doublereload,
                ]),
                TYPE: exports.autosunchip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 4,
                STAT_CALCULATOR: gunCalcNames.necro,
                LABEL: "Guard",
            },
        },
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 120, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.drone,
                    g.sunchip,
                    g.weak,
                    g.doublereload,
                ]),
                TYPE: exports.autosunchip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 4,
                STAT_CALCULATOR: gunCalcNames.necro,
                LABEL: "Guard",
            },
        },
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 240, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.drone,
                    g.sunchip,
                    g.weak,
                    g.doublereload,
                ]),
                TYPE: exports.autosunchip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 4,
                STAT_CALCULATOR: gunCalcNames.necro,
                LABEL: "Guard",
            },
        },
    ],
};

// MALEFICITOR BRANCH
exports.femaleficitor = {
    PARENT: [exports.genericTank],
    LABEL: "Femaleficitor",
    DANGER: 8,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    SHAPE: 4,
    MAX_CHILDREN: 20,
    TOOLTIP: "Press R and wait to turn your drones invisible.",
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [5.25, 6, 1.2, 8, -5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: [
                    exports.eggchip,
                    {
                        INVISIBLE: [0.06, 0.03],
                    },
                ],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5.25, 6, 1.2, 8, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: [
                    exports.eggchip,
                    {
                        INVISIBLE: [0.06, 0.03],
                    },
                ],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
    ],
};
exports.enchantress = {
    PARENT: [exports.genericTank],
    LABEL: "Enchantress",
    DANGER: 8,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
    },
    SHAPE: 5,
    MAX_CHILDREN: 20,
    TOOLTIP: "Press R and wait to turn your drones invisible.",
    GUNS: [
        {
            POSITION: [5.25, 11, 1.2, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: [
                    exports.pentachip,
                    {
                        INVISIBLE: [0.06, 0.03],
                    },
                ],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
    ],
};

// AUTO-UNDERSEER BRANCH
exports.autoNecromancer = makeAuto(exports.necromancer);
exports.autoMaleficitor = makeAuto(exports.maleficitor);
exports.autoInfestor = makeAuto(exports.infestor);
exports.autoPentaseer = makeAuto(exports.pentaseer);
exports.autoProdigy = makeAuto(exports.prodigy);

// SPAWNER BRANCH
exports.factory = {
    PARENT: [exports.genericTank],
    LABEL: "Factory",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    MAX_CHILDREN: 6,
    GUNS: [
        {
            /**** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1, 15.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory]),
                TYPE: exports.minion,
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [12, 14, 1, 0, 0, 0, 0],
        },
    ],
};
exports.autoSpawner = makeAuto(exports.spawner);
exports.megaSpawner = {
    PARENT: [exports.genericTank],
    LABEL: "Mega Spawner",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.6,
        FOV: 1.15,
    },
    GUNS: [
        {
            /**** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [4.5, 14, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [1, 16, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 4,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: exports.megaMinion,
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 16, 1, 0, 0, 0, 0],
        },
    ],
};
exports.productionist = {
    PARENT: [exports.genericTank],
    LABEL: "Productionist",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.75,
        FOV: 1.1,
    },
    GUNS: [
        {
            /**** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [4.5, 6, 1, 10, 4.75, 0, 0],
        },
        {
            POSITION: [1, 7.25, 1, 14.25, 4.75, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.productionist]),
                TYPE: exports.tinyMinion,
                STAT_CALCULATOR: gunCalcNames.drone,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [7.5, 7.25, -1.3, 3.5, 4.75, 0, 0],
        },
        {
            POSITION: [4.5, 6, 1, 10, -4.75, 0, 0.5],
        },
        {
            POSITION: [1, 7.25, 1, 14.25, -4.75, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.productionist]),
                TYPE: exports.tinyMinion,
                STAT_CALCULATOR: gunCalcNames.drone,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [7.5, 7.25, -1.3, 3.5, -4.75, 0, 0.5],
        },
    ],
};
exports.turretedMinion = makeAuto(exports.minion);
exports.spawnerdrive = {
    PARENT: [exports.genericTank],
    LABEL: "Spawnerdrive",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    TURRETS: [
        {
            /** SIZE         X             Y         ANGLE        ARC */
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: makeDeco(4),
        },
    ],
    GUNS: [
        {
            /**** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [1, 12, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 4,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: exports.turretedMinion,
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 12, 1, 0, 0, 0, 0],
        },
    ],
};
exports.captain = {
    PARENT: [exports.genericTank],
    LABEL: "Captain",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    GUNS: [
        {
            /**** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [4.5, 10, 1, 10.5, 0, 270, 0],
        },
        {
            POSITION: [1, 12, 1, 15, 0, 270, 0],
            PROPERTIES: {
                MAX_CHILDREN: 4,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: exports.minion,
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 12, 1, 0, 0, 270, 0],
        },
        {
            /**** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [4.5, 10, 1, 10.5, 0, 90, 0],
        },
        {
            POSITION: [1, 12, 1, 15, 0, 90, 0],
            PROPERTIES: {
                MAX_CHILDREN: 4,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: exports.minion,
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 12, 1, 0, 0, 90, 0],
        },
    ],
};
exports.hangar = {
    PARENT: [exports.genericTank],
    LABEL: "Hangar",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    GUNS: [
        {
            /**** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [7, 7.5, 0.6, 4.5, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 4.5, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [1, 12, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 4,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: exports.minion,
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.5, 12, 1, 8, 0, 0, 0],
        },
    ],
};

// PRODUCTIONIST BRANCH
exports.bismarck = {
    PARENT: [exports.genericTank],
    LABEL: "Bismarck",
    DANGER: 8,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.75,
        FOV: 1.1,
    },
    GUNS: [
        {
            /**** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [4.5, 6, 1, 10, 4.75, 90, 0],
        },
        {
            POSITION: [1, 7.25, 1, 14.25, 4.75, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.productionist]),
                TYPE: exports.tinyMinion,
                STAT_CALCULATOR: gunCalcNames.drone,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [7.5, 7.25, -1.3, 3.5, 4.75, 90, 0],
        },
        {
            POSITION: [4.5, 6, 1, 10, -4.75, 90, 0.5],
        },
        {
            POSITION: [1, 7.25, 1, 14.25, -4.75, 90, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.productionist]),
                TYPE: exports.tinyMinion,
                STAT_CALCULATOR: gunCalcNames.drone,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [7.5, 7.25, -1.3, 3.5, -4.75, 90, 0.5],
        },
        {
            /**** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [4.5, 6, 1, 10, 4.75, 270, 0],
        },
        {
            POSITION: [1, 7.25, 1, 14.25, 4.75, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.productionist]),
                TYPE: exports.tinyMinion,
                STAT_CALCULATOR: gunCalcNames.drone,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [7.5, 7.25, -1.3, 3.5, 4.75, 270, 0],
        },
        {
            POSITION: [4.5, 6, 1, 10, -4.75, 270, 0.5],
        },
        {
            POSITION: [1, 7.25, 1, 14.25, -4.75, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.productionist]),
                TYPE: exports.tinyMinion,
                STAT_CALCULATOR: gunCalcNames.drone,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [7.5, 7.25, -1.3, 3.5, -4.75, 270, 0.5],
        },
    ],
};

// CAPTAIN BRANCH
exports.supervisor = {
    PARENT: [exports.genericTank],
    LABEL: "Supervisor",
    DANGER: 8,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    GUNS: [
        {
            /**** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [4.5, 10, 1, 10.5, 0, 270, 0],
        },
        {
            POSITION: [1, 12, 1, 15, 0, 270, 0],
            PROPERTIES: {
                MAX_CHILDREN: 4,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: exports.minion,
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 12, 1, 0, 0, 270, 0],
        },
        {
            /**** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [4.5, 10, 1, 10.5, 0, 90, 0],
        },
        {
            POSITION: [1, 12, 1, 15, 0, 90, 0],
            PROPERTIES: {
                MAX_CHILDREN: 4,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: exports.minion,
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 12, 1, 0, 0, 90, 0],
        },
        {
            /**** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [4.5, 10, 1, 10.5, 0, 180, 0],
        },
        {
            POSITION: [1, 12, 1, 15, 0, 180, 0],
            PROPERTIES: {
                MAX_CHILDREN: 4,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: exports.minion,
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 12, 1, 0, 0, 180, 0],
        },
        {
            /**** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [1, 12, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 4,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: exports.minion,
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 12, 1, 0, 0, 0, 0],
        },
    ],
};
exports.autoCaptain = makeAuto(exports.captain);

// DIRECTORDRIVE BRANCH
exports.overdrive = {
    PARENT: [exports.genericTank],
    LABEL: "Overdrive",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: makeDeco(4),
        },
    ],
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.turretedDrone,
                AUTOFIRE: !0,
                SYNCS_SKILLS: !0,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: !0,
                MAX_CHILDREN: 4,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.turretedDrone,
                AUTOFIRE: !0,
                SYNCS_SKILLS: !0,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: !0,
                MAX_CHILDREN: 4,
            },
        },
    ],
};
exports.turretedSwarm = makeAuto(exports.swarm);
exports.cruiserdrive = {
    PARENT: [exports.genericTank],
    LABEL: "Cruiserdrive",
    DANGER: 7,
    FACING_TYPE: "locksFacing",
    STAT_NAMES: statnames.swarm,
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: makeDeco(3),
        },
    ],
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: exports.turretedSwarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: exports.turretedSwarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.turretedSunchip = makeAuto(exports.sunchip);
exports.underdrive = {
    PARENT: [exports.genericTank],
    LABEL: "Underdrive",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    SHAPE: 4,
    MAX_CHILDREN: 14,
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: makeDeco(4),
        },
    ],
    GUNS: [
        {
            POSITION: [5, 12, 1.2, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: exports.turretedSunchip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5, 12, 1.2, 8, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: exports.turretedSunchip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
    ],
};

// HONCHO BRANCH
exports.bigCheese = {
    PARENT: [exports.genericTank],
    LABEL: "Big Cheese",
    STAT_NAMES: statnames.drone,
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [16, 16, 1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.bigdrone]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 1,
            },
        },
    ],
};
exports.honchodrive = {
    PARENT: [exports.genericTank],
    LABEL: "Honchodrive",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: makeDeco(4),
        },
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [13, 14, 1.3, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.mehdrone]),
                TYPE: exports.turretedDrone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 3,
            },
        },
    ],
};

// BIG CHEESE BRANCH
exports.overcheese = {
    PARENT: [exports.genericTank],
    LABEL: "Overcheese",
    STAT_NAMES: statnames.drone,
    DANGER: 8,
    BODY: {
        FOV: base.FOV * 1.15,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [16, 16, 1.4, 0, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.bigdrone]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 1,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [16, 16, 1.4, 0, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.bigdrone]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 1,
            },
        },
    ],
};

// POUNDER BRANCH
exports.pounder = {
    PARENT: [exports.genericTank],
    LABEL: "Pounder",
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20.5, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.destroyer = {
    PARENT: [exports.genericTank],
    LABEL: "Destroyer",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [21, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.artillery = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: "Artillery",
    GUNS: [
        {
            POSITION: [17, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: exports.bullet,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: exports.bullet,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
                TYPE: exports.bullet,
                LABEL: "Heavy",
            },
        },
    ],
};
exports.launcher = {
    PARENT: [exports.genericTank],
    LABEL: "Launcher",
    BODY: {
        FOV: base.FOV * 1.1,
    },
    DANGER: 6,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [10, 9, 1, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 13, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty]),
                TYPE: exports.minimissile,
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};
exports.shotgun = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Shotgun",
    GUNS: [
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [4, 3, 1, 11, 3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [4, 4, 1, 13, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: exports.casing,
            },
        },
        {
            POSITION: [1, 4, 1, 12, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: exports.casing,
            },
        },
        {
            POSITION: [1, 4, 1, 11, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: exports.casing,
            },
        },
        {
            POSITION: [1, 3, 1, 13, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [1, 3, 1, 13, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [1, 2, 1, 13, 2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: exports.casing,
            },
        },
        {
            POSITION: [1, 2, 1, 13, -2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: exports.casing,
            },
        },
        {
            POSITION: [15, 14, 1, 6, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
                TYPE: exports.casing,
            },
        },
        {
            POSITION: [8, 14, -1.3, 4, 0, 0, 0],
        },
    ],
};
exports.eagle = {
    PARENT: [exports.genericTank],
    LABEL: "Eagle",
    DANGER: 7,
    TOOLTIP: "Right click to fire your main barrel.",
    GUNS: [
        {
            POSITION: [20, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                TYPE: exports.bullet,
                LABEL: "Pounder",
                ALT_FIRE: !0,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 180, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};

// DESTROYER BRANCH
exports.annihilator = {
    PARENT: [exports.genericTank],
    LABEL: "Annihilator",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.hybrid = makeHybrid(exports.destroyer, "Hybrid");
exports.blower = addBackGunner(exports.destroyer, "Blower");

// ANNIHILATOR BRANCH
exports.compound = makeHybrid(exports.annihilator, "Compound");

// HYBRID BRANCH
exports.overdestroyer = makeOver(exports.destroyer);

// BLOWER BRANCH
exports.puffer = makeHybrid(exports.blower);

// ARTILLERY BRANCH
exports.mortar = {
    PARENT: [exports.genericTank],
    LABEL: "Mortar",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [13, 3, 1, 0, -8, -7, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
                TYPE: exports.bullet,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [13, 3, 1, 0, 8, 7, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
                TYPE: exports.bullet,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, -6, -7, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
                TYPE: exports.bullet,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 6, 7, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
                TYPE: exports.bullet,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
                TYPE: exports.bullet,
                LABEL: "Heavy",
            },
        },
    ],
};
exports.ordnance = {
    PARENT: [exports.genericTank],
    LABEL: "Ordnance",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25,
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [17, 3, 1, 0, -5.75, -6, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: exports.bullet,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 5.75, 6, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: exports.bullet,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [21, 11, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.beekeeper = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Beekeeper",
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [14, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees]),
                TYPE: [exports.bee, { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [14, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees]),
                TYPE: [exports.bee, { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
                TYPE: exports.bullet,
                LABEL: "Heavy",
            },
        },
    ],
};
exports.fieldGun = {
    PARENT: [exports.genericTank],
    LABEL: "Field Gun",
    BODY: {
        FOV: base.FOV * 1.1,
    },
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [15, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: exports.bullet,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [15, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: exports.bullet,
                LABEL: "Secondary",
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [10, 9, 1, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 13, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty]),
                TYPE: exports.minimissile,
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};
exports.force = makeHybrid(exports.artillery, "Force");
exports.autoArtillery = makeAuto(exports.artillery);
exports.mender = {
    PARENT: [exports.genericTank],
    LABEL: "Mender",
    DANGER: 7,
    TOOLTIP:
        "Right click to heal yourself (use sparingly, has a long cooldown once used!)",
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [17, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: exports.bullet,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: exports.bullet,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
                TYPE: exports.bullet,
                LABEL: "Heavy",
            },
        },
        { POSITION: [17, 10, 1, 0, 0, 180, 0] },
        {
            POSITION: [5, 18, 1, -19, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.destroy,
                    [2, 0, 1, 1, 1, -1, 1, 1, 1, 0.1, 1, 1, 1],
                ]),
                TYPE: [exports.bullet, { HEAL_MYSELF: true }],
                ALT_FIRE: true,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [7, 0, 0, 0, 0, 1],
            TYPE: makeDeco(3),
        },
    ],
};

// MORTAR BRANCH
exports.plaster = makeHybrid(exports.mortar, "Plaster");

// ORDNANCE BRANCH
exports.huntsman = makeHybrid(exports.ordnance, "Huntsman");

// BEEKEEPER BRANCH
exports.turretedBee = makeAuto(exports.bee);
exports.bumbler = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Bumbler",
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: makeDeco(3),
        },
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [14, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees]),
                TYPE: [exports.turretedBee, { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [14, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees]),
                TYPE: [exports.turretedBee, { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
                TYPE: exports.bullet,
                LABEL: "Heavy",
            },
        },
    ],
};
exports.apiculturist = makeHybrid(exports.beekeeper, "Apiculturist");

// FORCE BRANCH
exports.overartillery = makeOver(exports.artillery);

// LAUNCHER BRANCH
exports.skimmer = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: 1.15 * base.FOV,
    },
    LABEL: "Skimmer",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [10, 14, -0.5, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 15, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.arty,
                    g.arty,
                    g.skim,
                ]),
                TYPE: exports.missile,
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};
exports.twister = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: 1.1 * base.FOV,
    },
    LABEL: "Twister",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [10, 13, -0.5, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 14, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.arty,
                    g.arty,
                    g.skim,
                    g.morespeed,
                    g.one_third_reload,
                ]),
                TYPE: exports.spinmissile,
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};
exports.swarmer = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: "Swarmer",
    GUNS: [
        {
            POSITION: [14, 14, -1.2, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive]),
                TYPE: exports.hive,
            },
        },
        {
            POSITION: [15, 12, 1, 5, 0, 0, 0],
        },
    ],
};
exports.sidewinder = {
    PARENT: [exports.genericTank],
    LABEL: "Sidewinder",
    DANGER: 7,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.3 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [10, 11, -0.5, 14, 0, 0, 0],
        },
        {
            POSITION: [21, 12, -1.1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
                TYPE: exports.snake,
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};
exports.rocketeer = {
    PARENT: [exports.genericTank],
    LABEL: "Rocketeer",
    BODY: {
        FOV: 1.15 * base.FOV,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [10, 12.5, -0.7, 10, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.launcher,
                    g.rocketeer,
                ]),
                TYPE: exports.rocketeerMissile,
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
        {
            POSITION: [17, 18, 0.65, 0, 0, 0, 0],
        },
    ],
};
exports.heaver = makeHybrid(exports.launcher, "Heaver");
exports.autoLauncher = makeAuto(exports.launcher);

// TRAPPER BRANCH
exports.trapper = {
    PARENT: [exports.genericTank],
    LABEL: "Trapper",
    STAT_NAMES: statnames.trap,
    GUNS: [
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.weirdTrapper = {
    // For use with -trapper combos only.
    PARENT: [exports.genericTank],
    LABEL: "Trapper",
    DANGER: 6,
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.2,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [14, 8, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 8, 1.5, 14, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.builder = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: "Builder",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 12, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block]),
                TYPE: exports.setTrap,
            },
        },
    ],
};
exports.triTrapper = {
    PARENT: [exports.genericTank],
    LABEL: "Tri-Trapper",
    DANGER: 6,
    STAT_NAMES: statnames.trap,
    GUNS: [
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, 0, 0, 120, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, 0, 0, 240, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.trapGuard = {
    PARENT: [exports.genericTank],
    LABEL: "Trap Guard",
    STAT_NAMES: statnames.generic,
    DANGER: 6,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [13, 8, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 8, 1.7, 13, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.autoTrapper = makeAuto(exports.trapper);
exports.megaTrapper = {
    PARENT: [exports.genericTank],
    LABEL: "Mega Trapper",
    BODY: {
        DENSITY: base.DENSITY * 0.6,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [15, 12, 1, -2, 0, 0, 0],
        },
        {
            POSITION: [6, 12, 1.7, 13, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.megatrap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.protector = {
    PARENT: [exports.genericTank],
    LABEL: "Protector",
    DANGER: 7,
    GUNS: [
        /***** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */ {
            POSITION: [11, 12, 1, 6, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                TYPE: exports.bullet,
                HAS_NO_RECOIL: true,
            },
        },
        {
            POSITION: [10, 14, 1, 6, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [8, 14, -1.3, 4, 0, 0, 0],
        },
    ],
};
exports.overtrapper = makeOver(exports.weirdTrapper);

// BUILDER BRANCH
exports.constructor = {
    PARENT: [exports.genericTank],
    LABEL: "Constructor",
    STAT_NAMES: statnames.trap,
    DANGER: 7,
    BODY: {
        SPEED: 0.7 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [18, 18, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 18, 1.2, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
                TYPE: exports.setTrap,
            },
        },
    ],
};
exports.autoBuilder = makeAuto(exports.builder);
exports.engineer = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Engineer",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.75 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [3, 14, 1, 15.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 6,
                SHOOT_SETTINGS: combineStats([g.trap, g.block]),
                TYPE: exports.pillbox,
                SYNCS_SKILLS: true,
                DESTROY_OLDEST_CHILD: true,
            },
        },
        {
            POSITION: [4, 14, 1, 8, 0, 0, 0],
        },
    ],
};
exports.boomer = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Boomer",
    STAT_NAMES: statnames.trap,
    FACING_TYPE: "locksFacing",
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [5, 10, 1, 14, 0, 0, 0],
        },
        {
            POSITION: [6, 10, -1.5, 7, 0, 0, 0],
        },
        {
            POSITION: [2, 10, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
                TYPE: exports.boomerang,
            },
        },
    ],
};
exports.bentBoomer = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Bent Boomer",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [8, 10, 1, 8, -2, -35, 0],
        },
        {
            POSITION: [8, 10, 1, 8, 2, 35, 0],
        },
        {
            POSITION: [2, 10, 1.3, 16, -2, -35, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
                TYPE: exports.boomerang,
            },
        },
        {
            POSITION: [2, 10, 1.3, 16, 2, 35, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
                TYPE: exports.boomerang,
            },
        },
    ],
};
exports.fashioner = makeHybrid(exports.builder, "Fashioner");
exports.quadBuilder = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Quad Builder",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, 0, 45, 0],
        },
        {
            POSITION: [2, 6, 1.1, 14, 0, 45, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
                TYPE: exports.setTrap,
            },
        },
        {
            POSITION: [14, 6, 1, 0, 0, 135, 0],
        },
        {
            POSITION: [2, 6, 1.1, 14, 0, 135, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
                TYPE: exports.setTrap,
            },
        },
        {
            POSITION: [14, 6, 1, 0, 0, 225, 0],
        },
        {
            POSITION: [2, 6, 1.1, 14, 0, 225, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
                TYPE: exports.setTrap,
            },
        },
        {
            POSITION: [14, 6, 1, 0, 0, 315, 0],
        },
        {
            POSITION: [2, 6, 1.1, 14, 0, 315, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
                TYPE: exports.setTrap,
            },
        },
    ],
};

// CONSTRUCTOR BRANCH
exports.meld = makeHybrid(exports.constructor, "Meld");

// FASHIONER BRANCH
exports.overbuilder = makeOver(exports.builder);

// TRI-TRAPPER BRANCH
exports.hexaTrapper = makeAuto(
    {
        PARENT: [exports.genericTank],
        DANGER: 7,
        BODY: {
            SPEED: 0.8 * base.SPEED,
        },
        STAT_NAMES: statnames.trap,
        HAS_NO_RECOIL: true,
        GUNS: [
            {
                POSITION: [15, 7, 1, 0, 0, 0, 0],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 0, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: exports.trap,
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 60, 0.5],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 60, 0.5],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: exports.trap,
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 120, 0],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 120, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: exports.trap,
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 180, 0.5],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 180, 0.5],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: exports.trap,
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 240, 0],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 240, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: exports.trap,
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 300, 0.5],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 300, 0.5],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: exports.trap,
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
        ],
    },
    "Hexa-Trapper"
);
exports.septaTrapper = (() => {
    let a = 360 / 7,
        d = 1 / 7;
    return {
        PARENT: [exports.genericTank],
        LABEL: "Septa-Trapper",
        DANGER: 7,
        BODY: {
            SPEED: base.SPEED * 0.8,
        },
        STAT_NAMES: statnames.trap,
        HAS_NO_RECOIL: true,
        GUNS: [
            {
                /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
                POSITION: [15, 7, 1, 0, 0, 0, 0],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 0, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: exports.trap,
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, a, 4 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, a, 4 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: exports.trap,
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 2 * a, 1 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 2 * a, 1 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: exports.trap,
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 3 * a, 5 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 3 * a, 5 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: exports.trap,
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 4 * a, 2 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 4 * a, 2 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: exports.trap,
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 5 * a, 6 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 5 * a, 6 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: exports.trap,
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 6 * a, 3 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 6 * a, 3 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: exports.trap,
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
        ],
    };
})();
exports.architect = {
    LABEL: "Architect",
    BODY: {
        SPEED: 1.1 * base.SPEED,
    },
    PARENT: [exports.genericTank],
    DANGER: 6,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [12, 8, 0, 0, 190, 0],
            TYPE: exports.architectGun,
        },
        {
            POSITION: [12, 8, 0, 120, 190, 0],
            TYPE: exports.architectGun,
        },
        {
            POSITION: [12, 8, 0, 240, 190, 0],
            TYPE: exports.architectGun,
        },
    ],
};

// TRAP GUARD BRANCH
exports.bushwhacker = makeGuard(exports.sniper, "Bushwhacker");
exports.gunnerTrapper = {
    PARENT: [exports.genericTank],
    LABEL: "Gunner Trapper",
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        FOV: 1.25 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [19, 2, 1, 0, -2.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.tonsmorrecoil,
                    g.lotsmorrecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.tonsmorrecoil,
                    g.lotsmorrecoil,
                ]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [12, 11, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [13, 11, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 11, 1.7, 13, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.fast, g.halfrecoil]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.bomber = {
    PARENT: [exports.genericTank],
    LABEL: "Bomber",
    BODY: {
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                TYPE: exports.bullet,
                LABEL: "Front",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 130, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
                TYPE: exports.bullet,
                LABEL: "Wing",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 230, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
                TYPE: exports.bullet,
                LABEL: "Wing",
            },
        },
        {
            POSITION: [13, 8, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 8, 1.7, 13, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.conqueror = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Conqueror",
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    GUNS: [
        {
            POSITION: [21, 14, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 12, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block]),
                TYPE: exports.setTrap,
            },
        },
    ],
};
exports.vanquisher = {
    PARENT: [exports.genericTank],
    DANGER: 8,
    LABEL: "Vanquisher",
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    //destroyer
    GUNS: [{
        POSITION: [21, 14, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
            TYPE: exports.bullet
        }

        //builder
    }, {
        POSITION: [18, 12, 1, 0, 0, 0, 0],
    }, {
        POSITION: [2, 12, 1.1, 18, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
            TYPE: exports.setTrap
        }

        //launcher
    }, {
        POSITION: [10, 9, 1, 9, 0, 90, 0],
    }, {
        POSITION: [17, 13, 1, 0, 0, 90, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty]), TYPE: exports.minimissile, STAT_CALCULATOR: gunCalcNames.sustained }

        //shotgun
    }, {
        POSITION: [4, 3, 1, 11, -3, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: exports.bullet }
    }, {
        POSITION: [4, 3, 1, 11, 3, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: exports.bullet }
    }, {
        POSITION: [4, 4, 1, 13, 0, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: exports.casing }
    }, {
        POSITION: [1, 4, 1, 12, -1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: exports.casing }
    }, {
        POSITION: [1, 4, 1, 11, 1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: exports.casing }
    }, {
        POSITION: [1, 3, 1, 13, -1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: exports.bullet }
    }, {
        POSITION: [1, 3, 1, 13, 1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: exports.bullet }
    }, {
        POSITION: [1, 2, 1, 13, 2, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: exports.casing }
    }, {
        POSITION: [1, 2, 1, 13, -2, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: exports.casing }
    }, {
        POSITION: [15, 14, 1, 6, 0, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]), TYPE: exports.casing }
    }, {
        POSITION: [8, 14, -1.3, 4, 0, 270, 0],
    }]
};
exports.bulwark = {
    PARENT: [exports.genericTank],
    LABEL: "Bulwark",
    STAT_NAMES: statnames.generic,
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.twin]),
                TYPE: exports.bullet,
            },
        },
        {
            /* LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.twin]),
                TYPE: exports.bullet,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [13, 8, 1, 0, 5.5, 185, 0],
        },
        {
            POSITION: [3, 9, 1.5, 13, 5.5, 185, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            /* LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [13, 8, 1, 0, -5.5, 175, 0],
        },
        {
            POSITION: [3, 9, 1.5, 13, -5.5, 175, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.doubleTrapGuard = {
    PARENT: [exports.genericTank],
    LABEL: "Double Trap Guard",
    STAT_NAMES: statnames.generic,
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.95,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20, 8, 1, 0, -5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.bullet,
            },
        },
        {
            /* LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20, 8, 1, 0, 5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.bullet,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [14, 7, 1, 0, -6, 180, 0],
        },
        {
            POSITION: [4, 7, 1.5, 14, -6, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            /* LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [14, 7, 1, 0, 6, 180, 0.5],
        },
        {
            POSITION: [4, 7, 1.5, 14, 6, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.peashooter = makeSwarming(exports.trapGuard, "Peashooter");
exports.autoTrapGuard = makeAuto(exports.trapGuard);

// BUSHWHACKER BRANCH
exports.executor = makeGuard(exports.assassin, "Executor");
exports.ransacker = makeGuard(exports.rifle, "Ransacker");
exports.raider = {
    PARENT: [exports.genericTank],
    LABEL: "Raider",
    BODY: {
        DENSITY: 0.6 * base.DENSITY,
        FOV: 1.2 * base.FOV,
    },
    DANGER: 8,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [24, 8.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: exports.bullet,
                LABEL: "Front",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 130, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
                TYPE: exports.bullet,
                LABEL: "Wing",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 230, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
                TYPE: exports.bullet,
                LABEL: "Wing",
            },
        },
        {
            POSITION: [13, 8, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 8, 1.7, 13, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.molder = makeConq(exports.sniper, "Molder");
exports.autoBushwhacker = makeAuto(exports.bushwhacker);
exports.blowgun = makeSwarming(exports.bushwhacker, "Blowgun");

// AUTO-TRAP GUARD BRANCH
exports.autoBushwhacker = makeAuto(exports.bushwhacker);
exports.autoGunnerTrapper = makeAuto(exports.gunnerTrapper);
exports.autoBomber = makeAuto(exports.bomber);
exports.autoConqueror = makeAuto(exports.conqueror);
exports.autoBulwark = makeAuto(exports.bulwark);
exports.autoPeashooter = makeAuto(exports.peashooter);

// MEGA TRAPPER BRANCH
exports.catcher = makeHybrid(exports.megaTrapper, "Catcher");
exports.autoMegaTrapper = makeAuto(exports.megaTrapper);

// OVERTRAPPER BRANCH
exports.kingpin = makeCross(exports.weirdTrapper, "Kingpin");
exports.autoOvertrapper = makeAuto(exports.overtrapper);
exports.battletrapper = makeBattle(exports.weirdTrapper);
exports.captrapper = makeCap(exports.weirdTrapper);

// HEALER BRANCH
exports.healer = {
    PARENT: [exports.genericTank],
    LABEL: "Healer",
    TURRETS: [
        {
            /** SIZE         X             Y         ANGLE        ARC */
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: exports.healerSymbol,
        },
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
                TYPE: exports.healerBullet,
            },
        },
    ],
};
exports.medic = {
    PARENT: [exports.genericTank],
    LABEL: "Medic",
    BODY: {
        FOV: base.FOV * 1.2,
    },
    TURRETS: [
        {
            /** SIZE         X             Y         ANGLE        ARC */
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: exports.healerSymbol,
        },
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [8, 9, -0.5, 16.5, 0, 0, 0],
        },
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
                TYPE: exports.healerBullet,
            },
        },
    ],
};
exports.ambulance = {
    PARENT: [exports.genericTank],
    LABEL: "Ambulance",
    BODY: {
        HEALTH: base.HEALTH * 0.8,
        SHIELD: base.SHIELD * 0.8,
        DENSITY: base.DENSITY * 0.6,
    },
    TURRETS: [
        {
            /** SIZE         X             Y         ANGLE        ARC */
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: exports.healerSymbol,
        },
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.trifront,
                    g.tonsmorrecoil,
                    g.healer,
                ]),
                TYPE: exports.healerBullet,
                LABEL: "Front",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};
exports.surgeon = {
    PARENT: [exports.genericTank],
    LABEL: "Surgeon",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.75,
        FOV: base.FOV * 1.15,
    },
    TURRETS: [
        {
            /** SIZE         X             Y         ANGLE        ARC */
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: exports.healerSymbol,
        },
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [3, 14, 1, 15.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 2,
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.slow]),
                TYPE: exports.surgeonPillbox,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [4, 14, 1, 8, 0, 0, 0],
        },
    ],
};
exports.paramedic = {
    PARENT: [exports.genericTank],
    LABEL: "Paramedic",
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    TURRETS: [
        {
            /** SIZE         X             Y         ANGLE        ARC */
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: exports.healerSymbol,
        },
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [8, 9, -0.5, 10, 0, -17.5, 0.5],
        },
        {
            POSITION: [15.5, 10, 1, 0, 0, -17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.healer]),
                TYPE: exports.healerBullet,
            },
        },
        {
            POSITION: [8, 9, -0.5, 10, 0, 17.5, 0.5],
        },
        {
            POSITION: [15.5, 10, 1, 0, 0, 17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.healer]),
                TYPE: exports.healerBullet,
            },
        },
        {
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.healer]),
                TYPE: exports.healerBullet,
            },
        },
    ],
};
exports.physician = {
    PARENT: [exports.genericTank],
    LABEL: "Physician",
    BODY: {
        SPEED: base.speed * 0.9,
        DAMAGE: base.DAMAGE * -1.1,
        FOV: base.FOV * 1.05,
        DENSITY: base.DENSITY * 2,
    },
    IS_SMASHER: true,
    FACING_TYPE: "autospin",
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
    TURRETS: [
        {
            /** SIZE         X             Y         ANGLE        ARC */
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: exports.healerSymbol,
        },
        {
            /** SIZE         X             Y         ANGLE        ARC */
            POSITION: [18, 0, 0, 0, 360, 0],
            TYPE: exports.physicianBody,
        },
        {
            POSITION: [18, 0, 0, 15, 360, 0],
            TYPE: exports.physicianBody,
        },
        {
            POSITION: [18, 0, 0, 30, 360, 0],
            TYPE: exports.physicianBody,
        },
        {
            POSITION: [18, 0, 0, 45, 360, 0],
            TYPE: exports.physicianBody,
        },
        {
            /** SIZE         X             Y         ANGLE        ARC */
            POSITION: [18, 0, 0, 60, 360, 0],
            TYPE: exports.physicianBody,
        },
        {
            POSITION: [18, 0, 0, 75, 360, 0],
            TYPE: exports.physicianBody,
        },
        {
            POSITION: [18, 0, 0, 90, 360, 0],
            TYPE: exports.physicianBody,
        },
        {
            POSITION: [18, 0, 0, 135, 360, 0],
            TYPE: exports.physicianBody,
        },
    ],
};
exports.doctor = {
    PARENT: [exports.genericTank],
    LABEL: "Doctor",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.15,
    },
    MAX_CHILDREN: 1,
    TURRETS: [
        {
            /** SIZE         X             Y         ANGLE        ARC */
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: exports.healerSymbol,
        },
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [17, 16, 1.25, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.bigdrone, g.healer]),
                TYPE: exports.doctorDrone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
    ],
};

// SMASHER BRANCH
exports.smasher = {
    PARENT: [exports.genericTank],
    LABEL: "Smasher",
    DANGER: 6,
    BODY: {
        FOV: 1.05 * base.FOV,
        DENSITY: 2 * base.DENSITY,
    },
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: exports.smasherBody,
        },
    ],
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
};
exports.megaSmasher = {
    PARENT: [exports.genericTank],
    LABEL: "Mega-Smasher",
    DANGER: 7,
    BODY: {
        SPEED: 1.05 * base.speed,
        FOV: 1.1 * base.FOV,
        DENSITY: 4 * base.DENSITY,
    },
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
    TURRETS: [
        {
            POSITION: [25, 0, 0, 0, 360, 0],
            TYPE: exports.smasherBody,
        },
    ],
};
exports.spike = {
    PARENT: [exports.genericTank],
    LABEL: "Spike",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        DAMAGE: base.DAMAGE * 1.1,
        FOV: base.FOV * 1.05,
        DENSITY: base.DENSITY * 2,
    },
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
    TURRETS: [
        {
            /** SIZE         X             Y         ANGLE        ARC */
            POSITION: [18.5, 0, 0, 0, 360, 0],
            TYPE: exports.spikeBody,
        },
        {
            POSITION: [18.5, 0, 0, 90, 360, 0],
            TYPE: exports.spikeBody,
        },
        {
            POSITION: [18.5, 0, 0, 180, 360, 0],
            TYPE: exports.spikeBody,
        },
        {
            POSITION: [18.5, 0, 0, 270, 360, 0],
            TYPE: exports.spikeBody,
        },
    ],
};
exports.weirdSpike = {
    PARENT: [exports.genericTank],
    LABEL: "Weird Spike",
    DANGER: 7,
    BODY: {
        DAMAGE: 1.15 * base.DAMAGE,
        FOV: 1.05 * base.FOV,
        DENSITY: 1.5 * base.DENSITY,
    },
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
    TURRETS: [
        {
            POSITION: [20.5, 0, 0, 0, 360, 0],
            TYPE: exports.weirdSpikeBody1,
        },
        {
            POSITION: [20.5, 0, 0, 180, 360, 0],
            TYPE: exports.weirdSpikeBody2,
        },
    ],
};
(exports.autoSmasher = makeAuto(exports.smasher, "Auto-Smasher", {
    type: exports.autoSmasherTurret,
    size: 11,
})),
    (exports.autoSmasher.SKILL_CAP = [
        smshskl,
        smshskl,
        smshskl,
        smshskl,
        smshskl,
        smshskl,
        smshskl,
        smshskl,
        smshskl,
        smshskl,
    ]);
exports.landmine = {
    PARENT: [exports.genericTank],
    LABEL: "Landmine",
    INVISIBLE: [0.06, 0.01],
    TOOLTIP: "Stay still to turn invisible.",
    DANGER: 7,
    BODY: {
        SPEED: 1.1 * base.SPEED,
        FOV: 1.05 * base.FOV,
        DENSITY: 2 * base.DENSITY,
    },
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: exports.smasherBody,
        },
        {
            POSITION: [21.5, 0, 0, 30, 360, 0],
            TYPE: exports.landmineBody,
        },
    ],
    IS_SMASHER: !0,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
};
exports.bonker = {
    PARENT: [exports.genericTank],
    LABEL: "Bonker",
    SIZE: exports.genericTank.SIZE * 0.6,
    BODY: {
        SPEED: 1.4 * base.SPEED,
        DAMAGE: 1.1 * base.DAMAGE,
        FOV: 1.1 * base.FOV,
        DENSITY: 1.4 * base.DENSITY,
    },
    TURRETS: [
        {
            /** SIZE         X             Y         ANGLE        ARC */
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: exports.smasherBody,
        },
    ],
    IS_SMASHER: true,
    SKILL_CAP: [12, 0, 0, 0, 0, 12, 12, 12, 12, 12],
    STAT_NAMES: statnames.smasher,
};

// SINGLE BRANCH
exports.single = {
    PARENT: [exports.genericTank],
    LABEL: "Single",
    GUNS: [
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
        },
    ],
};
exports.duo = {
    PARENT: [exports.genericTank],
    LABEL: "Duo",
    GUNS: [
        {
            POSITION: [21.5, 8, 1, 0, 4.75, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.single]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [21.5, 8, 1, 0, -4.75, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.single]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [12, 18, -1.1, 0, 0, 0, 0],
        },
    ],
};
exports.sharpshooter = {
    PARENT: [exports.genericTank],
    LABEL: "Sharpshooter",
    GUNS: [
        {
            POSITION: [25, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.single]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
        },
    ],
};
exports.ternion = {
    PARENT: [exports.genericTank],
    LABEL: "Ternion",
    GUNS: [
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.single]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
        },
        {
            POSITION: [19, 8, 1, 0, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.single]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [5.5, 8, -1.8, 6.5, 0, 120, 0],
        },
        {
            POSITION: [19, 8, 1, 0, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.single]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [5.5, 8, -1.8, 6.5, 0, 240, 0],
        },
    ],
};
exports.avian = {
    PARENT: [exports.genericTank],
    LABEL: "Avian",
    TOOLTIP: "Right click to fire your main barrel.",
    GUNS: [
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single]),
                TYPE: exports.bullet,
                LABEL: "Single",
                ALT_FIRE: true,
            },
        },
        {
            POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 180, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: exports.bullet,
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};
exports.custodian = makeGuard(exports.single, "Custodian");
exports.assistant = makeHybrid(exports.single, "Assistant");
exports.autoSingle = makeAuto(exports.single);

// DIEP TANKS
exports.diepTank = {
    PARENT: [exports.genericTank],
    LABEL: "Diep Tank",
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: exports.bullet,
            },
        },
    ],
};

// CUSTOM TANKS
exports.lancer = {
    PARENT: [exports.genericTank],
    LABEL: "Lancer",
    BODY: {
        SPEED: base.SPEED * 1.2,
        DAMAGE: base.DAMAGE * 0.9,
    },
    HAS_NO_RECOIL: true,
    STAT_NAMES: statnames.lancer,
    GUNS: [
        {
            POSITION: [20, 15, 0.001, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.lancer]),
                TYPE: [exports.bullet, { ALPHA: 0 }],
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [25, 15, 0.001, 0, 0, 0, 0],
        },
    ],
};

// CRASHERS
exports.crasher = {
    TYPE: "crasher",
    LABEL: "Crasher",
    COLOR: 5,
    SHAPE: 3,
    SIZE: 5,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    AI: {
        NO_LEAD: true,
    },
    BODY: {
        SPEED: 5,
        ACCELERATION: 1.4,
        HEALTH: 0.5,
        DAMAGE: 5,
        PENETRATION: 2,
        PUSHABILITY: 0.5,
        DENSITY: 10,
        RESIST: 2,
    },
    MOTION_TYPE: "motor",
    FACING_TYPE: "smoothWithMotion",
    HITS_OWN_TYPE: "hard",
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
};
exports.crasherSpawner = {
    PARENT: [exports.genericTank],
    LABEL: "Spawned",
    STAT_NAMES: statnames.drone,
    CONTROLLERS: ["nearestDifferentMaster"],
    COLOR: 5,
    INDEPENDENT: true,
    AI: {
        chase: true,
    },
    MAX_CHILDREN: 4,
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak]),
                TYPE: [
                    exports.drone,
                    {
                        LABEL: "Crasher",
                        VARIES_IN_SIZE: true,
                        DRAW_HEALTH: true,
                    },
                ],
                SYNCS_SKILLS: true,
                AUTOFIRE: true,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
    ],
};

// SENTRIES
exports.sentry = {
    PARENT: [exports.genericTank],
    TYPE: "crasher",
    LABEL: "Sentry",
    DANGER: 3,
    COLOR: 5,
    SHAPE: 3,
    SIZE: 10,
    SKILL: skillSet({
        rld: 0.5,
        dam: 0.8,
        pen: 0.8,
        str: 0.1,
        spd: 1,
        atk: 0.5,
        hlt: 0,
        shi: 0,
        rgn: 0.7,
        mob: 0,
    }),
    VALUE: 1500,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    AI: {
        NO_LEAD: true,
    },
    BODY: {
        FOV: 0.5,
        ACCELERATION: 0.75,
        DAMAGE: base.DAMAGE,
        SPEED: 0.5 * base.SPEED,
        HEALTH: 0.3 * base.HEALTH,
    },
    MOTION_TYPE: "motor",
    FACING_TYPE: "smoothToTarget",
    HITS_OWN_TYPE: "hard",
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
exports.trapTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Turret",
    BODY: {
        FOV: 0.5,
    },
    INDEPENDENT: true,
    CONTROLLERS: ["nearestDifferentMaster", 'onlyAcceptInArc'],
    COLOR: 16,
    AI: {
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [
        {
            POSITION: [16, 14, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 14, 1.8, 16, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.trap,
                    g.lowpower,
                    g.fast,
                    g.halfreload,
                ]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.shottrapTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 0,
    },
    INDEPENDENT: true,
    CONTROLLERS: ['nearestDifferentMaster', 'onlyAcceptInArc'],
    COLOR: 16,
    AI: {
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [{    /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [4, 3, 1, 11, -3, 0, 0,],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.trap, g.weak, g.lowpower, g.shotgun, g.acc, g.mach]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [4, 3, 1, 11, 3, 0, 0,],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.trap, g.weak, g.lowpower, g.shotgun, g.acc, g.mach]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [4, 3, 1, 13, 0, 0, 0,],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.trap, g.weak, g.lowpower, g.shotgun, g.acc, g.mach]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [1, 3, 1, 11, 1, 0, 0,],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.trap, g.weak, g.lowpower, g.shotgun, g.acc, g.mach]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [1, 3, 1, 12, -1, 0, 0,],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.trap, g.weak, g.lowpower, g.shotgun, g.acc, g.mach]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [1, 3, 1, 11, 1, 0, 0,],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.trap, g.weak, g.lowpower, g.shotgun, g.acc, g.mach]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [1, 3, 1, 13, -1, 0, 0,],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.trap, g.weak, g.lowpower, g.shotgun, g.acc, g.mach]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [1, 3, 1, 13, 1, 0, 0,],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.trap, g.weak, g.lowpower, g.shotgun, g.acc, g.mach]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [1, 3, 1, 13, 2, 0, 0,],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.trap, g.weak, g.lowpower, g.shotgun, g.acc, g.mach]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [1, 3, 1, 13, -2, 0, 0,],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.trap, g.weak, g.lowpower, g.shotgun, g.acc, g.mach]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [1, 3, 1, 13, -2, 0, 0,],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.trap, g.weak, g.lowpower, g.shotgun, g.acc, g.mach]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [1, 3, 1, 13, 2, 0, 0,],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.trap, g.weak, g.lowpower, g.shotgun, g.acc, g.mach]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [1, 3, 1, 13, -2, 0, 0,],
        PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.trap, g.weak, g.lowpower, g.shotgun, g.acc, g.mach]),
            TYPE: exports.trap,
        },
    }, {
        POSITION: [16, 14, 1, 0, 0, 0, 0,],
    }, {
        POSITION: [4, 14, 1.8, 16, 0, 0, 0,],
    }, {
        POSITION: [8, 16, -1.1, 4, 0, 0, 0,],
    }
    ],
};
exports.barricadeTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Turret",
    BODY: {
        FOV: 0.5,
    },
    INDEPENDENT: true,
    CONTROLLERS: ["nearestDifferentMaster"],
    COLOR: 16,
    AI: {
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [24, 8, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 8, 1.3, 22, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [4, 8, 1.3, 18, 0, 0, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [4, 8, 1.3, 14, 0, 0, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.sentrySwarm = {
    PARENT: [exports.sentry],
    GUNS: [
        {
            POSITION: [7, 14, 0.6, 7, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.sentryGun = makeAuto(exports.sentry, "Sentry", {
    type: exports.megaAutoTankgun,
    size: 12,
});
exports.sentryTrap = makeAuto(exports.sentry, "Sentry", {
    type: exports.trapTurret,
    size: 12,
});
exports.shinySentry = {
    PARENT: [exports.sentry],
    COLOR: 1,
    DANGER: 4,
    SIZE: 12,
    VALUE: 50000,
    BODY: {
        HEALTH: 0.3 * base.HEALTH * 2,
    },
};
exports.shinySentrySwarm = {
    PARENT: [exports.shinySentry],
    GUNS: [
        {
            POSITION: [6, 11, 1.3, 7, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.shinySentryGun = makeAuto(exports.shinySentry, "Sentry", {
    type: exports.artilleryAutoTankgun,
    size: 12,
});
exports.shinySentryTrap = makeAuto(exports.shinySentry, "Sentry", {
    type: exports.barricadeTurret,
    size: 12,
});

// BOSSES
exports.miniboss = {
    PARENT: [exports.genericTank],
    TYPE: "miniboss",
    DANGER: 6,
    SKILL: skillSet({
        rld: 0.7,
        dam: 0.5,
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,
    }),
    LEVEL: 45,
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
    AI: {
        NO_LEAD: true,
    },
    FACING_TYPE: "autospin",
    HITS_OWN_TYPE: "hardOnlyBosses",
    BROADCAST_MESSAGE: "A visitor has left!",
};

// ELITE CRASHERS
exports.elite = {
    PARENT: [exports.miniboss],
    LABEL: "Elite Crasher",
    COLOR: 5,
    SHAPE: 3,
    SIZE: 27,
    VARIES_IN_SIZE: true,
    VALUE: 15e4,
    BODY: {
        FOV: 1.25,
        SPEED: 0.1 * base.SPEED,
        HEALTH: 7 * base.HEALTH,
        DAMAGE: 2.5 * base.DAMAGE,
    },
};
exports.eliteDestroyer = {
    PARENT: [exports.elite],
    GUNS: [
        {
            POSITION: [5, 16, 1, 6, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
                TYPE: exports.bullet,
                LABEL: "Devastator",
            },
        },
        {
            POSITION: [5, 16, 1, 6, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
                TYPE: exports.bullet,
                LABEL: "Devastator",
            },
        },
        {
            POSITION: [5, 16, 1, 6, 0, -60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
                TYPE: exports.bullet,
                LABEL: "Devastator",
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [11, 0, 0, 180, 360, 0],
            TYPE: [exports.crasherSpawner],
        },
        {
            POSITION: [11, 0, 0, 60, 360, 0],
            TYPE: [exports.crasherSpawner],
        },
        {
            POSITION: [11, 0, 0, -60, 360, 0],
            TYPE: [exports.crasherSpawner],
        },
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: [
                exports.bigauto4gun,
                {
                    INDEPENDENT: true,
                    COLOR: 5,
                },
            ],
        },
    ],
};
exports.eliteGunner = {
    PARENT: [exports.elite],
    FACING_TYPE: "toTarget",
    GUNS: [
        {
            POSITION: [14, 16, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 16, 1.5, 14, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: [
                    exports.pillbox,
                    {
                        INDEPENDENT: true,
                    },
                ],
            },
        },
        {
            POSITION: [6, 14, -2, 2, 0, 60, 0],
        },
        {
            POSITION: [6, 14, -2, 2, 0, 300, 0],
        },
    ],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [
        {
            POSITION: [14, 8, 0, 60, 180, 0],
            TYPE: [exports.auto4gun],
        },
        {
            POSITION: [14, 8, 0, 300, 180, 0],
            TYPE: [exports.auto4gun],
        },
    ],
};
exports.machineTripleTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Machine Gun",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 5,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank]),
                TYPE: exports.bullet,
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank]),
                TYPE: exports.bullet,
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank]),
                TYPE: exports.bullet,
                AUTOFIRE: true,
            },
        },
    ],
};
exports.eliteSprayer = {
    PARENT: [exports.elite],
    SKILL: [0, 9, 3, 9, 2, 9, 9, 9, 9, 0],
    AI: { NO_LEAD: false },
    HAS_NO_RECOIL: true,
    TURRETS: [
        {
            /*    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6, 0, 0, 0, 360, 1],
            TYPE: [exports.machineTripleTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [9, 6, -5, 180, 130, 0],
            TYPE: [exports.sprayer, { COLOR: 16 }],
        },
        {
            POSITION: [9, 6, 5, 180, 130, 0],
            TYPE: [exports.sprayer, { COLOR: 16 }],
        },
        {
            POSITION: [9, 6, 5, 60, 130, 0],
            TYPE: [exports.sprayer, { COLOR: 16 }],
        },
        {
            POSITION: [9, 6, -5, 60, 130, 0],
            TYPE: [exports.sprayer, { COLOR: 16 }],
        },
        {
            POSITION: [9, 6, 5, -60, 130, 0],
            TYPE: [exports.sprayer, { COLOR: 16 }],
        },
        {
            POSITION: [9, 6, -5, -60, 130, 0],
            TYPE: [exports.sprayer, { COLOR: 16 }],
        },
    ],
};
exports.oldEliteSprayer = {
    PARENT: [exports.elite],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [
        {
            POSITION: [14, 6, 0, 180, 190, 0],
            TYPE: [
                exports.sprayer,
                {
                    COLOR: 5,
                },
            ],
        },
        {
            POSITION: [14, 6, 0, 60, 190, 0],
            TYPE: [
                exports.sprayer,
                {
                    COLOR: 5,
                },
            ],
        },
        {
            POSITION: [14, 6, 0, -60, 190, 0],
            TYPE: [
                exports.sprayer,
                {
                    COLOR: 5,
                },
            ],
        },
    ],
};
exports.eliteBattleship = {
    PARENT: [exports.elite],
    GUNS: [
        {
            POSITION: [4, 6, 0.6, 7, -8, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 0, 60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 8, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, -8, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 0, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 8, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, -8, -60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 0, -60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 8, -60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [5, 7, 0, 0, 360, 1],
            TYPE: [
                exports.autoTankGun,
                {
                    INDEPENDENT: true,
                    COLOR: 5,
                },
            ],
        },
        {
            POSITION: [5, 7, 0, 120, 360, 1],
            TYPE: [
                exports.autoTankGun,
                {
                    INDEPENDENT: true,
                    COLOR: 5,
                },
            ],
        },
        {
            POSITION: [5, 7, 0, 240, 360, 1],
            TYPE: [
                exports.autoTankGun,
                {
                    INDEPENDENT: true,
                    COLOR: 5,
                },
            ],
        },
    ],
};
exports.eliteSpawner = {
    PARENT: [exports.elite],
    MAX_CHILDREN: 9,
    AI: { STRAFE: false },
    GUNS: [
        {
            POSITION: [11, 16, 1, 0, 0, 60, 0],
        },
        {
            POSITION: [11, 16, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [11, 16, 1, 0, 0, 300, 0],
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [2, 18, 1, 11, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak, g.celeslower]),
                TYPE: exports.sentrySwarm,
                SYNCS_SKILLS: true,
                AUTOFIRE: true,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [2, 18, 1, 11, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak, g.celeslower]),
                TYPE: exports.sentryTrap,
                SYNCS_SKILLS: true,
                AUTOFIRE: true,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [2, 18, 1, 11, 0, 300, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak, g.celeslower]),
                TYPE: exports.sentryGun,
                SYNCS_SKILLS: true,
                AUTOFIRE: true,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: [exports.auto4gun, { INDEPENDENT: false, COLOR: 5 }],
        },
    ],
};

// STRANGE BOSSES
exports.summoner = {
    PARENT: [exports.miniboss],
    LABEL: "Summoner",
    DANGER: 8,
    SHAPE: 4,
    COLOR: 13,
    SIZE: 26,
    MAX_CHILDREN: 28,
    FACING_TYPE: "autospin",
    VALUE: 3e5,
    BODY: {
        FOV: 0.5,
        SPEED: 0.1 * base.SPEED,
        HEALTH: 7 * base.HEALTH,
        DAMAGE: 2.6 * base.DAMAGE,
    },
    GUNS: [
        {
            POSITION: [3.5, 8.65, 1.2, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
                TYPE: exports.sunchip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.5, 8.65, 1.2, 8, 0, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
                TYPE: exports.sunchip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.5, 8.65, 1.2, 8, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
                TYPE: exports.sunchip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.5, 8.65, 1.2, 8, 0, 180, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
                TYPE: exports.sunchip,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
                WAIT_TO_CYCLE: true,
            },
        },
    ],
};
exports.eliteSkimmer = {
    PARENT: [exports.elite],
    LABEL: "Elite Skimmer",
    COLOR: 2,
    TURRETS: [
        {
            POSITION: [15, 5, 0, 60, 170, 0],
            TYPE: exports.skimmerTurret,
        },
        {
            POSITION: [15, 5, 0, 180, 170, 0],
            TYPE: exports.skimmerTurret,
        },
        {
            POSITION: [15, 5, 0, 300, 170, 0],
            TYPE: exports.skimmerTurret,
        },
    ],
};
exports.boomerTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Boomer",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 14,
    GUNS: [
        {
            POSITION: [7.75, 10, 1, 12, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.fake]),
                TYPE: exports.boomerang,
            },
        },
        {
            POSITION: [6, 10, -1.5, 7, 0, 0, 0],
        },
        {
            POSITION: [2, 10, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
                TYPE: exports.boomerang,
            },
        },
    ],
};
exports.nestKeeper = {
    PARENT: [exports.miniboss],
    LABEL: "Nest Keeper",
    COLOR: 14,
    SHAPE: 5,
    SIZE: 50,
    BODY: {
        FOV: 1.3,
        SPEED: base.SPEED * 0.25,
        HEALTH: base.HEALTH * 9,
        SHIELD: base.SHIELD * 1.5,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 2.5,
    },
    MAX_CHILDREN: 15,
    GUNS: [
        {
            POSITION: [3.5, 6.65, 1.2, 8, 0, 35, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                LABEL: "Mega Crasher",
            },
        },
        {
            POSITION: [3.5, 6.65, 1.2, 8, 0, -35, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                LABEL: "Mega Crasher",
            },
        },
        {
            POSITION: [3.5, 6.65, 1.2, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                LABEL: "Mega Crasher",
            },
        },
        {
            POSITION: [3.5, 6.65, 1.2, 8, 0, 108, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                LABEL: "Mega Crasher",
            },
        },
        {
            POSITION: [3.5, 6.65, 1.2, 8, 0, -108, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                LABEL: "Mega Crasher",
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [8, 9, 0, 72, 120, 0],
            TYPE: [
                exports.auto4gun,
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
        {
            POSITION: [8, 9, 0, 0, 120, 0],
            TYPE: [
                exports.auto4gun,
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
        {
            POSITION: [8, 9, 0, 144, 120, 0],
            TYPE: [
                exports.auto4gun,
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
        {
            POSITION: [8, 9, 0, 216, 120, 0],
            TYPE: [
                exports.auto4gun,
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
        {
            POSITION: [8, 9, 0, -72, 120, 0],
            TYPE: [
                exports.auto4gun,
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: [
                exports.boomerTurret,
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
    ],
};
exports.roguePalisade = (() => {
    let T = SHOOT_SETTINGS => ({
        SHOOT_SETTINGS: combineStats([g.factory, g.pound, g.halfreload, g.halfreload]),
        TYPE: exports.minion, STAT_CALCULATOR: gunCalcNames.drone, AUTOFIRE: true, MAX_CHILDREN: 1, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true
    });
    return {
        PARENT: [exports.miniboss],
        LABEL: "Rogue Palisade",
        COLOR: 17,
        SHAPE: 6,
        SIZE: 30,
        VALUE: 5e5,
        CONTROLLERS: ['nearestDifferentMaster', 'onlyAcceptInArc'],
        BODY: {
            FOV: 1.4,
            SPEED: 0.05 * base.SPEED,
            HEALTH: 16 * base.HEALTH,
            SHIELD: 3 * base.SHIELD,
            DAMAGE: 3 * base.DAMAGE,
        },
        GUNS: [
            { POSITION: [4, 6, -1.6, 8, 0, 0, 0], PROPERTIES: T(combineStats([g.factory, g.pound, g.halfreload, g.halfreload])) },
            { POSITION: [4, 6, -1.6, 8, 0, 60, 0], PROPERTIES: T(combineStats([g.factory, g.pound, g.halfreload, g.halfreload])) },
            { POSITION: [4, 6, -1.6, 8, 0, 120, 0], PROPERTIES: T(combineStats([g.factory, g.pound, g.halfreload, g.halfreload])) },
            { POSITION: [4, 6, -1.6, 8, 0, 180, 0], PROPERTIES: T(combineStats([g.factory, g.pound])) }, //why is that?
            { POSITION: [4, 6, -1.6, 8, 0, 240, 0], PROPERTIES: T(combineStats([g.factory, g.pound, g.halfreload, g.halfreload])) },
            { POSITION: [4, 6, -1.6, 8, 0, 300, 0], PROPERTIES: T(combineStats([g.factory, g.pound, g.halfreload, g.halfreload])) },
        ],
        TURRETS: [
            { POSITION: [5, 10, 0, 30, 110, 0], TYPE: exports.trapTurret },
            { POSITION: [5, 10, 0, 90, 110, 0], TYPE: exports.trapTurret },
            { POSITION: [5, 10, 0, 150, 110, 0], TYPE: exports.trapTurret },
            { POSITION: [5, 10, 0, 210, 110, 0], TYPE: exports.trapTurret },
            { POSITION: [5, 10, 0, 270, 110, 0], TYPE: exports.trapTurret },
            { POSITION: [5, 10, 0, 330, 110, 0], TYPE: exports.trapTurret },
        ],
    };
})();
exports.rogueArmada = (() => {
    let SHAPE = 7,
        GUNS = [],
        TURRETS = [];
    for (let i = 0; i < SHAPE; i++) {
        for (let j = 0; j < 12; j++) {
            GUNS.push({
                POSITION: [4, 0.3 * Math.floor(j / 4), 1, 0, (j + 3) % SHAPE - 3, (i + 0.5) * (360 / SHAPE), 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                    TYPE: j % SHAPE < 2 ? exports.bullet : exports.casing
                }
            });
        }
        GUNS.push({
            POSITION: [9, 6, 1, 4, 0, (i + 0.5) * (360 / SHAPE), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
                TYPE: exports.casing
            }
        }, {
            POSITION: [8, 6, -1.1, 4, 0, (i + 0.5) * (360 / SHAPE), 0]
        });
    }
    for (let i = 0; i < SHAPE; i++) {
        TURRETS.push({
            POSITION: [5, 10, 0, i * 360 / SHAPE, 110, 0],
            TYPE: exports.shottrapTurret
        });
    }
    return {
        PARENT: [exports.miniboss],
        LABEL: 'Rogue Armada',
        COLOR: 17,
        SHAPE,
        SIZE: 28,
        VALUE: 500000,
        CONTROLLERS: ['nearestDifferentMaster', 'onlyAcceptInArc'],
        BODY: {
            FOV: 1.3,
            SPEED: base.SPEED * 0.1,
            HEALTH: base.HEALTH * 2,
            SHIELD: base.SHIELD * 2,
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 3,
        },
        FACING_TYPE: 'autospin',
        GUNS, TURRETS
    };
})();

// WINTER MAYHEM STRANGE BOSSES
exports.pumpkinEmperor = {
    PARENT: [exports.nestKeeper],
    LABEL: "Pumpkin Emperor",
    NAME: "Jack Skeleton",
    COLOR: 40,
    BODY: {
        SPEED: base.SPEED * 0.5,
    },
};

// DIEP BOSSES
exports.guardianOfThePentagons = {
    PARENT: [exports.elite],
    LABEL: "Guardian",
    FACING_TYPE: "toTarget",
    GUNS: [
        {
            POSITION: [4, 12, 1.4, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.celeslower]),
                TYPE: exports.swarm,
                AUTOFIRE: true,
            },
        },
    ],
    AI: {
        NO_LEAD: false,
    },
};
exports.defender = {
    PARENT: [exports.elite],
    LABEL: "Defender",
    COLOR: 2,
    GUNS: [
        {
            POSITION: [15, 7, 1, -3, 0, 60, 0],
        },
        {
            POSITION: [3, 7, 1.7, 12, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, -3, 0, 180, 0],
        },
        {
            POSITION: [3, 7, 1.7, 12, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, -3, 0, 300, 0],
        },
        {
            POSITION: [3, 7, 1.7, 12, 0, 300, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
                TYPE: exports.trap,
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [5, 7, 0, 0, 190, 1],
            TYPE: exports.autoTankGun,
        },
        {
            POSITION: [5, 7, 0, 120, 190, 1],
            TYPE: exports.autoTankGun,
        },
        {
            POSITION: [5, 7, 0, 240, 190, 1],
            TYPE: exports.autoTankGun,
        },
    ],
    AI: {
        NO_LEAD: false,
    },
};

// CELESTIALS
exports.celestial = {
    PARENT: [exports.miniboss],
    LABEL: "Celestial",
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    VALUE: 1e6,
    SHAPE: 9,
    LEVEL: 200,
    SIZE: 45,
    BODY: {
        FOV: 1,
        HEALTH: 1000,
        SHIELD: 2,
        REGEN: base.REGEN * 0.1,
        SPEED: 0.75,
        DAMAGE: 5,
    },
};
exports.rogueCelestial = {
    PARENT: [exports.celestial],
    LABEL: "Rogue Celestial",
    COLOR: 17,
};

// PALADIN
exports.swarmerTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Swarmer",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [14, 14, -1.2, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive]),
                TYPE: exports.hive,
            },
        },
        {
            POSITION: [15, 12, 1, 5, 0, 0, 0],
        },
    ],
};
exports.paladinDrone = {
    PARENT: [exports.drone],
    SHAPE: 5,
};
exports.paladinLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 14,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    MAX_CHILDREN: 16,
    FACING_TYPE: "autospin",
    GUNS: [
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 26, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.paladinDrone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 77, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.paladinDrone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 129, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.paladinDrone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.paladinDrone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 231, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.paladinDrone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 282, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.paladinDrone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 333, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.paladinDrone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
    ],
};
exports.paladinUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 14,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [10, 7.5, 0, 35, 160, 0],
            TYPE: [exports.swarmerTurret],
        },
        {
            POSITION: [10, 7.5, 0, 110, 160, 0],
            TYPE: [exports.swarmerTurret],
        },
        {
            POSITION: [10, 7.5, 0, 180, 160, 0],
            TYPE: [exports.swarmerTurret],
        },
        {
            POSITION: [10, 7.5, 0, 252, 160, 0],
            TYPE: [exports.swarmerTurret],
        },
        {
            POSITION: [10, 7.5, 0, 325, 160, 0],
            TYPE: [exports.swarmerTurret],
        },
    ],
};
exports.paladin = {
    PARENT: [exports.celestial],
    NAME: "Paladin",
    COLOR: 14,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [14.94, 0, 0, 0, 360, 1],
            TYPE: [exports.paladinLowerBody],
        },
        {
            POSITION: [8.6, 0, 0, 0, 360, 1],
            TYPE: [exports.paladinUpperBody],
        },
    ],
};

// FREYJA
exports.cruiserTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Cruiser",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.freyjaLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 1,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 7,
    INDEPENDENT: true,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            //*********    SIZE         X             Y         ANGLE        ARC
            POSITION: [8.5, 9, 0, 26, 180, 0],
            TYPE: [exports.cruiserTurret],
        },
        {
            POSITION: [8.5, 9, 0, 77, 180, 0],
            TYPE: [exports.cruiserTurret],
        },
        {
            POSITION: [8.5, 9, 0, 129, 180, 0],
            TYPE: [exports.cruiserTurret],
        },
        {
            POSITION: [8.5, 9, 0, 180, 180, 0],
            TYPE: [exports.cruiserTurret],
        },
        {
            POSITION: [8.5, 9, 0, 231, 180, 0],
            TYPE: [exports.cruiserTurret],
        },
        {
            POSITION: [8.5, 9, 0, 282, 180, 0],
            TYPE: [exports.cruiserTurret],
        },
        {
            POSITION: [8.5, 9, 0, 333, 180, 0],
            TYPE: [exports.cruiserTurret],
        },
    ],
};
exports.freyjaUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: 1,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            //**     SIZE         X             Y         ANGLE        ARC
            POSITION: [10.6, 7.5, 0, 35, 160, 0],
            TYPE: [exports.auto4gun],
        },
        {
            POSITION: [10.6, 7.5, 0, 110, 160, 0],
            TYPE: [exports.auto4gun],
        },
        {
            POSITION: [10.6, 7.5, 0, 180, 160, 0],
            TYPE: [exports.auto4gun],
        },
        {
            POSITION: [10.6, 7.5, 0, 252, 160, 0],
            TYPE: [exports.auto4gun],
        },
        {
            POSITION: [10.6, 7.5, 0, 325, 160, 0],
            TYPE: [exports.auto4gun],
        },
    ],
};
exports.freyja = {
    PARENT: [exports.celestial],
    NAME: "Freyja",
    COLOR: 1,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [14.77, 0, 0, 0, 360, 1],
            TYPE: [exports.freyjaLowerBody],
        },
        {
            POSITION: [8.7, 0, 0, 0, 360, 1],
            TYPE: [exports.freyjaUpperBody],
        },
    ],
};

// ZAPHKIEL
exports.zaphkielSkimmerTurret = {
    PARENT: [exports.skimmerTurret],
    COLOR: 16,
};
exports.zaphkielLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 2,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    MAX_CHILDREN: 16,
    FACING_TYPE: "autospin",
    GUNS: [
        {
            //*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY
            POSITION: [3.6, 6, 1.4, 8, 0, 26, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 77, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 129, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 231, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 282, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 333, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
    ],
};
exports.zaphkielUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 2,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [10, 7.5, 0, 35, 160, 0],
            TYPE: [exports.zaphkielSkimmerTurret],
        },
        {
            POSITION: [10, 7.5, 0, 110, 160, 0],
            TYPE: [exports.zaphkielSkimmerTurret],
        },
        {
            POSITION: [10, 7.5, 0, 180, 160, 0],
            TYPE: [exports.zaphkielSkimmerTurret],
        },
        {
            POSITION: [10, 7.5, 0, 252, 160, 0],
            TYPE: [exports.zaphkielSkimmerTurret],
        },
        {
            POSITION: [10, 7.5, 0, 325, 160, 0],
            TYPE: [exports.zaphkielSkimmerTurret],
        },
    ],
};
exports.zaphkiel = {
    PARENT: [exports.celestial],
    NAME: "Zaphkiel",
    COLOR: 2,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [14.94, 0, 0, 0, 360, 1],
            TYPE: exports.zaphkielLowerBody,
        },
        {
            POSITION: [8.6, 0, 0, 0, 360, 1],
            TYPE: exports.zaphkielUpperBody,
        },
    ],
};

// NYX
exports.rocketeerTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Rocketeer",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [10, 12.5, -0.7, 10, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.launcher,
                    g.rocketeer,
                ]),
                TYPE: exports.rocketeerMissile,
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
        {
            POSITION: [17, 18, 0.65, 0, 0, 0, 0],
        },
    ],
};
exports.nyxLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 5,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    FACING_TYPE: "autospin",
    MAX_CHILDREN: 16,
    GUNS: [
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 26, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: exports.minion,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 77, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: exports.minion,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 129, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: exports.minion,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: exports.minion,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 231, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: exports.minion,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 282, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: exports.minion,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 333, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: exports.minion,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
    ],
};
exports.nyxUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 5,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [10, 7.5, 0, 35, 160, 0],
            TYPE: [exports.rocketeerTurret],
        },
        {
            POSITION: [10, 7.5, 0, 110, 160, 0],
            TYPE: [exports.rocketeerTurret],
        },
        {
            POSITION: [10, 7.5, 0, 180, 160, 0],
            TYPE: [exports.rocketeerTurret],
        },
        {
            POSITION: [10, 7.5, 0, 252, 160, 0],
            TYPE: [exports.rocketeerTurret],
        },
        {
            POSITION: [10, 7.5, 0, 325, 160, 0],
            TYPE: [exports.rocketeerTurret],
        },
    ],
};
exports.nyx = {
    PARENT: [exports.celestial],
    NAME: "Nyx",
    COLOR: 5,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: [
                exports.trapTurret,
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: [
                exports.trapTurret,
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: [
                exports.trapTurret,
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: [
                exports.trapTurret,
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: [
                exports.trapTurret,
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: [
                exports.trapTurret,
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: [
                exports.trapTurret,
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: [
                exports.trapTurret,
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: [
                exports.trapTurret,
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [14.94, 0, 0, 0, 360, 1],
            TYPE: [exports.nyxLowerBody],
        },
        {
            POSITION: [8.6, 0, 0, 0, 360, 1],
            TYPE: [exports.nyxUpperBody],
        },
    ],
};

// THEIA
exports.theiaTwisterTurret = {
    PARENT: [exports.twisterTurret],
    COLOR: 16,
};
exports.theiaLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 35,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    FACING_TYPE: "autospin",
    MAX_CHILDREN: 35,
    GUNS: [
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 26, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: exports.summonerDrone,
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 77, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: exports.summonerDrone,
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 129, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: exports.summonerDrone,
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 180, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: exports.summonerDrone,
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 231, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: exports.summonerDrone,
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 282, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: exports.summonerDrone,
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 333, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: exports.summonerDrone,
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
    ],
};
exports.theiaUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 35,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [10, 7.5, 0, 35, 160, 0],
            TYPE: exports.theiaTwisterTurret,
        },
        {
            POSITION: [10, 7.5, 0, 110, 160, 0],
            TYPE: exports.theiaTwisterTurret,
        },
        {
            POSITION: [10, 7.5, 0, 180, 160, 0],
            TYPE: exports.theiaTwisterTurret,
        },
        {
            POSITION: [10, 7.5, 0, 252, 160, 0],
            TYPE: exports.theiaTwisterTurret,
        },
        {
            POSITION: [10, 7.5, 0, 325, 160, 0],
            TYPE: exports.theiaTwisterTurret,
        },
    ],
};
exports.theia = {
    PARENT: [exports.celestial],
    NAME: "Theia",
    COLOR: 3,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [14.94, 0, 0, 0, 360, 1],
            TYPE: [exports.theiaLowerBody],
        },
        {
            POSITION: [8.6, 0, 0, 0, 360, 1],
            TYPE: [exports.theiaUpperBody],
        },
    ],
};

// ALVISS
exports.alvissDrone = {
    PARENT: [exports.eggchip],
    NECRO: false,
};
exports.launcherTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Launcher",
    BODY: {
        FOV: 2 * base.FOV,
    },
    COLOR: 16,
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [10, 9, 1, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 13, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty]),
                TYPE: exports.minimissile,
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};
exports.alvissLowerTurret = {
    PARENT: [exports.genericTank],
    LABEL: "",
    MAX_CHILDREN: 3,
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [8.5, 11, 0.6, 6, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.sunchip]),
                TYPE: exports.alvissDrone,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.alvissLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 17,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    FACING_TYPE: "autospin",
    MAX_CHILDREN: 24,
    TURRETS: [
        {
            //*********    SIZE         X             Y         ANGLE        ARC
            POSITION: [8.5, 9, 0, 26, 180, 0],
            TYPE: [exports.alvissLowerTurret],
        },
        {
            POSITION: [8.5, 9, 0, 77, 180, 0],
            TYPE: [exports.alvissLowerTurret],
        },
        {
            POSITION: [8.5, 9, 0, 129, 180, 0],
            TYPE: [exports.alvissLowerTurret],
        },
        {
            POSITION: [8.5, 9, 0, 180, 180, 0],
            TYPE: [exports.alvissLowerTurret],
        },
        {
            POSITION: [8.5, 9, 0, 231, 180, 0],
            TYPE: [exports.alvissLowerTurret],
        },
        {
            POSITION: [8.5, 9, 0, 282, 180, 0],
            TYPE: [exports.alvissLowerTurret],
        },
        {
            POSITION: [8.5, 9, 0, 333, 180, 0],
            TYPE: [exports.alvissLowerTurret],
        },
    ],
};
exports.alvissUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: 17,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            //**     SIZE         X             Y         ANGLE        ARC
            POSITION: [10.6, 7.5, 0, 35, 160, 0],
            TYPE: [exports.launcherTurret],
        },
        {
            POSITION: [10.6, 7.5, 0, 110, 160, 0],
            TYPE: [exports.launcherTurret],
        },
        {
            POSITION: [10.6, 7.5, 0, 180, 160, 0],
            TYPE: [exports.launcherTurret],
        },
        {
            POSITION: [10.6, 7.5, 0, 252, 160, 0],
            TYPE: [exports.launcherTurret],
        },
        {
            POSITION: [10.6, 7.5, 0, 325, 160, 0],
            TYPE: [exports.launcherTurret],
        },
    ],
};
exports.alviss = {
    PARENT: [exports.rogueCelestial],
    NAME: "Alviss",
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [14.94, 0, 0, 0, 360, 1],
            TYPE: [exports.alvissLowerBody],
        },
        {
            POSITION: [8.6, 0, 0, 0, 360, 1],
            TYPE: [exports.alvissUpperBody],
        },
    ],
};

// TYR
exports.tyrLowerTurret = {
    PARENT: [exports.genericTank],
    LABEL: "",
    MAX_CHILDREN: 4,
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [8.5, 11, 0.6, 6, 0, 0, 0.5],
        },
        {
            POSITION: [3.4, 14, 1, 14.3, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.babyfactory, g.lessreload]),
                TYPE: exports.tinyMinion,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
    ],
};
exports.tyrLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 17,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    FACING_TYPE: "autospin",
    MAX_CHILDREN: 23,
    TURRETS: [
        {
            //*********    SIZE         X             Y         ANGLE        ARC
            POSITION: [8.5, 9, 0, 26, 180, 0],
            TYPE: [exports.tyrLowerTurret],
        },
        {
            POSITION: [8.5, 9, 0, 77, 180, 0],
            TYPE: [exports.tyrLowerTurret],
        },
        {
            POSITION: [8.5, 9, 0, 129, 180, 0],
            TYPE: [exports.tyrLowerTurret],
        },
        {
            POSITION: [8.5, 9, 0, 180, 180, 0],
            TYPE: [exports.tyrLowerTurret],
        },
        {
            POSITION: [8.5, 9, 0, 231, 180, 0],
            TYPE: [exports.tyrLowerTurret],
        },
        {
            POSITION: [8.5, 9, 0, 282, 180, 0],
            TYPE: [exports.tyrLowerTurret],
        },
        {
            POSITION: [8.5, 9, 0, 333, 180, 0],
            TYPE: [exports.tyrLowerTurret],
        },
    ],
};
exports.tyrUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: 17,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            //**     SIZE         X             Y         ANGLE        ARC
            POSITION: [10.6, 7.5, 0, 35, 160, 0],
            TYPE: [exports.auto4gun],
        },
        {
            POSITION: [10.6, 7.5, 0, 110, 160, 0],
            TYPE: [exports.auto4gun],
        },
        {
            POSITION: [10.6, 7.5, 0, 180, 160, 0],
            TYPE: [exports.auto4gun],
        },
        {
            POSITION: [10.6, 7.5, 0, 252, 160, 0],
            TYPE: [exports.auto4gun],
        },
        {
            POSITION: [10.6, 7.5, 0, 325, 160, 0],
            TYPE: [exports.auto4gun],
        },
    ],
};
exports.tyr = {
    PARENT: [exports.rogueCelestial],
    NAME: "Tyr",
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: [exports.trapTurret, { INDEPENDENT: true }],
        },
        {
            POSITION: [14.94, 0, 0, 0, 360, 1],
            TYPE: [exports.tyrLowerBody],
        },
        {
            POSITION: [8.6, 0, 0, 0, 360, 1],
            TYPE: [exports.tyrUpperBody],
        },
    ],
};

// DOMINATORS
exports.dominationBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { startAngle: Math.PI / 2, speed: 0, independent: true }]],
    COLOR: 9,
    SHAPE: 6,
    INDEPENDENT: true,
};
exports.dominator = {
    PARENT: [exports.genericTank],
    LABEL: "Dominator",
    DANGER: 10,
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        str: 1,
        spd: 1,
    }),
    LEVEL: -1,
    BODY: {
        RESIST: 100,
        SPEED: 1.32,
        ACCELERATION: 0.8,
        HEALTH: 590,
        DAMAGE: 6,
        PENETRATION: 0.25,
        FOV: 1,
        PUSHABILITY: 0,
        HETERO: 0,
        SHIELD: base.SHIELD * 1.4,
    },
    CONTROLLERS: ["nearestDifferentMaster"],
    DISPLAY_NAME: true,
    TURRETS: [
        {
            POSITION: [22, 0, 0, 0, 360, 0],
            TYPE: exports.dominationBody,
        },
    ],
    CAN_BE_ON_LEADERBOARD: false,
    GIVE_KILL_MESSAGE: false,
    ACCEPTS_SCORE: false,
    HITS_OWN_TYPE: "pushOnlyTeam",
};
exports.destroyerDominator = {
    PARENT: [exports.dominator],
    GUNS: [
        {
            POSITION: [15.25, 6.75, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.destroyerDominator]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [5, 6.75, -1.6, 6.75, 0, 0, 0],
        },
    ],
};
exports.gunnerDominator = {
    PARENT: [exports.dominator],
    GUNS: [
        {
            POSITION: [14.25, 3, 1, 0, -2, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [14.25, 3, 1, 0, 2, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [15.85, 3, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0],
        },
    ],
};
exports.trapperDominator = {
    PARENT: [exports.dominator],
    FACING_TYPE: "autospin",
    CONTROLLERS: ["alwaysFire"],
    GUNS: [
        {
            POSITION: [4, 3.75, 1, 8, 0, 0, 0],
        },
        {
            POSITION: [1.25, 3.75, 1.7, 12, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
                TYPE: exports.trap,
            },
        },
        {
            POSITION: [4, 3.75, 1, 8, 0, 45, 0],
        },
        {
            POSITION: [1.25, 3.75, 1.7, 12, 0, 45, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
                TYPE: exports.trap,
            },
        },
        {
            POSITION: [4, 3.75, 1, 8, 0, 90, 0],
        },
        {
            POSITION: [1.25, 3.75, 1.7, 12, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
                TYPE: exports.trap,
            },
        },
        {
            POSITION: [4, 3.75, 1, 8, 0, 135, 0],
        },
        {
            POSITION: [1.25, 3.75, 1.7, 12, 0, 135, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
                TYPE: exports.trap,
            },
        },
        {
            POSITION: [4, 3.75, 1, 8, 0, 180, 0],
        },
        {
            POSITION: [1.25, 3.75, 1.7, 12, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
                TYPE: exports.trap,
            },
        },
        {
            POSITION: [4, 3.75, 1, 8, 0, 225, 0],
        },
        {
            POSITION: [1.25, 3.75, 1.7, 12, 0, 225, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
                TYPE: exports.trap,
            },
        },
        {
            POSITION: [4, 3.75, 1, 8, 0, 270, 0],
        },
        {
            POSITION: [1.25, 3.75, 1.7, 12, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
                TYPE: exports.trap,
            },
        },
        {
            POSITION: [4, 3.75, 1, 8, 0, 315, 0],
        },
        {
            POSITION: [1.25, 3.75, 1.7, 12, 0, 315, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
                TYPE: exports.trap,
            },
        },
    ],
};

// MISCELLANEOUS TANKS
exports.baseProtector = {
    PARENT: [exports.genericTank],
    LABEL: "Base",
    SIZE: 64,
    DAMAGE_CLASS: 0,
    ACCEPTS_SCORE: false,
    CAN_BE_ON_LEADERBOARD: false,
    IGNORED_BY_AI: true,
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        spd: 1,
        str: 1,
    }),
    BODY: {
        SPEED: 0,
        HEALTH: 1e4,
        DAMAGE: 10,
        PENETRATION: 0.25,
        SHIELD: 1e3,
        REGEN: 100,
        FOV: 1,
        PUSHABILITY: 0,
        HETERO: 0,
    },
    FACING_TYPE: "autospin",
    HITS_OWN_TYPE: "pushOnlyTeam",
    TURRETS: [
        {
            POSITION: [25, 0, 0, 0, 360, 0],
            TYPE: exports.dominationBody,
        },
        {
            POSITION: [12, 7, 0, 45, 100, 0],
            TYPE: exports.baseSwarmTurret,
        },
        {
            POSITION: [12, 7, 0, 135, 100, 0],
            TYPE: exports.baseSwarmTurret,
        },
        {
            POSITION: [12, 7, 0, 225, 100, 0],
            TYPE: exports.baseSwarmTurret,
        },
        {
            POSITION: [12, 7, 0, 315, 100, 0],
            TYPE: exports.baseSwarmTurret,
        },
    ],
    GUNS: [
        {
            POSITION: [4.5, 11.5, -1.3, 6, 0, 45, 0],
        },
        {
            POSITION: [4.5, 11.5, -1.3, 6, 0, 135, 0],
        },
        {
            POSITION: [4.5, 11.5, -1.3, 6, 0, 225, 0],
        },
        {
            POSITION: [4.5, 11.5, -1.3, 6, 0, 315, 0],
        },
        {
            POSITION: [4.5, 8.5, -1.5, 7, 0, 45, 0],
        },
        {
            POSITION: [4.5, 8.5, -1.5, 7, 0, 135, 0],
        },
        {
            POSITION: [4.5, 8.5, -1.5, 7, 0, 225, 0],
        },
        {
            POSITION: [4.5, 8.5, -1.5, 7, 0, 315, 0],
        },
    ],
};
exports.mothership = {
    PARENT: [exports.genericTank],
    LABEL: "Mothership",
    DANGER: 10,
    SIZE: exports.genericTank.SIZE * (7 / 3),
    SHAPE: 16,
    STAT_NAMES: statnames.drone,
    VALUE: 5e5,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    BODY: {
        REGEN: 0,
        FOV: 1,
        SHIELD: 0,
        ACCEL: 0.2,
        SPEED: 0.3,
        HEALTH: 2000,
        PUSHABILITY: 0.15,
        DENSITY: 0.2,
        DAMAGE: 1.5,
    },
    HITS_OWN_TYPE: "pushOnlyTeam",
    GUNS: (() => {
        let e = [],
            T = [1];
        for (let e = 1; e < 8.5; e += 0.5) {
            let t = e / 16;
            T.push(t);
        }
        for (let t = 0; t < 16; t++) {
            let S = 22.5 * (t + 1),
                E = {
                    MAX_CHILDREN: 2,
                    SHOOT_SETTINGS: combineStats([g.drone, g.over, g.mothership]),
                    TYPE: exports.drone,
                    AUTOFIRE: true,
                    SYNCS_SKILLS: true,
                    STAT_CALCULATOR: gunCalcNames.drone,
                    WAIT_TO_CYCLE: true,
                };
            t % 2 == 0 &&
                (E.TYPE = [
                    exports.drone,
                    {
                        AI: {
                            skynet: true,
                        },
                        INDEPENDENT: true,
                        LAYER: 10,
                        BODY: {
                            FOV: 2,
                        },
                    },
                ]);
            let O = {
                POSITION: [4.3, 3.1, 1.2, 8, 0, S, T[t]],
                PROPERTIES: E,
            };
            e.push(O);
        }
        return e;
    })(),
};
exports.arenaCloser = {
    PARENT: [exports.genericTank],
    LABEL: "Arena Closer",
    NAME: "Arena Closer",
    DANGER: 10,
    SIZE: 34,
    COLOR: 3,
    LAYER: 13,
    BODY: {
        REGEN: 1e5,
        HEALTH: 1e6,
        DENSITY: 30,
        DAMAGE: 1e5,
        FOV: 1.15,
        SPEED: 8,
    },
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        str: 1,
        spd: 1,
        atk: 1,
        hlt: 1,
        shi: 1,
        rgn: 1,
        mob: 1,
    }),
    DRAW_HEALTH: false,
    HITS_OWN_TYPE: "never",
    ARENA_CLOSER: true,
    GUNS: [
        {
            POSITION: [14, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.closer]),
                TYPE: [
                    exports.bullet,
                    {
                        LAYER: 12,
                    },
                ],
            },
        },
    ],
};

// BOTS
exports.bot = {
    FACING_TYPE: "looseToTarget",
    NAME: "_ai_",
    CONTROLLERS: ["nearestDifferentMaster", "mapAltToFire", "minion", "fleeAtLowHealth", ["mapFireToAlt", { onlyIfHasAltFireGun: true }], ["wanderAroundMap", { immitatePlayerMovement: true, lookAtGoal: true }]],
};

// SCORE KEEPING
exports.tagMode = {
    PARENT: [exports.bullet],
    LABEL: "Players",
};

// ARRAS DISCORD BOSS CONTEST SUBMISSION
exports.dreadnoughtDrone = {
    PARENT: [exports.minion],
    LABEL: "Dreadnought",
    BODY: {
        FOV: base.FOV * 1.2,
        HEALTH: base.HEALTH * 0.4,
        SHIELD: base.SHIELD * 0.4,
        DENSITY: base.DENSITY * 0.3,
    },
    TURRETS: [
        {
            /*    SIZE         X             Y         ANGLE        ARC */
            POSITION: [20, -4, 0, 0, 0, 0],
            TYPE: exports.genericEntity,
        },
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 8, 1, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [6, 16, 1, 16, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.fake]),
                TYPE: exports.swarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [1, 3, 1, 3, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                    g.thruster,
                    [0.1, 3, 1, 1, 1, 1, 1, 1, 1, 0.075, 1, 2, 1],
                ]),
                TYPE: exports.bullet,
            },
        },
    ],
};
exports.ironclad = {
    PARENT: [exports.miniboss],
    LABEL: "Ironclad",
    COLOR: 17,
    SHAPE: 3,
    SIZE: 27,
    VARIES_IN_SIZE: true,
    VALUE: 15e4,
    BODY: {
        FOV: 1.25,
        SPEED: 0.1 * base.SPEED,
        HEALTH: 150,
        DAMAGE: 2.5 * base.DAMAGE,
    },
    FACING_TYPE: "toTarget",
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [4, 6, 0.6, 7, 9, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 3, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, -3, 60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, -9, 60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 9, -60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 3, -60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, -3, -60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, -9, -60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            /**** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [4.5, 14, 1, 9.5, 0, 180, 0],
        },
        {
            POSITION: [2, 16, 1, 13, 0, 180, 0],
            PROPERTIES: {
                MAX_CHILDREN: 3,
                SHOOT_SETTINGS: combineStats([
                    g.factory,
                    g.babyfactory,
                    [1, 1, 1, 0.75, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                ]),
                TYPE: exports.dreadnoughtDrone,
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [10.5, 16, 1, 0, 0, 180, 0],
        },
    ],
    TURRETS: [
        {
            /*    SIZE         X             Y         ANGLE        ARC */
            POSITION: [7, 5, 0, 0, 360, 1],
            TYPE: [
                exports.bigauto4gun,
                {
                    INDEPENDENT: true,
                    COLOR: 17,
                },
            ],
        },
        {
            POSITION: [5, 7, 4.5, 90, 360, 1],
            TYPE: [
                exports.autoTankGun,
                {
                    INDEPENDENT: true,
                    COLOR: 17,
                },
            ],
        },
        {
            POSITION: [5, 7, -4.5, 270, 360, 1],
            TYPE: [
                exports.autoTankGun,
                {
                    INDEPENDENT: true,
                    COLOR: 17,
                },
            ],
        },
    ],
};
exports.ironcladOld = {
    PARENT: [exports.miniboss],
    LABEL: "Old Ironclad",
    COLOR: 17,
    SHAPE: 3,
    SIZE: 27,
    VARIES_IN_SIZE: true,
    VALUE: 15e4,
    BODY: {
        FOV: 1.25,
        SPEED: 0.1 * base.SPEED,
        HEALTH: 150,
        DAMAGE: 2.5 * base.DAMAGE,
    },
    FACING_TYPE: "toTarget",
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [4, 6, 0.6, 7, 4, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, -4, 60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 4, -60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, -4, -60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            /**** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [4.5, 14, 1, 9.5, 0, 180, 0],
        },
        {
            POSITION: [2, 16, 1, 13, 0, 180, 0],
            PROPERTIES: {
                MAX_CHILDREN: 3,
                SHOOT_SETTINGS: combineStats([
                    g.factory,
                    g.babyfactory,
                    [1, 1, 1, 0.75, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                ]),
                TYPE: exports.dreadnoughtDrone,
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [10.5, 16, 1, 0, 0, 180, 0],
        },
    ],
    TURRETS: [
        {
            /*    SIZE         X             Y         ANGLE        ARC */
            POSITION: [7, 5, 0, 0, 360, 1],
            TYPE: [
                exports.bigauto4gun,
                {
                    INDEPENDENT: true,
                    COLOR: 17,
                },
            ],
        },
        {
            POSITION: [5, 7, 4.5, 90, 360, 1],
            TYPE: [
                exports.autoTankGun,
                {
                    INDEPENDENT: true,
                    COLOR: 17,
                },
            ],
        },
        {
            POSITION: [5, 7, -4.5, 270, 360, 1],
            TYPE: [
                exports.autoTankGun,
                {
                    INDEPENDENT: true,
                    COLOR: 17,
                },
            ],
        },
    ],
};
exports.classicIronclad = {
    PARENT: [exports.miniboss],
    LABEL: "Ironclad",
    COLOR: 17,
    SHAPE: [
        [-1, -1],
        [1, -1],
        [2, 0],
        [1, 1],
        [-1, 1],
    ],
    SIZE: 27,
    VARIES_IN_SIZE: true,
    VALUE: 15e4,
    BODY: {
        FOV: 1.25,
        SPEED: 0.1 * base.SPEED,
        HEALTH: 150,
        DAMAGE: 2.5 * base.DAMAGE,
    },
    FACING_TYPE: "toTarget",
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [4, 6, 0.6, 9, -4.5, 90, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 9, 4.5, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 9, -4.5, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 9, 4.5, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 13, -4, 45, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 13, 4, -45, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 13, -10, 45, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 13, 10, -45, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: exports.autoswarm,
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            /**** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [4.5, 14, 1, 10.5, 0, 180, 0],
        },
        {
            POSITION: [2, 16, 1, 14, 0, 180, 0],
            PROPERTIES: {
                MAX_CHILDREN: 3,
                SHOOT_SETTINGS: combineStats([
                    g.factory,
                    g.babyfactory,
                    [1, 1, 1, 0.75, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                ]),
                TYPE: exports.dreadnoughtDrone,
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 16, 1, 0, 0, 180, 0],
        },
    ],
    TURRETS: [
        {
            /*    SIZE         X             Y         ANGLE        ARC */
            POSITION: [7, 11, 0, 0, 360, 1],
            TYPE: [
                exports.bigauto4gun,
                {
                    INDEPENDENT: true,
                    COLOR: 17,
                },
            ],
        },
        {
            POSITION: [5, 7, 4.5, 90, 360, 1],
            TYPE: [
                exports.autoTankGun,
                {
                    INDEPENDENT: true,
                    COLOR: 17,
                },
            ],
        },
        {
            POSITION: [5, 7, -4.5, 90, 360, 1],
            TYPE: [
                exports.autoTankGun,
                {
                    INDEPENDENT: true,
                    COLOR: 17,
                },
            ],
        },
        {
            POSITION: [5, 7, 4.5, 270, 360, 1],
            TYPE: [
                exports.autoTankGun,
                {
                    INDEPENDENT: true,
                    COLOR: 17,
                },
            ],
        },
        {
            POSITION: [5, 7, -4.5, 270, 360, 1],
            TYPE: [
                exports.autoTankGun,
                {
                    INDEPENDENT: true,
                    COLOR: 17,
                },
            ],
        },
    ],
};

// GENERATOR-SPECIFIC POLYGONS
exports.spawnedEgg = {
    PARENT: [exports.genericEntity],
    LABEL: "Egg",
    VALUE: 10,
    SHAPE: 0,
    SIZE: 5,
    COLOR: 6,
    BODY: {
        DAMAGE: 0,
        DENSITY: 2,
        HEALTH: 0.0011,
        PUSHABILITY: 0,
    },
    DRAW_HEALTH: false,
    INTANGIBLE: true,
    MOTION_TYPE: "drift",
    FACING_TYPE: "turnWithSpeed",
};
exports.spawnedSquare = {
    PARENT: [exports.genericEntity],
    LABEL: "Square",
    VALUE: 30,
    SHAPE: 4,
    SIZE: 10,
    COLOR: 13,
    BODY: {
        DAMAGE: basePolygonDamage,
        DENSITY: 4,
        HEALTH: basePolygonHealth,
        PENETRATION: 2,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
    MOTION_TYPE: "drift",
    FACING_TYPE: "turnWithSpeed",
};
exports.spawnedAlphaPentagon = {
    PARENT: [exports.genericEntity],
    LABEL: "Alpha Pentagon",
    VALUE: 15e3,
    SHAPE: 5,
    SIZE: 58,
    COLOR: 14,
    BODY: {
        DAMAGE: 2 * basePolygonDamage,
        DENSITY: 80,
        HEALTH: 300 * basePolygonHealth,
        RESIST: Math.pow(1.25, 3),
        SHIELD: 40 * basePolygonHealth,
        REGEN: 0.6,
    },
    DRAW_HEALTH: true,
    MOTION_TYPE: "drift",
    FACING_TYPE: "turnWithSpeed",
};

// GENERATORS
exports.generatorBase = {
    PARENT: [exports.genericTank],
    SKILL_CAP: [15, 0, 0, 0, 0, 0, 0, 0, 0, 15],
    INVISIBLE: [0.01, 0.1],
};
exports.eggGenerator = {
    PARENT: [exports.generatorBase],
    LABEL: "Egg Generator",
    COLOR: 6,
    TURRETS: [
        {
            /*    SIZE         X             Y         ANGLE        ARC */
            POSITION: [5, 0, 0, 0, 0, 1],
            TYPE: [exports.egg, { COLOR: 6 }],
        },
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [14, 12, 1, 4, 0, 0, 0],
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [12, 12, 1.4, 4, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.micro]),
                TYPE: exports.spawnedEgg,
                LABEL: "Spawned",
            },
        },
    ],
};
exports.squareGenerator = {
    PARENT: [exports.generatorBase],
    LABEL: "Square Generator",
    COLOR: 13,
    SHAPE: 4,
    TURRETS: [
        {
            /*    SIZE         X             Y         ANGLE        ARC */
            POSITION: [8, 0, 0, 0, 0, 1],
            TYPE: [exports.square, { COLOR: 13 }],
        },
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [14, 12, 1, 4, 0, 0, 0],
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [12, 12, 1.4, 4, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.small]),
                TYPE: exports.spawnedSquare,
                LABEL: "Spawned",
            },
        },
    ],
};
exports.alphaPentagonGenerator = {
    PARENT: [exports.generatorBase],
    LABEL: "Alpha Pentagon Generator",
    COLOR: 14,
    SHAPE: 5,
    TURRETS: [
        {
            /*    SIZE         X             Y         ANGLE        ARC */
            POSITION: [14, 0, 0, 0, 0, 1],
            TYPE: [exports.alphaPentagon, { COLOR: 14 }],
        },
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [14, 12, 1, 4, 0, 0, 0],
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [12, 12, 1.4, 4, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.small]),
                TYPE: exports.spawnedAlphaPentagon,
                LABEL: "Spawned",
            },
        },
    ],
};
exports.crasherGenerator = {
    PARENT: [exports.generatorBase],
    LABEL: "Crasher Generator",
    COLOR: 5,
    SHAPE: 3,
    TURRETS: [
        {
            /*    SIZE         X             Y         ANGLE        ARC */
            POSITION: [5, 0, 0, 0, 0, 1],
            TYPE: [exports.crasher, { COLOR: 5 }],
        },
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [14, 12, 1, 4, 0, 0, 0],
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [12, 12, 1.4, 4, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.micro]),
                TYPE: exports.crasher,
                LABEL: "Spawned",
            },
        },
    ],
};

exports.diamondShape = {
    PARENT: [exports.basic],
    LABEL: "Diamond Test Shape",
    SHAPE: 4.5
};

exports.rotatedTrap = {
    PARENT: [exports.basic],
    LABEL: "Rotated Trap Test Shape",
    SHAPE: -3.5
};

exports.mummyHat = {
    SHAPE: 4.5,
    COLOR: 10
};
exports.mummy = {
    PARENT: [exports.drone],
    SHAPE: 4,
    TURRETS: [{
        POSITION: [20 * Math.SQRT1_2, 0, 0, 180, 360, 1],
        TYPE: [exports.mummyHat]
    }]
};
exports.mummifier = {
    PARENT: [exports.genericTank],
    LABEL: "Mummifier",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    SHAPE: 4,
    MAX_CHILDREN: 10,
    GUNS: [{
        POSITION: [5.5, 13, 1.1, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.mummy,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }, {
        POSITION: [5.5, 13, 1.1, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: exports.mummy,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }],
    TURRETS: [{
        POSITION: [20 * Math.SQRT1_2, 0, 0, 180, 360, 1],
        TYPE: [exports.mummyHat]
    }]
};

exports.onlySquare = { SHAPE: 4 };
exports.colorMan = {
    PARENT: [exports.genericTank],
    LABEL: "Testing Animated Colors",
    SHAPE: 4,
    COLOR: 36,
    TURRETS: [{
        POSITION: [20, -20, -20, 0, 0, 1],
        TYPE: [exports.onlySquare, { COLOR: 20 }]
    }, {
        POSITION: [20, 0, -20, 0, 0, 1],
        TYPE: [exports.onlySquare, { COLOR: 21 }]
    }, {
        POSITION: [20, 20, -20, 0, 0, 1],
        TYPE: [exports.onlySquare, { COLOR: 22 }]
    }, {
        POSITION: [20, -20, 0, 0, 0, 1],
        TYPE: [exports.onlySquare, { COLOR: 23 }]
    }, {
        POSITION: [20, 20, 0, 0, 0, 1],
        TYPE: [exports.onlySquare, { COLOR: 29 }]
    }, {
        POSITION: [20, 20, 20, 0, 0, 1],
        TYPE: [exports.onlySquare, { COLOR: 24 }]
    }, {
        POSITION: [20, 0, 20, 0, 0, 1],
        TYPE: [exports.onlySquare, { COLOR: 37 }]
    }, {
        POSITION: [20, 20, 20, 0, 0, 1],
        TYPE: [exports.onlySquare, { COLOR: 38 }]
    }]
};

exports.seventeenagon = {
    PARENT: [exports.genericTank],
    LABEL: "Seventeenagon",
    SHAPE: 17
};

exports.aimToCursorMan = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret Faces Client Test',
    SHAPE: 4,
    COLOR: 36,
    TURRETS: [{
        POSITION: [15, 0, 0, 0, 0, 1],
        TYPE: [exports.onlySquare, {
            COLOR: Math.floor(Math.random() * 38),
            TURRET_FACES_CLIENT: true,
        }]
    }, {
        POSITION: [15, 0, 20, 0, 0, 1],
        TYPE: [exports.onlySquare, {
            COLOR: Math.floor(Math.random() * 38),
            TURRET_FACES_CLIENT: true,
        }]
    }, {
        POSITION: [15, 0, -20, 0, 0, 1],
        TYPE: [exports.onlySquare, {
            COLOR: Math.floor(Math.random() * 38),
            TURRET_FACES_CLIENT: true,
        }]
    }]
}

exports.miscTestHelper2 = {
    PARENT: [exports.genericTank],
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.noRandom]),
                TYPE: exports.bullet,
            },
        },
    ],
}
exports.miscTestHelper = {
    PARENT: [exports.genericTank],
    COLOR: {
        BASE: -1,
        BRIGHTNESS_SHIFT: 15,
    },
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.noRandom]),
                TYPE: exports.bullet,
                COLOR: -1,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [20, 0, 20, 0, 0, 1],
            TYPE: exports.miscTestHelper2,
        }
    ]
}
exports.miscTest = {
    PARENT: [exports.genericTank],
    LABEL: "Turret Reload Test",
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.noRandom]),
                TYPE: exports.bullet,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [20, 0, 20, 0, 0, 1],
            TYPE: exports.miscTestHelper,
        }
    ]
}

exports.rainbowclone = {
    PARENT: [exports.genericTank],
    LABEL: "Rainbowclone",
    COLOR: {
        BASE: 0,
        SATURATION_SHIFT: 1.5,
    },
    DANGER: 7,
    LEVEL: 45,
    GUNS: [],
};
for (let i = 0; i < 12; i++) {
    let delay;
    switch (i % 4) {
        case 0:
            delay = 0;
            break;
        case 1:
            delay = 0.5;
            break;
        case 2:
            delay = 0.25;
            break;
        case 3:
            delay = 0.75;
            break;
    }
    exports.rainbowclone.GUNS.push(
        {
            POSITION: [15, 3.5, 1, 0, 0, 30 * i, delay],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: exports.bullet,
                COLOR: {
                    BASE: 0, // ID
                    HUE_SHIFT: 20 * i, // Additive, degrees
                    SATURATION_SHIFT: 1, // Multiplicative
                    BRIGHTNESS_SHIFT: 0, // Additive, ranges from -100 to 100
                    ALLOW_BRIGHTNESS_INVERT: true, // Toggles offset invert if exceeding normal color bounds
                },
            },
        },
    )
}

exports.auraBasic = {
    PARENT: [exports.genericTank],
    LABEL: "Aura Basic",
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: exports.bullet,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [14, 0, 0, 0, 0, 1],
            TYPE: addAura(1, 1),
        }
    ]
};
exports.auraHealer = {
    PARENT: [exports.genericTank],
    LABEL: "Aura Healer",
    TURRETS: [
        {
            /** SIZE         X             Y         ANGLE        ARC */
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: exports.healerSymbol,
        },
        {
            POSITION: [14, 0, 0, 0, 0, 1],
            TYPE: addAura(-1, 1, 12),
        }
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
                TYPE: exports.healerBullet,
            },
        },
    ],
};

// JOKE TANKS
exports.wifeBeater = {
    PARENT: [exports.genericTank],
    LABEL: "Wife Beater",
    DANGER: 8,
    COLOR: 33,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    MAX_CHILDREN: 16,
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: exports.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
    ],
};
exports.CONQ = {
    PARENT: [exports.genericTank],
    LABEL: "CONQ!!!",
    DANGER: 8,
    COLOR: 25,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    GUNS: [
        {
            POSITION: [20.5, 19.5, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
                TYPE: exports.bullet,
            },
        },
        {
            POSITION: [18, 18, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 18, 1.2, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
                TYPE: exports.setTrap,
            },
        },
    ],
};
exports.armyOfOneBullet = {
    PARENT: [exports.bullet],
    LABEL: "Unstoppable",
    TURRETS: [
        {
            /** SIZE         X             Y         ANGLE        ARC */
            POSITION: [18.5, 0, 0, 0, 360, 0],
            TYPE: [exports.spikeBody, { COLOR: null }],
        },
        {
            POSITION: [18.5, 0, 0, 180, 360, 0],
            TYPE: [exports.spikeBody, { COLOR: null }],
        },
    ],
};
exports.armyOfOne = {
    PARENT: [exports.genericTank],
    LABEL: "Army Of One",
    DANGER: 9,
    SKILL_CAP: [31, 31, 31, 31, 31, 31, 31, 31, 31, 31],
    BODY: {
        SPEED: 0.5 * base.SPEED,
        FOV: 1.8 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [21, 19, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.destroy, g.destroy, g.destroy, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.doublereload, g.doublereload, g.doublereload, g.doublereload]),
                TYPE: exports.armyOfOneBullet,
            },
        }, {
            POSITION: [21, 11, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.destroy, g.destroy, g.destroy, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.doublereload, g.doublereload, g.doublereload, g.doublereload, g.fake]),
                TYPE: exports.bullet,
            },
        }
    ],
};
exports.godbasic = {
    PARENT: [exports.genericTank],
    LABEL: "God Basic",
    SKILL_CAP: [31, 31, 31, 31, 31, 31, 31, 31, 31, 31],
    SKILL: [31, 31, 31, 31, 31, 31, 31, 31, 31, 31],
    BODY: {
        ACCELERATION: base.ACCEL * 1,
        SPEED: base.SPEED * 1,
        HEALTH: base.HEALTH * 1,
        DAMAGE: base.DAMAGE * 1,
        PENETRATION: base.PENETRATION * 1,
        SHIELD: base.SHIELD * 1,
        REGEN: base.REGEN * 1,
        FOV: base.FOV * 1,
        DENSITY: base.DENSITY * 1,
        PUSHABILITY: 1,
        HETERO: 3,
    },
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: exports.bullet,
                COLOR: 16,
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false,
            },
        },
    ],
};

exports.levels = {
    PARENT: [exports.testbedBase],
    LABEL: "Levels",
    UPGRADES_TIER_0: [exports.developer]
};
for (let i = 0; i < 186; i += c.TIER_MULTIPLIER) { //c.MAX_UPGRADE_TIER is irrelevant
    let LEVEL = i;
    exports["level" + LEVEL] = {
        PARENT: [exports.levels],
        LEVEL,
        LABEL: "Level " + LEVEL
    };
    exports.levels.UPGRADES_TIER_0.push(exports["level" + LEVEL]);
}

exports.teams = {
    PARENT: [exports.testbedBase],
    LABEL: "Teams",
    UPGRADES_TIER_0: [exports.developer]
};
for (let i = 1; i <= c.TEAMS; i++) { //c.MAX_UPGRADE_TIER is irrelevant
    let TEAM = i;
    exports["Team" + TEAM] = {
        PARENT: [exports.teams],
        TEAM: -TEAM,
        COLOR: getTeamColor(-TEAM),
        LABEL: "Team " + getTeamName(-TEAM)
    };
    exports.teams.UPGRADES_TIER_0.push(exports["Team" + TEAM]);
}
exports.Team100 = {
    PARENT: [exports.teams],
    TEAM: TEAM_ENEMIES,
    COLOR: 3,
    LABEL: "Boss Team"
};
exports.Team101 = {
    PARENT: [exports.teams],
    TEAM: TEAM_ROOM,
    COLOR: 3,
    LABEL: "Arena Closer Team"
};
exports.teams.UPGRADES_TIER_0.push(exports.Team101);

// TOKEN "UPGRADE PATHS"
exports.developer.UPGRADES_TIER_0 = [exports.healer, exports.basic, exports.lancer, exports.gameAdminMenu, exports.spectator, exports.eggGenerator, exports.specialTanksMenu, exports.bossesMenu, exports.memes, exports.retrograde, exports.miscEntities, exports.dominators, exports.levels, exports.teams];
    exports.gameAdminMenu.UPGRADES_TIER_0 = [exports.basic, exports.gameModMenu, exports.spectator, exports.eggGenerator, exports.developer, exports.specialTanksMenu, exports.bossesMenu, exports.memes];
        exports.memes.UPGRADES_TIER_0 = [exports.vanquisher, exports.armyOfOne, exports.godbasic, exports.diamondShape, exports.rotatedTrap, exports.mummifier, exports.colorMan, exports.seventeenagon, exports.aimToCursorMan, exports.miscTest, exports.rainbowclone, exports.auraBasic, exports.auraHealer];
        exports.gameModMenu.UPGRADES_TIER_0 = [exports.basic, exports.betaTesterMenu, exports.spectator, exports.tankChangesMenu, exports.retrograde];
            exports.betaTesterMenu.UPGRADES_TIER_0 = [exports.basic, exports.tankChangesMenu, exports.retrograde];
                exports.tankChangesMenu.UPGRADES_TIER_0 = [];
    exports.eggGenerator.UPGRADES_TIER_0 = [exports.basic, exports.squareGenerator, exports.crasherGenerator];
        exports.crasherGenerator.UPGRADES_TIER_0 = [exports.basic, exports.gameAdminMenu, exports.alphaPentagonGenerator, exports.eggGenerator];
    exports.bossesMenu.UPGRADES_TIER_0 = [exports.sentries, exports.celestialBosses, exports.eliteBosses, exports.strangeBosses, exports.ironclad];
        exports.sentries.UPGRADES_TIER_0 = [exports.sentrySwarm, exports.sentryGun, exports.sentryTrap, exports.shinySentrySwarm, exports.shinySentryGun, exports.shinySentryTrap];
    exports.retrograde.UPGRADES_TIER_0 = [exports.diepTanks, exports.digDig, exports.celestialBosses, exports.eliteBosses, exports.strangeBosses, exports.nostalgiaMenu, exports.scrappedMenu, exports.miscRetrograde];
        exports.diepTanks.UPGRADES_TIER_0 = [exports.diep2Tanks, exports.diepTank];
            exports.diep2Tanks.UPGRADES_TIER_0 = [exports.blaster, exports.gatlingGun, exports.machineFlank, exports.retroRifle, exports.buttbuttin, exports.blower, exports.quadTwin, exports.tornado, exports.subverter, exports.battery, exports.deathStar, exports.bonker, exports.protector, exports.doubleTrapGuard];
                exports.blaster.UPGRADES_TIER_3 = [exports.triBlaster, exports.splasher];
                exports.gatlingGun.UPGRADES_TIER_3 = [exports.retroSprayer, exports.accurator, exports.halfNHalf];
                exports.machineFlank.UPGRADES_TIER_3 = [exports.machineTriple, exports.halfNHalf];
                exports.retroRifle.UPGRADES_TIER_3 = [exports.sniperRifle, exports.rifleGuard, exports.spreadRifle];
        exports.celestialBosses.UPGRADES_TIER_0 = [exports.paladin, exports.freyja, exports.zaphkiel, exports.nyx, exports.theia, exports.alviss, exports.tyr];
        exports.eliteBosses.UPGRADES_TIER_0 = [exports.eliteDestroyer, exports.eliteGunner, exports.eliteSprayer, exports.eliteBattleship, exports.eliteSpawner];
        exports.strangeBosses.UPGRADES_TIER_0 = [exports.roguePalisade, exports.rogueArmada, exports.nestKeeper, exports.eliteSkimmer, exports.summoner];
        exports.nostalgiaMenu.UPGRADES_TIER_0 = [exports.oldSpreadshot, exports.bentBoomer, exports.quadBuilder, exports.quintuplet, exports.vulcan, exports.sniper3, exports.weirdSpike, exports.master, exports.oldCommander, exports.blunderbuss, exports.oldRimfire, exports.ransacker];
        exports.scrappedMenu.UPGRADES_TIER_0 = [exports.scrappedMenu2, exports.rocketeer, exports.crowbar, exports.peashooter, exports.autoTrapper, exports.megaTrapper, exports.railgun, exports.megaSpawner, exports.badDreadnought, exports.mender];
            exports.scrappedMenu2.UPGRADES_TIER_0 = [exports.scrappedMenu, exports.overcheese, exports.prodigy, exports.spawnerdrive, exports.rimfire, exports.productionist, exports.vulture];
                exports.productionist.UPGRADES_TIER_0 = [exports.bismarck];
        exports.miscRetrograde.UPGRADES_TIER_0 = [exports.tracker3, exports.tetraGunner, exports.worstTank];

// MISCELLANEOUS
exports.miscEntities.UPGRADES_TIER_0 = [exports.dominators, exports.baseProtector, exports.mothership, exports.arenaCloser];
exports.dominators.UPGRADES_TIER_0 = [exports.dominator, exports.destroyerDominator, exports.gunnerDominator, exports.trapperDominator];

// TANK UPGRADE PATHS
exports.basic.UPGRADES_TIER_1 = [exports.twin, exports.sniper, exports.machineGun, exports.flankGuard, exports.director, exports.pounder, exports.trapper, exports.uzi];
exports.basic.UPGRADES_TIER_2 = [c.SPECIAL_BOSS_SPAWNS ? exports.healer : exports.smasher];
exports.basic.UPGRADES_TIER_3 = [exports.single];
exports.healer.UPGRADES_TIER_3 = [exports.medic, exports.ambulance, exports.surgeon, exports.paramedic];
exports.smasher.UPGRADES_TIER_3 = [exports.megaSmasher, exports.spike, exports.autoSmasher, exports.landmine];

exports.twin.UPGRADES_TIER_2 = [exports.doubleTwin, exports.tripleShot, exports.gunner, exports.hexaTank];
exports.twin.UPGRADES_TIER_3 = [exports.dual, exports.bulwark, exports.musket];
exports.doubleTwin.UPGRADES_TIER_3 = [exports.tripleTwin, exports.hewnDouble, exports.autoDouble, exports.bentDouble];
exports.tripleShot.UPGRADES_TIER_3 = [exports.pentaShot, exports.spreadshot, exports.bentHybrid, exports.bentDouble, exports.triplet];

exports.sniper.UPGRADES_TIER_2 = [exports.assassin, exports.hunter, exports.minigun, exports.rifle];
exports.sniper.UPGRADES_TIER_3 = [exports.bushwhacker];
exports.assassin.UPGRADES_TIER_3 = [exports.ranger, exports.falcon, exports.stalker, exports.autoAssassin];
exports.hunter.UPGRADES_TIER_3 = [exports.predator, exports.xHunter, exports.poacher, exports.ordnance, exports.dual];
exports.rifle.UPGRADES_TIER_3 = [exports.musket, exports.crossbow, exports.armsman];

exports.machineGun.UPGRADES_TIER_2 = [exports.artillery, exports.minigun, exports.gunner, exports.sprayer];
exports.minigun.UPGRADES_TIER_3 = [exports.streamliner, exports.nailgun, exports.cropDuster, exports.barricade, exports.vulture];
exports.gunner.UPGRADES_TIER_3 = [exports.autoGunner, exports.nailgun, exports.auto4, exports.machineGunner, exports.gunnerTrapper, exports.cyclone, exports.overgunner];
exports.sprayer.UPGRADES_TIER_3 = [exports.redistributor, exports.phoenix, exports.atomizer, exports.focal];

exports.flankGuard.UPGRADES_TIER_2 = [exports.hexaTank, exports.triAngle, exports.auto3, exports.trapGuard, exports.triTrapper];
exports.flankGuard.UPGRADES_TIER_3 = [exports.tripleTwin];
exports.hexaTank.UPGRADES_TIER_3 = [exports.octoTank, exports.cyclone, exports.hexaTrapper];
exports.triAngle.UPGRADES_TIER_3 = [exports.fighter, exports.booster, exports.falcon, exports.bomber, exports.autoTriAngle, exports.surfer, exports.eagle, exports.phoenix];
exports.auto3.UPGRADES_TIER_3 = [exports.auto5, exports.mega3, exports.auto4, exports.banshee];

c.SPECIAL_BOSS_SPAWNS
    ? exports.director.UPGRADES_TIER_2 = [exports.overseer, exports.cruiser, exports.spawner]
    : exports.director.UPGRADES_TIER_2 = [exports.overseer, exports.cruiser, exports.underseer, exports.spawner];
exports.director.UPGRADES_TIER_3 = [exports.manager, exports.bigCheese];
exports.overseer.UPGRADES_TIER_3 = [exports.overlord, exports.overtrapper, exports.overgunner, exports.banshee, exports.autoOverseer, exports.overdrive, exports.commander];
exports.cruiser.UPGRADES_TIER_3 = [exports.carrier, exports.battleship, exports.fortress, exports.autoCruiser, exports.commander];
exports.underseer.UPGRADES_TIER_3 = [exports.necromancer, exports.maleficitor, exports.infestor];
exports.spawner.UPGRADES_TIER_3 = [exports.factory, exports.autoSpawner];

exports.pounder.UPGRADES_TIER_2 = [exports.destroyer, exports.builder, exports.artillery, exports.launcher];
exports.pounder.UPGRADES_TIER_3 = [exports.shotgun, exports.eagle];
exports.destroyer.UPGRADES_TIER_3 = [exports.conqueror, exports.annihilator, exports.hybrid, exports.constructor];
exports.artillery.UPGRADES_TIER_3 = [exports.mortar, exports.ordnance, exports.beekeeper, exports.fieldGun];
exports.launcher.UPGRADES_TIER_3 = [exports.skimmer, exports.twister, exports.swarmer, exports.sidewinder, exports.fieldGun];

exports.trapper.UPGRADES_TIER_2 = [exports.builder, exports.triTrapper, exports.trapGuard];
exports.trapper.UPGRADES_TIER_3 = [exports.barricade, exports.overtrapper];
exports.builder.UPGRADES_TIER_3 = [exports.constructor, exports.autoBuilder, exports.engineer, exports.boomer, exports.architect, exports.conqueror];
exports.triTrapper.UPGRADES_TIER_3 = [exports.fortress, exports.hexaTrapper, exports.septaTrapper, exports.architect];
exports.trapGuard.UPGRADES_TIER_3 = [exports.bushwhacker, exports.gunnerTrapper, exports.bomber, exports.conqueror, exports.bulwark];

// To use the following branches, remove the /* and */ surrounding them.

// RETROGRADE
/*
exports.basic.UPGRADES_TIER_1.push();
        exports.basic.UPGRADES_TIER_2.push();
                exports.smasher.UPGRADES_TIER_3.push(exports.bonker);

        exports.twin.UPGRADES_TIER_2.push();
                exports.gunner.UPGRADES_TIER_3.push(exports.battery);

        exports.sniper.UPGRADES_TIER_2.push(exports.gatlingGun);
                exports.assassin.UPGRADES_TIER_3.push(exports.buttbuttin);
                exports.rifle.UPGRADES_TIER_3.push(exports.blunderbuss);

        exports.machineGun.UPGRADES_TIER_2.push(exports.blaster, exports.gatlingGun, exports.machineFlank);
                exports.minigun.UPGRADES_TIER_3.push(exports.subverter);
                exports.blaster.UPGRADES_TIER_3 = [exports.triBlaster, exports.splasher];
                exports.gatlingGun.UPGRADES_TIER_3 = [exports.retroSprayer, exports.accurator, exports.halfNHalf];
                exports.machineFlank.UPGRADES_TIER_3 = [exports.machineTriple, exports.halfNHalf];

        exports.flankGuard.UPGRADES_TIER_2.push();
                exports.hexaTank.UPGRADES_TIER_3.push(exports.tornado, deathStar);

        exports.pounder.UPGRADES_TIER_2.push();
                exports.destroyer.UPGRADES_TIER_3.push(exports.blower);
*/

// ARMS RACE [WIP!]
/*
exports.basic.UPGRADES_TIER_1.push();
        exports.basic.UPGRADES_TIER_2.push();
                exports.smasher.UPGRADES_TIER_3.push(exports.bonker);

        exports.twin.UPGRADES_TIER_2.push();
                exports.doubleTwin.UPGRADES_TIER_3.push(exports.doubleFlankTwin, exports.doubleGunner);
                exports.tripleShot.UPGRADES_TIER_3.push(exports.autoTripleShot, exports.defect, exports.triBlaster);
                exports.gunner.UPGRADES_TIER_3.push(exports.battery, exports.buttbuttin, exports.blower, exports.rimfire, exports.doubleGunner);

        exports.sniper.UPGRADES_TIER_2.push(exports.gatlingGun);
                exports.rifle.UPGRADES_TIER_3.push(exports.blunderbuss);

        exports.machineGun.UPGRADES_TIER_2.push(exports.blaster, exports.gatlingGun, exports.machineFlank);
                exports.blaster.UPGRADES_TIER_3 = [exports.triBlaster, exports.splasher, exports.flamethrower];
                exports.gatlingGun.UPGRADES_TIER_3 = [exports.retroSprayer, exports.accurator, exports.halfNHalf];
                exports.machineFlank.UPGRADES_TIER_3 = [exports.machineTriple, exports.halfNHalf];
                exports.sprayer.UPGRADES_TIER_3.push(exports.shower, exports.autoSprayer, exports.splasher, exports.retroSprayer);

        exports.flankGuard.UPGRADES_TIER_2.push();
                exports.hexaTank.UPGRADES_TIER_3.push(exports.deathStar, exports.combo);
                exports.triAngle.UPGRADES_TIER_3.push(exports.vulture, exports.integrator, exports.defect, exports.quadAngle);
                exports.auto3.UPGRADES_TIER_3.push(exports.sniper3, exports.crowbar, exports.autoAuto3, exports.combo);

        exports.director.UPGRADES_TIER_2.push(exports.directordrive, exports.honcho);
                exports.director.UPGRADES_TIER_3 = [exports.manager];
                exports.overseer.UPGRADES_TIER_3.push(exports.captain);
                exports.cruiser.UPGRADES_TIER_3.push(exports.productionist, exports.cruiserdrive, exports.hangar, exports.zipper, exports.badDreadnought);
                exports.underseer.UPGRADES_TIER_3.push(exports.autoUnderseer, exports.underdrive, exports.pentaseer, exports.prodigy);
                exports.spawner.UPGRADES_TIER_3.push(exports.megaSpawner, exports.productionist, exports.spawnerdrive, exports.captain, exports.hangar);
                exports.directordrive.UPGRADES_TIER_3 = [exports.overdrive, exports.cruiserdrive, exports.underdrive, exports.spawnerdrive, exports.honchodrive];
                exports.honcho.UPGRADES_TIER_3 = [exports.bigCheese, exports.honchodrive];

        exports.pounder.UPGRADES_TIER_2.push();
                exports.destroyer.UPGRADES_TIER_3.push(exports.blower, exports.megaTrapper, exports.subverter, exports.deathStar);
                exports.artillery.UPGRADES_TIER_3.push(exports.force, exports.autoArtillery, exports.mender);
                exports.launcher.UPGRADES_TIER_3.push(exports.rocketeer, exports.heaver, exports.autoLauncher);

        exports.trapper.UPGRADES_TIER_2.push(exports.autoTrapper);
                exports.trapper.UPGRADES_TIER_3.push(exports.megaTrapper);
                exports.builder.UPGRADES_TIER_3.push(exports.fashioner, exports.quadBuilder);
                exports.triTrapper.UPGRADES_TIER_3.push(exports.prodigy);
                exports.trapGuard.UPGRADES_TIER_3.push(exports.peashooter, exports.autoTrapGuard);
                exports.autoTrapper.UPGRADES_TIER_3 = [exports.autoBuilder, exports.autoTrapGuard];
*/
