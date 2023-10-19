// you can edit this!
let teams = 4;

// you can edit anything below this if you know what you're doing

let room = Array(15).fill(() => Array(15).fill()).map(x => x());
room[0][0] = room[1][0] = room[0][1] = "bas1";
room[1][1] = "bap1";

if (teams > 1) { // for the sexus servers who want 1TDM
	room[14][14] = room[13][14] = room[14][13] = "bas2";
	room[13][13] = "bap2";
}
if (teams > 2) {
	room[0][14] = room[1][14] = room[0][13] = "bas3";
	room[1][13] = "bap3";
}
if (teams > 3) {
	room[14][0] = room[14][1] = room[13][0] = "bas4";
	room[13][1] = "bap4";
}

// if (teams > 4) {
// 	   room[14][0] = room[14][1] = room[13][0] = "bas5";
// 	   room[13][1] = "bap5";
// }
// if (teams > 5) {
// 	   room[14][0] = room[14][1] = room[13][0] = "bas6";
// 	   room[13][1] = "bap6";
// }
// if (teams > 6) {
// 	   room[14][0] = room[14][1] = room[13][0] = "bas7";
// 	   room[13][1] = "bap7";
// }
// if (teams > 7) {
// 	   room[14][0] = room[14][1] = room[13][0] = "bas8";
// 	   room[13][1] = "bap8";
// }

module.exports = {
    MODE: "tdm",
    TEAMS: teams,
    X_GRID: 15,
    Y_GRID: 15,
    WIDTH: 5000,
    HEIGHT: 5000,
    ROOM_SETUP: room
};