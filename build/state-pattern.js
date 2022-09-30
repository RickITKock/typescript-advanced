"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runStatePatternDemo = void 0;
class Context {
    constructor() {
        this.state = null;
    }
}
class Player extends Context {
    kickBall() {
        const state = this.state;
        if (state === null) {
            console.log("I don't have a ball!");
        }
        else if (state instanceof StopState) {
            console.log("we're done playing.");
        }
        else if (state instanceof StartState) {
            console.log("Started playing.");
        }
    }
}
class StopState {
    doAction(context) {
        context.state = this;
    }
}
class StartState {
    doAction(context) {
        context.state = this;
    }
}
function runStatePatternDemo() {
    const start = new StartState();
    const stop = new StopState();
    const states = [start, stop];
    const player = new Player();
    player.kickBall();
    states.forEach((state) => {
        state.doAction(player);
        player.kickBall();
    });
}
exports.runStatePatternDemo = runStatePatternDemo;
