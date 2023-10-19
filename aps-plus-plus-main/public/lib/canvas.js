import { global } from "./global.js";
import { config } from "./config.js";

class Canvas {
    constructor() {
        this.directionLock = false;
        this.target = global.target;
        this.socket = global.socket;
        this.directions = [];
        this.chatInput = document.getElementById('chatInput');
        this.chatInput.addEventListener('change', event => {
            this.chatInput.blur();
            this.cv.focus();
            this.chatInput.hidden = true;
            if (!this.chatInput.value) return;
            this.socket.talk('M', this.chatInput.value);
            this.chatInput.value = "";
        });
        this.cv = document.getElementById('gameCanvas');
        this.cv.addEventListener('mousemove', event => this.mouseMove(event), false);
        this.cv.addEventListener("mousedown", event => this.mouseDown(event), false);
        this.cv.addEventListener("mouseup", event => this.mouseUp(event), false);
        this.cv.addEventListener('keydown', event => this.keyDown(event), false);
        this.cv.addEventListener('keyup', event => this.keyUp(event), false);
        this.cv.resize = (width, height) => {
            this.cv.width = this.width = width;
            this.cv.height = this.height = height;
        };
        this.cv.resize(innerWidth, innerHeight);
        this.reverseDirection = false;
        this.inverseMouse = false;
        this.spinLock = true;
        global.canvas = this;
    }
    keyDown(event) {
        switch (event.keyCode) {
            case global.KEY_ENTER:
                // Enter to respawn
                if (global.died) {
                    this.socket.talk('s', global.playerName, 0, 1 * config.game.autoLevelUp);
                    global.died = false;
                    break;
                }

                // or to talk instead
                if (this.chatInput.hidden) {
                    this.chatInput.hidden = false;
                    this.chatInput.focus();
                    break;
                }
                break;

            case global.KEY_UP_ARROW:
                if (!global.died && global.showTree) return global.realScrollX = 0;
            case global.KEY_UP:
                this.socket.cmd.set(0, true);
                break;
            case global.KEY_DOWN_ARROW:
                if (!global.died && global.showTree) return global.realScrollX = 1;
            case global.KEY_DOWN:
                this.socket.cmd.set(1, true);
                break;
            case global.KEY_LEFT_ARROW:
                if (!global.died && global.showTree) return global.realScrollX -= global.realScrollX <= 0 ? 0 : .01;
            case global.KEY_LEFT:
                this.socket.cmd.set(2, true);
                break;
            case global.KEY_RIGHT_ARROW:
                if (!global.died && global.showTree) return global.realScrollX += global.realScrollX >= 1 ? 0 : .01;
            case global.KEY_RIGHT:
                this.socket.cmd.set(3, true);
                break;
            case global.KEY_MOUSE_0:
                this.socket.cmd.set(4, true);
                break;
            case global.KEY_MOUSE_1:
                this.socket.cmd.set(5, true);
                break;
            case global.KEY_MOUSE_2:
                this.socket.cmd.set(6, true);
                break;
            case global.KEY_LEVEL_UP:
                this.socket.talk('L');
                break;
            case global.KEY_FUCK_YOU:
                this.socket.talk('0');
                break;
            case global.KEY_BECOME:
                this.socket.talk('H');
                break;
            case global.KEY_MAX_STAT:
                global.statMaxing = true;
                break;
            case global.KEY_SUICIDE:
                this.socket.talk('1');
                break;
        }
        if (!event.repeat) {
            switch (event.keyCode) {
                case global.KEY_AUTO_SPIN:
                    global.autoSpin = !global.autoSpin;
                    this.socket.talk('t', 0);
                    break;
                case global.KEY_AUTO_FIRE:
                    this.socket.talk('t', 1);
                    break;
                case global.KEY_OVER_RIDE:
                    this.socket.talk('t', 2);
                    break;
                case global.KEY_REVERSE_MOUSE: //client side only, no server effects except message
                    this.inverseMouse = !this.inverseMouse;
                    this.socket.talk('t', 3);
                    break;
                case global.KEY_REVERSE_TANK: //client side only, no server effects except message
                    this.reverseDirection = !this.reverseDirection;
                    this.target.x *= -1;
                    this.target.y *= -1;
                    this.socket.talk('t', 4);
                    break;
                case global.KEY_AUTO_ALT:
                    this.socket.talk('t', 5);
                    break;
                case global.KEY_SPIN_LOCK:
                    this.spinLock = !this.spinLock;
                    this.socket.talk('t', 6);
                    break;
                case global.KEY_CLASS_TREE:
                    global.showTree = !global.showTree;
                    break;
            }
            if (global.canSkill) {
                let skill = [
                    global.KEY_UPGRADE_ATK, global.KEY_UPGRADE_HTL, global.KEY_UPGRADE_SPD,
                    global.KEY_UPGRADE_STR, global.KEY_UPGRADE_PEN, global.KEY_UPGRADE_DAM,
                    global.KEY_UPGRADE_RLD, global.KEY_UPGRADE_MOB, global.KEY_UPGRADE_RGN,
                    global.KEY_UPGRADE_SHI
                ].indexOf(event.keyCode);
                if (skill >= 0) this.socket.talk('x', skill, 1 * global.statMaxing);
            }
            if (global.canUpgrade) {
                switch (event.keyCode) {
                    case global.KEY_CHOOSE_1:
                        this.socket.talk('U', 0);
                        break;
                    case global.KEY_CHOOSE_2:
                        this.socket.talk('U', 1);
                        break;
                    case global.KEY_CHOOSE_3:
                        this.socket.talk('U', 2);
                        break;
                    case global.KEY_CHOOSE_4:
                        this.socket.talk('U', 3);
                        break;
                    case global.KEY_CHOOSE_5:
                        this.socket.talk('U', 4);
                        break;
                    case global.KEY_CHOOSE_6:
                        this.socket.talk('U', 5);
                        break;
                }
            }
        }
    }
    keyUp(event) {
        switch (event.keyCode) {
            case global.KEY_UP_ARROW:
            case global.KEY_UP:
                this.socket.cmd.set(0, false);
                break;
            case global.KEY_DOWN_ARROW:
            case global.KEY_DOWN:
                this.socket.cmd.set(1, false);
                break;
            case global.KEY_LEFT_ARROW:
            case global.KEY_LEFT:
                this.socket.cmd.set(2, false);
                break;
            case global.KEY_RIGHT_ARROW:
            case global.KEY_RIGHT:
                this.socket.cmd.set(3, false);
                break;
            case global.KEY_MOUSE_0:
                this.socket.cmd.set(4, false);
                break;
            case global.KEY_MOUSE_1:
                this.socket.cmd.set(5, false);
                break;
            case global.KEY_MOUSE_2:
                this.socket.cmd.set(6, false);
                break;
            case global.KEY_MAX_STAT:
                global.statMaxing = false;
                break;
        }
    }
    mouseDown(mouse) {
        let primaryFire = 4,
            secondaryFire = 6;
        if (this.inverseMouse) [primaryFire, secondaryFire] = [secondaryFire, primaryFire];
        switch (mouse.button) {
            case 0:
                let mpos = {
                    x: mouse.clientX * global.ratio,
                    y: mouse.clientY * global.ratio,
                };
                let statIndex = global.clickables.stat.check(mpos);
                if (statIndex !== -1) {
                    this.socket.talk('x', statIndex, 0);
                } else if (global.clickables.skipUpgrades.check(mpos) !== -1) {
                    global.clearUpgrades();
                } else {
                    let upgradeIndex = global.clickables.upgrade.check(mpos);
                    if (upgradeIndex !== -1) this.socket.talk('U', upgradeIndex);
                    else this.socket.cmd.set(primaryFire, true);
                }
                break;
            case 1:
                this.socket.cmd.set(5, true);
                break;
            case 2:
                this.socket.cmd.set(secondaryFire, true);
                break;
        }
    }
    mouseUp(mouse) {
        let primaryFire = 4,
            secondaryFire = 6;
        if (this.inverseMouse) [primaryFire, secondaryFire] = [secondaryFire, primaryFire];
        switch (mouse.button) {
            case 0:
                this.socket.cmd.set(primaryFire, false);
                break;
            case 1:
                this.socket.cmd.set(5, false);
                break;
            case 2:
                this.socket.cmd.set(secondaryFire, false);
                break;
        }
    }
    mouseMove(mouse) {
        global.statHover = global.clickables.hover.check({
            x: mouse.clientX * global.ratio,
            y: mouse.clientY * global.ratio,
        }) === 0;
        if (!this.spinLock) return;
        this.target.x = mouse.clientX * global.ratio - this.width / 2;
        this.target.y = mouse.clientY * global.ratio - this.height / 2;
        if (this.reverseDirection) {
            this.target.x *= -1;
            this.target.y *= -1;
        }
        this.target.x *= global.screenWidth / this.width;
        this.target.y *= global.screenHeight / this.height;
    }
}
export { Canvas }