// class NewNEwPerson<Person> {

// }

// type Person = {
//   name: string;
//   age: number | string;
// };

// interface NewPerson extends Person {
//   email?: string;
//   swim: () => void;
// }

// interface AltNewPerson extends NewPerson {
//   id?: string;
// }

// const newPerson: NewPerson = {
//   name: "Joe",
//   age: "twenty one",
//   email: "joe@example.com",
//   swim: () => {
//     console.log("NewPerson: " + "is swimming");
//   },
// };

// newPerson.swim();

// function printNewPerson(person: { name: string; age: number; email?: string }) {
//   console.log(
//     `This is ${person.name} and he's ${person.age} with email: ${
//       person.email || "No email available"
//     }`
//   );
// }

// function altPrintNewPerson(person: AltNewPerson) {
//   console.log(
//     `This is ${person.name} and he's ${person.age} with email: ${
//       person.email || "No email available"
//     } has ID: ${person.id || "No ID available"}`
//   );
// }

// Using extend on types
// type Animal = {
//   name: string;
// };

// type Bear = Animal & {
//   lovesHoney: boolean;
// };

// type Bird = Animal & {
//   canFly: boolean;
// };

// const bear: Bear = {
//   name: "Bear",
//   lovesHoney: false,
// };

// const bird: Bird = {
//   name: "Bird",
//   canFly: false,
// };

// if ("lovesHoney" in bear) {
//   console.log("This is possibly a bear");
// }

// printNewPerson({ name: "Rick", age: 21, email: "rkock127@gmail.com" });
// // printNewPerson({ name: "Rick", age: 21 });
// const altPrintNewPerson = {
//   name: "Rick",
//   age: 21,
//   email: "rkock127@gmail.com",
//   id: "1",
//   swim: () => {
//     console.log(`${altPrintNewPerson.name} is swimming`);
//   },
// };

// altPrintNewPerson.swim();

interface Options {
  width: number;
}

function configureOptions(options: Options | "auto"): void {
  if (options == "auto") {
    console.log(`configuring options: ${options}`);
  } else {
    console.log(`configuring options: ${options.width}`);
  }
}

configureOptions("auto");
configureOptions({ width: 1 });

// Discriminating unions
// interface Shape {
//   kind: "circle" | "square";
//   radius?: number;
//   sideLength?: number;
// }

// function handleShape(shape: Shape) {
//   if (shape.kind === "circle") {
//     console.log(`configuring shape: ${shape.radius} which is a ${shape.kind}`);
//     return;
//   }
//   console.log(
//     `configuring shape: ${shape.sideLength} which is a ${shape.kind}`
//   );
// }

// handleShape({ kind: "square", radius: 10, sideLength: 5 });

// handleShape({ kind: "circle", radius: 5, sideLength: 2 });

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function newHandleShape(shape: Shape): void {
  if (shape.kind === "square") {
    console.log(`square of sidelength ${shape.sideLength}`);
  } else if (shape.kind === "circle") {
    console.log(`circle of radius ${shape.radius}`);
  }
}

newHandleShape({ kind: "circle", radius: 5 });
newHandleShape({ kind: "square", sideLength: 10 });

// function type expressions
type OpenMouthFunction = (phrase: string, age: number) => void;

function saySomething(openMouth: OpenMouthFunction, name: string, age: number) {
  openMouth(`${1 + 2 + 3} is ${name}'s favorite number`, age);
}

function print(phrase: string, age: number) {
  console.log(phrase + age);
}

function yell(phrase: string, age: number) {
  console.log(phrase + age);
}

saySomething(print, "Rick", 21);
saySomething(yell, "Rick", 30);

// Generic functions
function getElement<T>(arr: T[]): T | undefined {
  return arr[1];
}

const names = ["Rick", "Dick", "Sarah"];

console.log(getElement(names));

function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "hey", "3"], (n) => parseInt(n));
console.log(parsed);

// Constraints
function longest<T extends { length: number }>(a: T, b: T) {
  if (a.length >= b.length) {
    return a;
  } else {
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
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

function len(x: any[] | string): number {
  return x.length;
}

console.log(len("Hello world!"));
console.log(len([1, 2, 3]));

function safeParse(str: string): unknown {
  return JSON.parse(str);
}

// Rest Parameters and Arguments

// Inferred as 2-length tuple
const args = [8, 5] as const;
// OK
const angle = Math.atan2(...args);

// Index signatures
interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = [
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

// Extending types
interface Colorful {
  color: string;
}

interface NewCircle {
  radius: number;
}

interface ColorfulCircle extends Colorful, NewCircle {}

const cc: ColorfulCircle = {
  color: "red",
  radius: 42,
};

// Generic object types
interface Box<Type> {
  contents: Type;
}

interface Apple {
  message: "I'm an apple";
}

let box: Box<string> = { contents: "red" };

const apple: Apple = { message: "I'm an apple" };

let appleBox: Box<Apple> = { contents: apple };

console.log(box.contents);
console.log(appleBox);

// Tuple types
type StringNumberPair = [string, number];
const arr: StringNumberPair = ["try", 1];
const first: string = arr[0];

// Generics
// function identity<Type>(arg: Type): Type {
//   return arg;
// }

// // let output = identity<string>("myString");
// let output = identity<number>(4);
// console.log(output);

// Working with Generic Type Variables
// function loggingIdentity<Type>(arg: Type[]): Type[] {
//   console.log(arg.length);
//   return arg;
// }

// loggingIdentity<string>(["hi", "world", "something"]);

// Generic Types
// function identity<Type>(arg: Type): Type {
//   return arg;
// }

// let myIdentity: { <Input>(arg: Input): Input } = identity;

interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
  return arg;
}

function altIdentity<Type>(arg: Type): void {
  console.log(arg);
}

let myIdentity: GenericIdentityFn<number> = identity;
let myNewIdentity: GenericIdentityFn<void> = altIdentity;

console.log(myIdentity(5));
// console.log(myNewIdentity);

// class GenericNumber<NumType> {
//   zeroValue: NumType;
//   add(x: NumType, y: NumType) => NumType;
// }

interface Lengthwise {
  length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

// Using type parameters in generic constraints
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
// getProperty(x, "m"); // Won't work

class BeeKeeper {
  hasMask: boolean = true;
}

class ZooKeeper {
  nametag: string = "Mikle";
}

class Animal {
  numLegs: number = 4;
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

const nametag: string = createInstance(Lion).keeper.nametag;
const hasMask: boolean = createInstance(Bee).keeper.hasMask;

// The keyof type operator
type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

// const someType: M = true; // "Rick";

// console.log(someType);

// Type of operator

function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;

// Indexed Access Types
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person = typeof MyArray[number];

type Age = typeof MyArray[number]["age"];

type Age2 = Person["age"];

// Conditional Types
interface Professional {
  work(): void;
}

interface Programmer extends Professional {
  drinkCoffee(): void;
}

type Example1 = Programmer extends Professional ? number : string;

// const isNumberOrString: Example1 = "5"

// More ...
// interface IdLabel {
//   id: number /* some fields */;
// }
// interface NameLabel {
//   name: string /* other fields */;
// }

// type NameOrId<T extends number | string> = T extends number
//   ? IdLabel
//   : NameLabel;

// function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
//   console.log(typeof idOrName);
//   return;
// }

// let a = createLabel("typescript");

// Distributive conditional types
// type ToArray<Type> = Type extends any ? Type[] : never;
// type StrArrOrNumArr = ToArray<string | number>;

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
// 'StrArrOrNumArr' is no longer a union.
type StrArrOrNumArr = ToArrayNonDist<string | number>;
