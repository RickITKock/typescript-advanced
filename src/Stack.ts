interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
}

// practice alt+click and ctrl + d
export class Stack<T> implements IStack<T> {
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) {}

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("Stack has reached max capacity, you cannot add more items");
    }
    this.storage.push(item);
  }

  pop(): T | undefined {
    return this.storage.pop();
  }

  peek(): T | undefined {
    return this.storage[this.size() - 1];
  }

  size(): number {
    return this.storage.length;
  }
}

interface SomeType {
  name?: string;
  message: string;
}

interface CompletelyDifferent {
  id: string;
  data: string;
}

export function runStackDemo() {
  const stack = new Stack<SomeType | CompletelyDifferent>();
  stack.push({ name: "stack", message: "stack" });
  stack.push({ id: "New message", data: "Jeroen" });
}
