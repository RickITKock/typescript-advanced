import { Stack } from "./Stack";

interface SpecialRequest {
  message: string;
}

interface Handler {
  next: Handler | undefined;
  setNext(handler: Handler): void;
  handle(request: SpecialRequest): void;
}

abstract class BaseHandler implements Handler {
  public next: Handler | undefined;

  setNext(handler: Handler): void {
    this.next = handler;
  }

  public handle(request: SpecialRequest): void {
    if (this.next != undefined) {
      this.next.handle(request);
    }
  }
}

class ConcreteHandlerA extends BaseHandler {
  handle(request: SpecialRequest): void {
    const { message } = request;
    console.log("I am concrete handlerA.");
    console.log("Now processing request...");

    const newMessage = message + " Processing";
    const newRequest = {
      message: newMessage,
    };

    super.handle(newRequest);
  }
}

class ConcreteHandlerB extends BaseHandler {
  handle(request: SpecialRequest): void {
    console.log(`I'm supposed to handle some request: ${request.message}`);
  }
}

export function runChainOfResponsiblityPatternDemo() {
  const request: SpecialRequest = { message: "Hello" };
  const handlerA = new ConcreteHandlerA();
  const handlerB = new ConcreteHandlerB();

  handlerA.setNext(handlerB);
  handlerA.handle(request);
}
