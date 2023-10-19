const { combineStats, addAura } = require('../facilitators.js');
const { base, gunCalcNames, basePolygonDamage, basePolygonHealth, dfltskl, statnames } = require('../constants.js');
const g = require('../gunvals.js');

// TESTBED TANKS
exports.menu = {
    PARENT: ["genericTank"],
    LABEL: "",
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
                TYPE: "bullet",
            },
        },
    ],
};
exports.developer = {
    PARENT: ["menu"],
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
                TYPE: "developerBullet",
            },
        },
    ],
};

exports.shapes = {
    PARENT: ["menu"],
    LABEL: "Shapes",
    BODY: {
        SHIELD: 1000,
        REGEN: 10,
        HEALTH: 1e12,
        DAMAGE: 10,
        DENSITY: 20,
        FOV: 2,
    },
    GUNS: [
        {
            /*** LENGTH WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 10, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                TYPE: "developerBullet",
            },
        },
    ],
};

exports.yskysn = {
    PARENT: ["genericTank"],
    LABEL: "You should kill yourself, NOW!",
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
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [10, 5, 1, 0, 0, 75, 1.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.halfthruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [10, 5, 1, 0, 0, 285, 1.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.halfthruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [10, 5, 1, 0, 0, 90, 1.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.halfthruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [10, 5, 1, 0, 0, 270, 1.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.halfthruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [10, 5, 1, 0, 0, 105, 1.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.halfthruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [10, 5, 1, 0, 0, 255, 1.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.halfthruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [12, 5, 1, 0, 0, 120, 1.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.halfthruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [12, 5, 1, 0, 0, 240, 1.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.halfthruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 5, 1, 0, 0, 135, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.halfthruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 5, 1, 0, 0, 225, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.halfthruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 6, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.halfthruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 6, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.halfthruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};
exports.spectator = {
    PARENT: ["menu"],
    LABEL: "Spectator",
    ALPHA: 0,
    CAN_BE_ON_LEADERBOARD: false,
    ACCEPTS_SCORE: false,
    DRAW_HEALTH: false,
    HITS_OWN_TYPE: "never",
    ARENA_CLOSER: true,
    SKILL_CAP: [0, 0, 0, 0, 0, 0, 0, 0, 0, 45],
    SKILL:     [0, 0, 0, 0, 0, 0, 0, 0, 0, 45],
    BODY: {
        SPEED: 20,
        FOV: 2.5,
        DAMAGE: 0,
        HEALTH: 1e100,
        SHIELD: 1e100,
        REGEN: 1e100,
    },
};
exports.bosses = {
    PARENT: ["menu"],
    LABEL: "Bosses",
};
exports.fun = {
    PARENT: ["menu"],
    LABEL: "Fun",
};
exports.bosses = {
    PARENT: ["menu"],
    LABEL: "Bosses",
};
exports.terrestrials = {
    PARENT: ["menu"],
    LABEL: "Terrestrials",
};
exports.celestials = {
    PARENT: ["menu"],
    LABEL: "Celestials",
};
exports.eternals = {
    PARENT: ["menu"],
    LABEL: "Eternals",
};
exports.devBosses = {
    PARENT: ["menu"],
    LABEL: "Developers",
};
exports.elites = {
    PARENT: ["menu"],
    LABEL: "Elites",
};
exports.mysticals = {
    PARENT: ["menu"],
    LABEL: "Mysticals",
};
exports.nesters = {
    PARENT: ["menu"],
    LABEL: "Nesters",
};
exports.rogues = {
    PARENT: ["menu"],
    LABEL: "Rogues",
};
exports.otherTanks = {
    PARENT: ["menu"],
    LABEL: "Tanks",
};
exports.oldTanks = {
    PARENT: ["menu"],
    LABEL: "Old Tanks",
};
exports.scrappedTanks = {
    PARENT: ["menu"],
    LABEL: "Scrapped Tanks",
};
exports.miscEntities = {
    PARENT: ["menu"],
    LABEL: "Misc Entities",
};
exports.dominators = {
    PARENT: ["menu"],
    LABEL: "Dominators",
};
exports.sentries = {
    PARENT: ["menu"],
    LABEL: "Sentries",
};

// GENERATORS
function compileMatrix(matrix, matrix2Entrance) {
    let matrixWidth = matrix[0].length,
        matrixHeight = matrix.length;
    for (let x = 0; x < matrixWidth; x++) for (let y = 0; y < matrixHeight; y++) {
        let str = matrix[y][x],
            LABEL = str[0].toUpperCase() + str.slice(1).replace(/[A-Z]/g, m => ' ' + m) + " Generator",
            code = str + 'Generator';
        exports[code] = matrix[y][x] = {
            PARENT: ["genericTank"],
            LABEL,
            SKILL_CAP: [31, 0, 0, 0, 0, 0, 0, 0, 0, 31],
            ALPHA: [0, 0],
            IGNORED_BY_AI: true,
            BODY: {
                SPEED: 5,
                FOV: 2.5,
                DAMAGE: 0,
                HEALTH: 1e100,
                SHIELD: 1e100,
                REGEN: 1e100,
            },
            TURRETS: [{
                POSITION: [5 + y * 2, 0, 0, 0, 0, 1],
                TYPE: str,
            }],
            GUNS: [{
                POSITION: [14, 12, 1, 4, 0, 0, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                    TYPE: "bullet"
                }
            }, {
                POSITION: [12, 12, 1.4, 4, 0, 0, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, { recoil: 0 }]),
                    INDEPENDENT_CHILDREN: true,
                    TYPE: str
                },
            }],
        };
    }
}

function connectMatrix(matrix, matrix2Entrance) {
    let matrixWidth = matrix[0].length,
        matrixHeight = matrix.length;
    for (let x = 0; x < matrixWidth; x++) for (let y = 0; y < matrixHeight; y++) {
        let top = (y + matrixHeight - 1) % matrixHeight,
            bottom = (y + matrixHeight + 1) % matrixHeight,
            left = (x + matrixWidth - 1) % matrixWidth,
            right = (x + matrixWidth + 1) % matrixWidth,

        center = matrix[y     ][x    ];
        top    = matrix[top   ][x    ];
        bottom = matrix[bottom][x    ];
        left   = matrix[y     ][left ];
        right  = matrix[y     ][right];

        matrix[y][x].UPGRADES_TIER_0 = [
            "basic"     ,  top    , "developer",
             left       ,  center ,  right      ,
            "spectator" ,  bottom ,  matrix2Entrance
        ];
    }
}
let generatorMatrix = [
    [ "egg"           , "gem"                , "jewel"                  , "crasher"             , "sentry"               , "shinySentry"        , "EggRelic"           ],
    [ "square"        , "shinySquare"        , "legendarySquare"        , "shadowSquare"        , "rainbowSquare"        , "transSquare"        , "SquareRelic"        ],
    [ "triangle"      , "shinyTriangle"      , "legendaryTriangle"      , "shadowTriangle"      , "rainbowTriangle"      , "transTriangle"      , "TriangleRelic"      ],
    [ "pentagon"      , "shinyPentagon"      , "legendaryPentagon"      , "shadowPentagon"      , "rainbowPentagon"      , "transPentagon"      , "PentagonRelic"      ],
    [ "hexagon"       , "shinyHexagon"       , "legendaryHexagon"       , "shadowHexagon"       , "rainbowHexagon"       , "transHexagon"       , "HexagonRelic"       ],    
    [ "heptagon"      , "shinyHeptagon"      , "legendaryHeptagon"      , "shadowHeptagon"      , "rainbowHeptagon"      , "transHeptagon"      , "HeptagonRelic"      ],
    [ "sphere"        , "cube"               , "tetrahedron"            , "octahedron"          , "dodecahedron"         , "icosahedron"        , "tesseract"          ],
],

gemRelicMatrix = [];
for (let tier of [ "", "Egg", "Square", "Triangle", "Pentagon", "Hexagon", "Heptagon" ]) {
    let row = [];
    for (let gem of [ "Power", "Space", "Reality", "Soul", "Time", "Mind" ]) {
        row.push(gem + (tier ? tier + 'Relic' : 'Gem'));
    }
    gemRelicMatrix.push(row);
}

compileMatrix(generatorMatrix);
compileMatrix(gemRelicMatrix);

// Tensor = N-Dimensional Array, BASICALLY
let labyTensor = [];
for (let tier = 0; tier < 6; tier++) {
    let row = [];
    for (let poly of [ "Egg", "Square", "Triangle", "Pentagon", "Hexagon", "Heptagon" ]) {
        let column = [];
        for (let shiny of [ "", "Shiny", "Legendary", "Shadow", "Rainbow", "Trans" ]) {
            let str = `laby${tier}${shiny}${poly}`,
                LABEL = str[0].toUpperCase() + str.slice(1).replace(/\d/, d => ["", "Beta", "Alpha", "Omega", "Gamma", "Delta"][d]).replace(/[A-Z]/g, m => ' ' + m) + " Generator",
                code = str + 'Generator';
            column.push(exports[code] = {
                PARENT: ["genericTank"],
                LABEL,
                SKILL_CAP: [31, 0, 0, 0, 0, 0, 0, 0, 0, 31],
                ALPHA: [0, 0],
                IGNORED_BY_AI: true,
                BODY: {
                    SPEED: 5,
                    FOV: 2.5,
                    DAMAGE: 0,
                    HEALTH: 1e100,
                    SHIELD: 1e100,
                    REGEN: 1e100,
                },
                TURRETS: [{
                    POSITION: [5 + tier * 2, 0, 0, 0, 0, 1],
                    TYPE: str,
                }],
                GUNS: [{
                    POSITION: [14, 12, 1, 4, 0, 0, 0],
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                        TYPE: "bullet"
                    }
                }, {
                    POSITION: [12, 12, 1.4, 4, 0, 0, 0],
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, { recoil: 0 }]),
                        INDEPENDENT_CHILDREN: true,
                        TYPE: str
                    },
                }],
            });
        }
        row.push(column);
    }
    labyTensor.push(row);
}

connectMatrix(generatorMatrix, 'PowerGemGenerator');
connectMatrix(gemRelicMatrix, 'laby0EggGenerator');

let tensorLength = labyTensor[0][0].length,
    tensorWidth = labyTensor[0].length,
    tensorHeight = labyTensor.length;
for (let x = 0; x < tensorWidth; x++) for (let y = 0; y < tensorHeight; y++) for (let z = 0; z < tensorLength; z++) {
    let top = (y + tensorHeight - 1) % tensorHeight,
        bottom = (y + tensorHeight + 1) % tensorHeight,
        left = (x + tensorWidth - 1) % tensorWidth,
        right = (x + tensorWidth + 1) % tensorWidth,
        front = (z + tensorLength - 1) % tensorLength,
        back = (z + tensorLength + 1) % tensorLength,

    center = labyTensor[y     ][x    ][z    ];
    top    = labyTensor[top   ][x    ][z    ];
    bottom = labyTensor[bottom][x    ][z    ];
    left   = labyTensor[y     ][left ][z    ];
    right  = labyTensor[y     ][right][z    ];
    front  = labyTensor[y     ][x    ][front];
    back   = labyTensor[y     ][x    ][back ];

    labyTensor[y][x][z].UPGRADES_TIER_0 = [
        "basic"     ,  top                , "developer",
         left       ,  center             ,  right     ,
        "spectator" ,  bottom             , "eggGenerator",
         front      , "PowerGemGenerator" ,  back
    ];
}

exports.diamondShape = {
    PARENT: ["basic"],
    LABEL: "Diamond Test Shape",
    SHAPE: 4.5
};

exports.rotatedTrap = {
    PARENT: ["basic"],
    LABEL: "Rotated Trap Test Shape",
    SHAPE: -3.5
};

exports.mummyHat = {
    SHAPE: 4.5,
    COLOR: 10
};
exports.mummy = {
    PARENT: ["drone"],
    SHAPE: 4,
    TURRETS: [{
        POSITION: [20 * Math.SQRT1_2, 0, 0, 180, 360, 1],
        TYPE: ["mummyHat"]
    }]
};
exports.mummifier = {
    PARENT: ["genericTank"],
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
            TYPE: "mummy",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    },{
        POSITION: [5.5, 13, 1.1, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: "mummy",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }],
    TURRETS: [{
        POSITION: [20 * Math.SQRT1_2, 0, 0, 180, 360, 1],
        TYPE: ["mummyHat"]
    }]
};

exports.colorMan = {
    PARENT: ["genericTank"],
    LABEL: "Testing Animated Colors",
    SHAPE: 4,
    COLOR: 36,
    TURRETS: [{
        POSITION: [20, -20, -20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 20 }
    },{
        POSITION: [20,  0 , -20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 21 }
    },{
        POSITION: [20,  20, -20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 22 }
    },{
        POSITION: [20, -20,  0 , 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 23 }
    },{
        POSITION: [20,  20,  0 , 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 29 }
    },{
        POSITION: [20,  20,  20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 24 }
    },{
        POSITION: [20,  0 ,  20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 37 }
    },{
        POSITION: [20,  20,  20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 38 }
    }]
};

exports.miscTestHelper2 = {
    PARENT: ["genericTank"],
    LABEL: "Turret Reload Test 3",
    TURRET_FACES_CLIENT: true,
    COLOR: -1,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.noRandom]),
                TYPE: "bullet",
                COLOR: -1,
            },
        },
    ],
};
exports.miscTestHelper = {
    PARENT: ["genericTank"],
    LABEL: "Turret Reload Test 2",
    TURRET_FACES_CLIENT: true,
    COLOR: {
        BASE: -1,
        BRIGHTNESS_SHIFT: 15,
    },
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.noRandom]),
                TYPE: "bullet",
                COLOR: -1,
            },
        },
    ],
    TURRETS: [
        {
          POSITION: [20, 0, 20, 0, 0, 1],
          TYPE: "miscTestHelper2",
        }
    ]
};
exports.miscTest = {
    PARENT: ["genericTank"],
    LABEL: "Turret Reload Test",
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.noRandom]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [20, 0, 20, 0, 0, 1],
            TYPE: "miscTestHelper",
        }
    ]
};
exports.auraBasicGen = addAura(1, 1, 0);
exports.auraBasic = {
    PARENT: ["genericTank"],
    LABEL: "Aura Basic",
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [14, 0, 0, 0, 0, 1],
            TYPE: "auraBasicGen",
        }
    ],
};
exports.auraHealerGen = addAura(-1, 1, 12);
exports.auraHealer = {
    PARENT: ["genericTank"],
    LABEL: "Aura Healer",
    TURRETS: [
        {
            POSITION: [14, 0, 0, 0, 0, 1],
            TYPE: "auraHealerGen",
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
                TYPE: "healerBullet",
            },
        },
    ],
};

exports.trplnrsTestTank = {
    PARENT: ['genericTank'],
    LABEL: "Trplnr's Test Tank",
    COLOR: 'teal',
    GUNS: [
    {
        POSITION: [18, 10, 0.75, -5, 0, 0, 0],
        PROPERTIES: {
            COLOR: 'lavender',
            SHOOT_SETTINGS: combineStats([g.basic, g.anni, {reload: 20}]),
            TYPE: 'bullet',
        }
    },
    {
        POSITION: [10, 6, 1, 0, 14, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {size: 0.8, reload: 5}]),
            TYPE: 'swarm'
        }
    }, {
        POSITION: [10, 6, 1, 0, -14, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {size: 0.8, reload: 5}]),
            TYPE: 'swarm'
        }
    }, {
        POSITION: [10, 6, 1, 0, 14, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {size: 1.2, recoil: 1.5, reload: 0.8}]),
            TYPE: 'bullet'
        }
    }, {
        POSITION: [10, 6, 1, 0, -14, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {size: 1.2, recoil: 1.5, reload: 0.8}]),
            TYPE: 'bullet'
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 90, 0],
        PROPERTIES: {
            COLOR: 'black'
        }
    }, {
        POSITION: [18, 8, 1, 0, 0, 270, 0],
        PROPERTIES: {
            COLOR: 'black'
        }
    }],
    TURRETS: [{
        POSITION: [15, 12.5, 12.5, 0, 0, 0],
        TYPE: { SHAPE: 4, COLOR: 'black', TURRET_FACES_CLIENT: true }
    }, {
        POSITION: [15, 12.5, -12.5, 0, 0, 0],
        TYPE: { SHAPE: 4, COLOR: 'black', TURRET_FACES_CLIENT: true }
    }, {
        POSITION: [15, -12.5, -12.5, 0, 0, 0],
        TYPE: { SHAPE: 4, COLOR: 'black', TURRET_FACES_CLIENT: true }
    }, {
        POSITION: [15, -12.5, 12.5, 0, 0, 0],
        TYPE: { SHAPE: 4, COLOR: 'black', TURRET_FACES_CLIENT: true }
    }]
}

exports.ghoster_ghostForm = {
    PARENT: ['genericTank'],
    TOOLTIP: 'You are now in ghost form, roam around and find your next target. Will turn back in 5 seconds',
    LABEL: 'Ghoster - Ghost Form',
    BODY: {
        SPEED: 20,
        ACCELERATION: 10,
        FOV: base.FOV + 1,
    },
    GUNS: [{
        POSITION: { WIDTH: 20, LENGTH: 20 },
    }],
    ALPHA: 0.6,
}

exports.ghoster = {
    PARENT: ['genericTank'],
    LABEL: 'Ghoster',
    TOOLTIP: 'Shooting will turn you into a ghost for 5 seconds',
    BODY: {
        SPEED: base.SPEED,
        ACCELERATION: base.ACCEL,
    },
    GUNS: [{
        POSITION: {WIDTH: 20, LENGTH: 20},
        PROPERTIES: {
            TYPE: 'bullet',
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
            ON_FIRE: ({body}) => {
                body.define(Class.ghoster_ghostForm)
                setTimeout(() => { 
                    body.SPEED = 1e-99
                    body.ACCEL = 1e-99
                    body.FOV *= 2
                    body.alpha = 1
                }, 2000)
                setTimeout(() => { 
                    body.SPEED = base.SPEED 
                    body.define(Class.ghoster) 
                }, 2500)
            }
        }
    }],
    ALPHA: 1,
}

exports.switcheroo = {
    PARENT: ['basic'],
    LABEL: 'Switcheroo',
    UPGRADES_TIER_0: [],
    RESET_UPGRADE_MENU: true,
    GUNS: [{
        POSITION: {},
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: 'bullet',
            ON_FIRE: ({ body, globalMasterStore: store }) => {
                store.switcheroo_i ??= 0;
                store.switcheroo_i++;
                store.switcheroo_i %= 6;
                body.define(Class.basic.UPGRADES_TIER_1[store.switcheroo_i]);
                setTimeout(() => body.define("switcheroo"), 6000);
            }
        }
    }]
}

// FUN
exports.vanquisher = {
    PARENT: ["genericTank"],
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
            TYPE: "bullet"
        }

    //builder
    },{
        POSITION: [18, 12, 1, 0, 0, 0, 0],
    },{
        POSITION: [2, 12, 1.1, 18, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
            TYPE: "setTrap"
        }

    //launcher
    },{
        POSITION: [10, 9, 1, 9, 0, 90, 0],
    },{
        POSITION: [17, 13, 1, 0, 0, 90, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty]), TYPE: "minimissile", STAT_CALCULATOR: gunCalcNames.sustained }

    //shotgun
    },{
        POSITION: [4, 3, 1, 11, -3, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [4, 3, 1, 11, 3, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [4, 4, 1, 13, 0, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "casing" }
    },{
        POSITION: [1, 4, 1, 12, -1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "casing" }
    },{
        POSITION: [1, 4, 1, 11, 1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "casing" }
    },{
        POSITION: [1, 3, 1, 13, -1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [1, 3, 1, 13, 1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [1, 2, 1, 13, 2, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "casing" }
    }, {
        POSITION: [1, 2, 1, 13, -2, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "casing" }
    }, {
        POSITION: [15, 14, 1, 6, 0, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]), TYPE: "casing" }
    }, {
        POSITION: [8, 14, -1.3, 4, 0, 270, 0],
    }]
};
exports.armyOfOneBullet = {
    PARENT: ["bullet"],
    LABEL: "Unstoppable",
    TURRETS: [
        {
            /** SIZE         X             Y         ANGLE        ARC */
            POSITION: [18.5, 0, 0, 0, 360, 0],
            TYPE: ["spikeBody", { COLOR: null }],
        },
        {
            POSITION: [18.5, 0, 0, 180, 360, 0],
            TYPE: ["spikeBody", { COLOR: null }],
        },
    ],
};
exports.armyOfOne = {
    PARENT: ["genericTank"],
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
                TYPE: "armyOfOneBullet",
            },
        },{
            POSITION: [21, 11, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.destroy, g.destroy, g.destroy, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.doublereload, g.doublereload, g.doublereload, g.doublereload, g.fake]),
                TYPE: "bullet",
            },
        }
    ],
};
exports.godbasic = {
    PARENT: ["genericTank"],
    LABEL: "God Basic",
    SKILL_CAP: [31, 31, 31, 31, 31, 31, 31, 31, 31, 31],
    SKILL: [ 31, 31, 31, 31, 31, 31, 31, 31, 31, 31 ],
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
                TYPE: "bullet",
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
exports.maximumOverdrive = {
    PARENT: ["overdrive"],
    LABEL: "Maximum Overdrive",
    SKILL_CAP: Array(10).fill(255),
    SKILL: Array(10).fill(255),
};
exports.weirdAutoBasic = {
    PARENT: "genericTank",
    LABEL: "Weirdly defined Auto-Basic",
    GUNS: [{
        POSITION: {
            LENGTH: 20,
            WIDTH: 10
        },
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [0.8, 0.8, 1.5, 1, 0.8, 0.8, 0.9, 1, 1, 1, 1, 2, 1]]),
            TYPE: "bullet"
        },
    }],
    TURRETS: [{
        POSITION: {
            ANGLE: 180,
            LAYER: 1
        },
        TYPE: ["autoTurret", {
            CONTROLLERS: ["nearestDifferentMaster"],
            INDEPENDENT: true
        }]
    }]
};

