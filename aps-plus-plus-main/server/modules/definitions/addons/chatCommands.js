// TODO:
const newCommands = false; // enables beta commands (DISABLES OLD COMMANDS)
const commands = Array();

class Command {
	constructor(name, { description, aliases, args, developer }, callback) {
		this.name = name;
		this.description = description ?? 'No description provided';
		this.aliases = aliases ?? [];
		this.args = args;
		this.callback = callback;
		this.developerOnly = developer ?? true;

		commands.push(this);
	}

	fail(preventDefault, reason) {
		preventDefault();
		socket.talk('m', reason);
	}

	run({ args, socket, preventDefault, perms }) {
		if (this.developerOnly && !perms.class == 'developer') {
			return this.fail(preventDefault, 'You do not have permission to use this command');
		}

		if (
			this.args != null &&
			(
				(typeof this.args == 'number' && args.length != this.args)
				||
				(Array.isArray(this.args) && (args.length < this.args[0] || args.length > this.args[1]))
			)
		) {
			return this.fail(preventDefault, 'Wrong number of arguments');
		}

		this.callback({
			self: this,
			socket, body:
			socket.player.body,
			args,
			fail: r => this.fail(preventDefault, r)
		});
		preventDefault();
	}

	get docs() {
		return `/${this.cmd.join(', ')} (Args: ${typeof this.args == 'number' ? this.args : `${this.args[0]} - ${this.args[1]}`}) - ${this.description}`;
	}

	get cmd() {
		return [...this.aliases, this.name];
	}
}

