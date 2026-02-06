# Task List Server

## ¿Qué es mi producto y para qué sirve?

**Task List Server** es una solución digital diseñada para ayudar a las personas a organizar y gestionar sus tareas de manera clara, confiable y segura. El sistema permite llevar un control ordenado de las actividades pendientes y completadas, ayudando a mejorar la productividad y a reducir errores en la gestión de información.

En esta versión del producto, el servidor no solo se enfoca en almacenar tareas, sino también en garantizar que la información ingresada sea correcta y que el sistema responda de forma adecuada ante cualquier problema, ofreciendo una experiencia más estable y profesional.

Este producto es ideal para estudiantes, profesionales o pequeños equipos que buscan una herramienta confiable para organizar su trabajo diario sin complicaciones.

---

## ¿Cuáles son las funcionalidades más importantes y por qué los usuarios las usarían?

- **Gestión completa de tareas**  
  Los usuarios pueden crear, consultar, actualizar y eliminar tareas según sus necesidades. Esto les permite mantener su lista de pendientes siempre actualizada y alineada con sus prioridades.

- **Validación de la información ingresada**  
  El sistema verifica que los datos enviados sean correctos antes de guardarlos. Por ejemplo, evita que se creen tareas incompletas o con información inválida, lo que reduce errores y confusiones para el usuario.

- **Manejo claro de errores**  
  Cuando ocurre un problema, el sistema responde con mensajes claros que indican qué salió mal:
    - Si faltan datos o son incorrectos, el sistema informa al usuario para que pueda corregirlos.
    - Si se intenta acceder a una tarea que no existe, el sistema lo notifica de manera explícita.
    - Si se utiliza una acción no permitida, el sistema bloquea la operación para proteger la estabilidad del servicio.

- **Filtrado y consulta eficiente de tareas**  
  Los usuarios pueden consultar tareas específicas o filtrar aquellas que ya están completadas o pendientes, facilitando el seguimiento del progreso.

Estas funcionalidades permiten que los usuarios confíen en el sistema, ya que **previene errores, protege la información y ofrece respuestas claras**, mejorando la experiencia general de uso.

---

## ¿Qué tecnologías usaste y por qué?

- **Node.js**  
  Se utilizó para construir un sistema rápido y eficiente, capaz de manejar múltiples solicitudes sin afectar el rendimiento.

- **Express.js**  
  Permite organizar el sistema de manera clara y controlar cómo se reciben y procesan las solicitudes, incluyendo la validación de datos y el manejo de errores.

- **JavaScript**  
  Se eligió por ser un lenguaje flexible y ampliamente utilizado, lo que facilita el mantenimiento del producto y su evolución futura

- **Nodemon**
  Se utilizó durante el desarrollo para facilitar la recarga automática del servidor cada vez que se realizaban cambios en el código, mejorando la eficiencia del proceso de desarrollo.

- **Postman**  
  Se empleó para probar y verificar que todas las funcionalidades del sistema funcionaran correctamente, asegurando una experiencia de usuario sin fallos.

---

**Repositorio del proyecto:**  
https://github.com/Waldron63/task-list-server