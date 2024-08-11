## Patrón Strategy

**Patrón Strategy:** Permite definir una familia de algoritmos, colocar cada uno de ellos en una clase separada y hacer sus objetos intercambiables.

El patrón Strategy, sugiere que tomes esa clase que hace algo específico de muchas formas diferentes y extraigas cada algoritmo en clases separadas llamadas *estrategias*

Vamos a tener una clase llamada *contexto* que debe tener la referencia a una de las estrategias. El contexto se encarga de delegar el trabajo a un objeto de estrategia vinculado en lugar de ejecutarla por ella misma.

La clase contexto no se encarga de seleccionar la estrategia adecuada para la tarea, en lugar de eso, es el cliente el que pasa la tarea deseada a la clase contexto. 

## **Estructura**

1. La clase Contexto mantiene una referencia a una de las estrategias concretas y se comunica con este objeto únicamente a travéz de la interfaz estrategia.

2. La intergaz Estrategia es común para todas las estrategias concretas. Declara un método que la clase contexto utiliza para ejecutar una tarea.

3. Las Estrategias Concretas implementan distintas variaciones de un algoritmo que la clase contexto utiliza.

4. La clase contexto invoca el método de ejecución en el objeto de estrategia vinculado cada vez que necesita ejecutar el algoritmo. La clase contexto no sabe qué tipo de estrategia funciona o cómo se ejecuta el algoritmo.

5. El Cliente crea un objeto de estrategia específico y lo pasa a la clase contexto. La clase contexto expone un modificador set que permite sustituir la estrategia asociada al contexto durante el tiempo de ejecución.