module.exports = ({ Events, Class }) => {
	if (newCommands) {
		// help
		new Command('help', {
			description: 'Help command',
			aliases: ['h', '?'],
			args: [0, 1],
			developer: true
		}, ({ self, args, socket, fail }) => {
			if (args.length == 0) {
				return socket.talk('m', self.docs);
			}
			const command = commands.find(c => c.cmd.includes(args[0]));
			if (!command) {
				return fail('Unknown command');
			}
			socket.talk('m', command.docs);
		});
		// test
		new Command('test', {
			description: 'Test command',
			aliases: ['t'],
			args: 0,
			developer: false
		}, ({ socket }) => {
			socket.talk('m', 'Test command');
		});
	}

	Events.on('chatMessage', ({ message, socket, preventDefault }) => {
		let perms = socket.permissions;

		if (!message.startsWith('/')) return;
		if (!socket.player.body) return;

		const fail = () => {
			preventDefault();
			socket.talk('m', 'Command execution failed');
		}

		let args = message.slice(1).split(' ');
		let cmd = args.shift().toLowerCase();

		if (newCommands){
			const command = commands.find(c => c.cmd.includes(cmd));
			if (!command) {
				preventDefault();
				return socket.talk('m', 'Unknown command');
			}
			command.run({ args, socket, preventDefault, perms });
			return;
		}

		switch (cmd) {
			case 'edit': {
				// /edit ...text
				if (args.length == 0) return fail();
				const { id } = socket.player.body;
				if (!chats[id]) return fail();
				let msg = chats[id].shift();
				if (msg.expires < Date.now()) return fail();
				msg = ({ message: args.join(' ') + '*', expires: Date.now() + c.CHAT_MESSAGE_DURATION });
				chats[id].unshift(msg);
				util.log(`${socket.player.body.name}: ${msg.message} (edited)`);
				chatLoop();
				return preventDefault();
			}// break;
		}

		if (perms && perms.class != 'developer') return;

		switch (cmd) {
			case 'kill':
				if (args.length != 0) return fail();
				socket.player.body.kill();
				break;
			case 'size':
				if (args.length == 0) {
					preventDefault();
					return socket.talk('m', `Current size: ${socket.player.body.SIZE}`);
				}
				if (args.length != 1) return fail();
				socket.player.body.SIZE = Number(args[0]);
				break;
		    case 'shape':
					if (args.length == 0) {
						preventDefault();
						return socket.talk('m', `Current shape: ${socket.player.body.SHAPE}`);
					}
					if (args.length != 1) return fail();
					socket.player.body.SHAPE = Number(args[0]);
					break;
			case 'spawn': {
				// /spawn X Y CLASS [AI]
				if (args.length < 3 || args.length > 5) return fail();
				if (Class[args[2]] == null) return fail();
				const e = new Entity({ x: socket.player.body.x + Number(args[0]), y: socket.player.body.y + Number(args[1]) });
				e.define(args[2]);
				if (args.length >= 4 && args[3] === 'true') {
					e.define({
						CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
						AI: {
							NO_LEAD: true
						}
					});
				}
				if (args.length >= 5) {
					e.color = Number(args[4]);
				}
				e.refreshBodyAttributes();
				e.life();
			} break;
			case 'broadcast':
				if (args.length == 0) return fail();
				sockets.broadcast(args.join(' '));
				break;
			case 'closeArena':
				closeArena();
				break;
			case 'wall': {
				// /wall [grid] | [X Y SIZE]
				if (args.length < 1 || args.length > 3) return fail();
				const { x, y } = socket.player.body;
				let pos = {};
				if (args[0] == 'grid') {
					const at = room.isAt({ x, y });
					if (at == false) return fail();
					pos = { x: at.x, y: at.y };
				} else {
					pos = { x: x + Number(args[0]), y, y: y + Number(args[1]) }
				}
				const e = new Entity(pos);
				e.define('wall');
				e.TEAM = TEAM_ROOM;
				if (args[0] == 'grid') {
					e.SIZE = room.width / room.xgrid / 2;
				} else {
					e.SIZE = Number(args[2]);
				}
				e.protect();
				e.life();
			} break;
			case 'god':
				socket.player.body.invuln = true;
				break;
			case 'skill':
				if (args.length != 1) return fail();
				socket.player.body.skill.points += Number(args[0]);
				break;
			case 'cap':
				if (args.length != 1) return fail();
				socket.player.body.skill.setCaps(Array(10).fill(Number(args[0])));
				break;
			case 'level': {
				if (args.length != 1) return fail();
				const { skill } = socket.player.body;
				skill.reset();
				while (skill.level < Number(args[0])) {
					skill.score += skill.levelScore;
					skill.maintain();
				}
				socket.player.body.refreshBodyAttributes();
			} break;
			case 'color':
				// /color COLOR [HUE] [SATURATION] [BRIGHTNESS] [INVERT]
				if (args.length < 1 || args.length > 5) return fail();
				if (args.length == 1) {
					socket.player.body.color = Number(args[0]);
				} else {
					socket.player.body.colorUnboxed = {
						base: Number(args[0]),
						hueShift: Number(args[1]),
						saturationShift: Number(args[2]) ?? 1,
						brightnessShift: Number(args[3]) ?? 0,
						allowBrightnessInvert: args[4] == 'true' || args[4] == '1'
					};
					const { colorUnboxed } = socket.player.body;
					socket.player.body.color = colorUnboxed.base + ' ' + colorUnboxed.hueShift + ' ' + colorUnboxed.saturationShift + ' ' + colorUnboxed.brightnessShift + ' ' + colorUnboxed.allowBrightnessInvert;
				}
				break;
			case 'tp': {
				// /tp [~]X [~]Y [grid]
				if (args.length < 1 || args.length > 3) return fail();
				const { x: rx, y: ry } = socket.player.body;
				let x = 0,
					y = 0;
				if (args[0].startsWith('~')) {
					x += rx;
					args[0] = args[0].slice(1);
				}
				if (args[1].startsWith('~')) {
					y += ry;
					args[1] = args[1].slice(1);
				}
				x += Number(args[0]);
				y += Number(args[1]);
				if (args.length == 3 && args[2] == 'grid') {
					x += Number(args[0]) * room.width / room.xgrid;
					y += Number(args[1]) * room.height / room.ygrid;
				} else {
					x += Number(args[0]);
					y += Number(args[1]);
				}
				socket.player.body.x = x;
				socket.player.body.y = y;
			} break;
			case 'fov':
				if (args.length == 0) {
					preventDefault();
					return socket.talk('m', `Current FOV: ${socket.player.body.FOV}`);
				}
				if (args.length != 1) return fail();
				socket.player.body.FOV = Number(args[0]);
				break;
			case 'children':
				if (args.length == 0) {
					preventDefault();
					return socket.talk('m', `Current maxChildren: ${socket.player.body.maxChildren}`);
				}
				if (args.length != 1) return fail();
				socket.player.body.maxChildren = Number(args[0]);
				break;
			case 'state': {
				// /state STATE [VALUE]
				if (args.length < 1 || args.length > 2) return fail();
				const arg = args[0].toUpperCase();
				const allowedStates = ['speed', 'acceleration', 'health', 'regen', 'shield', 'resist', 'range', 'pushability', 'damage'].map(s => s.toUpperCase());
				if (!allowedStates.includes(arg)) return fail();
				if (args.length == 2) {
					socket.player.body[arg] = Number(args[1]);
				} else {
					preventDefault();
					return socket.talk('m', `Current ${arg.toLowerCase()}: ${socket.player.body[arg]}`);
				}
			} break;
			case 'team':
				// /team [TEAM]
				if (args.length == 0) {
					preventDefault();
					return socket.talk('m', `Current team: ${socket.player.body.team}`);
				}
				if (args.length != 1) return fail();
				socket.player.body.team = Number(args[0]);
				break;
			default:
				preventDefault();
				socket.talk('m', 'Unknown command');
				return;
		}

		preventDefault();
		socket.talk('m', 'Success command execution');
	});

	console.log('[chatCommands] Commands loaded!');
};

