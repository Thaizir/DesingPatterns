/*
Singleton es un patrón de diseño creacional que nos permite asegurarnos de que una clase tenga una única instancia, 
a la vez que proporciona un punto de acceso global a dicha instancia.

Todas las implementaciones del patrón Singleton tienen estos dos pasos en común:

Hacer privado el constructor por defecto para evitar que otros objetos utilicen el operador new con la clase Singleton.

Crear un método de creación estático que actúe como constructor. Tras bambalinas, este método invoca al constructor privado 
para crear un objeto y lo guarda en un campo estático. Las siguientes llamadas a este método devuelven el objeto almacenado en caché.
Si tu código tiene acceso a la clase Singleton, podrá invocar su método estático. De esta manera, cada vez que se invoque este método, 
siempre se devolverá el mismo objeto.
*/

// La clase singleton defina una instance() getter 
// que permite a los clientes acceder a la instace que es unica
class Singleton {

    // Instance es un método privado y estatico de la clase (se define asi con el # para encapsularlo dentro de todas las instancias de la clase)
    static #instance: Singleton;
    randomNumber: number;

    // EL constructor lo hacemos privado para prevenir
    // llamadas al constructor con el operador "new"
    private constructor(randomNumber: number) {
        this.randomNumber = randomNumber;
    }

    // instance es un getter que me permite crear la unica instancia de la clase
    public static get instance(): Singleton {
        if (!Singleton.#instance) {
            Singleton.#instance = new Singleton((Math.random()));
        }
        return Singleton.#instance;
    }

    // Logica de negocio aqui
    public generateRandomNumber() {
        this.randomNumber = Math.random();
        return this.randomNumber
    }
}

function clientCode() {
    const s1 = Singleton.instance.randomNumber;
    const s2 = Singleton.instance.randomNumber;

    const s3 = Singleton.instance.generateRandomNumber();
    const s4 = Singleton.instance.generateRandomNumber();

    if (s1 === s2) {
        console.log(s1, s2);
        console.log(s3, s4);
    } else {
        console.log("No son iguales")
    }
}

clientCode();