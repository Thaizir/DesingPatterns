## **Patrón Observer**
**Patron Observer:** También llamado Publiser-Subscriber o Event-Subscriber. Es un patrón de diseño que permite definir un mecanismo de suscripción para notificar a varios objetos sobre cualquier evento que le suceda al objeto que están observando.


Tenemos dos tipos de objetos: un Cliente y una Tienda. El cliente está interesado en un producto particular que estára disponible muy pronto. 

Para que el cliente pueda saber si el producto está en stock, debe ir diariamente a la tienda para verificar si ya el producto llegó, lo que posiblemente puede causar viajes en vano. 

Por otra parte, la tienda puede enviar correos a sus clientes informando cada vez que un producto nuevo ha llegado a la tienda. Esto puede ser considerado spam ya que no todos los clientes quieren/necesitan estar informados sobre los nuevos productos.

La solución sería que la tienda solo **notifique** a los usuarios que están **interesado**. El objeto que tiene el estado interesando suele llamarse *sujeto* (Subject / Publisher). Mientras que los objetos que quieren conocer los cambios se les denomina *subscriptores* (Subscriber).

## **Estructura**

1. El Publisher enviar los eventos de interés a otros objetos. Esos eventos ocurren cuando el notificador cambua su estado o ejecuta algunos comportamientos. Los Publisher con tienen la infraestructura de suscripción que permite que los nuevoa y altiguos suscriptores puedan abandonar la lista.

2. Cuando sucede un nuevo evento, el notificador recorre la lista de suscripción e invoca el método de notificación declarado e la interfaz suscriptora en cada objeto suscriptor.

3. La interfaz Subscriber declara la interfaz de notificación. En la mayoría de los casos, consiste en un único método **actualizar** (refresh). El método puede tener varios parámetros que permitan al notificador pasar algunos detalles del evento junto a la actualización.

4. Los Concrete Subscribers realizan algunas acciones en respuesta a las notificaciones emitidas por el notificador. Todas estas clases deben implementar la misma interfaz de forma que el notificador no esté acoplado a clases concretas.

5. Normalmente, los suscriptores necesitan cierta información contextual para manejar correctamente la actualización. Por este motivo, a menudo los notificadores pasan cierta información de contexto como argumentos del método de notificación. El notificador puede pasarse a sí mismo como argumento, dejando que los suscriptores extraigan la información necesaria directamente.

6. El Cliente crea objetos tipo notificador y suscriptor por separado y después registra a los suscriptores para las actualizaciones del notificador.
