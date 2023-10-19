// An addon is guaranteed to run only after all groups are loaded.
// This is helpful, if your group relies on all other definitions already being loaded.
// Addons that are dependant on other addons should be named something like
// "[PARENT ADDON NAME]-[EXTENSION NAME].js", to make sure that it would run after that addon ran.

const { combineStats, makeAuto } = require('../facilitators.js');
const { gunCalcNames, smshskl } = require('../constants.js');
const g = require('../gunvals.js');
const ensureIsClass = (Class, str) => {
    if ("object" == typeof str) {
        return str;
    }
    if (str in Class) {
        return Class[str];
    }
    throw Error(`Definition ${str} is attempted to be gotten but does not exist!`);
};
const dreadnoughtBody = {
    ACCEL: 1.6,
    SPEED: 1.4,
    HEALTH: 400,
    DAMAGE: 10,
    RESIST: 3,
    PENETRATION: 2,
    SHIELD: 40,
    REGEN: 0.025,
    FOV: 1.5,
    DENSITY: 3,
};

module.exports = ({ Class }) => {

	// Misc
	Class.genericDreadnought1 = {
	    PARENT: ["genericTank"],
	    BODY: dreadnoughtBody,
	    SHAPE: 6,
	    COLOR: 9,
	    SIZE: 50,
	    LEVEL: 150,
	    EXTRA_SKILL: 48,
	    SKILL_CAP: Array(10).fill(smshskl+3),
	};
	Class.mechanismMainTurret = {
	    PARENT: ["genericTank"],
	    LABEL: "Turret",
	    CONTROLLERS: ["nearestDifferentMaster"],
	    INDEPEDENT: true,
	    BODY: {
	        FOV: 0.8,
	    },
	    COLOR: 16,
	    GUNS: [{
	        POSITION: [22, 10, 1, 0, 0, 0, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.pound, g.destroy, g.morespeed, g.morereload, g.doublereload]),
	            TYPE: "bullet"
	        }
	    }]
	};
	Class.automationMainTurret = {
	    PARENT: ["genericTank"],
	    LABEL: "Turret",
	    CONTROLLERS: ["onlyAcceptInArc", "nearestDifferentMaster"],
	    INDEPEDENT: true,
	    BODY: {
	        FOV: 0.8,
	    },
	    COLOR: 16,
	    GUNS: [{
	        POSITION: [22, 10, 1, 0, 0, 0, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.destroy, g.morespeed, g.morereload]),
	            TYPE: "bullet"
	        }
	    }]
	};
	Class.automationSecondaryTurret = {
	    PARENT: ["genericTank"],
	    LABEL: "Turret",
	    CONTROLLERS: ["onlyAcceptInArc", "nearestDifferentMaster"],
	    INDEPEDENT: true,
	    BODY: {
	        FOV: 0.8,
	    },
	    COLOR: 16,
	    GUNS: [{
	        POSITION: [22, 10, 1, 0, 0, 0, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.pound, g.morereload]),
	            TYPE: "bullet"
	        }
	    }]
	};
	Class.turretedTrap = makeAuto(Class.trap);

	// T0
	Class.dread_APSofficialdreadv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Dreadnought",
		REROOT_UPGRADE_TREE: true,
	}

	// T1
	Class.sword_APSofficialdreadv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Sword",
	    GUNS: [],
	}
	for (let i = 0; i < 3; i++) {
	    Class.sword_APSofficialdreadv1.GUNS.push({
	        POSITION: [18, 7, 1, 0, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.morereload]),
	            TYPE: "bullet"
	        }
	    });
	}

	Class.pacifier_APSofficialdreadv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Pacifier",
	    GUNS: [],
	}
	for (let i = 0; i < 3; i++) {
	    Class.pacifier_APSofficialdreadv1.GUNS.push({
	        POSITION: [15, 7, 1, 0, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.morereload]),
	            TYPE: "bullet"
	        }
	    });
	}

	Class.invader_APSofficialdreadv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Invader",
	    GUNS: [],
	}
	for (let i = 0; i < 3; i++) {
	    Class.invader_APSofficialdreadv1.GUNS.push({
	        POSITION: [5.5, 7.5, 1.3, 7.5, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.morespeed]),
	            TYPE: "drone",
	            AUTOFIRE: true,
	            SYNCS_SKILLS: true,
	            STAT_CALCULATOR: gunCalcNames.drone,
	            WAIT_TO_CYCLE: true,
	            MAX_CHILDREN: 4,
	        }
	    });
	}

	Class.centaur_APSofficialdreadv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Centaur",
	    GUNS: [],
	}
	for (let i = 0; i < 3; i++) {
	    Class.centaur_APSofficialdreadv1.GUNS.push({
	        POSITION: [12, 7, 1, 0, 0, 120*i, 0],
	    }, {
	        POSITION: [2.5, 7, 1.6, 12, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.morereload, {range: 3}]),
	            TYPE: ["trap", {HITS_OWN_TYPE: "never"} ],
	            STAT_CALCULATOR: gunCalcNames.trap,
	        },
	    });
	}

	Class.automation_APSofficialdreadv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Automation",
	    TURRETS: [],
	}
	for (let i = 0; i < 6; i++) {
	    Class.automation_APSofficialdreadv1.TURRETS.push({
	        POSITION: [4, 8.7, 0, 60*i+30, 180, 1],
	        TYPE: "automationSecondaryTurret",
	    });
	}
	Class.automation_APSofficialdreadv1.TURRETS.push({
	    POSITION: [7, 0, 0, 0, 360, 1],
	    TYPE: "automationMainTurret",
	});

	Class.juggernaut_APSofficialdreadv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Juggernaut",
	    BODY: {
	        HEALTH: 2,
	        SHIELD: 3,
	        REGEN: 1.5,
	        SPEED: 0.85
	    },
	    TURRETS: [{
	        POSITION: [22, 0, 0, 0, 0, 0],
	        TYPE: ["smasherBody", {INDEPEDENT: false} ]
	    }]
	}

	// T2
	Class.sabre_APSofficialdreadv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Sabre",
	    GUNS: [],
	}
	for (let i = 0; i < 3; i++) {
	    Class.sabre_APSofficialdreadv1.GUNS.push({
	        POSITION: [25, 7, 1, 0, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.assass, g.morespeed, g.morereload]),
	            TYPE: "bullet"
	        }
	    }, {
	        POSITION: [5, 7, -1.4, 9, 0, 120*i, 0]
	    });
	}
	Class.gladius_APSofficialdreadv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Gladius",
	    GUNS: [],
	}
	for (let i = 0; i < 3; i++) {
	    Class.gladius_APSofficialdreadv1.GUNS.push({
	        POSITION: [16, 8, 1, 0, 0, 120*i, 0]
	    }, {
	        POSITION: [20, 6, 1, 0, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.sniper, g.rifle, g.morespeed, g.morereload]),
	            TYPE: "bullet"
	        }
	    });
	}

	Class.appeaser_APSofficialdreadv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Appeaser",
	    GUNS: [],
	}
	for (let i = 0; i < 3; i++) {
	    Class.appeaser_APSofficialdreadv1.GUNS.push({
	        POSITION: [6, 8, 1.3, 7, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.pound, g.morereload, g.slow, {size: 0.55}]),
	            TYPE: "bullet"
	        }
	    }, {
	        POSITION: [6, 7.5, 1.2, 9, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.pound, g.morereload, g.slow, {size: 0.55 * 8 / 7.5}]),
	            TYPE: "bullet"
	        }
	    });
	}
	Class.peacekeeper_APSofficialdreadv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Peacekeeper",
	    GUNS: [],
	}
	for (let i = 0; i < 3; i++) {
	    Class.peacekeeper_APSofficialdreadv1.GUNS.push({
	        POSITION: [15, 10, 1, 0, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.destroy, g.morereload]),
	            TYPE: "bullet",
	        }
	    });
	}
	Class.diplomat_APSofficialdreadv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Diplomat",
	    GUNS: [],
	}
	for (let i = 0; i < 3; i++) {
	    Class.diplomat_APSofficialdreadv1.GUNS.push({
	        POSITION: [13.5, 6, 1, 0, 2.2, 120*i, 0.5],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.slow, g.pound, g.morereload]),
	            TYPE: "bullet"
	        }
	    }, {
	        POSITION: [13.5, 6, 1, 0, -2.2, 120*i, 0.5],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.slow, g.pound, g.morereload]),
	            TYPE: "bullet"
	        }
	    }, {
	        POSITION: [15.5, 6, 1, 0, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.slow, g.pound, g.morereload]),
	            TYPE: "bullet"
	        }
	    });
	}

	Class.inquisitor_APSofficialdreadv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Inquisitor",
	    GUNS: [],
	}
	for (let i = 0; i < 3; i++) {
	    Class.inquisitor_APSofficialdreadv1.GUNS.push({
	        POSITION: [7, 8.5, 1.3, 7.5, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.morespeed, g.battle, {SIZE: 1.25}]),
	            TYPE: "drone",
	            AUTOFIRE: true,
	            SYNCS_SKILLS: true,
	            STAT_CALCULATOR: gunCalcNames.drone,
	            WAIT_TO_CYCLE: true,
	            MAX_CHILDREN: 4,
	        }
	    });
	}
	Class.assailant_APSofficialdreadv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Assailant",
	    GUNS: [],
	}
	for (let i = 0; i < 3; i++) {
	    Class.assailant_APSofficialdreadv1.GUNS.push({
	        POSITION: [13.5, 8, 1, 0, 0, 120*i, 0],
	    }, {
	        POSITION: [1.5, 10, 1, 13.5, 0, 120*i, 0],
	        PROPERTIES: {
	            MAX_CHILDREN: 4,
	            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
	            TYPE: "minion",
	            STAT_CALCULATOR: gunCalcNames.drone,
	            AUTOFIRE: true,
	            SYNCS_SKILLS: true
	        }
	    }, {
	        POSITION: [11.5, 10, 1, 0, 0, 120*i, 0]
	    });
	}
	Class.infiltrator_APSofficialdreadv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Infiltrator",
	    GUNS: [],
	}
	for (let i = 0; i < 3; i++) {
	    Class.infiltrator_APSofficialdreadv1.GUNS.push({
	        POSITION: [7, 6, 0.6, 5.5, 2.8, 120*i, 0.5],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.pound]),
	            TYPE: "swarm",
	            STAT_CALCULATOR: gunCalcNames.swarm
	        }
	    }, {
	        POSITION: [7, 6, 0.6, 5.5, -2.8, 120*i, 0.5],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.pound]),
	            TYPE: "swarm",
	            STAT_CALCULATOR: gunCalcNames.swarm
	        }
	    }, {
	        POSITION: [7, 6, 0.6, 8, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.pound]),
	            TYPE: "swarm",
	            STAT_CALCULATOR: gunCalcNames.swarm
	        }
	    });
	}

	Class.cerberus_APSofficialdreadv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Cerberus",
	    GUNS: [],
	}
	for (let i = 0; i < 3; i++) {
	    Class.cerberus_APSofficialdreadv1.GUNS.push({
	        POSITION: [11.5, 2.5, 1, 0, 4, 120*i, 0]
	    }, {
	        POSITION: [1.75, 2.5, 1.7, 11.5, 4, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.fast, g.pound, g.morereload, {range: 3}]),
	            TYPE: ["trap", {HITS_OWN_TYPE: "never"} ],
	            STAT_CALCULATOR: gunCalcNames.trap,
	        },
	    }, {
	        POSITION: [11.5, 2.5, 1, 0, -4, 120*i, 0]
	    }, {
	        POSITION: [1.75, 2.5, 1.7, 11.5, -4, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.fast, g.pound, g.morereload, {range: 3}]),
	            TYPE: ["trap", {HITS_OWN_TYPE: "never"} ],
	            STAT_CALCULATOR: gunCalcNames.trap
	        }
	    }, {
	        POSITION: [13.5, 3.2, 1, 0, 0, 120*i, 0.5]
	    }, {
	        POSITION: [1.75, 3.2, 1.7, 13.5, 0, 120*i, 0.5],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.fast, g.pound, g.morereload, {range: 3}]),
	            TYPE: ["trap", {HITS_OWN_TYPE: "never"} ],
	            STAT_CALCULATOR: gunCalcNames.trap
	        }
	    });
	}
	Class.minotaur_APSofficialdreadv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Minotaur",
	    GUNS: [],
	}
	for (let i = 0; i < 3; i++) {
	    Class.minotaur_APSofficialdreadv1.GUNS.push({
	        POSITION: [13, 9, 1, 0, 0, 120*i, 0],
	    }, {
	        POSITION: [3, 9, 1.6, 13, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.veryfast, g.pound, g.morereload, {range: 3}]),
	            TYPE: ["unsetTrap", {HITS_OWN_TYPE: "never"} ],
	            STAT_CALCULATOR: gunCalcNames.trap
	        }
	    });
	}
	Class.siren_APSofficialdreadv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Siren",
	    GUNS: [],
	}
	for (let i = 0; i < 3; i++) {
	    Class.siren_APSofficialdreadv1.GUNS.push({
	        POSITION: [13, 7, -1.4, 0, 0, 120*i, 0],
	    }, {
	        POSITION: [2.5, 7, 1.6, 13, 0, 120*i, 0],
	        PROPERTIES: {
	            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.fast, g.pound, g.morereload, {range: 3}]),
	            TYPE: ["turretedTrap", {HITS_OWN_TYPE: "never"} ],
	            STAT_CALCULATOR: gunCalcNames.trap,
	        }
	    });
	}

	Class.mechanism_APSofficialdreadv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Mechanism",
	    TURRETS: [],
	}
	for (let i = 0; i < 6; i++) {
	    Class.mechanism_APSofficialdreadv1.TURRETS.push({
	        POSITION: [4, 8.75, 0, 60*i+30, 180, 1],
	        TYPE: "automationMainTurret",
	    })
	}
	Class.mechanism_APSofficialdreadv1.TURRETS.push({
	    POSITION: [9, 0, 0, 0, 360, 1],
	    TYPE: "mechanismMainTurret",
	})

	Class.behemoth_APSofficialdreadv1 = {
	    PARENT: ["genericDreadnought1"],
	    LABEL: "Behemoth",
	    BODY: {
	        HEALTH: 4,
	        SHIELD: 5,
	        REGEN: 2.25,
	        SPEED: 0.7,
	    },
	    TURRETS: [{
	        POSITION: [23.5, 0, 0, 0, 0, 0],
	        TYPE: ["smasherBody", {INDEPEDENT: false} ]
	    }],
	}

	Class.developer.UPGRADES_TIER_0.push("dread_APSofficialdreadv1");
		Class.dread_APSofficialdreadv1.UPGRADES_TIER_1 = ["sword_APSofficialdreadv1", "pacifier_APSofficialdreadv1", "invader_APSofficialdreadv1", "centaur_APSofficialdreadv1"];
			Class.sword_APSofficialdreadv1.UPGRADES_TIER_M1 = ["sabre_APSofficialdreadv1", "gladius_APSofficialdreadv1"];
			Class.pacifier_APSofficialdreadv1.UPGRADES_TIER_M1 = ["appeaser_APSofficialdreadv1", "peacekeeper_APSofficialdreadv1", "diplomat_APSofficialdreadv1"];
			Class.invader_APSofficialdreadv1.UPGRADES_TIER_M1 = ["inquisitor_APSofficialdreadv1", "assailant_APSofficialdreadv1", "infiltrator_APSofficialdreadv1"];
			Class.centaur_APSofficialdreadv1.UPGRADES_TIER_M1 = ["cerberus_APSofficialdreadv1", "minotaur_APSofficialdreadv1", "siren_APSofficialdreadv1"];
			Class.automation_APSofficialdreadv1.UPGRADES_TIER_M1 = ["mechanism_APSofficialdreadv1"];
			Class.juggernaut_APSofficialdreadv1.UPGRADES_TIER_M1 = ["behemoth_APSofficialdreadv1"];

	for (let primary of Class.dread_APSofficialdreadv1.UPGRADES_TIER_1) {
		let primaryName = primary;
		primary = ensureIsClass(Class, primary);
		primary.UPGRADES_TIER_1 = [];

		for (let secondary of [ "sword_APSofficialdreadv1", "pacifier_APSofficialdreadv1", "invader_APSofficialdreadv1", "centaur_APSofficialdreadv1", "automation_APSofficialdreadv1", "juggernaut_APSofficialdreadv1" ]) {
			let secondaryName = secondary;
	        secondary = ensureIsClass(Class, secondary);

			let GUNS = [],
				TURRETS = [],
				LABEL = primary.LABEL + "-" + secondary.LABEL,
				BODY = JSON.parse(JSON.stringify(dreadnoughtBody));

			// Label it
			if (primary.LABEL == secondary.LABEL) LABEL = primary.LABEL;

			// Guns
			if (primary.GUNS) GUNS.push(...primary.GUNS);
			for (let g in secondary.GUNS) {
				let POSITION = JSON.parse(JSON.stringify(secondary.GUNS[g].POSITION)),
					PROPERTIES = secondary.GUNS[g].PROPERTIES;
				POSITION[5] += 60;
				GUNS.push({ POSITION, PROPERTIES });
			}

			// Turrets
			if (primary.TURRETS) TURRETS.push(...primary.TURRETS);
			if (secondary.TURRETS) TURRETS.push(...secondary.TURRETS);

			// Body
			if (primary.BODY) for (let m in primary.BODY) BODY *= primary.BODY[m];
			if (secondary.BODY) for (let m in secondary.BODY) BODY *= secondary.BODY[m];

			// Definition name
			let definitionName = primaryName + secondaryName;

			// Actually make that guy
			Class[definitionName] = {
				PARENT: ["genericDreadnought1"],
				UPGRADES_TIER_2: [],
				BODY, LABEL, GUNS, TURRETS
			};
			Class[primaryName].UPGRADES_TIER_1.push(definitionName);

			// Compile T2
			for (let primary2 of primary.UPGRADES_TIER_M1) {
				let primaryName2 = primary2;
				primary2 = ensureIsClass(Class, primary2);

				for (let secondary2 of secondary.UPGRADES_TIER_M1) {
					let secondaryName = secondary2;
					secondary2 = ensureIsClass(Class, secondary2);

					let GUNS = [],
						TURRETS = [],
						LABEL = primary2.LABEL + "-" + secondary2.LABEL,
						BODY = JSON.parse(JSON.stringify(dreadnoughtBody));

					// Label it
					if (primary2.LABEL == secondary2.LABEL) LABEL = primary2.LABEL;

					// Guns
					if (primary2.GUNS) GUNS.push(...primary2.GUNS);
					for (let g in secondary2.GUNS) {
						let POSITION = JSON.parse(JSON.stringify(secondary2.GUNS[g].POSITION)),
							PROPERTIES = secondary2.GUNS[g].PROPERTIES;
						POSITION[5] += 60;
						GUNS.push({ POSITION, PROPERTIES });
					}

					// Turrets
					if (primary2.TURRETS) TURRETS.push(...primary2.TURRETS);
					if (secondary2.TURRETS) TURRETS.push(...secondary2.TURRETS);

					// Body
					if (primary2.BODY) for (let m in primary2.BODY) BODY *= primary2.BODY[m];
					if (secondary2.BODY) for (let m in secondary2.BODY) BODY *= secondary2.BODY[m];

					// Definition name
					let definitionName2 = primaryName2 + secondaryName;

					// Actually make that guy
					Class[definitionName2] = {
						PARENT: ["genericDreadnought1"],
						BODY, LABEL, GUNS, TURRETS
					};
					Class[definitionName].UPGRADES_TIER_2.push(definitionName2);
				}
			}
		}
	}
};
