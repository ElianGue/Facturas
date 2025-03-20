```javascript

1- /**
 * @description Dentro  de una funcion llamada todos: itera el array facturas e  imprime en consola cada uno de los objetos que se encuentran dentro del array. 
 */


2- /**
* @description Dentro  de una funcion llamada pendientes: itera el array facturas e  imprime en consola cada uno de los objetos cuyo estado sea igual a pendiente 
*/


3- /**
* @description Dentro  de una funcion llamada pagadas: itera el array facturas e  imprime en consola cada uno de los objetos cuyo estado sea igual a pagadas 
*/


4- /**
 * @description En el html encontraras un  ul que contiene tres li.  A cada uno de esos li agregaras un escuchador de evento click y utilizaras las fuciones creadas en los pasos anteriores.
 *  
 */ 

5- /**
 * @description Este punto constara de varias partes:
 * 1. Utiliza querySelector para seleccionar el tbody del table en el html;
 * 2. En el html encontraras un table que contiene un thead y un tbody. Copia el primer elemento tr del tbody;
 * 3. En el js crea una funcion llamada fila que reciba un objeto como parametro. Dentro de la funcion crea una variable llamada template_fila y asignale utilizando comillas invertidas el valor copiado en el paso 1.
 * Utiliza ${value} para reemplazar los valores del objeto en el template.
 * 4. Utiliza innerHTML para agregar la fila al tbody del table. Recuerda utilizar += para agregar la fila al final del tbody.
 */


6- /**
 * @description En las funciones creadas en el paso 1, 2 y 3, sustituye los console.log por la funcion fila y pasa el objeto correspondiente.
 * Nota: Antes del iterador (ciclo for) utiliza innerHTML para limpiar el contenido del tbody.
 */

7- /**
 * @description Este punto constara de varias partes:
 * 1. Utiliza querySelector para seleccionar el boton con id addContactBtn;
 * 2. Utiliza querySelector para seleccionar modal con id modal;
 * 3. Utiliza querySelector para seleccionar el boton con la clase close en el modal;
 * 4. Crea una funcion llamada toggleModal que agregue o quite la clase hidden al modal.
 * 5. Agrega un escuchador de evento click al boton con id addContactBtn que ejecute la funcion toggleModal.
 * 6. Agrega un escuchador de evento click al boton con la clase close que ejecute la funcion toggleModal.
 */

8- /**
 * @description Este punto constara de varias partes:
 * 1. Utiliza querySelector para llamar el formulario que se encuentra dentro del modal.
 * 2. Crea una funcion llamada agregarFactura que reciba un evento (e) como parametro.
 * 3. Crea una instancia de FormData y pasale como parametro el formulario.
 * 4. Utiliza el metodo get para obtener el valor de cada uno de los inputs del formulario.
 * 5. Crea un objeto con las propiedades que se encuentran en el formulario
 * 6. Agrega el objeto creado al array facturas
 * 7. Ejecuta la funcion todos que creaste en el paso 1.
 * 8. Cierra el modal.
 * 9. Resetea el formulario.
 * 10. Agrega un escuchador de evento submit al formulario que llamará a la función agregarFactura.
 * Nota: No olvides prevenir el comportamiento por defecto del formulario.
 */

9- /**
 * @description Este punto constara de varias partes:
 * 1. En el diseño original encontraras que hay diferencias en los colores de las facturas dependiendo de su estado. para las facturas pendientes el color es #ff0000 y para las facturas pagadas el color es #00ce00.
 * 2. Dentro de la funcion llamada fila encuntra alguna forma de lograr que el color de la fila cambie dependiendo del estado de la factura.
 * Ideas: podrias utilizar dos templates para mostrar una u otra dependiendo del estado. Tambien podrias utilizar un if y una varialbe para definir el color en una variable independiente.
 */

10- /**
 * @description Este punto constara de varias partes:
 * 1. En el diseño original notaras que el boton de eliminar solo aparece cuando el estado de la factura es pagada.
 * 2. Dentro de la funcion fila Encuentra una manera de que el boton de eliminar solo aparezca cuando el estado de la factura sea pagada.
 * Ideas: Podrias agregar una clase al boton de eliminar y luego en el css ocultar el boton de eliminar. Tambien podrias tener 2 template uno con el boton de eliminar y otro sin el boton de eliminar.
 */

11- /**
  * @description: Este punto constara de varias partes:
  * 1. Crea una función llamada eliminar facturas que reciba un parametro llamado id
  * 2. Dentro de la función eliminar facturas, itera el array facturas y elimina el objeto cuyo id sea igual al id que se recibe como parametro.
  * Nota: Para eliminar un objeto de un array puedes utilizar el método filter o splice. Si utilizas el metodo splice, tambien necesitaras utilizar el metodo findIndex.
  */

```