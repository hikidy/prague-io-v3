const { gunCalcNames } = require('./constants.js');
const { MAX_SKILL } = require("../../config.js");
const g = require('./gunvals.js');

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

// GUN DEFINITIONS
exports.combineStats = function (array_of_objects) {
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
            if (Array.isArray(gStat)) {
                gStat = {
                    reload: data[0], recoil: data[1], shudder: data[2],
                    size: data[3], health: data[4], damage: data[5],
                    pen: data[6], speed: data[7], maxSpeed: data[8],
                    range: data[9], density: data[10], spray: data[11],
                    resist: data[12]
                };
            }
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
exports.setBuild = (build) => {
    let skills = build.split(build.includes("/") ? "/" : "").map((r) => +r);
    if (skills.length !== 10)
        throw new RangeError("Build must be made up of 10 numbers");
    return [6, 4, 3, 5, 2, 9, 0, 1, 8, 7].map((r) => skills[r]);
};
exports.skillSet = (args) => {
    let skills = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let s in args) {
        if (!args.hasOwnProperty(s)) continue;
        skills[skcnv[s]] = Math.round(MAX_SKILL * args[s]);
    }
    return skills;
};

// FUNCTIONS
exports.dereference = type => {
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
exports.makeGuard = (type, name = -1) => {
    let output = exports.dereference(type),
    cannons = [{
        POSITION: [13, 8, 1, 0, 0, 180, 0],
    }, {
        POSITION: [4, 8, 1.7, 13, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: exports.combineStats([g.trap]),
            TYPE: "trap",
            STAT_CALCULATOR: gunCalcNames.trap,
        },
    }];
    output.GUNS = type.GUNS == null ? cannons : type.GUNS.concat(cannons);
    output.LABEL = name == -1 ? type.LABEL + " Guard" : name;
    return output;
}/*
exports.switchTank = (exportName, tankName, tanks, options = {}) => {
    let animLength = options.animLength || 31,
        hasProp = options.hasProp == undefined ? true : options.hasProp,
        duration = options.duration || 20,
        tankInfo = options.tankInfo || {};
    prop = (color) => {
        return {
            POSITION: [14, 3.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                COLOR: color
            }
        }
    };

    for (let i = 0; i < tanks.length; i++) {
        let frameName = `${exportName}${i * animLength}`,
            secondOfTwo = (tanks.length == 2 && i == 1);

        exports[frameName] = { ...deepCopy(tanks[i].tank), ...tankInfo };
        exports[frameName].LABEL = tanks[i].name || tankName;
        exports[frameName].GUNS = exports[frameName].GUNS || [];
        exports[frameName].TURRETS = exports[frameName].TURRETS || [];

        if (tanks[i].skip) {
            applyStats(exports[frameName].GUNS, [g.blank], {
                shootEdit: ((prop) => {
                    prop.CAN_SHOOT = false;
                })
            });
            for (let turret of exports[frameName].TURRETS) {
                turret.TYPE = [turret.TYPE, {
                    INDEPENDENT: true,
                    CONTROLLERS: []
                }]
            }
            exports[frameName].ON_DEFINED = (me, entities) => {
                animate(me, exportName, animLength, tanks[i].duration || duration, secondOfTwo ? false : true, secondOfTwo ? 0 : i * animLength, entities, !secondOfTwo && i == tanks.length - 1 ? true : false);
            };
        } else {
            exports[frameName].ON_ALT = (me, entities) => {
                animate(me, exportName, animLength, tanks[i].duration || duration, secondOfTwo ? false : true, secondOfTwo ? 0 : i * animLength, entities, !secondOfTwo && i == tanks.length - 1 ? true : false);
            };
        }
        if (hasProp) exports[frameName].GUNS.push(prop(245 + 31 * (Math.floor(i * animLength / (tanks.length - 1))) / animLength));
    }

    for (let tankNumber = 0; tankNumber < tanks.length; tankNumber++) {
        for (let animIndex = 1; animIndex < animLength; animIndex++) {
            let frameName = `${exportName}${tankNumber * animLength + animIndex}`,
                tankA = tanks[tankNumber],
                tankB = tanks[(tankNumber + 1) % tanks.length];

            exports[frameName] = {
                ...{
                    PARENT: [exports.genericTank],
                    LABEL: tankName,
                    STAT_NAMES: statNames.generic,
                    GUNS: ((out = []) => {
                        let gunsA = tankA.guns || tankA.tank.GUNS || [],
                            gunsB = tankB.tank.GUNS || [];

                        for (let gunIndex = 0; gunIndex < Math.max(gunsA.length, gunsB.length); gunIndex++) {
                            let gunA = gunsA[gunIndex],
                                gunB = gunsB[gunIndex];

                            if (gunA && gunB) out.push({
                                POSITION: ((out2 = []) => {
                                    for (let posIndex = 0; posIndex < 7; posIndex++) out2.push(gunA.POSITION[posIndex] * (animLength - animIndex) / animLength + gunB.POSITION[posIndex] * animIndex / animLength);
                                    return out2;
                                })()
                            });
                            else if (gunA) out.push({
                                POSITION: ((out2 = []) => {
                                    for (let posIndex = 0; posIndex < 7; posIndex++) out2.push(gunA.POSITION[posIndex] * (animLength - animIndex) / animLength);
                                    return out2;
                                })()
                            });
                            else if (gunB) out.push({
                                POSITION: ((out2 = []) => {
                                    for (let posIndex = 0; posIndex < 7; posIndex++) out2.push(gunB.POSITION[posIndex] * animIndex / animLength);
                                    return out2;
                                })()
                            });
                        }

                        if (hasProp) {
                            if (tankNumber == tanks.length - 1) {
                                out.push(prop(276 - Math.floor(31 * animIndex / animLength)));
                            } else out.push(prop(245 + Math.floor(31 * animIndex / animLength / (tanks.length - 1)) + Math.floor(31 * tankNumber / (tanks.length - 1))));
                        }

                        return out;
                    })(),
                    TURRETS: ((out = []) => {
                        let turretsA = tankA.turrets || tankA.tank.TURRETS || [],
                            turretsB = tankB.tank.TURRETS || [];

                        for (let turretIndex = 0; turretIndex < Math.max(turretsA.length, turretsB.length); turretIndex++) {
                            let turretA = turretsA[turretIndex],
                                turretB = turretsB[turretIndex];

                            if (turretA && turretB) out.push({
                                POSITION: ((out2 = []) => {
                                    for (let posIndex = 0; posIndex < 4; posIndex++) out2.push(turretA.POSITION[posIndex] * (animLength - animIndex) / animLength + turretB.POSITION[posIndex] * animIndex / animLength);
                                    out2.push(0, turretA.POSITION[5]);
                                    return out2;
                                })(),
                                TYPE: [turretA.TYPE, {
                                    INDEPENDENT: true,
                                    CONTROLLERS: []
                                }]
                            });
                            else if (turretA) out.push({
                                POSITION: ((out2 = []) => {
                                    for (let posIndex = 0; posIndex < 4; posIndex++) out2.push(turretA.POSITION[posIndex] * (animLength - animIndex) / animLength);
                                    out2.push(0, turretA.POSITION[5]);
                                    return out2;
                                })(),
                                TYPE: [turretA.TYPE, {
                                    INDEPENDENT: true,
                                    CONTROLLERS: []
                                }]
                            });
                            else if (turretB) out.push({
                                POSITION: ((out2 = []) => {
                                    for (let posIndex = 0; posIndex < 4; posIndex++) out2.push(turretB.POSITION[posIndex] * animIndex / animLength);
                                    out2.push(0, turretB.POSITION[5]);
                                    return out2;
                                })(),
                                TYPE: [turretB.TYPE, {
                                    INDEPENDENT: true,
                                    CONTROLLERS: []
                                }]
                            });
                        }

                        return out;
                    })(),
                    IS_USED: true
                }, ...tankInfo
            };
        }

        if (tanks.length == 2) break;
    }
}*/
exports.makeConq = (type, name = -1) => {
    let output = exports.dereference(type),
    cannons = [{
        POSITION: [18, 14, 1, 0, 0, 180, 0],
    }, {
        POSITION: [2, 14, 1.1, 18, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: exports.combineStats([g.trap, g.block]),
            TYPE: "setTrap",
        },
    }];
    output.GUNS = type.GUNS == null ? cannons : type.GUNS.concat(cannons);
    output.LABEL = name == -1 ? type.LABEL + " Conqueror" : name;
    return output;
}
exports.makeSplit = (type, name = -1) => {
    let output = exports.dereference(type);
    let cannon1 = {
        POSITION: [18, 8, 1, 0, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: exports.combineStats([g.basic, g.flank]),
            TYPE: "bullet",
        },
    };
    let cannon2 = {
        POSITION: [18, 8, 1, 0, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: exports.combineStats([g.basic, g.flank]),
            TYPE: "bullet",
        },
    };
    output.GUNS = type.GUNS == null ? cannons : type.GUNS.concat(cannons);
    output.LABEL = name == -1 ? "Split " + type.LABEL : name;
    return output;
}
exports.addBackGunner = (type, name = -1) => {
    let output = exports.dereference(type);
    let cannons = [{
        POSITION: [19, 2, 1, 0, -2.5, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: exports.combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil, g.lotsmorrecoil]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 180, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: exports.combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil, g.lotsmorrecoil]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [12, 11, 1, 0, 0, 180, 0],
    }];
    output.GUNS = type.GUNS == null ? cannons : type.GUNS.concat(cannons);
    output.LABEL = name == -1 ? type.LABEL : name;
    return output;
}

