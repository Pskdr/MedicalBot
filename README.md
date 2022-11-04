
# FRONT-END MED BOT

## Sobre el proyecto

Nuestro proyecto tiene como objetivo utilizar las interfaces conversacionales 
de DialogFlow para servir como soporte a los servicios de urgencias en la identificacion de 
emergencias y falsas emergencias por medio de un chatbot inteligente que permita realizar la agil identificacion 
de estas situaciones y por ultimo dar recomendaciones segun se clasfifique la necesidad


## Lanzar proyecto (manualmente)
En el directorio que contiene el proyecto
1. ### `npm install`
2. ### `npm start`

Ejecuta la app en modo de desarrollo
Abre [http://localhost:3000](http://localhost:3000) para ver en tu navegador

## Ejecutar en Docker

Opcion 1:
1. Construir la imagen desde el Dockerfile en el directorio de proyecto
### `docker build --tag <name:tag> .`
2. Iniciar el contenedor
### `docker run -d -p 3000:3000 --name <name> <image_name>`

Opcion 2:
Usar nuestra imagen creada automaticamente por el proceso de integragion continua CI y que esta alojada en Docker Hub
1. Descargar la imagen
### `docker pull leoavalos/react-app`
2. Iniciar el contenedor
### `docker run -d -p 3000:3000 --name <name> leoavalos/react-app`

## Contribuciones
