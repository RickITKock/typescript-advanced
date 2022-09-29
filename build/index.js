"use strict";
// class NewNEwPerson<Person> {
function configureOptions(options) {
    if (options == "auto") {
        console.log(`configuring options: ${options}`);
    }
    else {
        console.log(`configuring options: ${options.width}`);
    }
}
configureOptions("auto");
configureOptions({ width: 1 });
function newHandleShape(shape) {
    if (shape.kind === "square") {
        console.log(`square of sidelength ${shape.sideLength}`);
    }
    else if (shape.kind === "circle") {
        console.log(`circle of radius ${shape.radius}`);
    }
}
newHandleShape({ kind: "circle", radius: 5 });
newHandleShape({ kind: "square", sideLength: 10 });
function saySomething(openMouth, name, age) {
    openMouth(`${1 + 2 + 3} is ${name}'s favorite number`, age);
}
function print(phrase, age) {
    console.log(phrase + age);
}
function yell(phrase, age) {
    console.log(phrase + age);
}
saySomething(print, "Rick", 21);
saySomething(yell, "Rick", 30);
// Generic functions
function getElement(arr) {
    return arr[1];
}
const names = ["Rick", "Dick", "Sarah"];
console.log(getElement(names));
function map(arr, func) {
    return arr.map(func);
}
// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "hey", "3"], (n) => parseInt(n));
console.log(parsed);
// Constraints
function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
// Doesn't work
// function minimumLength<Type extends { length: number }>(
//   obj: Type,
//   minimum: number
// ): Type {
//   if (obj.length >= minimum) {
//     return obj;
//   } else {
//     return length: { length: minimum };
//   }
// }
// const arr = minimumLength([1, 2, 3], 6);
// Working with constrained values
// Good: don't use any as in 'Type extends any[]'
function firstElement1(arr) {
    return arr[0];
}
function len(x) {
    return x.length;
}
console.log(len("Hello world!"));
console.log(len([1, 2, 3]));
function safeParse(str) {
    return JSON.parse(str);
}
// Rest Parameters and Arguments
// Inferred as 2-length tuple
const args = [8, 5];
// OK
const angle = Math.atan2(...args);
const myArray = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
];
const secondItem = myArray[1];
console.log(secondItem);
const cc = {
    color: "red",
    radius: 42,
};
let box = { contents: "red" };
const apple = { message: "I'm an apple" };
let appleBox = { contents: apple };
console.log(box.contents);
console.log(appleBox);
const arr = ["try", 1];
const first = arr[0];
function identity(arg) {
    return arg;
}
function altIdentity(arg) {
    console.log(arg);
}
let myIdentity = identity;
let myNewIdentity = altIdentity;
console.log(myIdentity(5));
function loggingIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
// Using type parameters in generic constraints
function getProperty(obj, key) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
// getProperty(x, "m"); // Won't work
class BeeKeeper {
    constructor() {
        this.hasMask = true;
    }
}
class ZooKeeper {
    constructor() {
        this.nametag = "Mikle";
    }
}
class Animal {
    constructor() {
        this.numLegs = 4;
    }
}
class Bee extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new BeeKeeper();
    }
}
class Lion extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new ZooKeeper();
    }
}
function createInstance(c) {
    return new c();
}
const nametag = createInstance(Lion).keeper.nametag;
const hasMask = createInstance(Bee).keeper.hasMask;
// const someType: M = true; // "Rick";
// console.log(someType);
// Type of operator
function f() {
    return { x: 10, y: 3 };
}
// Indexed Access Types
const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
];
