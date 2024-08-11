## Patrón Pub Sub: Publisher Subscriber

**Patrón PubSub:** Es un patrón de que permite que los componentes de un sistema se comuniquen entre sí de manera desacoplada. Es muy parecido al patrón observer

Por ejemplo en una aplicación de chat de grupo. El sistema Pub/Sub puede manejar el evento de enviar y recibir los mensajes eficientemente.

## **Estructura**

1. Definimos la interface ISubscriber para el suscriptor que va a tener un metodo refresh como en Observer.

2. En este caso tenemos que tener una interface IPubSub que va a definir los metodos de subscribe, unsubscribe y publish.

3. Implementamos el canal de comunicación que implementa IPubSub el cual va manejar la lógica de suscripcion, publicación y cancelación de suscripcion.

4. Creamos los suscriptores que implementen la interfaz Subscriber que difenen la lógica para manejar los mensaje de comunicación
