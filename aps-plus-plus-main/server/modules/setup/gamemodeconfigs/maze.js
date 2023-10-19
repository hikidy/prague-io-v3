let room = Array(15).fill(() => Array(15).fill()).map(x => x());
for (let x = 6; x <= 8; x++) for (let y = 6; y <= 8; y++) room[y][x] = "nest";

module.exports = {
    MAZE: 30,
    X_GRID: 15,
    Y_GRID: 15,
    WIDTH: 5000,
    HEIGHT: 5000,
    CLEAR_NEST: true,
    ROOM_SETUP: room,
};