# Task List Server

## ¿Qué es mi producto y para qué sirve?

**Task List Server** es un sistema digital que permite a los usuarios gestionar sus tareas de manera organizada, segura y confiable. El producto está diseñado para funcionar como el motor principal de una aplicación de listas de tareas, encargándose de guardar la información, validar el acceso de los usuarios y proteger los datos frente a errores o usos incorrectos.

A diferencia de una lista de tareas simple, este sistema incorpora control de usuarios, inicio de sesión con seguridad y distintos niveles de acceso, lo que lo hace ideal para entornos donde la información debe estar protegida y bien gestionada.

Es una solución pensada para estudiantes, profesionales o equipos pequeños que necesitan organizar su trabajo diario de forma ordenada y con confianza en que sus datos están protegidos.

---

## ¿Cuáles son las funcionalidades más importantes y por qué los usuarios las usarían?

### Gestión de usuarios e inicio de sesión seguro
El sistema permite que los usuarios se autentiquen usando un nombre y contraseña.  
Una vez que el usuario inicia sesión correctamente, el sistema le entrega un **token de acceso**, que funciona como una llave digital para identificarlo y permitirle usar las funciones protegidas.

**Beneficio para el usuario:**  
Garantiza que solo personas autorizadas puedan acceder a la información, aumentando la seguridad y la confianza en el sistema.

---

### Uso de tokens para proteger la información
El sistema utiliza tokens para validar cada solicitud importante. Si un usuario intenta acceder sin un token válido o con uno incorrecto, el sistema bloquea el acceso de inmediato.

**Beneficio para el usuario:**  
Protege la información personal y evita accesos no autorizados, incluso si alguien intenta usar el sistema de forma incorrecta.

---

### Gestión completa de tareas
Los usuarios pueden:
- Ver todas las tareas registradas
- Consultar una tarea específica
- Crear nuevas tareas
- Editar tareas existentes
- Eliminar tareas cuando ya no son necesarias
- Filtrar tareas según si están completas o pendientes

**Beneficio para el usuario:**  
Permite llevar un control claro del trabajo pendiente y del progreso, ayudando a organizar mejor el tiempo y las prioridades.

---

### Control de roles (usuarios y administradores)
El sistema diferencia entre usuarios normales y administradores.  
Algunas secciones están protegidas y solo pueden ser accedidas por administradores.

**Beneficio para el usuario:**  
Permite organizar permisos y responsabilidades, ideal para aplicaciones que requieren distintos niveles de acceso.

---

### Manejo claro de errores
El sistema está preparado para responder de forma clara cuando ocurre un problema (tanto con mensajes explicando al
usuario los motivos, como los códigos HTTP 200 201, 400, 401, 405, 500, etc), por ejemplo:
- Si faltan datos o son incorrectos, informa al usuario qué debe corregir.
- Si se intenta acceder a una tarea o usuario inexistente, el sistema lo notifica.
- Si se usa un método no permitido, el sistema bloquea la acción.
- Si el token es inválido o no existe, el acceso es denegado.

**Beneficio para el usuario:**  
Reduce confusiones, evita errores silenciosos y mejora la experiencia al recibir mensajes claros sobre qué ocurrió y cómo solucionarlo.

---

## ¿Qué tecnologías usaste y por qué?

- **Node.js**  
  Se utilizó para construir un sistema rápido y eficiente, capaz de atender múltiples solicitudes sin perder rendimiento.

- **Express.js**  
  Permite organizar el sistema de forma clara, manejar rutas, validar información y controlar errores de manera ordenada.

- **JSON Web Tokens (JWT)**  
  Se usaron para implementar autenticación segura, permitiendo identificar a los usuarios sin exponer información sensible.

- **Dotenv**
    Se empleó para gestionar variables de entorno, facilitando la configuración del sistema y protegiendo datos sensibles como claves y contraseñas.

- **JavaScript**  
  Se eligió por ser un lenguaje ampliamente utilizado, flexible y fácil de mantener, lo que facilita la evolución futura del producto.

- **Nodemon**
  Se utilizó durante el desarrollo para facilitar la recarga automática del servidor cada vez que se realizaban cambios en el código, mejorando la eficiencia del proceso de desarrollo.

- **Postman**  
  Se empleó para probar y verificar que todas las funcionalidades del sistema funcionaran correctamente, asegurando una experiencia de usuario sin fallos.

- **API Rest**
    El sistema fue diseñado siguiendo los principios de una API Rest, lo que facilita la integración con otros sistemas y aplicaciones en el futuro.

Estas tecnologías fueron seleccionadas porque permiten construir un producto **seguro, confiable y escalable**, preparado para manejar usuarios, proteger datos y responder correctamente ante errores o accesos indebidos.

---

**Repositorio del proyecto:**  
https://github.com/Waldron63/task-list-server
