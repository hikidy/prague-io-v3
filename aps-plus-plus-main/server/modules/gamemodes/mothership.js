global.defeatedTeams = [];
let motherships = [];
let teamWon = false;
let choices = [Class.mothership];

function spawn() {
    let locs = [{
        x: c.WIDTH * 0.1,
        y: c.HEIGHT * 0.1
    }, {
        x: c.WIDTH * 0.9,
        y: c.HEIGHT * 0.9
    }, {
        x: c.WIDTH * 0.9,
        y: c.HEIGHT * 0.1
    }, {
        x: c.WIDTH * 0.1,
        y: c.HEIGHT * 0.9
    }, {
        x: c.WIDTH * 0.9,
        y: c.HEIGHT * 0.5
    }, {
        x: c.WIDTH * 0.1,
        y: c.HEIGHT * 0.5
    }, {
        x: c.WIDTH * 0.5,
        y: c.HEIGHT * 0.9
    }, {
        x: c.WIDTH * 0.5,
        y: c.HEIGHT * 0.1
    }].sort(() => 0.5 - Math.random());
    for (let i = 0; i < c.TEAMS; i++) {
        let o = new Entity(locs[i]);
        o.define(ran.choose(choices));
        o.define({
            ACCEPTS_SCORE: false,
            VALUE: 643890
        });
        o.color = getTeamColor(-i - 1);
        o.team = -i - 1;
        o.name = "Mothership";
        o.isMothership = true;
        o.controllers.push(new ioTypes.nearestDifferentMaster(o), new ioTypes.mapTargetToGoal(o));
        o.refreshBodyAttributes();
        motherships.push([o.id, i]);
    }
};

function death(entry) {
    sockets.broadcast(getTeamName(entry[1]) + "'s mothership has been killed!");
    global.defeatedTeams.push(-entry[1] - 1);
    for (let i = 0; i < entities.length; i++) {
        let o = entities[i];
        if (o.team === -entry[1] - 1) {
            o.sendMessage("Your team has been eliminated.");
            o.kill();
        }
    }
    return false;
};

function winner(teamId) {
    sockets.broadcast(getTeamName(teamId) + " has won the game!");
    setTimeout(closeArena, 3000);
};

function loop() {
    if (teamWon) return;
    let aliveNow = motherships.map(entry => [...entry, entities.find(entity => entity.id === entry[0])]);
    aliveNow = aliveNow.filter(entry => {
        if (!entry[2]) return death(entry);
        if (entry[2].isDead()) return death(entry);
        return true;
    });
    if (aliveNow.length === 1) {
        teamWon = true;
        setTimeout(winner, 2500, aliveNow[0][1]);
    }
    motherships = aliveNow;
};

module.exports = { mothershipLoop:  { spawn, loop, motherships } };