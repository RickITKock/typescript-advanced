"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runStatePatternDemo = exports.Stack = void 0;
class Stack {
    constructor(capacity = Infinity) {
        this.capacity = capacity;
        this.storage = [];
    }
    push(item) {
        if (this.size() === this.capacity) {
            throw Error("Stack has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    }
    pop() {
        return this.storage.pop();
    }
    peek() {
        return this.storage[this.size() - 1];
    }
    size() {
        return this.storage.length;
    }
}
exports.Stack = Stack;
function runStatePatternDemo() {
    const stack = new Stack();
    stack.push({ name: "stack", message: "stack" });
    stack.push({ id: "New message", data: "Jeroen" });
}
exports.runStatePatternDemo = runStatePatternDemo;
