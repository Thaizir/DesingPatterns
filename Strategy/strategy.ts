// La interface declara operaciones comunes para todas las estrategias
interface Strategy {
    venta(monto: number): number;
}

class Context {

    // EL contexto mantiene referencia a una de las estrategias
    private strategy: Strategy;

    // Usualmente el contexto recibe la estrategia via constructor
    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    // Usualmente, el contexto permite cambiar la estrategia interna en tiempo de ejecución
    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    // Es contexto delega el trabajo a la Strategy en vez de ejecutarla por ella misma
    public calcularVenta(value: number) {
        return this.strategy.venta(value);
    }
}

// Las estrategias concretas implementan la interfaz Strategy

class StrategyVentaEfectivo implements Strategy {
    public descuento = 0.1;
    public venta(monto: number) {
        return monto - (monto * this.descuento);
    }
}

class StrageryCredito implements Strategy {
    public interes = 0.05;
    public venta(monto: number) {
        return monto + (monto * this.interes);
    }
}

// El cliente elige la estrategia concreta a utilizar y la pasa a contexto.
// El cliente deberia conocer las diferentes estrategias concretas para hacer la 
// selección correcta.

// El cliente hara una compra en efectivo
const context = new Context(new StrategyVentaEfectivo());
console.log("El usuario comprará con efectivo")
const ventaEfectivo = context.calcularVenta(1000)
console.log(ventaEfectivo);

// Vamos a cambiar la estrategia para una venta a credito
context.setStrategy(new StrageryCredito());
console.log("El usuario comprará con credito")
const ventaCredito = context.calcularVenta(1000)
console.log(ventaCredito);