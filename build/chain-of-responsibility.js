"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runChainOfResponsiblityPatternDemo = exports.BaseHandler = void 0;
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
exports.BaseHandler = BaseHandler;
class ConcreteHandlerA extends BaseHandler {
    handle(request) {
        const { message } = request;
        const newMessage = message + " Processing";
        const newRequest = {
            message: newMessage,
        };
        super.handle(newRequest);
    }
}
class ConcreteHandlerB extends BaseHandler {
    handle(request) {
        `I'm supposed to handle some request: ${request.message}`;
    }
}
function runChainOfResponsiblityPatternDemo() {
    const request = { message: "Hello" };
    const handlerA = new ConcreteHandlerA();
    const handlerB = new ConcreteHandlerB();
    handlerA.setNext(handlerB);
    handlerA.handle(request);
}
exports.runChainOfResponsiblityPatternDemo = runChainOfResponsiblityPatternDemo;