exports.levels = {
    PARENT: ["menu"],
    LABEL: "Levels",
    UPGRADES_TIER_0: ["developer"]
};
for (let i = 0; i < 15; i++) {
    let LEVEL = i * c.TIER_MULTIPLIER;
    exports["level" + LEVEL] = {
        PARENT: ["levels"],
        LEVEL,
        LABEL: "Level " + LEVEL
    };
    exports.levels.UPGRADES_TIER_0.push("level" + LEVEL);
}

exports.teams = {
    PARENT: ["menu"],
    LABEL: "Teams",
    UPGRADES_TIER_0: ["developer"]
};
for (let i = 1; i <= 8; i++) {
    let TEAM = i;
    exports["Team" + TEAM] = {
        PARENT: ["teams"],
        TEAM: -TEAM,
        COLOR: getTeamColor(-TEAM),
        LABEL: "Team " + TEAM
    };
    exports.teams.UPGRADES_TIER_0.push("Team" + TEAM);
}
exports['Team' + TEAM_ROOM] = {
    PARENT: ["teams"],
    TEAM: TEAM_ROOM,
    COLOR: 3,
    LABEL: "Room Team"
};
exports['Team' + TEAM_ENEMIES] = {
    PARENT: ["teams"],
    TEAM: TEAM_ENEMIES,
    COLOR: 3,
    LABEL: "Enemies Team"
};

