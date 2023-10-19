module.exports = {
    // Misc
    template: { reload: 18, recoil: 1.4, shudder: 0.1, size: 1, health: 1, damage: 0.75, pen: 1, speed: 4.5, spray: 15 },
    blank: { },
    small: { size: 0.8 },
    micro: { size: 0.4 },
    weak: { reload: 2, health: 0.6, damage: 0.6, pen: 0.8, speed: 0.5, maxSpeed: 0.7, range: 0.25, density: 0.3 },
    power: { shudder: 0.6, size: 1.2, pen: 1.25, speed: 2, maxSpeed: 1.7, density: 2, spray: 0.5, resist: 1.5 },
    fake: { recoil: 0.00001, size: 0.00001, health: 0.0001, speed: 0.00001, maxSpeed: 2, range: 0 },
    op: { reload: 0.5, recoil: 1.3, health: 4, damage: 4, pen: 4, speed: 3, maxSpeed: 2, density: 5, spray: 2 },
    closer: { reload: 1.25, recoil: 0.25, health: 1000, damage: 1000, pen: 1000, speed: 2.5, maxSpeed: 2.25, range: 1.4, density: 4, spray: 0.25 },




    // Bases
    basic: { reload: 18, recoil: 1.4, shudder: 0.1, damage: 0.75, speed: 4.5, spray: 15 },
    drone: { reload: 50, recoil: 0.25, shudder: 0.1, size: 0.6, speed: 2, spray: 0.1 },
    trap: { reload: 36, shudder: 0.25, size: 0.6, damage: 0.75, speed: 5, spray: 15, resist: 3 },
    swarm: { reload: 18, recoil: 0.25, shudder: 0.05, size: 0.4, damage: 0.75, speed: 4, spray: 5 },
    factory: { reload: 60, shudder: 0.1, size: 0.7, damage: 0.75, speed: 3, spray: 0.1 },
    productionist: { reload: 75, recoil: 0.25, shudder: 0.05, size: 0.7, damage: 0.75, speed: 4, range: 1.5, spray: 5 },

    // Spammers
    single: { reload: 1.05, speed: 1.05 },
    twin: { recoil: 0.5, shudder: 0.9, health: 0.9, damage: 0.99, spray: 1.2 },
    double: { damage: 0.9 },
    hewn: { reload: 1.25, recoil: 1.5, health: 0.9, damage: 0.85, maxSpeed: 0.9 },
    bent: { reload: 1.1, shudder: 0.8, health: 0.9, pen: 0.8, density: 0.8, spray: 0.5 },
    spreadmain: { reload: 0.781, recoil: 0.25, shudder: 0.5, health: 0.5, speed: 1.923, maxSpeed: 2.436 },
    spread: { reload: 1.5, shudder: 0.25, speed: 0.7, maxSpeed: 0.7, spray: 0.25 },
    triple: { reload: 1.2, recoil: 0.667, shudder: 0.9, health: 0.85, damage: 0.85, pen: 0.9, density: 1.1, spray: 0.9, resist: 0.95 },
    quint: { reload: 1.5, recoil: 0.667, shudder: 0.9, pen: 0.9, density: 1.1, spray: 0.9, resist: 0.95 },
    turret: { reload: 2, health: 0.8, damage: 0.6, pen: 0.7, density: 0.1 },

    // Snipers
    sniper: { reload: 1.35, shudder: 0.25, damage: 0.8, pen: 1.1, speed: 1.5, maxSpeed: 1.5, density: 1.5, spray: 0.2, resist: 1.15 },
    crossbow: { reload: 2, health: 0.6, damage: 0.6, pen: 0.8 },
    assass: { reload: 1.65, shudder: 0.25, health: 1.15, pen: 1.1, speed: 1.18, maxSpeed: 1.18, density: 3, resist: 1.3 },
    hunter: { reload: 1.5, recoil: 0.7, size: 0.95, damage: 0.9, speed: 1.1, maxSpeed: 0.8, density: 1.2, resist: 1.15 },
    hunter2: { size: 0.9, health: 2, damage: 0.5, pen: 1.5, density: 1.2, resist: 1.1 },
    preda: { reload: 1.4, size: 0.8, health: 1.5, damage: 0.9, pen: 1.2, speed: 0.9, maxSpeed: 0.9 },
    dual: { reload: 2, shudder: 0.8, health: 1.5, speed: 1.3, maxSpeed: 1.1, resist: 1.25 },
    rifle: { reload: 0.8, recoil: 0.8, shudder: 1.5, health: 0.8, damage: 0.8, pen: 0.9, spray: 2 },
    blunderbuss: { recoil: 0.1, shudder: 0.5, health: 0.4, damage: 0.2, pen: 0.4, spray: 0.5 },

    // Machine guns
    mach: { reload: 0.5, recoil: 0.8, shudder: 1.7, health: 0.7, damage: 0.7, maxSpeed: 0.8, spray: 2.5 },
    gunner: { reload: 1.25, recoil: 0.25, shudder: 1.5, size: 1.1, damage: 0.35, pen: 1.35, speed: 0.9, maxSpeed: 0.8, density: 1.5, spray: 1.5, resist: 1.2 },
    puregunner: { recoil: 0.25, shudder: 1.5, size: 1.2, health: 1.35, damage: 0.25, pen: 1.25, speed: 0.8, maxSpeed: 0.65, density: 1.5, spray: 1.5, resist: 1.2 },
    machgun: { reload: 0.66, recoil: 0.8, shudder: 2, damage: 0.75, speed: 1.2, maxSpeed: 0.8, spray: 2.5 },
    blaster: { recoil: 1.2, shudder: 1.25, size: 1.1, health: 1.5, pen: 0.6, speed: 0.8, maxSpeed: 0.33, range: 0.6, density: 0.5, spray: 1.5, resist: 0.8 },
    chain: { reload: 1.25, recoil: 1.33, shudder: 0.8, health: 0.8, pen: 1.1, speed: 1.25, maxSpeed: 1.25, range: 1.1, density: 1.25, spray: 0.5, resist: 1.1 },
    atomizer: { reload: 0.3, recoil: 0.8, size: 0.5, damage: 0.75, speed: 1.2, maxSpeed: 0.8, spray: 2.25 },
    spam: { reload: 1.1, size: 1.05, damage: 1.1, speed: 0.9, maxSpeed: 0.7, resist: 1.05 },
    gunnerDominator: { reload: 1.1, recoil: 0, shudder: 1.1, size: 0.5, health: 0.5, damage: 0.5, speed: 1.1, density: 0.9, spray: 1.2, resist: 0.8 },

    // Flanks
    flank: { recoil: 1.2, health: 1.02, damage: 0.81, pen: 0.9, maxSpeed: 0.85, density: 1.2 },
    hurricane: { health: 1.3, damage: 1.3, pen: 1.1, speed: 1.5, maxSpeed: 1.15 },
    tri: { recoil: 0.9, health: 0.9, speed: 0.8, maxSpeed: 0.8, range: 0.6 },
    trifront: { recoil: 0.2, speed: 1.3, maxSpeed: 1.1, range: 1.5 },
    halfthruster: { recoil: 2, shudder: 2, health: 0.8, damage: 0.55, pen: 0.7, spray: 0.4, resist: 0.1 },
    thruster: { recoil: 4, shudder: 2, health: 0.5, damage: 0.5, pen: 0.7, spray: 0.5, resist: 0.7 },

    // Autos
    auto: { reload: 0.9, recoil: 0.75, shudder: 0.5, size: 0.8, health: 0.9, damage: 0.6, pen: 1.2, speed: 1.1, range: 0.8, density: 1.3, resist: 1.25 },
    five: { reload: 1.15, speed: 1.05, maxSpeed: 1.05, range: 1.1, density: 2 },
    autosnipe: { size: 1.4, health: 2 },

    // Drones
    over: { reload: 1.25, size: 0.85, health: 0.7, damage: 0.8, maxSpeed: 0.9, density: 2 },
    meta: { reload: 1.333, damage: 0.667 },
    overdrive: { reload: 5, health: 0.8, damage: 0.8, pen: 0.8, speed: 0.9, maxSpeed: 0.9, range: 0.9, spray: 1.2 },
    commander: { reload: 3, size: 0.7, health: 0.4, damage: 0.7, range: 0.1, density: 0.5 },
    protectorswarm: { reload: 5, recoil: 0.000001, health: 100, range: 0.5, density: 5, resist: 10 },
    battle: { health: 1.25, damage: 1.15, maxSpeed: 0.85, resist: 1.1 },
    carrier: { reload: 1.5, damage: 0.8, speed: 1.3, maxSpeed: 1.2, range: 1.2 },
    bees: { reload: 1.3, size: 1.4, damage: 1.5, pen: 0.5, speed: 3, maxSpeed: 1.5, density: 0.25 },
    sunchip: { reload: 5, size: 1.4, health: 0.5, damage: 0.4, pen: 0.6, density: 0.8 },
    maleficitor: { reload: 0.5, size: 1.05, health: 1.15, damage: 1.15, pen: 1.15, speed: 0.8, maxSpeed: 0.8, density: 1.15 },
    summoner: { reload: 0.3, size: 1.125, health: 0.4, damage: 0.345, pen: 0.4, density: 0.8 },
    minion: { shudder: 2, health: 0.4, damage: 0.4, pen: 1.2, range: 0.75, spray: 2 },
    babyfactory: { reload: 1.5, maxSpeed: 1.35 },
    mehdrone: { size: 1.35, health: 1.75, speed: 1.125 },
    bigdrone: { size: 1.8, health: 2.5, speed: 1.25 },
    mothership: { reload: 1.25, pen: 1.1, speed: 0.775, maxSpeed: 0.8, range: 15, resist: 1.15 },

    // Heavy cannons
    pound: { reload: 2, recoil: 1.6, damage: 2, speed: 0.85, maxSpeed: 0.8, density: 1.5, resist: 1.15 },
    destroy: { reload: 2.2, recoil: 1.8, shudder: 0.5, health: 2, damage: 2, pen: 1.2, speed: 0.65, maxSpeed: 0.5, density: 2, resist: 3 },
    anni: { reload: 0.8, recoil: 1.25 },
    hive: { reload: 1.5, recoil: 0.8, size: 0.8, health: 0.7, damage: 0.3, maxSpeed: 0.6 },
    arty: { reload: 1.2, recoil: 0.7, size: 0.9, speed: 1.15, maxSpeed: 1.1, density: 1.5 },
    mortar: { reload: 1.2, health: 1.1, speed: 0.8, maxSpeed: 0.8 },
    destroyerDominator: { reload: 6.5, recoil: 0, size: 0.975, health: 6, damage: 6, pen: 6, speed: 0.575, maxSpeed: 0.475, spray: 0.5 },
    shotgun: { reload: 8, recoil: 0.4, size: 1.5, damage: 0.4, pen: 0.8, speed: 1.8, maxSpeed: 0.6, density: 1.2, spray: 1.2 },

    // Uzis
    uzi: { reload: 1.9, recoil: 0.6, size: 0.8, damage: 0.75, speed: 1.55 },
    mini: { reload: 1.25, recoil: 0.6, size: 0.8, health: 0.55, damage: 0.45, pen: 1.25, speed: 1.33, density: 1.25, spray: 0.5, resist: 1.1 },
    stream: { reload: 1.1, recoil: 0.6, damage: 0.65, speed: 1.24 },
    nail: { reload: 0.85, recoil: 2.5, size: 0.8, damage: 0.7, density: 2 },

    // Lancers
    lancer: { reload: 0.01, recoil: 0, size: 0.7, health: 2, damage: 0.05, pen: 3, maxSpeed: 2, range: 0.04, density: 2, resist: 2 },
    axe: { health: 1.2, damage: 2, resist: 1.1 },
    jouster: { health: 0.8, damage: 0.8, resist: 0.99 },
    jester: { health: 0.99, damage: 0.99 },

    // Missiles
    launcher: { reload: 1.5, recoil: 1.5, shudder: 0.1, size: 0.72, health: 1.05, damage: 0.925, speed: 0.9, maxSpeed: 1.2, range: 1.1, resist: 1.5 },
    skim: { recoil: 0.8, shudder: 0.8, size: 0.9, health: 1.35, damage: 0.8, pen: 2, speed: 0.3, maxSpeed: 0.3, resist: 1.1 },
    snake: { reload: 0.4, shudder: 4, health: 1.5, damage: 0.9, pen: 1.2, speed: 0.2, maxSpeed: 0.35, density: 3, spray: 6, resist: 0.5 },
    sidewind: { reload: 1.5, recoil: 2, health: 1.5, damage: 0.9, speed: 0.15, maxSpeed: 0.5 },
    snakeskin: { reload: 0.6, shudder: 2, health: 0.5, damage: 0.5, maxSpeed: 0.2, range: 0.4, spray: 5 },
    rocketeer: { reload: 1.4, shudder: 0.9, size: 1.2, health: 1.5, damage: 1.4, pen: 1.4, speed: 0.3, range: 1.2, resist: 1.4 },
    missileTrail: { reload: 0.6, recoil: 0.25, shudder: 2, damage: 0.9, pen: 0.7, speed: 0.4, range: 0.5 },
    rocketeerMissileTrail: { reload: 0.5, recoil: 7, shudder: 1.5, size: 0.8, health: 0.8, damage: 0.7, speed: 0.9, maxSpeed: 0.8, spray: 5 },
    
    // Traps and blocks
    block: { reload: 1.1, recoil: 2, shudder: 0.1, size: 1.5, health: 2, pen: 1.25, speed: 1.5, maxSpeed: 2.5, range: 1.25, resist: 1.25 },
    construct: { reload: 1.3, size: 0.9, maxSpeed: 1.1 },
    boomerang: { reload: 0.8, health: 0.5, damage: 0.5, speed: 0.75, maxSpeed: 0.75, range: 1.333 },
    nest_keeper: { reload: 3, size: 0.75, health: 1.05, damage: 1.05, pen: 1.1, speed: 0.5, maxSpeed: 0.5, range: 0.5, density: 1.1 },
    hexatrap: { reload: 1.3, shudder: 1.25, speed: 0.8, range: 0.5 },
    megatrap: { reload: 2, recoil: 1.5, shudder: 0.75, size: 1.8, health: 1.52, damage: 1.52, pen: 1.52, speed: 0.9, maxSpeed: 0.8, range: 1.4, resist: 2.5 },
    trapperDominator: { reload: 1.26, recoil: 0, shudder: 0.25, health: 1.25, damage: 1.45, pen: 1.6, speed: 0.5, maxSpeed: 2, range: 0.7, spray: 0.5 },

    // Range
    rangeless: { range: 0.08 },

    // Recoil
    tonsmorrecoil: { recoil: 4 },
    lotsmorrecoil: { recoil: 1.8 },
    muchmorerecoil: { recoil: 1.35 },
    morerecoil: { recoil: 1.15 },
    halfrecoil: { recoil: 0.5 },
    recoilless: { recoil: 0 },

    // Reload
    halfreload: { reload: 2 },
    lessreload: { reload: 1.5 },
    one_third_reload: { reload: 1.333 },
    morereload: { reload: 0.75 },
    doublereload: { reload: 0.5 },

    // Speed
    fast: { speed: 1.2 },
    veryfast: { speed: 2.5 },
    morespeed: { speed: 1.3, maxSpeed: 1.3 },
    bitlessspeed: { speed: 0.93, maxSpeed: 0.93 },
    slow: { speed: 0.7, maxSpeed: 0.7 },
    halfspeed: { speed: 0.5, maxSpeed: 0.5 },
    speedless: { speed: 0.0001, maxSpeed: 0.7 },

    // Penetration
    
    morepene: { pen: 1.5 },
    evenmorepene: { pen: 1.8 },

    // Misc 2
    healer: { damage: -1 },
    debuff1: { reload: 0.99, damage: 0.85, pen:0.7, range: 0.99 },
    celeslower: { size: 0.5 },
    lowpower: { shudder: 2, health: 0.5, damage: 0.5, pen: 0.7, spray: 0.5, resist: 0.7 },
    notdense: { density: 0.1 },
    halfrange: { range: 0.5 },
    acc: { shudder: 0.1 },
    aura: { reload: 0.001, recoil: 0.001, shudder: 0.001, size: 6, damage: 3, speed: 0.001, maxSpeed: 0.001, spray: 0.001, density: 2, resist: 2 },
    noRandom: { shudder: 0.00001, spray: 0.00001 },
    bigger: { size: 8 }
}
