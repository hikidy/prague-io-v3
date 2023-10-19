let loop;
function close() {
    sockets.broadcast("Closing!");
    clearInterval(loop);
    setTimeout(process.exit, 1000);
}

function closeArena() {
    if (arenaClosed) return;
    sockets.broadcast("Arena closed: No players may join!");
    global.arenaClosed = true;
    for (let i = 0; i < entities.length; i++) {
        if (entities[i].isBot) {
            entities[i].kill();
        }
    }
    for (let i = 0; i < 15; i++) {
        let angle = ((Math.PI * 2) / 15) * i;
        let o = new Entity({
            x: room.width / 2 + (room.width / 1.5) * Math.cos(angle),
            y: room.width / 2 + (room.width / 1.5) * Math.sin(angle),
        });
        o.define(Class.arenaCloser);
        o.define({
            AI: {
                FULL_VIEW: true,
                SKYNET: true,
                BLIND: true,
                LIKES_SHAPES: true,
            },
            CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
            SKILL: Array(10).fill(9),
            ACCEPTS_SCORE: false,
            CAN_BE_ON_LEADERBOARD: false,
            VALUE: 100000,
        });
        o.color = 3;
        o.team = TEAM_ROOM;
        o.name = "Arena Closer";
    }
    let ticks = 0;
    loop = setInterval(() => {
        ticks++;
        if (ticks >= 20) return close();
        let alive = false;
        for (let i = 0; i < entities.length; i++) {
            let instance = entities[i];
            if (
                instance.isPlayer || instance.isMothership ||
                (instance.isDominator && instance.team !== -101)
            ) {
                alive = true;
            }
        }
        if (!alive) close();
    }, 500);
}

module.exports = { closeArena };