exports.hikidy = {
    PARENT: ["genericTank"],
    LABEL: "Hikidy123",
    DANGER: 69420,
    GUNS: [
        {
            POSITION: [210, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
                TYPE: "bullet",
            },
        }, 
        {
        POSITION: [60, 12, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.anni]),
            TYPE: ["drone", { INDEPENDENT: true }],
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: false,
            MAX_CHILDREN: 90,
        }, },
    ],
};

exports.gaytwin = {
    PARENT: ["genericTank"],
    LABEL: "Gay Twin",
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet",
                COLOR: 36,
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet",
                COLOR: 36,
            },
        },
    ],
};
exports.dualSine = {
    PARENT: ["genericTank"],
    LABEL: "Dual Sine Wave",
    SHAPE: "M -1.0737 0 c 0 0 0.4811 -1.0737 1.0737 -1.0737 c 0.5926 0 1.0737 1.0737 1.0737 1.0737 c 0 0 -0.4811 1.0737 -1.0737 1.0737 c -0.5926 0 -1.0737 -1.0737 -1.0737 -1.0737 z",
};
exports.arkansas = {
    PARENT: ["genericTank"],
    LABEL: "Arkansas",
    SHAPE: "M -0.883 0.6034 l 0.018 -0.884 l -0.078 -0.5404 l 1.8406 -0.0015 c 0 0 0.0008 0.0105 0.0116 0.0328 c 0.0078 0.0161 0.0235 0 0.0255 0.0198 c 0.0007 0.0067 -0.0249 0.0354 -0.0097 0.0383 c 0.0209 0.004 -0.0019 0.0306 -0.0076 0.0359 c -0.0087 0.0081 -0.0325 0.0174 -0.0423 0.0298 c -0.0044 0.0055 -0.0044 0.018 -0.0094 0.0248 c -0.0069 0.0094 -0.019 0.0136 -0.0262 0.0232 c -0.0039 0.0052 0.0009 0.0082 -0.0054 0.0135 c -0.0115 0.0099 -0.0221 0.0324 -0.0221 0.0324 l 0.2618 0.0039 c 0 0 0.0008 0.0112 0.0097 0.0208 c 0.0096 0.0102 0.0272 0.019 0.0242 0.0264 c -0.0022 0.0055 -0.0193 0.0087 -0.033 -0.0032 c -0.0087 -0.0076 -0.0204 0.0088 -0.0192 0.0133 c 0.0038 0.0137 0.0442 0.0143 0.0375 0.0275 c -0.0033 0.0066 -0.0282 0.0101 -0.0446 0.0168 c -0.0163 0.0066 -0.0242 0.0163 -0.0327 0.0209 c -0.0238 0.0129 -0.012 0.0183 -0.015 0.029 c -0.0115 0.0416 0.0271 0.0115 -0.0119 0.0383 c -0.0059 0.0041 0.0139 0.0457 0.0068 0.0505 c -0.0103 0.0069 -0.022 -0.0263 -0.0349 -0.0181 c -0.0084 0.0054 -0.0113 0.0746 -0.0206 0.0805 c -0.0163 0.0103 -0.0137 -0.0327 -0.0328 -0.021 c -0.0139 0.0085 0.0243 0.0426 0.009 0.0518 c -0.0208 0.0126 0.0051 0.003 -0.0183 0.0168 c -0.0175 0.0103 0.0494 0.0234 0.0306 0.0344 c -0.0298 0.0173 0.019 0.0053 -0.0142 0.0239 c -0.0212 0.0119 0.0397 0.012 0.0171 0.0244 c -0.0151 0.0083 -0.0149 -0.0014 -0.0306 0.0071 c -0.0078 0.0042 -0.0169 0.0384 -0.0248 0.0427 c -0.0135 0.0072 -0.0225 -0.0047 -0.0364 0.0027 c -0.017 0.009 0.0377 0.0468 0.0201 0.056 c -0.0247 0.0128 -0.0081 0.0258 -0.034 0.0388 c -0.0052 0.0026 -0.0271 0.0083 -0.0363 0.0018 c -0.0128 -0.0089 -0.0134 -0.031 -0.0209 -0.0274 c -0.0116 0.0057 0.0199 0.0271 0.008 0.0329 c -0.0076 0.0037 -0.0152 0.012 -0.0124 0.0201 c 0.0026 0.0076 0.0157 0.015 0.0084 0.0185 c -0.0159 0.0077 -0.0201 -0.0002 -0.0364 0.0075 c -0.0125 0.0059 0.0384 0.0298 0.0257 0.0358 c -0.0154 0.0072 -0.025 -0.0108 -0.0408 -0.0037 c -0.027 0.0123 0.0427 0.0546 0.0148 0.0669 c -0.0242 0.0107 0.011 0.0477 -0.0141 0.0583 c -0.0307 0.013 0.0049 0.0041 -0.0272 0.0168 c -0.0188 0.0074 0.0101 0.0255 -0.0092 0.0328 c -0.022 0.0083 -0.0011 -0.0303 -0.0238 -0.0221 c -0.018 0.0065 0.0081 0.0309 -0.0103 0.0374 c -0.0089 0.0031 -0.0407 0.0422 -0.0497 0.0453 c -0.0174 0.006 0.0033 -0.0349 -0.0145 -0.029 c -0.0068 0.0022 -0.0056 0.0203 0.0065 0.0342 c 0.0082 0.0094 0.0298 0.0163 0.0252 0.0178 c -0.0144 0.0047 -0.029 -0.0003 -0.0437 0.0043 c -0.0108 0.0034 0.0395 0.0199 0.0285 0.0233 c -0.0079 0.0024 -0.0327 0.0456 -0.0407 0.048 c -0.0107 0.0032 -0.0334 0.0075 -0.0443 0.0106 c -0.0045 0.0013 0.0354 0.0254 0.0309 0.0266 c -0.0072 0.002 -0.0228 0.0268 -0.03 0.0288 c -0.0148 0.004 0.0483 0.0392 0.0332 0.043 c -0.0154 0.0039 -0.0467 -0.0055 -0.0624 -0.0018 c -0.0121 0.0028 0.0093 0.0308 -0.0029 0.0334 c -0.0217 0.0047 0.0666 -0.0016 0.0444 0.0027 c -0.0233 0.0044 0.0117 0.0242 -0.0126 0.0282 c -0.0126 0.0021 -0.0469 -0.0248 -0.0598 -0.0228 c -0.0103 0.0015 0.0441 0.0318 0.0337 0.0333 c -0.016 0.0023 -0.0155 0.0356 -0.0319 0.0376 c -0.0155 0.0019 0.0253 0.0289 0.0094 0.0306 c -0.0111 0.0012 -0.0108 0.0321 -0.0108 0.0321 l 0.0379 -0.0317 c 0 0 0.0304 0.0492 0.0109 0.0502 c -0.0056 0.0003 -0.0152 0.018 -0.0105 0.0391 c 0.0046 0.0208 0.0234 0.045 0.0178 0.0452 c -0.01 0.0004 0.0063 0.0403 -0.004 0.0405 c -0.0087 0.0002 -0.0198 -0.0057 -0.0287 -0.0057 c -0.0042 0 -0.0182 -0.0026 -0.0113 0.0117 c 0.006 0.0125 0.033 0.0423 0.0292 0.0422 c -0.0098 -0.0001 -0.0274 0.015 -0.0274 0.015 l -1.1759 -0.0115 c 0 0 0.0005 -0.2574 0.0005 -0.2574 c 0 0 -0.0161 -0.0104 -0.0329 -0.0093 c -0.007 0.0004 -0.0201 -0.0072 -0.0262 -0.0038 c -0.0045 0.0025 -0.0025 0.0166 -0.0055 0.0163 c -0.0185 -0.0017 -0.0074 -0.0097 -0.0265 -0.0111 c -0.0281 -0.002 -0.0391 -0.001 -0.0501 -0.0039 c -0.033 -0.0088 -0.04 -0.0363 -0.04 -0.0363 z",
};
exports.amongUs = {
    PARENT: ["genericTank"],
    LABEL: "Among Us",
    SHAPE: "M 0 -1.2 c 0.0111 0 0.0202 0.0016 0.0202 0.004 c 0 0.0024 0.0202 0.004 0.0527 0.004 c 0.0512 0.0004 0.0698 0.0016 0.1832 0.0139 c 0.1031 0.0111 0.1305 0.0214 0.1951 0.0742 c 0.0329 0.027 0.0448 0.0412 0.0571 0.0686 c 0.0048 0.0107 0.0155 0.0305 0.0238 0.0444 c 0.0198 0.0321 0.0369 0.0666 0.0432 0.0865 c 0.0091 0.0293 0.0547 0.1463 0.0674 0.1729 c 0.0107 0.0234 0.0163 0.0448 0.0365 0.1416 c 0.0056 0.0262 0.0103 0.0286 0.0599 0.0286 c 0.0508 0 0.1091 0.0091 0.1344 0.0206 c 0.0452 0.021 0.1277 0.1067 0.1499 0.1562 c 0.0286 0.0631 0.0345 0.1166 0.0393 0.3525 c 0.0028 0.115 0.0052 0.1709 0.0079 0.1717 c 0.0052 0.0016 0.0059 0.0801 0.0008 0.0801 c -0.0016 0 -0.0044 0.0143 -0.0059 0.0321 c -0.0024 0.0313 -0.0127 0.0956 -0.0242 0.1543 c -0.0091 0.0448 -0.0412 0.1614 -0.0523 0.1896 c -0.0143 0.0353 -0.0424 0.065 -0.0781 0.0817 c -0.05 0.0242 -0.0714 0.0293 -0.1424 0.0345 l -0.0662 0.0048 v 0.0401 c 0 0.0523 -0.0079 0.1087 -0.0258 0.1892 c -0.0186 0.0833 -0.027 0.0999 -0.0694 0.1424 c -0.0563 0.0567 -0.0948 0.0777 -0.1515 0.0821 c -0.0147 0.0012 -0.0258 0.004 -0.0246 0.0056 c 0.0024 0.0044 -0.0872 0.0048 -0.0912 0.0004 c -0.0016 -0.0016 -0.0214 -0.0048 -0.044 -0.0071 c -0.0516 -0.0059 -0.092 -0.0218 -0.1503 -0.0591 c -0.0575 -0.0369 -0.0646 -0.048 -0.0833 -0.1249 c -0.0151 -0.0619 -0.0206 -0.1059 -0.0246 -0.1907 l -0.0024 -0.0543 l -0.044 -0.0024 c -0.0246 -0.0016 -0.0504 -0.004 -0.0579 -0.0052 c -0.0131 -0.0024 -0.0131 -0.002 -0.0111 0.0111 c 0.0107 0.0746 0.0119 0.0964 0.0071 0.1293 c -0.0083 0.0591 -0.0202 0.1118 -0.0297 0.1332 c -0.0297 0.0678 -0.1202 0.0888 -0.3176 0.0746 c -0.0583 -0.004 -0.0797 -0.0123 -0.1083 -0.0412 c -0.021 -0.0214 -0.0432 -0.0634 -0.0516 -0.098 c -0.0095 -0.0397 -0.0309 -0.1459 -0.0579 -0.2895 c -0.0036 -0.0186 -0.0115 -0.0722 -0.0182 -0.119 c -0.0063 -0.0468 -0.0155 -0.1067 -0.0198 -0.1328 c -0.0056 -0.0341 -0.0091 -0.0845 -0.0127 -0.1765 c -0.0048 -0.1384 -0.0028 -0.1903 0.0131 -0.3525 c 0.0044 -0.0444 0.0075 -0.0813 0.0067 -0.0817 c -0.0008 -0.0008 -0.0091 -0.0075 -0.0186 -0.0155 c -0.0218 -0.0182 -0.0397 -0.0436 -0.0706 -0.0995 c -0.025 -0.0448 -0.0408 -0.0853 -0.0408 -0.1031 c 0 -0.0056 -0.0016 -0.0099 -0.004 -0.0099 c -0.0024 0 -0.004 -0.0167 -0.004 -0.0416 c 0 -0.023 0.0016 -0.0416 0.0036 -0.0416 c 0.0016 0 0.0044 -0.0075 0.0056 -0.0171 c 0.0036 -0.0254 0.0242 -0.0829 0.0404 -0.113 c 0.0206 -0.0373 0.0666 -0.0968 0.0904 -0.117 c 0.0293 -0.0242 0.0373 -0.0289 0.0868 -0.0484 l 0.0444 -0.0171 l 0.0075 -0.0194 c 0.0111 -0.0289 0.065 -0.1166 0.0928 -0.1519 c 0.0159 -0.0202 0.0345 -0.0381 0.0516 -0.05 c 0.0559 -0.0377 0.1221 -0.0769 0.1511 -0.0888 c 0.0389 -0.0167 0.1455 -0.0432 0.184 -0.0464 c 0.0171 -0.0012 0.0297 -0.004 0.0286 -0.0056 c -0.0012 -0.002 0.0071 -0.0036 0.0178 -0.0036 z",
};
exports.florida = {
    PARENT: ["genericTank"],
    LABEL: "Florida",
    SHAPE: "M 0.3519 -0.6656 c 0 0 0 0 0 0 c 0 0 -0 -0 -0 -0 z M -1.2064 -0.5812 c 0 0 0.0112 -0.0204 0.0221 -0.0325 c 0.0087 -0.0097 0.0174 -0.01 0.0201 -0.0203 c 0.0014 -0.0053 -0.0062 -0.0003 -0.0109 -0.0037 c -0.0068 -0.0049 -0.0116 -0.0182 -0.0094 -0.0263 c 0.0025 -0.0093 0.0125 -0.0158 0.0153 -0.0239 c 0.0021 -0.006 -0.0026 -0.0139 -0.0024 -0.0184 c 0.0004 -0.0093 -0.0079 -0.0103 -0.0124 -0.0142 c -0.0097 -0.0083 -0.0204 -0.0121 -0.0204 -0.0121 c 0 0 0 -0.0117 -0.0089 -0.0228 c -0.0069 -0.0086 -0.023 -0.0158 -0.0234 -0.0234 c -0.0006 -0.0116 0.0075 -0.0159 0.0113 -0.0242 c 0.0052 -0.0113 0.0066 -0.0247 0.0066 -0.0247 c 0 0 0.2636 0.0114 0.3927 0.0134 c 0.1242 0.0018 0.3629 0.0004 0.3629 0.0004 c 0 0 0.0067 0.0225 0.0137 0.0397 c 0.0036 0.0089 0.0013 0.0048 0.0076 0.0188 c 0.0027 0.0059 -0.0001 0.0174 0.0041 0.0265 c 0.0045 0.0096 0.0158 0.0166 0.0158 0.0166 c 0 0 0.3592 0.0211 0.5003 0.0297 c 0.107 0.0065 0.2715 0.0172 0.2736 0.0173 c -0.0003 -0 -0.0031 0.0004 0 0.0191 c 0.0011 0.0065 0.0022 0.0204 0.0053 0.0321 c 0.0015 0.0057 0.0178 0.0109 0.0073 0.0145 c -0.0108 0.0037 0.0438 0.0051 0.0438 0.0051 c 0 0 -0.0003 -0.0156 0.0007 -0.0253 c 0.0011 -0.0097 0.0035 -0.0135 0.004 -0.0252 c 0.0006 -0.0133 0.001 -0.0043 0.0019 -0.0175 c 0.0008 -0.0121 -0.0154 -0.0252 -0.0107 -0.0424 c 0.0162 -0.0594 0.0177 -0.0264 0.0196 -0.0317 c 0.0037 -0.0105 0.0082 -0.0148 0.0139 -0.0186 c 0.0054 -0.0037 0.0106 0.0013 0.0145 0.0069 c 0.0019 0.0028 -0.0012 0.0066 0.0046 0.0078 c 0.0109 0.0022 0.0179 0.0012 0.0292 0.0041 c 0.0123 0.0031 0.0289 0.01 0.0429 0.0125 c 0.0268 0.0048 0.0579 0.0071 0.0579 0.0071 c 0 0 -0.0059 0.0144 -0.0039 0.039 c 0.0016 0.0193 0.0047 0.0299 0.0107 0.0596 c 0.0056 0.0275 0.0138 0.0736 0.0214 0.1065 c 0.008 0.0346 0.0159 0.0713 0.0295 0.1081 c 0.0302 0.0813 0.0624 0.1617 0.0997 0.2308 c 0.0521 0.0965 0.1059 0.1686 0.1045 0.169 c -0.0078 0.0022 0.0332 0.0462 0.0206 0.0469 c -0.0069 0.0004 -0.0519 -0.0001 0.0099 0.166 c 0.0095 0.0256 0.0179 0.031 0.0399 0.0743 c 0.0107 0.0211 0.016 0.046 0.0258 0.0689 c 0.0373 0.0871 0.0725 0.179 0.0901 0.2351 c 0.0128 0.0407 -0.009 0.1402 -0.0155 0.2193 c -0.0069 0.084 0.0009 0.1468 -0.0105 0.1594 c -0.0021 0.0023 -0.0034 0.0043 -0.0042 0.0061 c 0.0009 -0.007 0.0016 -0.0141 -0.0054 -0.012 c -0.0013 0.0004 -0.0099 -0.0009 -0.0168 0.0084 c -0.0065 0.0088 -0.0075 0.0305 -0.0118 0.0379 c -0.0103 0.0176 -0.0074 0.0214 -0.0105 0.0377 c -0.0066 0.035 0.0088 0.0492 0.0004 0.0528 c -0.0011 0.0005 -0.0118 0.0042 -0.0156 0.01 c -0.0046 0.0072 -0.0024 0.0169 -0.0054 0.0201 c -0.0072 0.0079 -0.0071 -0.0007 -0.0139 0.0062 c -0.0059 0.0061 -0.0019 0.0013 -0.0112 0.0072 c -0.0105 0.0068 -0.0241 0.0037 -0.0382 0.0085 c -0.0138 0.0047 -0.028 0.0172 -0.0356 0.0203 c -0.0264 0.0107 -0.0192 -0.0156 -0.0334 -0.0107 c -0.0048 0.0017 -0.0174 -0.0006 -0.0207 0.0006 c -0.0227 0.0088 -0.0045 0.0127 -0.0313 0.0168 c -0.0055 0.0008 -0.0247 -0.0042 -0.033 -0.0024 c -0.0009 -0.0009 -0.0017 -0.0016 -0.0026 -0.002 c -0.004 -0.0095 -0.0054 -0.0184 -0.0097 -0.0271 c -0.0025 -0.0051 -0.0117 -0.0234 -0.0109 -0.0258 c -0.0002 -0.0107 0.018 -0.011 0.0188 -0.02 c 0.0002 -0.0025 -0.0126 -0.0262 -0.0152 -0.0316 c -0.0105 -0.0197 -0.0195 -0.0371 -0.0288 -0.0563 c -0.0036 -0.0069 -0.0102 -0.0245 -0.0172 -0.0273 c -0.0004 -0.0002 -0.0069 -0.0012 -0.01 -0.0003 c 0.0011 -0.0015 0.0024 -0.0038 0.0025 -0.0051 c 0.0002 -0.0066 0.0006 -0.0104 -0.0057 -0.0137 c -0.0033 0 -0.0127 -0.0029 -0.0094 -0.0028 c 0.0095 0.0004 0.0142 -0.0165 0.0081 -0.0229 c -0.0043 -0.0045 -0.0179 -0.0111 -0.0238 -0.0138 c -0.0097 -0.0164 -0.0489 -0.0153 -0.064 -0.0081 c -0.0041 0.0014 -0.0115 0.0023 -0.0146 0.0055 c -0.0028 0.003 0.0024 0.0067 -0.0015 0.0057 c -0.0098 -0.0025 -0.0193 -0.0284 -0.0219 -0.0385 c -0.0074 -0.0141 -0.0127 -0.0275 -0.0154 -0.0416 c -0.0014 -0.0072 0.0016 -0.0147 -0.0022 -0.0225 c -0.0111 -0.0222 -0.0039 -0.0447 -0.0152 -0.0679 c -0.0168 -0.0168 -0.0287 -0.0359 -0.0506 -0.0469 c -0.007 -0.0064 -0.0173 -0 -0.0279 0.0069 c 0.0011 -0.0195 -0.0049 -0.0427 -0.0125 -0.0568 c -0.0003 -0.0037 -0.0029 -0.0092 -0.0076 -0.009 c -0.0026 0.0001 0.0041 -0.0033 0.0065 -0.0046 c 0.008 -0.0044 0.009 0.0143 0.02 0.0088 c 0.0051 -0.0026 0.0048 -0.0164 0.0072 -0.021 c 0.0062 -0.0125 0.0044 -0.0291 0.0001 -0.042 c -0.0015 -0.0046 -0.0168 -0.0123 -0.0087 -0.0157 c 0.0166 -0.0085 -0.0024 -0.025 -0.0151 -0.0155 c -0.0175 0.0131 -0.0048 0.0215 -0.0048 0.0358 c 0 0.0033 0.002 0.02 -0.0013 0.0216 c -0.006 0.0031 -0.0244 0.0078 -0.0272 0.0172 c -0.0096 -0.0189 -0.019 -0.0353 -0.028 -0.0536 c -0.006 -0.0228 -0.0219 -0.0429 -0.0328 -0.0643 c -0.0163 -0.016 -0.0223 -0.0446 -0.0323 -0.0647 c -0.0081 -0.0163 -0.0237 -0.0363 -0.0366 -0.0493 c -0.0079 -0.012 -0.0179 -0.0257 -0.0248 -0.0378 c 0.001 -0.0015 0.0017 -0.0021 0.0023 -0.002 c 0.0064 0.0018 0.0124 0.0081 0.0162 0.0088 c 0.0148 -0.007 0.0232 -0.0237 0.0343 -0.0379 c 0.0034 -0.0043 0.0058 -0.0107 0.0102 -0.0137 c 0.0071 -0.0039 0.0075 -0.0164 0.0149 -0.0252 c 0.0079 -0.0093 0.0228 -0.015 0.0226 -0.024 c 0.0076 -0.0142 0.004 -0.0246 -0.006 -0.0326 c -0.0029 -0.0024 -0.0115 -0.0086 -0.0157 -0.0047 c -0.0045 0.004 0.0012 0.0166 0.005 0.0186 c 0.0057 0.0126 0.0007 0.0162 -0.0055 0.0147 c -0.0085 -0.0022 -0.0217 -0.0118 -0.021 -0.0122 c 0.005 -0.0091 0.0087 -0.0182 0.005 -0.0279 c -0.0054 -0.0141 -0.0223 -0.0266 -0.0391 -0.0186 c -0.0325 0.0177 0.0081 0.0204 0.0177 0.0396 c 0.0046 0.0085 0.0096 0.0114 0.0073 0.0233 c -0.0013 0.0065 -0.0073 0.003 -0.01 0.0099 c -0.0013 0.0032 -0.0014 0.0125 0.0001 0.018 c -0.0001 0.0009 -0.0002 0.0018 -0.0002 0.0027 l -0 0 v 0.0024 c -0.0015 0.0004 -0.0031 0.0008 -0.0043 0.0014 c -0.0048 0 -0.0215 0.0048 -0.0232 0.0095 c -0.0017 0.0049 0.0171 0.0296 -0.002 0.0205 c -0.0048 0 -0.0059 -0.0007 -0.0069 -0.0056 c -0.0021 -0.0107 -0.0013 -0.0218 -0.0038 -0.0325 c -0.0023 -0.01 -0.0124 -0.0145 -0.0125 -0.0263 c -0.0057 -0.012 -0.0147 -0.0102 -0.0232 -0.0135 c 0.0021 -0.0062 0.0042 -0.0125 0.0063 -0.0187 c 0.0056 -0.0166 0.0126 -0.018 0.0184 -0.0339 c 0.0024 -0.0067 0.0054 -0.0293 0.0031 -0.0394 c -0.0025 -0.0112 -0.0103 -0.01 -0.0075 -0.017 c 0.0136 -0.0346 0.0221 -0.0475 0.0323 -0.0781 c 0.0042 -0.0127 0.0058 -0.0425 0.0098 -0.0543 c 0.0029 -0.0086 0.0017 -0.0396 -0.0036 -0.0524 c -0.0045 -0.0107 -0.0135 -0.0033 -0.0113 -0.0097 c 0.0076 -0.0221 -0.0129 -0.017 -0.0066 -0.0342 c 0.0047 -0.0131 0.0052 -0.0084 0.0089 -0.0184 c 0.0031 -0.0084 -0.0205 -0.0356 -0.0183 -0.0415 c 0.0045 -0.0119 -0.0263 -0.0185 -0.0254 -0.0192 c 0.0087 -0.0064 0.0193 -0.0286 0.0023 -0.0296 c -0.0123 0 -0.0344 -0.0045 -0.0456 -0.0012 c -0.0057 0.0017 -0.0083 0.01 -0.0151 0.01 c -0.0137 -0.0061 -0.0069 -0.0255 -0.0135 -0.0364 c -0.0055 -0.0091 -0.015 -0.0079 -0.0201 -0.0139 c -0.0086 -0.0177 -0.0165 -0.0468 -0.0408 -0.0473 c -0.0071 0.0001 -0.0086 -0.0097 -0.0116 -0.0138 c -0.0048 -0.0066 -0.0084 -0.0098 -0.0172 -0.0123 c 0 -0.0001 -0.0037 -0.0052 -0.0037 -0.0052 c 0 -0.0013 -0.005 0 -0.005 -0.0013 c 0 -0.0113 0.0038 -0.0301 0.0006 -0.0392 c 0.0039 -0.0068 0.0044 -0.0107 0.0001 -0.0107 c -0.0019 -0 -0.0283 -0.0048 -0.0485 -0.027 c -0.0062 -0.0068 -0.0033 -0.0158 -0.0075 -0.0259 c -0.0051 -0.0121 -0.0173 -0.0251 -0.0237 -0.0305 c -0.015 -0.0125 -0.0321 -0.0156 -0.0405 -0.0167 c -0.0048 -0.0007 -0 0.0026 -0.0075 -0.0036 c -0.0436 -0.0361 -0.0562 -0.0439 -0.0614 -0.0439 c -0.0078 0.0001 -0.0157 0.0015 -0.0223 0.0053 c -0.0037 0.0021 -0.0062 0.0075 -0.0102 0.0076 c -0.0069 0.0001 -0.0061 -0.0148 -0.0125 -0.0146 c -0.0047 0.0001 -0.0006 0.0103 -0.005 0.0104 c -0.0102 0.0004 0.0002 -0.0067 -0.0087 -0.0061 c -0.0046 0.0003 -0.0065 0.0094 -0.0108 0.0098 c -0.0121 0.001 -0.0216 0.0021 -0.0238 0.0086 c -0.0029 0.0084 0.0039 0.0234 0.0063 0.0323 c 0.0029 0.0107 0.0015 0.0162 0.001 0.0177 c -0.0012 0.0029 -0.0303 -0.0144 -0.0642 -0.0025 c -0.0377 0.0132 -0.0814 0.0557 -0.0992 0.0588 c -0.0318 0.0055 0.0305 -0.0276 0.0016 -0.0209 c -0.0264 0.0061 -0.0141 0.0191 -0.0363 0.0233 c -0.0129 0.0024 -0.0219 -0.003 -0.0315 -0.0004 c -0.0387 0.0105 -0.0617 0.0123 -0.0617 0.0123 c 0 0 0.0243 -0.0308 -0.0055 -0.0714 c -0.0025 -0.0034 -0.0082 -0.01 -0.0163 -0.0142 c -0.0088 -0.0046 -0.0203 -0.0069 -0.0275 -0.011 c -0.018 -0.0103 -0.0261 -0.0184 -0.0366 -0.028 c -0.0549 -0.0503 -0.1475 -0.0974 -0.1822 -0.109 c -0.0644 -0.0216 -0.1721 -0.0123 -0.2551 -0.0016 c -0.0705 0.0091 -0.1226 0.0187 -0.1226 0.0187 z M 1.007 0.9841 c -0.0022 -0.0003 -0.0027 -0.0025 -0.0026 -0.0056 c 0.0013 0.0044 0.0056 0.006 0.0026 0.0056 z M 1.0043 0.9784 c -0.0005 -0.0017 -0.0005 -0.0039 0.0006 -0.0066 c -0.0003 0.0023 -0.0006 0.0046 -0.0006 0.0066 z M 0.3993 1.3683 l 0.0001 -0.0011 c 0.0027 -0.0063 0.0179 -0.0153 0.0219 -0.0034 c 0.005 0.0149 -0.0159 0.0146 -0.0233 0.0146 c 0 0 -0.005 0 -0.005 -0.005 c 0 -0.005 0.005 -0.005 0.005 -0.005 c 0.0004 0 0.0009 -0 0.0013 -0.0001 z M 0.6946 1.3296 c 0 0.0025 -0.0025 0.0025 -0.0025 0.0025 l -0.0003 -0.0014 c -0.004 0.0065 -0.023 0.0123 -0.0331 0.0119 c -0.0009 0.0016 -0.0027 0.003 -0.006 0.0042 c -0.0006 0.0002 -0.0158 0.0009 -0.0172 -0.0005 c -0.0012 -0.0011 -0.001 -0.0055 -0.0085 -0.0065 c -0.0063 -0.0008 -0.0205 0.0018 -0.0201 -0 c -0.0049 0.0032 -0.0019 0.011 -0.0038 0.011 c -0.0222 0.012 -0.0535 0.019 -0.0781 0.0251 l -0.0056 0 c 0.0001 0.0014 -0.0004 0.0033 -0.0028 0.0045 c -0.0045 0.0022 -0.0067 -0.0022 -0.0067 -0.0022 c -0.003 -0.0082 -0.002 -0.0153 0.0076 -0.0194 c 0.009 -0.0038 0.0205 0.0022 0.0298 -0.0024 c 0.013 -0.0064 0.0261 -0.0204 0.0368 -0.0308 c 0.0114 -0.0058 0.0245 -0.004 0.0355 -0.0091 c 0.0029 -0.0013 0.0017 -0.0068 0.0044 -0.0083 c 0.0029 -0.0017 0.0068 -0.0017 0.01 -0.0007 c 0.0011 0.0003 0.0148 0.0202 0.0169 0.008 l 0 -0.0047 c 0 0 0 0 0 0 c 0 -0.0028 0.0022 -0.005 0.005 -0.005 c 0.002 0 0.0037 0.0012 0.0045 0.0029 l 0.0025 0.0049 l -0.0018 0.0009 c 0.0047 0.0087 -0.0007 0.0126 -0.0016 0.0178 c -0.0003 0.0016 0 0.0035 0.0002 0.0053 c 0.0085 -0.0001 0.0271 -0.0057 0.0278 -0.0091 l 0.0047 -0.0014 c 0 0 0.0025 0 0.0025 0.0025 z M 0.7261 1.3194 c -0.0001 -0.0003 -0.0002 -0.0005 -0.0003 -0.0008 c -0.0015 0.0007 -0.0028 0.0013 -0.0039 0.0019 c 0 0 -0.0022 0.0011 -0.0034 -0.0011 c -0.0011 -0.0022 0.0011 -0.0034 0.0011 -0.0034 c 0.0098 -0.0049 0.0328 -0.0149 0.0454 -0.0163 c 0.0047 -0.0024 0.0094 -0.0045 0.0145 -0.0055 c 0.0002 -0.0001 0.0005 -0.0002 0.0007 -0.0003 l -0.0002 -0.0005 l 0.0037 -0.0012 c 0.0003 -0.0001 0.0005 -0.0001 0.0008 -0.0001 c 0.0014 0 0.0025 0.0011 0.0025 0.0025 c 0 0.001 -0.0006 0.0019 -0.0014 0.0023 l -0.0025 0.0012 c -0.0026 0.0013 -0.0052 0.0024 -0.0078 0.0035 c -0.0126 0.0077 -0.0384 0.0179 -0.0441 0.0179 l -0.002 0.0011 c 0 0 -0.0022 0.0011 -0.0034 -0.0011 z M 0.7474 1.3097 c -0.0036 0.0013 -0.0071 0.0027 -0.0105 0.0041 c 0.0036 -0.0009 0.0071 -0.0023 0.0105 -0.0041 z M 0.8092 1.2838 c -0.0018 -0.0018 0 -0.0035 0 -0.0035 l 0.0028 -0.0028 c 0.004 -0.0021 0.0311 -0.0164 0.0319 -0.0193 c 0.0007 -0.0025 -0.0024 -0.0102 0.0008 -0.0121 c 0.0007 -0.0004 0.0076 0.002 0.0085 0.0023 c 0.0133 0.0066 0.0328 -0.031 0.0448 -0.037 c 0.0066 -0.0131 0.0231 -0.0199 0.0322 -0.0312 l -0.0008 0.0003 c -0.0003 0.0001 -0.0005 0.0001 -0.0008 0.0001 c -0.0014 0 -0.0025 -0.0011 -0.0025 -0.0025 c 0 -0.0003 0.0001 -0.0006 0.0001 -0.0008 l 0.0011 -0.0034 c -0.0001 -0.0125 0.0127 -0.0291 0.0232 -0.0338 c 0.0056 -0.0132 0.0164 -0.045 0.0322 -0.0509 c -0.0007 -0.007 0.0049 -0.0141 0.01 -0.0204 c 0.0004 -0.0007 0.0008 -0.0014 0.0012 -0.0021 c 0.0004 -0.0008 0.0008 -0.0016 0.0012 -0.0024 l 0.0013 -0.0025 c 0 0 0.0009 -0.0017 0.0026 -0.0014 c 0 -0 0 -0 0 -0.0001 c 0.0036 -0.0061 0.0022 -0.0191 0.0021 -0.0262 c 0 0 0 -0.0025 0.0025 -0.0025 c 0.0025 0 0.0025 0.0025 0.0025 0.0025 c -0 0.0081 0.0013 0.0219 -0.0029 0.0288 c -0.0019 0.0031 -0.0043 0.0061 -0.0066 0.0091 c -0.0036 0.0075 -0.0028 0.015 -0.0071 0.0221 c -0.007 0.0115 -0.0203 0.0178 -0.0262 0.0298 c -0.0078 0.0156 -0.0096 0.0413 -0.0248 0.0515 c -0 0.0006 -0.0003 0.001 -0.0003 0.001 c -0.008 0.0156 -0.0289 0.0225 -0.0368 0.0382 c -0.0145 0.0072 -0.0325 0.047 -0.0503 0.0381 c -0.0027 -0.0009 -0.002 0.0052 -0.0032 0.0078 c -0.0023 0.0051 -0.028 0.0182 -0.0332 0.0207 l -0.0022 0.0022 c 0 0 -0.0018 0.0018 -0.0035 0 z"
};
exports.mogusBody = {
    PARENT: ["genericTank"],
    LABEL: "sussy",
    SHAPE: "M  -0.731 1.979 Q -1.279 -2.215 -0.005 -2.244 Q 1.635 -2.31 1.485 0 Q 1.415 1.801 0.992 1.822 Q 0.599 1.847 0.591 1.342 Q 0.888 1.29 1.078 1.056 Q 0.551 1.132 0.03 1.073 L -0.008 1.871 Q -0.304 2.162 -0.727 1.982",
};
exports.mogusBackpack = {
    PARENT: ["genericTank"],
    LABEL: "sussy",
    SHAPE: "M -1.076 1.037 Q -1.615 1.258 -1.567 -0.014 Q -1.581 -1.214 -1.094 -1.014 L -1.095 -1.009",
};
exports.teams.UPGRADES_TIER_0.push('Team' + TEAM_ROOM, 'Team' + TEAM_ENEMIES);