exports.makeBird = (type, name = -1) => {
    let output = exports.dereference(type);
    let cannons = [{
        POSITION: [19, 2, 1, 0, -2.5, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: exports.combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil, g.lotsmorrecoil]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [19, 2, 1, 0, 2.5, 180, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: exports.combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil, g.lotsmorrecoil]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [12, 11, 1, 0, 0, 180, 0],
    }];
    output.GUNS = type.GUNS == null ? cannons : type.GUNS.concat(cannons);
    output.LABEL = name == -1 ? type.LABEL : name;
    return output;
}

// SPAWNER FUNCTIONS
exports.makeHybrid = (type, name = -1) => {
    let output = exports.dereference(type);
    let spawner = {
        /********* LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: exports.combineStats([g.drone, g.weak]),
            TYPE: ["drone", { INDEPENDENT: true }],
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
exports.makeOver = (type, name = -1) => {
    let output = exports.dereference(type);
    let spawners = [{
        POSITION: [6, 12, 1.2, 8, 0, 125, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: exports.combineStats([g.drone, g.over]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 3,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 235, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: exports.combineStats([g.drone, g.over]),
            TYPE: "drone",
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
exports.makeOversplit = (type, name = -1) => {
    let output = exports.dereference(type);
    let spawners = [{
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: exports.combineStats([g.drone, g.over]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 3,
        },
    }, {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: exports.combineStats([g.drone, g.over]),
            TYPE: "drone",
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
exports.makeBattle = (type, name = -1) => {
    let output = exports.dereference(type);
    let spawner1 = {
        POSITION: [7, 7.5, 0.6, 7, 4, 125, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: exports.combineStats([g.swarm]),
            TYPE: "swarm",
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    };
    let spawner2 = {
        POSITION: [7, 7.5, 0.6, 7, -4, 125, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: exports.combineStats([g.swarm]),
            TYPE: "swarm",
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    };
    let spawner3 = {
        POSITION: [7, 7.5, 0.6, 7, 4, 235, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: exports.combineStats([g.swarm]),
            TYPE: "swarm",
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    };
    let spawner4 = {
        POSITION: [7, 7.5, 0.6, 7, -4, 235, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: exports.combineStats([g.swarm]),
            TYPE: "swarm",
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
exports.makeCap = (type, name = -1) => {
    let output = exports.dereference(type);
    let spawner1 = {
        /**** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [4.5, 10, 1, 10.5, 0, 125, 0],
    };
    let spawner2 = {
        POSITION: [1, 12, 1, 15, 0, 125, 0],
        PROPERTIES: {
            MAX_CHILDREN: 4,
            SHOOT_SETTINGS: exports.combineStats([g.factory, g.babyfactory]),
            TYPE: "minion",
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
            SHOOT_SETTINGS: exports.combineStats([g.factory, g.babyfactory]),
            TYPE: "minion",
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
exports.makeCross = (type, name = -1) => {
    let output = exports.dereference(type);
    let spawner1 = {
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: exports.combineStats([g.drone, g.over]),
            TYPE: "drone",
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
            SHOOT_SETTINGS: exports.combineStats([g.drone, g.over]),
            TYPE: "drone",
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
            SHOOT_SETTINGS: exports.combineStats([g.drone, g.over]),
            TYPE: "drone",
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
exports.makeZipper = (type, name = -1) => {
    let output = exports.dereference(type);
    let spawner1 = {
        /********* LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [7, 7.5, 0.6, 7, 2.5, 20, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: exports.combineStats([g.swarm]),
            TYPE: "swarm",
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    };
    let spawner2 = {
        /********* LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [7, 7.5, 0.6, 7, -2.5, -20, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: exports.combineStats([g.swarm]),
            TYPE: "swarm",
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
exports.makeSwarming = (type, name = -1) => {
    let output = exports.dereference(type);
    let spawner = {
        /********* LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: exports.combineStats([g.swarm]),
            TYPE: "minion",
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
exports.makeBiSwarming = (type, name = -1) => {
    let output = exports.dereference(type);
    let spawner1 = {
        /********* LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [7, 7.5, 0.6, 7, 0, 25, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: exports.combineStats([g.swarm]),
            TYPE: "autoswarm",
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    };
    let spawner2 = {
        /********* LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [7, 7.5, 0.6, 7, 0, -25, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: exports.combineStats([g.swarm]),
            TYPE: "autoswarm",
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
exports.makeTriSwarming = (type, name = -1) => {
    let output = exports.dereference(type);
    let spawner1 = {
        /********* LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [7, 7.5, 0.6, 7, 0, 45, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: exports.combineStats([g.swarm]),
            TYPE: "autoswarm",
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    };
    let spawner2 = {
        /********* LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [7, 7.5, 0.6, 7, 0, -45, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: exports.combineStats([g.swarm]),
            TYPE: "autoswarm",
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    };
    let spawner3 = {
        /********* LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: exports.combineStats([g.swarm]),
            TYPE: "autoswarm",
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
exports.makeAuto = (type, name = -1, options = {}) => {
    let turret = {
        type: "autoTurret",
        size: 10,
        independent: true,
        color: 16,
        angle: 180,
    };
    if (options.type != null) {
        turret.type = options.type;
    }
    if (options.size != null) {
        turret.size = options.size;
    }
    if (options.independent != null) {
        turret.independent = options.independent;
    }
    if (options.color != null) {
        turret.color = options.color;
    }
    if (options.angle != null) {
        turret.angle = options.angle;
    }
    let output = exports.dereference(type);
    let autogun = {
        /*********    SIZE                             X             Y         ANGLE        ARC */
        POSITION: [turret.size, 0, 0, turret.angle, 360, 1],
        TYPE: [
            turret.type,
            {
                CONTROLLERS: ["nearestDifferentMaster"],
                INDEPENDENT: turret.independent,
                COLOR: turret.color,
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
exports.makeCeption = (type, name = -1, options = {}) => {
    let turret = {
        type: "autoTurret",
        size: 12.5,
        independent: true,
    };
    if (options.type != null) {
        turret.type = options.type;
    }
    if (options.size != null) {
        turret.size = options.size;
    }
    if (options.independent != null) {
        turret.independent = options.independent;
    }
    let output = exports.dereference(type);
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

exports.makeDeco = (shape = 0, color = 16) => {
    return {
        PARENT: ["genericTank"],
        SHAPE: shape,
        COLOR: color,
    };
}

exports.addAura = (damageFactor = 1, sizeFactor = 1, auraColor) => {
    let isHeal = damageFactor < 0;
    let auraType = isHeal ? "healAura" : "aura";
    let symbolType = isHeal ? "healerSymbol" : "auraSymbol";
    auraColor = auraColor ?? (isHeal ? 12 : 0);
    return {
        PARENT: ["genericTank"],
        LABEL: "",
        COLOR: 17,
        GUNS: [
            {
                POSITION: [0, 20, 1, 0, 0, 0, 0,],
                PROPERTIES: {
                    SHOOT_SETTINGS: exports.combineStats([g.aura, { size: sizeFactor, damage: damageFactor }]),
                    TYPE: [auraType, {COLOR: auraColor}],
                    MAX_CHILDREN: 1,
                    AUTOFIRE: true,
                    SYNCS_SKILLS: true,
                }, 
            }, 
        ],
        TURRETS: [
            {
                POSITION: [20 - 5 * isHeal, 0, 0, 0, 360, 1],
                TYPE: [symbolType, {COLOR: auraColor}],
            },
        ]
    };
},
//unfinished lolo
exports.makeLabyrinthShape = (type) => {
    let output = exports.dereference(type);
    let downscale = Math.max(output.SHAPE, 3);
    return output;
}