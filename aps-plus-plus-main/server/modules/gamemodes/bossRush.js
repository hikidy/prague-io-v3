let calculatePoints = wave => 5 + wave * 3;

// Each wave has a certain amount of "points" that it can spend on bosses, calculated above.
// Each boss costs an amount of points.
// It will always buy as many bosses until it has no points or else can't spend them.
// It picks a boss to buy by filtering the list of boss choices by if they are affordable.
// Then it picks a boss at random, with all choices being equally likely.

class BossRush {
    constructor() {
        this.bossChoices = [
            // [ cost , definition reference ],

            //elite crashers
            [  2, "eliteDestroyer"],
            [  2, "eliteGunner"],
            [  2, "eliteSprayer"],
            [  2, "eliteBattleship"],
            [  2, "eliteSpawner"],
            [  2, "eliteTrapGuard"],
            [  2, "eliteSpinner"],

            //elite tanks
            [  2, "eliteSkimmer"],

            //mysticals
            [  1, "sorcerer"],
            [  2, "summoner"],
            [  2, "enchantress"],
            [  2, "exorcistor"],

            //nesters
            [  3, "nestKeeper"],
            [  3, "nestWarden"],
            [  3, "nestGuardian"],

            //terrestrials
            [ 15, "ares"],
            [ 15, "gersemi"],
            [ 15, "ezekiel"],
            [ 15, "eris"],
            [ 15, "selene"],

            //celestials
            [ 35, "paladin"],
            [ 35, "freyja"],
            [ 35, "zaphkiel"],
            [ 35, "nyx"],
            [ 35, "theia"],

            //eternals
            [ 99, "legionaryCrasher" /*fucking mid*/],
            [100, "kronos"],
            [100, "ragnarok"],
        ];
        this.friendlyBossChoices = ["roguePalisade", "rogueArmada", "alviss", "tyr", "fiolnir"];
        this.bigFodderChoices = ["sentryGun", "sentrySwarm", "sentryTrap", "shinySentryGun"];
        this.smallFodderChoices = ["crasher"];
        this.waves = this.generateWaves();
        this.waveId = -1;
        this.gameActive = true;
        this.timer = 0;
        this.remainingEnemies = 0;;
    }

    generateWaves() {
        let waves = [];
        for (let i = 0; i < 100; i++) {
            let wave = [],
                points = calculatePoints(i),
                choices = this.bossChoices;

            while (points > 0 && choices.length) {
                choices = choices.filter(([ cost ]) => cost <= points);
                let [ cost, boss ] = ran.choose(choices);
                points -= cost;
                wave.push(boss);
            }

            waves.push(wave);
        }
        return waves;
    }

    spawnFriendlyBoss() {
        let o = new Entity(room.randomType('bas1'));
        o.define(ran.choose(this.friendlyBossChoices));
        o.define({ DANGER: 10 });
        o.team = -1;
        o.controllers.push(new ioTypes.nearestDifferentMaster(o), new ioTypes.wanderAroundMap(0, { lookAtGoal: true }));
        sockets.broadcast(o.name + ' has arrived and joined your team!');
    }

    spawnDominator(loc, team, type = false) {
        type = type ? type : Class.destroyerDominator;
        let o = new Entity(loc);
        o.define(type);
        o.team = team;
        o.color = getTeamColor(team);
        o.skill.score = 111069;
        o.name = 'Dominator';
        o.SIZE = c.WIDTH / c.X_GRID / 10;
        o.isDominator = true;
        o.controllers = [new ioTypes.nearestDifferentMaster(o), new ioTypes.spin(o, { onlyWhenIdle: true })];
        o.on('dead', () => {
            if (o.team === TEAM_ENEMIES) {
                this.spawnDominator(loc, -1, type)
                room.setType('dom1', loc)
                sockets.broadcast('A dominator has been captured by BLUE!')
            } else {
                this.spawnDominator(loc, TEAM_ENEMIES, type)
                room.setType('dom0', loc)
                sockets.broadcast('A dominator has been captured by the bosses!')
            }
        });
    }

    playerWin() {
        if (this.gameActive) {
            this.gameActive = false;
            sockets.broadcast(getTeamName(-1) + ' has won the game!');
            setTimeout(closeArena, 1500);
        }
    }

    spawnEnemyWrapper(loc, type) {
        let enemy = new Entity(loc);
        enemy.define(type);
        enemy.team = TEAM_ENEMIES;
        enemy.FOV = 10;
        enemy.refreshBodyAttributes();
        enemy.controllers.push(new ioTypes.bossRushAI(enemy));

        this.remainingEnemies++;
        enemy.on('dead', () => {
            //this enemy has been killed, decrease the remainingEnemies counter
            //if afterwards the counter happens to be 0, announce that the wave has been defeated
            if (!--this.remainingEnemies) {
                sockets.broadcast(`Wave ${this.waveId + 1} is defeated!`);
            }
        });
        
        return enemy;
    }

    spawnWave(waveId) {
        //yell at everyone
        sockets.broadcast(`Wave ${waveId + 1} has arrived!`);

        //spawn bosses
        for (let boss of this.waves[waveId]) {
            let spot = null,
                attempts = 0;
            do {
                spot = room.randomType('boss');
            } while (dirtyCheck(spot, 500) && ++attempts < 30);

            let enemy = this.spawnEnemyWrapper(spot, boss);
            enemy.define({ DANGER: 25 + enemy.SIZE / 5 });
            enemy.isBoss = true;
        }

        //spawn fodder enemies
        for (let i = 0; i < this.waveId / 5; i++) {
            this.spawnEnemyWrapper(room.randomType('boss'), ran.choose(this.bigFodderChoices));
        }
        for (let i = 0; i < this.waveId / 2; i++) {
            this.spawnEnemyWrapper(room.randomType('boss'), ran.choose(this.smallFodderChoices));
        }

        //spawn a friendly boss every 20 waves
        if (waveId % 20 == 19) {
            setTimeout(() => this.spawnFriendlyBoss(), 5000);
        }
    }

    //runs once when the server starts
    init() {
        for (let loc of room.bas1) {
            this.spawnDominator(loc, -1);
        }
        console.log('Boss rush initialized.');
    }

    //runs every second
    loop() {
        //the timer has ran out? reset timer and spawn the next wave
        if (this.timer <= 0) {
            this.timer = 150;
            this.waveId++;
            if (this.waves[this.waveId]) {
                this.spawnWave(this.waveId);

            //if there is no next wave then simply let the players win
            } else {
                this.playerWin();
            }

        //if the timer has not ran out and there arent any remaining enemies left, decrease the timer
        } else if (!this.remainingEnemies) {
            this.timer--;
        }
    }
}

module.exports = { BossRush };
