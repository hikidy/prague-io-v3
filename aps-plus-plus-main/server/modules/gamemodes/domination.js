let dominatorTypes = ["destroyerDominator", "gunnerDominator", "trapperDominator"],
    neededToWin = 4,

    teamcounts = {},
    gameWon = false;

let spawn = (loc, team, color, type = false) => {
    type = type ? type : ran.choose(dominatorTypes);
    let o = new Entity(loc);
    o.define(type);
    o.team = team;
    o.color = color ?? getTeamColor(team);
    o.skill.score = 111069;
    o.name = "Dominator";
    o.SIZE = c.WIDTH / c.X_GRID / 10;
    o.isDominator = true;
    o.controllers = [new ioTypes.nearestDifferentMaster(o), new ioTypes.spin(o, { onlyWhenIdle: true })];

    if (!teamcounts[team]) {
        teamcounts[team] = 0;
    }
    teamcounts[team]++;

    o.on('dead', () => {

        teamcounts[team]--;
        if (!teamcounts[team]) {
            delete teamcounts[team];
        }

        if (team === TEAM_ENEMIES) {
            let killers = [];
            for (let instance of o.collisionArray) {
                if (isPlayerTeam(instance.team) && team !== instance.team) {
                    killers.push(instance);
                }
            }

            let killer = ran.choose(killers);
            killer = killer ? killer.master.master : { team: TEAM_ROOM, color: room.gameMode === "tdm" ? 3 : 12 };

            let newTeam = killer.team,
                teamName = newTeam > 0 ? killer.name : getTeamName(newTeam);

            spawn(loc, newTeam, killer.color, type);
            room.setType((newTeam > 0) ? "dom3" : (newTeam > -9) ? "dom" + (-newTeam) : "dom0", loc);

            sockets.broadcast(`A dominator is now controlled by ${teamName}!`);
            for (let player of sockets.players) {
                if (player.body && player.body.team === newTeam) {
                    player.body.sendMessage("Press H to take control of the dominator.");
                }
            }

            if (newTeam !== TEAM_ENEMIES && teamcounts[newTeam] >= neededToWin && !gameWon) {
                gameWon = true;
                setTimeout(function() {
                    sockets.broadcast(teamName + " has won the game!");
                    setTimeout(closeArena, 3000);
                }, 1500);
            }

        } else {
            spawn(loc, TEAM_ENEMIES, 3, type);
            room.setType("dom0", loc);
            sockets.broadcast("A dominator is being contested!");
        }
    });
};

module.exports = { dominatorLoop: { spawn } };
