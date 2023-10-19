class Moon {
    constructor () {
    }
    loop () {
        let players = entities.filter(r => r.isPlayer || r.isBot);
        for (let entity of players) {
            for (let hole of room.blackHoles) {
                if (entity.id != hole.id && !entity.ac && entity.alpha) {
                    entity.velocity.x += util.clamp(hole.x - entity.x, -90, 90) * entity.damp * 0.02;
                    entity.velocity.y += util.clamp(hole.y - entity.y, -90, 90) * entity.damp * 0.02;
                }
            }
        }
    }
}

module.exports = { Moon };