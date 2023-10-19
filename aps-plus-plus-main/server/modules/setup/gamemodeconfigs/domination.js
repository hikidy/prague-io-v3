let room = Array(15).fill(() => Array(15).fill()).map(x => x());
room[7][2] = room[2][7] = room[12][7] = room[7][12] = room[7][7] = "dom0";

module.exports = {
    DOMINATOR_LOOP: true,
    X_GRID: 15,
    Y_GRID: 15,
    WIDTH: 5000,
    HEIGHT: 5000,
    ROOM_SETUP: room
};