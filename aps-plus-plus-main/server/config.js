module.exports = {
    // Server

    // Game server domain.
    // If 'localhost:NUMBER', the port must equal the port setting.
    host: "localhost:3000",

    // Which port to run the web server on.
    port: 3000,

    // Ticks per second. 1 is 30 tps, 2 is 60, etc.
    // Has physics side effecs.
    gameSpeed: 1,

    // How often to update the list of the entities players can see.
    // Has effects of when entities are activated.
    visibleListInterval: 250,

    // How long (in ms) a socket can be disconnected without their player dying.
    maxHeartbeatInterval: 300000,

    // Flatten entity definition, which gets rid of PARENT attributes and applies the parents' attributes to the entity definition, if they're not set in the entity already.
    flattenDefintions: false,



    // Room
    
    // Room width in grid units
    WIDTH: 8000,
    
    // Room height in grid units
    HEIGHT: 8000,
    
    // Shape of the arena.
    // Can be "rect" or "circle".
    ARENA_TYPE: "rect",

    // The tiles that the room consist of.
    ROOM_SETUP: [
        [ "norm", "norm", "norm", "norm", "norm", "norm", "roid", "roid", "roid", "norm", "norm", "norm", "norm", "norm", "norm" ],
        [ "norm", "norm", "norm", "norm", "norm", "norm", "norm", "roid", "norm", "norm", "norm", "norm", "norm", "norm", "norm" ],
        [ "norm", "norm", "norm", "rock", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "rock", "norm", "norm", "norm" ],
        [ "norm", "norm", "rock", "rock", "norm", "norm", "wall", "norm", "wall", "norm", "norm", "rock", "rock", "norm", "norm" ],
        [ "norm", "norm", "norm", "norm", "norm", "wall", "wall", "norm", "wall", "wall", "norm", "norm", "norm", "norm", "norm" ],
        [ "norm", "norm", "norm", "norm", "wall", "roid", "rock", "rock", "rock", "roid", "wall", "norm", "norm", "norm", "norm" ],
        [ "roid", "norm", "norm", "norm", "wall", "rock", "nest", "nest", "nest", "rock", "wall", "norm", "norm", "norm", "roid" ],
        [ "roid", "roid", "norm", "norm", "wall", "rock", "nest", "nest", "nest", "rock", "wall", "norm", "norm", "roid", "roid" ],
        [ "roid", "norm", "norm", "norm", "wall", "rock", "nest", "nest", "nest", "rock", "wall", "norm", "norm", "norm", "roid" ],
        [ "norm", "norm", "norm", "norm", "wall", "roid", "rock", "rock", "rock", "roid", "wall", "norm", "norm", "norm", "norm" ],
        [ "norm", "norm", "norm", "norm", "norm", "wall", "wall", "norm", "wall", "wall", "norm", "norm", "norm", "norm", "norm" ],
        [ "norm", "norm", "rock", "rock", "norm", "norm", "wall", "norm", "wall", "norm", "norm", "rock", "rock", "norm", "norm" ],
        [ "norm", "norm", "rock", "rock", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "rock", "rock", "norm", "rock" ],
        [ "norm", "norm", "norm", "norm", "norm", "norm", "norm", "roid", "norm", "norm", "norm", "norm", "norm", "rock", "nest" ],
        [ "norm", "norm", "norm", "norm", "norm", "norm", "roid", "roid", "roid", "norm", "norm", "norm", "rock", "nest", "nest" ]
    ],

    // Tile count in a row
    X_GRID: 15,

    // Tile count in a column
    Y_GRID: 15,



    // Physics

    // General multiplier for acceleration and max speeds.
    runSpeed: 1.5,

    // General damage multiplier everytime damage is dealt.
    DAMAGE_CONSTANT: 0.5,

    // General knockback multiplier everytime knockback is applied.
    KNOCKBACK_CONSTANT: 1.5,

    // TODO: Figure out how the math behind this works.
    GLASS_HEALTH_FACTOR: 2,

    // How strong the force is that confines entities to the map and portals apply to entities.
    ROOM_BOUND_FORCE: 0.01,

    // What does this do?
    SKILL_BOOST: 5,

    // TODO: Find out what the intention behind the implementation of this configuration is.
    SOFT_MAX_SKILL: 0.59,



    // Gameplay

    // When an entity reaches a level, this function is called and returns how many points that entity gets for reaching that level.
    LEVEL_SKILL_POINT_FUNCTION: level => {
        if (level < 2) return 0;
        if (level <= 40) return 1;
        if (level <= 45 && level & 1 == 1) return 1;
        return 0;
    },

    // Default skill caps.
    MAX_SKILL: 9,

    // Amount of tank tiers.
    MAX_UPGRADE_TIER: 9,

    // Level difference between each tier.
    TIER_MULTIPLIER: 15,

    // Max normally achievable level.
    LEVEL_CAP: 75,

    // TODO: Figure out what this does.
    LEVEL_SOFT_CAP: 0,

    // Max level you get by level-up key and auto-level-up.
    LEVEL_CHEAT_CAP: 75,

    // Amount of player-bots to spawn.
    BOTS: 15,

    // How much XP player-bots get per second until they reach LEVEL_CAP.
    BOT_XP: 900,

    // The class that players and player-bots spawn as.
    SPAWN_CLASS: "basic",



    // Natural Spawns

    // Something about the likeliness of shinies, idk.
    SHINY_SCALE: 2,

    // How much food to spawn. Not an exact amount.
    FOOD_AMOUNT: 150,

    // How much nest food to spawn.
    // Dependant on the food limit calculated with FOOD_AMOUNT.
    // Not exact multiplier either.
    FOOD_AMOUNT_NEST: 2,

    // Number of crashers per nest tile.
    CRASHER_RATIO: 5,



    // Gamemode related.
    // Please change gamemode in 'server\modules\setup\config.js' instead.
    SPECIAL_BOSS_SPAWNS: false,
    MOTHERSHIP_LOOP: false,
    DOMINATOR_LOOP: false,
    RANDOM_COLORS: false,
    SPACE_PHYSICS: false,
    SPACE_MODE: false,
    GROUPS: false,
    TRAIN: false,
    MAZE: false,
    HUNT: false,
    TAG: false,
    TEAMS: 4,
    MODE: "ffa",



    // Miscellaneous

    // How long a entity chat message lasts in milliseconds.
    // Includes the fade-out period.
    CHAT_MESSAGE_DURATION: 30_000,

    // If you don't want your players to color their messages.
    // They get sanitized after addons interpret them, but before they're added to the chat message dictionary.
    SANITIZE_CHAT_MESSAGE_COLORS: true,

    // If someone tries to get a file that does not exist, send them this instead.
    DEFAULT_FILE: 'index.html',

    // Window name of the server terminal.
    WINDOW_NAME: 'APS++ Game Server Instance',

    // Allows you to type and run javascript code in the terminal.
    REPL_WINDOW: false,

    // Welcome message once a player spawns.
    WELCOME_MESSAGE: "Welcome to Prague.io. To move, use the WASD keys or the arrow keys. To shoot, press space or click at your target.\n"
                    +"You will be invulnerable until you move or shoot.\n"
                    +"This Arras fangame runs on the APS++ engine."
}
