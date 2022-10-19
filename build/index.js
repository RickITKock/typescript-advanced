"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chain_of_responsibility_1 = require("./chain-of-responsibility");
const logger_1 = require("./logger");
var names;
(function (names) {
    names[names["rick"] = 0] = "rick";
    names[names["jeroen"] = 1] = "jeroen";
})(names || (names = {}));
const testName = {
    name: names.rick,
};
const testName2 = {
    name: names.jeroen,
};
const testName3 = {
    name: "hello world",
};
// is it possible to extend a base class and implement an interface?
class Base {
    randomCheckIfNameIsString(name) {
        return this.checkIfNameIsString(name);
    }
    checkIfNameIsString(name) {
        return this.someDumbName();
    }
    someDumbName(...args) {
        if (typeof name === "string") {
            return true;
        }
        return false;
    }
}
class ConcreteClassA extends Base {
    constructor(name, object) {
        super();
        this.name = name;
        this.object = object;
    }
    alsoGetNumber() {
        return 1;
    }
    getLength() {
        return this.object.length;
    }
    getName() {
        this.randomCheckIfNameIsString(this.name);
        return this.name;
    }
}
class ConcreteClassB extends Base {
    generateNumber() {
        return 5;
    }
    getName() {
        return "Jeroen";
    }
}
const obj = Array(0);
obj.push("Rick");
const instanceOfClassA = new ConcreteClassA("Rick", obj);
class SomeTypeHandlerB extends chain_of_responsibility_1.BaseHandler {
    constructor(name) {
        super();
        this.name = name;
    }
    get value() {
        return this.name;
    }
    set value(v) {
        this.name = v;
    }
}
const someType = new SomeTypeHandlerB("Rick");
someType.value;
const rootUrl = "http://localhost:8080/test";
class ApiHandler {
    constructor(rootUrl) { }
}
const apihandler = new ApiHandler(`${rootUrl}`);
logger_1.logger.log({
    level: "warn",
    message: "Hello distributed log files!",
});
logger_1.logger.info("Hello again distributed logs");
