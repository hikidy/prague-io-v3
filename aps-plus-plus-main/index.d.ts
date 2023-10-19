interface Stats {
    reload?: number,
    recoil?: number,
    shudder?: number,
    size?: number,
    health?: number,
    damage?: number,
    pen?: number,
    speed?: number,
    maxSpeed?: number,
    range?: number,
    density?: number,
    spray?: number,
    resist?: number,
}

type g = Record<string, Stats>

type length = number
type size = number
type width = number
type aspect = number
type xOffset = number
type yOffset = number
type angle = number
type arc = number
type delay = number
type layer = number

type DefaultAPSColors = 'teal' | 'aqua' | 'lightGreen' | 'orange' | 'yellow' | 'lavender' | 'pink'
type Color = number | DefaultAPSColors | {
    BASE: number | DefaultAPSColors,
    HUE_SHIFT?: number,
    SATURATION_SHIFT?: number,
    BRIGHTNESS_SHIFT?: number,
    ALLOW_BRIGHTNESS_INVERT?: boolean
}

interface GunProperties {
    TYPE?: string | Entity | Entity[],
    LABEL?: string,
    ON_SHOOT?: string,
    AUTOFIRE?: boolean,
    ALT_FIRE?: boolean,
    SHOOT_SETTINGS?: Stats
    STAT_CALCULATOR?: number,
    WAIT_TO_CYCLE?: boolean,
    MAX_CHILDREN?: number,
    SYNCS_SKILLS?: boolean,
    NEGATIVE_RECOIL?: boolean,
    INDEPENDENT_CHILDREN?: boolean,
    COLOR?: Color,
    BORDERLESS?: boolean,
    DRAW_FILL?: boolean,
    DRAW_ABOVE?: boolean,
    DESTROY_OLDEST_CHILD?: boolean,
    SHOOT_ON_DEATH?: boolean,
}

interface Gun {
    POSITION: [length, width, aspect, xOffset, yOffset, angle, delay],
    PROPERTIES?: GunProperties
}

interface Turret {
    POSITION: [size, xOffset, yOffset, angle, arc, layer],
    TYPE?: string | Entity | Entity[]
}

type Guns = Array<Gun>
type Turrets = Array<Turret>

interface BodyProperties {
    ACCELERATION?: number,
    SPEED?: number,
    HEALTH?: number,
    RESIST?: number,
    SHIELD?: number,
    REGEN?: number,
    DAMAGE?: number,
    PENETRATION?: number,
    FOV?: number,
    RANGE?: number,
    SHOCK_ABSORB?: number,
    RECOIL_MULTIPLIER?: number,
    DENSITY?: number,
    STEALTH?: number,
    PUSHABILITY?: number,
    HETERO?: number,
}

interface Entity {
    PARENT?: string[] | Entity[],
    LAYER?: number,
    NAME?: string,
    LABEL?: string,
    TYPE?: string,
    SHAPE?: number,
    COLOR?: Color,
    CONTROLLERS?: string[],
    IGNORED_BY_AI?: boolean,
    MOTION_TYPE?: string,
    FACING_TYPE?: string,
    TURRET_FACES_CLIENT?: boolean,
    DRAW_HEALTH?: boolean,
    DRAW_SELF?: boolean,
    DAMAGE_EFFECTS?: boolean,
    RATIO_EFFECTS?: boolean,
    MOTION_EFFECTS?: boolean,
    ACCEPTS_SCORE?: boolean,
    GIVE_KILL_MESSAGE?: boolean,
    CAN_GO_OUTSIDE_ROOM?: boolean,
    HITS_OWN_TYPE?: boolean,
    DIE_AT_LOW_SPEED?: boolean,
    DIE_AT_RANGE?: boolean,
    INDEPENDENT?: boolean,
    PERSISTS_AFTER_DEATH?: boolean,
    CLEAR_ON_MASTER_UPGRADE?: boolean,
    HEALTH_WITH_LEVEL?: boolean,
    OBSTACLE?: boolean,
    NECRO?: boolean | number[],
    HAS_NO_RECOIL?: boolean,
    CRAVES_ATTENTION?: boolean,
    KILL_MESSAGE?: boolean,
    AUTOSPIN_MULTIPLIER?: number,
    BROADCAST_MESSAGE?: string,
    DEFEAT_MESSAGE?: string,
    HEALER?: boolean,
    DAMAGE_CLASS?: number,
    BUFF_VS_FOOD?: boolean,
    CAN_BE_ON_LEADERBOARD?: boolean,
    INTANGIBLE?: boolean,
    IS_SMASHER?: boolean,
    STAT_NAMES?: number,
    AI?: boolean,
    INVISIBLE?: number[],
    ALPHA?: number,
    DANGER?: number,
    SHOOT_ON_DEATH?: boolean,
    BORDERLESS?: boolean,
    DRAW_FILL?: boolean,
    TEAM?: number,
    VARIES_IN_SIZE?: boolean,
    RESET_UPGRADES?: boolean,
    ARENA_CLOSER?: boolean,
    MAX_UPGRADE_TIER?: number,
    SIZE?: number,
    LEVEL?: number,
    SKILL_CAP?: number[],
    SKILL?: number,
    VALUE?: number,
    ALT_ABILITIES?: null,
    MAX_CHILDREN?: number,
    LEVEL_SKILL_POINT_FUNCTION?: (level?: number) => 0 | 1,
    RECALC_SKILL?: boolean,
    EXTRA_SKILL?: number,
    SPAWN_ON_DEATH?: boolean,
    BODY?: BodyProperties,
    TURRETS?: Turrets,
    GUNS?: Guns,
}