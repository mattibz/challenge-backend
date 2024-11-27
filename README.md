# Proyecto de Envío de Correos

Este proyecto es una aplicación para enviar correos electrónicos mediante diferentes proveedores de servicios de correo como Mailgun y SparkPost. Utiliza un backend en **Node.js** con **Express** para manejar las solicitudes de envío de correos y un **frontend en React** para la interacción con el usuario.

## Tecnologías Utilizadas

### Backend
- **Node.js**: Entorno de ejecución de JavaScript en el servidor.
- **Express**: Framework web para Node.js que maneja las rutas y la lógica del servidor.
- **Axios**: Cliente HTTP para realizar peticiones a servicios de terceros como Mailgun y SparkPost.
- **dotenv**: Paquete para cargar variables de entorno desde un archivo `.env` para manejar configuraciones sensibles (como claves API).
- **Mailgun** y **SparkPost**: Servicios para el envío de correos electrónicos.

### Frontend
- **React**: Biblioteca de JavaScript para construir interfaces de usuario interactivas.
- **Axios**: Usado en el frontend para hacer solicitudes HTTP al servidor backend.

### Otros
- **CORS**: Habilitado en el backend para permitir que el frontend se comunique con el servidor sin problemas de política de seguridad entre orígenes.

## Instalación

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/tu-repositorio.git```


2. Instalar dependencias
Dirígete a la carpeta del proyecto y ejecuta los siguientes comandos para instalar las dependencias tanto para el backend como para el frontend.

Backend:

1. Navega a la carpeta backend.
2. Instala las dependencias:

```cd backend
npm install
```

### Frontend:

1. Navega a la carpeta frontend.
2. Instala las dependencias:

```cd frontend
npm install
```


### 3. Configurar variables de entorno
Crea un archivo .env en el directorio raíz de backend y agrega las siguientes variables para configurar los proveedores de correo y el puerto:

```MAILGUN_DOMAIN=your-mailgun-domain
MAILGUN_API_KEY=your-mailgun-api-key
SPARKPOST_API_KEY=your-sparkpost-api-key
PORT=3001
```

En el frontend, crea un archivo .env dentro de la carpeta frontend y agrega:

```REACT_APP_API_URL=http://localhost:3001/api/send-email```


### 4. Ejecutar el proyecto

### Backend

Para iniciar el servidor backend, ve a la carpeta backend y ejecuta:

```node server```

### Frontend

Para ejecutar el frontend, ve a la carpeta frontend y ejecuta:

```npm start```
