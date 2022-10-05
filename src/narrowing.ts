type OnSuccess = (message: string) => void;

function isString(name?: string): name is string {
  return typeof name === "string";
}

function simulateSuccess(message: string) {
  console.log(`I've succeeded: ${message}`);
}

function getName(name: string | undefined, onSuccess: OnSuccess): void {
  if (isString(name)) {
    onSuccess(name);
  }
}

export function runNarrowingDemo() {
  getName("rick", simulateSuccess);
}
