class Context {
  public state: State | null = null;
}

class Player extends Context {
  kickBall() {
    const state = this.state;

    if (state === null) {
      console.log("I don't have a ball!");
    } else if (state instanceof StopState) {
      console.log("we're done playing.");
    } else if (state instanceof StartState) {
      console.log("Started playing.");
    }
  }
}

interface State {
  doAction: (context: Context) => void;
}

class StopState implements State {
  doAction(context: Context): void {
    context.state = this;
  }
}

class StartState implements State {
  doAction(context: Context): void {
    context.state = this;
  }
}

export function runStatePatternDemo() {
  const start: StartState = new StartState();
  const stop: StartState = new StopState();
  const states: State[] = [start, stop];
  const player = new Player();

  player.kickBall();
  states.forEach((state) => {
    state.doAction(player);
    player.kickBall();
  });
}