// DEV "UPGRADE PATHS"
exports.developer.UPGRADES_TIER_0 = ["basic", "healer", "spectator", "miscEntities", "eggGenerator", "bosses", "fun", "levels", "teams", "oldTanks", "scrappedTanks", "shapes"];
    exports.miscEntities.UPGRADES_TIER_0 = ["baseProtector", "dominators", "mothership", "arenaCloser", "antiTankMachineGun"];
        exports.dominators.UPGRADES_TIER_0 = ["dominator", "destroyerDominator", "gunnerDominator", "trapperDominator"];
    exports.bosses.UPGRADES_TIER_0 = ["sentries", "elites", "mysticals", "nesters", "rogues", "terrestrials", "celestials", "eternals", "devBosses"];
        exports.sentries.UPGRADES_TIER_0 = ["sentrySwarm", "sentryGun", "sentryTrap", "shinySentrySwarm", "shinySentryGun", "shinySentryTrap", "cascaderGun", "cascaderSpeed", "cascaderBuild"];
        exports.elites.UPGRADES_TIER_0 = ["eliteDestroyer", "eliteGunner", "eliteSprayer", "eliteBattleship", "eliteSpawner", "eliteTrapGuard", "eliteSpinner", "eliteSkimmer", "legionaryCrasher", "sprayerLegion"];
        exports.mysticals.UPGRADES_TIER_0 = ["sorcerer", "summoner", "enchantress", "exorcistor"];
        exports.nesters.UPGRADES_TIER_0 = ["nestKeeper", "nestWarden", "nestGuardian"];
        exports.rogues.UPGRADES_TIER_0 = ["roguePalisade", "rogueArmada", "alviss", "tyr", "fiolnir"];
        exports.terrestrials.UPGRADES_TIER_0 = ["ares", "gersemi", "ezekiel", "eris", "selene"];
        exports.celestials.UPGRADES_TIER_0 = ["paladin", "freyja", "zaphkiel", "nyx", "theia"];
        exports.eternals.UPGRADES_TIER_0 = ["ragnarok", "kronos"];
        exports.devBosses.UPGRADES_TIER_0 = ["taureonBoss", "tgsBoss"];
    exports.oldTanks.UPGRADES_TIER_0 = ["oldSpreadshot", "oldBentBoomer", "quadBuilder", "weirdSpike", "master", "oldCommander", "blunderbuss", "oldRimfire"];
    exports.scrappedTanks.UPGRADES_TIER_0 = ["autoTrapper", "oldDreadnought", "mender", "prodigy"];
    exports.shapes.UPGRADES_TIER_0 = ["dualSine", "arkansas", "amongUs", "florida", "mogusBody"]
    exports.fun.UPGRADES_TIER_0 = ["vanquisher", "armyOfOne", "godbasic", "maximumOverdrive", "diamondShape", "rotatedTrap", "mummifier", "colorMan", "miscTest", "auraBasic", "auraHealer", "trplnrsTestTank", "weirdAutoBasic", "ghoster", "switcheroo", "hikidy",
"gaytwin", "yskysn"];
