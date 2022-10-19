import {
  BaseHandler,
  runChainOfResponsiblityPatternDemo,
} from "./chain-of-responsibility";
import { logger } from "./logger";

enum names {
  rick,
  jeroen,
}

interface Test {
  name: names | string;
}

const testName: Test = {
  name: names.rick,
};

const testName2: Test = {
  name: names.jeroen,
};

const testName3: Test = {
  name: "hello world",
};

// is it possible to extend a base class and implement an interface?

abstract class Base {
  abstract getName(): string;

  protected randomCheckIfNameIsString(name: string | number): boolean {
    return this.checkIfNameIsString(name);
  }

  private checkIfNameIsString(name: string | number): boolean {
    return this.someDumbName();
  }

  private someDumbName(...args: [] | [name: string]): boolean {
    if (typeof name === "string") {
      return true;
    }
    return false;
  }
}

interface ExtendBase {
  alsoGetNumber: () => number;
}

interface ExtendAlt {
  generateNumber: () => number;
}

class ConcreteClassA<T extends { length: number }>
  extends Base
  implements ExtendBase
{
  constructor(private name: string, private object: T) {
    super();
  }

  alsoGetNumber(): number {
    return 1;
  }

  getLength(): number {
    return this.object.length;
  }

  getName(): string {
    this.randomCheckIfNameIsString(this.name);
    return this.name;
  }
}

class ConcreteClassB extends Base implements ExtendAlt {
  generateNumber(): number {
    return 5;
  }

  getName(): string {
    return "Jeroen";
  }
}

const obj = Array(0);

obj.push("Rick");

const instanceOfClassA = new ConcreteClassA<typeof obj>("Rick", obj);

class SomeTypeHandlerB extends BaseHandler {
  constructor(private name: string) {
    super();
  }

  public get value(): string {
    return this.name;
  }

  public set value(v: string) {
    this.name = v;
  }
}

const someType = new SomeTypeHandlerB("Rick");
someType.value;

const rootUrl = "http://localhost:8080/test";

class ApiHandler {
  constructor(rootUrl: string) {}
}

const apihandler = new ApiHandler(`${rootUrl}`);

logger.log({
  level: "warn",
  message: "Hello distributed log files!",
});

logger.info("Hello again distributed logs");
