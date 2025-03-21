# 🚀 Twitter Clone - Monolito Spring con Seguridad JWT y Despliegue en AWS

## 📌 Resumen del Proyecto
Este proyecto es un clon básico de Twitter que permite a los usuarios publicar mensajes de hasta 140 caracteres. El sistema está construido como un monolito en Spring Boot, con una interfaz de usuario desarrollada en HTML/JavaScript. Además, se ha implementado seguridad utilizando JWT (JSON Web Tokens) y se ha desplegado en AWS utilizando servicios como S3 y Lambda.

## 🏗️ Arquitectura del Sistema
### 🎨 Frontend:
-  Interfaz de usuario desarrollada en HTML, CSS y JavaScript.
-  Se comunica con el backend mediante APIs RESTful.
-  Desplegada en Amazon S3 para su acceso público.

### ⚙️ Backend:
-  Desarrollado en Spring Boot.
-  Arquitectura en capas con controladores, servicios y repositorios.
-  Exposición de endpoints REST para la gestión de usuarios, posts y autenticación.
-  Seguridad implementada con JWT y AWS Cognito.

### 🗄️ Base de Datos:
-  MongoDB como base de datos NoSQL para el almacenamiento persistente.
-  Spring Data MongoDB para la interacción con la base de datos.

## 🔄 Flujo de Interacción
1.  El usuario interactúa con la interfaz de usuario en el frontend.
2.  Las solicitudes API se envían al backend.
3.  El backend procesa las solicitudes, interactúa con la base de datos y aplica la lógica de negocio.
4.  Las respuestas se envían de vuelta al frontend y se muestran al usuario.

## 📌 Diseño de Clases
### 📦 Principales Clases:
-  **Usuario**: Representa la entidad de usuario con atributos como id, nombre, email, username, password y rol.
-  **Post**: Representa la entidad de post con atributos como id, nombre, username, contenido y fecha.
-  **Stream**: Representa el flujo de posts, almacenando los posts en un mapa.
-  **AuthController**: Maneja las solicitudes de autenticación (login y registro).
-  **PostController**: Maneja las solicitudes relacionadas con los posts (crear, leer, actualizar, eliminar).
- **UserController**: Maneja las solicitudes relacionadas con los usuarios (crear, leer, actualizar, eliminar).
-  **JwtAuthenticationFilter**: Filtro de seguridad que valida los tokens JWT en cada solicitud.

## 🚀 Instrucciones de Despliegue
### ✅ Prerrequisitos:
-  Docker instalado en tu máquina.
- ☁ Cuenta de AWS con acceso a S3, Lambda y Cognito.

### 📌 Pasos:
1. **🔨 Construir la Aplicación Backend:**
   ```sh
   mvn clean package
   ```
2. **🐳 Crear una Imagen de Docker:**
   ```sh
   docker build -t twitter-clone .
   ```
3. **🚀 Ejecutar el Contenedor Localmente:**
   ```sh
   docker run -p 8080:8080 twitter-clone
   ```
4. **🌍 Desplegar en AWS Lambda:**
   -  Empaquetar la aplicación en un archivo ZIP.
   - ☁ Subir el archivo ZIP a AWS Lambda y configurar el entorno.
   -  Configurar API Gateway para exponer los endpoints de la aplicación.
5. **📂 Desplegar el Frontend en S3:**
   -  Subir los archivos HTML, CSS y JavaScript a un bucket de S3.
   -  Habilitar el acceso público al bucket.
   -  Configurar el bucket para servir una página web estática.
6. **🔐 Configurar Cognito para la Autenticación:**
   -  Crear un User Pool en Cognito.
   -  Configurar los clientes de Cognito para la autenticación.
   -  Integrar Cognito con la aplicación Spring Boot.
7. **🌎 Acceder a la Aplicación:**
   -  Abrir la URL del bucket de S3 en tu navegador para acceder al frontend.
   -  El backend estará disponible a través de API Gateway.

## 🎥 Video de Demostración
Si no puedes acceder al enlace de AWS, es probable que el servicio esté apagado en este momento. Aquí tienes un video que respalda las pruebas en AWS:

[🎬 Video]

https://github.com/user-attachments/assets/c9bf4cb5-0d4f-4bcf-a182-a75c880d258f



## 📁 Estructura del Proyecto
```
└── twitter-Backend/
    ├── mvnw
    ├── mvnw.cmd
    ├── pom.xml
    ├── springkeys.pem
    ├── .gitattributes
    ├── src/
    │   ├── main/
    │   │   ├── java/
    │   │   │   └── edu/
    │   │   │       └── eci/
    │   │   │           └── arep/
    │   │   │               └── twitter/
    │   │   │                   ├── TwitterApplication.java
    │   │   │                   ├── Config/
    │   │   │                   │   └── SecurityConfig.java
    │   │   │                   ├── Controller/
    │   │   │                   │   ├── AuthController.java
    │   │   │                   │   ├── PostController.java
    │   │   │                   │   └── UserController.java
    │   │   │                   ├── Model/
    │   │   │                   │   ├── Post.java
    │   │   │                   │   ├── Stream.java
    │   │   │                   │   └── User.java
    │   │   │                   ├── Repository/
    │   │   │                   │   ├── PostRepository.java
    │   │   │                   │   └── UserRepository.java
    │   │   │                   ├── Security/
    │   │   │                   │   └── JwtAuthenticationFilter.java
    │   │   │                   └── Service/
    │   │   │                       ├── JwtService.java
    │   │   │                       ├── PostsService.java
    │   │   │                       └── UserService.java
```
