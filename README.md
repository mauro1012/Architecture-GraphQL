# Guía para Ejecutar el Servidor GraphQL y Realizar Pruebas

## Requisitos Previos
para de comenzar, asegurarnos de tener con los siguientes requisitos:
1. **Node.js** instalado en tu sistema (versión recomendada: >=16.x).
2. **NPM** o **Yarn** instalado como gestor de paquetes.
3. Una terminal o editor de texto con soporte para JavaScript.

---

## Pasos para Ejecutar el Servidor

### 1. Configurar el Proyecto
1. Clona tu repositorio o crea una carpeta nueva:
   ```bash
   git clone <URL del repositorio>
   cd <nombre-del-proyecto>
2. instalamos las dependencias del proyecto:
   ```bash
        npm install
3. ejecutamos el servidor usando el siguiente comando en el terminal
Tamar en cuanta q toca estar dentro de la carpeta donde se encuentra la clase **server.js**
   ```bash
         node <nombre-del-archivo>.js
4. si se esta ejecutando correctamente aparecerá el siguiente mensaje
   ```bash
   Servidor GraphQL ejecutándose en http://localhost:4000
5. si al ingresar esa url no se le carga la paguina probar con la siguiente url
   ```bash
       http://localhost:4000/graphql 

6. al ingresar procedemos hacer consultas la primera y mas basuca para ver si el servidor esta funcionando correctamente:
    ```bash
       query {hello}
7. si se ejecuta correctamente usamos una consulta con argumentos
   ```js
    query {
      user(id: "1") {
    name
    age
    }
  
8. para finalizar el servidor nos dirigimos al cmd y realizamos la siguiente combinación de teclas **crtl + c**
