"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runNarrowingDemo = void 0;
function isString(name) {
    return typeof name === "string";
}
function simulateSuccess(message) {
    `I've succeeded: ${message}`;
}
function getName(name, onSuccess) {
    if (isString(name)) {
        onSuccess(name);
    }
}
function runNarrowingDemo() {
    getName("rick", simulateSuccess);
}
exports.runNarrowingDemo = runNarrowingDemo;
