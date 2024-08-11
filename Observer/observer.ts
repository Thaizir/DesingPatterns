// La interfaz Observer declara un metodo refresh para notificar a los suscriptores 
interface IObserver<T> {
    refresh(value: T): void
}

// La interfaz Subject declara un metodo para suscribir y desuscribir un suscriptor
interface ISubject<T> {
    observers: IObserver<T>[];
    subscribe(observer: IObserver<T>): void;
    unsubscribe(observer: IObserver<T>): void;
    notify(value: T): void;
}

class Subject<T> implements ISubject<T> {

    //Inicializamos la lista de observadores vacía
    observers: IObserver<T>[];

    // Constructor de Subject
    constructor() {
        this.observers = [];
    }

    // Metodo para suscribir un observador
    subscribe(observer: IObserver<T>): void {
        const isExist = this.observers.includes(observer);
        if (!isExist) {
            this.observers.push(observer);
        } else {
            console.log('Observer already exist');
        }
    }

    unsubscribe(observer: IObserver<T>): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(value: T): void {
        this.observers.forEach(observer =>
            // Aqui va la logica de notificacion
            observer.refresh(value)
        )
    }
}

// Cada observador reacciona de una forma particular dependiendo la funcion fn
// que tiene para manejar el evento
class Observer<T> implements IObserver<T> {
    private fn: (value: T) => void;

    constructor(fn: (value: T) => void) {
        this.fn = fn;
    }

    refresh(value: T): void {
        this.fn(value);
    }
}

const subject = new Subject<string>();

const obs1 = new Observer<string>(value => console.log(`Observer 1: ${value.toUpperCase()}`));
const obs2 = new Observer<string>(value => console.log(`Observer 2: ${value.split('').reverse().join('')}`));
subject.subscribe(obs1);
subject.subscribe(obs2);

subject.notify('Thaizir');
subject.notify('El Troudi');