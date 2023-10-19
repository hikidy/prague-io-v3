
// NOTE: Uncomment when room rework is done
// let launchForce = 1250,
//     gravity = 13500,
//     minibossPush = 30000,
// 
// portals = [],
// 
// portal = new Tile({
//     color: 19,
//     init: (tile) => portals.push(tile),
//     tick: (tile) => {
//         for (let entity of tile.entities) {
//             if (entity.passive || entity.settings.goThruObstacle || entity.facingType === "bound") continue;
//             let dx = entity.x - tile.x,
//                 dy = entity.y - tile.y,
//                 dist2 = dx ** 2 + dy ** 2,
//                 force = c.ROOM_BOUND_FORCE;
// 
//             //push away big boys
//             if (entity.type === "miniboss" || entity.isMothership) {
//                 entity.accel.x += minibossPush * dx * force / dist2;
//                 entity.accel.y += minibossPush * dy * force / dist2;
//                 continue;
//             }
// 
//             //kill anything not a tank
//             if (entity.type !== "tank") {
//                 entity.kill();
//                 continue;
//             }
// 
//             //that tank is not close enough, suck them in!
//             let eventHorizon = Math.min(room.tileWidth, room.tileHeight) / 2;
//             if (dist2 > eventHorizon ** 2 ) {
//                 force *= gravity / dist2;
//                 entity.velocity.x -= dx * force;
//                 entity.velocity.y -= dy * force;
//                 continue;
//             }
// 
//             //calc stuff for teleporting and launching them
//             force *= launchForce;
//             let angle = Math.random() * Math.PI * 2,
//                 ax = Math.cos(angle),
//                 ay = Math.sin(angle),
//                 exitport = ran.choose(portals.filter(p => p !== tile) || room.random());
// 
//             //launch that idiot from the outportal
//             entity.velocity.x = ax * force;
//             entity.velocity.y = ay * force;
//             entity.x = exitport.x + ax * room.tileWidth;
//             entity.y = exitport.y + ay * room.tileHeight;
//             entity.invuln = true;
// 
//             //also don't forget to bring her kids along the ride
//             for (let o of entities) {
//                 if (o.id !== entity.id && o.master.master.id === entity.id && (o.type === "drone" || o.type === "minion")) {
//                     o.velocity.x += entity.velocity.x;
//                     o.velocity.y += entity.velocity.y;
//                     o.x = entity.x;
//                     o.y = entity.y;
//                 }
//             }
//         }
//     }
// });
// 
// let room = Array(15).fill(() => Array(15).fill()).map(x => x());
// room[2][2] = room[2][12] = room[12][2] = room[12][12] = room[7][7] = portal;

let room = Array(15).fill(() => Array(15).fill()).map(x => x());
room[2][2] = room[2][12] = room[12][2] = room[12][12] = room[7][7] = "port";

module.exports = {
    X_GRID: 15,
    Y_GRID: 15,
    WIDTH: 5000,
    HEIGHT: 5000,
    ROOM_SETUP: room
};