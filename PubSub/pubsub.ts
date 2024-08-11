interface ISubscriber<T> {
    refresh(message: T): void;
}

interface IPublisher<T> {
    subscribe(topic: string, subscriber: ISubscriber<T>): void;
    unsubscribe(topic: string, subscriber: ISubscriber<T>): void;
    publish(topic: string, message: T): void;
}

class Publisher<T> implements IPublisher<T> {
    private subscribers: { [topic: string]: ISubscriber<T>[] } = {};

    constructor() {
        this.subscribers = {};
    }

    subscribe(topic: string, subscriber: ISubscriber<T>): void {
        if (!this.subscribers[topic]) {
            this.subscribers[topic] = [];
        }
        this.subscribers[topic].push(subscriber);
    }

    unsubscribe(topic: string, subscriber: ISubscriber<T>): void {
        if (this.subscribers[topic]) {
            this.subscribers[topic] = this.subscribers[topic].filter(sub => sub !== subscriber);
        }
    }
    publish(topic: string, message: T): void {
        if (this.subscribers[topic]) {
            this.subscribers[topic].forEach(sub => sub.refresh(message));
        }
    }
}

class Subscriber<T> implements ISubscriber<T> {

    private name: string;
    private fn: (value: T) => void;

    constructor(name: string, fn: (value: T) => void) {
        this.name = name;
        this.fn = fn;
    }

    refresh(message: T): void {
        console.log(`${this.name}: received ${message}`);
        this.fn(message);
    }
}

const publisher = new Publisher<string>();

const subscriber1 = new Subscriber('Subscriber 1', value => console.log("Aqui manejo la logica de notificacion: ", value));
const subscriber2 = new Subscriber('Subscriber 2', value => console.log("Aqui manejo la logica de notificacion: ", value));

publisher.subscribe('news', subscriber1);
publisher.subscribe('news', subscriber2);
publisher.subscribe('anime', subscriber2);

publisher.publish('anime', 'Demon Slayer');
publisher.publish('news', 'Cayó Maduro');