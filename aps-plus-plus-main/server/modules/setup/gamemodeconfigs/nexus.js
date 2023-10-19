let room =
[
        ['norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'atmg', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'wall', 'norm', 'norm', ],
        ['norm', 'atmg', 'norm', 'norm', 'atmg', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'atmg', 'norm', 'norm', 'norm', 'norm', 'wall', 'port', 'norm', ],
        ['norm', 'norm', 'norm', 'norm', 'norm', 'wall', 'wall', 'wall', 'wall', 'norm', 'norm', 'norm', 'norm', 'norm', 'wall', 'norm', 'wall', 'wall', 'wall', 'norm', 'norm', 'norm', 'wall', 'wall', 'wall', ],
        ['norm', 'norm', 'norm', 'norm', 'norm', 'wall', 'rock', 'rock', 'wall', 'atmg', 'norm', 'norm', 'norm', 'wall', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'wall', 'atmg', 'norm', 'norm', 'norm', ],
        ['norm', 'norm', 'norm', 'norm', 'norm', 'wall', 'rock', 'rock', 'wall', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', ],
        ['norm', 'atmg', 'wall', 'norm', 'norm', 'wall', 'norm', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'norm', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'norm', 'wall', 'norm', 'norm', 'norm', ],
        ['norm', 'norm', 'norm', 'norm', 'norm', 'wall', 'rock', 'rock', 'rock', 'wall', 'norm', 'norm', 'norm', 'norm', 'norm', 'wall', 'boss', 'boss', 'boss', 'wall', 'norm', 'norm', 'norm', 'norm', 'norm', ],
        ['norm', 'norm', 'norm', 'norm', 'norm', 'wall', 'rock', 'port', 'rock', 'wall', 'wall', 'wall', 'norm', 'wall', 'wall', 'wall', 'norm', 'norm', 'norm', 'wall', 'norm', 'norm', 'norm', 'norm', 'norm', ],
        ['norm', 'norm', 'norm', 'norm', 'norm', 'wall', 'rock', 'rock', 'rock', 'wall', 'norm', 'norm', 'norm', 'norm', 'norm', 'wall', 'wall', 'norm', 'wall', 'wall', 'norm', 'norm', 'wall', 'wall', 'wall', ],
        ['port', 'atmg', 'wall', 'norm', 'norm', 'wall', 'rock', 'rock', 'rock', 'wall', 'norm', 'bas1', 'bas1', 'bas1', 'norm', 'wall', 'norm', 'norm', 'norm', 'wall', 'norm', 'norm', 'norm', 'nest', 'wall', ],
        ['norm', 'norm', 'norm', 'norm', 'norm', 'wall', 'rock', 'rock', 'rock', 'norm', 'norm', 'bas1', 'bap1', 'bas1', 'norm', 'norm', 'norm', 'port', 'norm', 'wall', 'norm', 'norm', 'wall', 'nest', 'wall', ],
        ['norm', 'norm', 'norm', 'norm', 'norm', 'wall', 'rock', 'rock', 'rock', 'wall', 'norm', 'bas1', 'bas1', 'bas1', 'norm', 'wall', 'norm', 'norm', 'norm', 'wall', 'norm', 'atmg', 'wall', 'port', 'wall', ],
        ['norm', 'norm', 'norm', 'norm', 'norm', 'wall', 'wall', 'rock', 'wall', 'wall', 'norm', 'norm', 'norm', 'norm', 'norm', 'wall', 'wall', 'wall', 'wall', 'wall', 'norm', 'norm', 'wall', 'nest', 'wall', ],
        ['norm', 'atmg', 'wall', 'norm', 'norm', 'wall', 'rock', 'rock', 'rock', 'wall', 'norm', 'wall', 'wall', 'wall', 'norm', 'wall', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'wall', 'wall', 'wall', ],
        ['norm', 'norm', 'norm', 'norm', 'norm', 'wall', 'rock', 'rock', 'rock', 'wall', 'rock', 'nest', 'nest', 'nest', 'rock', 'wall', 'norm', 'norm', 'norm', 'norm', 'wall', 'norm', 'norm', 'norm', 'norm', ],
        ['norm', 'norm', 'norm', 'norm', 'norm', 'wall', 'wall', 'wall', 'norm', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'boss', 'norm', 'norm', ],
        ['norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'wall', 'rock', 'wall', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'atmg', 'norm', 'atmg', 'norm', ],
        ['norm', 'atmg', 'wall', 'norm', 'norm', 'norm', 'norm', 'wall', 'norm', 'wall', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'wall', 'norm', 'norm', 'norm', 'boss', 'norm', 'port', 'norm', 'boss', ],
        ['norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'wall', 'norm', 'atmg', 'norm', 'norm', 'norm', 'atmg', 'norm', 'atmg', 'norm', ],
        ['norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'norm', 'boss', 'norm', 'norm', ],
]

module.exports = {
    MODE: "tdm",
    TEAMS: 1,
    X_GRID: 25,
    Y_GRID: 20,
    WIDTH: 5000,
    HEIGHT: 4000,
    ROOM_SETUP: room
}