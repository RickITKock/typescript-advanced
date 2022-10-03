"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runStatePatternDemo = void 0;
class BaseHandler {
    setNext(handler) {
        this.next = handler;
    }
    handle(request) {
        if (this.next != undefined) {
            this.next.handle(request);
        }
    }
}
class ConcreteHandlerA extends BaseHandler {
    handle(request) {
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
    handle(request) {
        console.log(`I'm supposed to handle some request: ${request.message}`);
    }
}
function runStatePatternDemo() {
    const request = { message: "Hello" };
    const handlerA = new ConcreteHandlerA();
    const handlerB = new ConcreteHandlerB();
    handlerA.setNext(handlerB);
    handlerA.handle(request);
}
exports.runStatePatternDemo = runStatePatternDemo;
