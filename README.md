# Proyecto base para aplicación híbrida

Esta es una plantilla base para crear una aplicación SPA (Single Page Application), para probar el proyecto, seguir los siguientes pasos:

## Instrucciones para ejecutar la aplicación como aplicación web

- Clonar el repositorio
- Ingresar a la carpeta del repositorio clonado
- Instalar las dependencias con el comando npm i
- Ejecutar el proyecto de manera local npm run local
- Para ver el proyecto para producción npm run build
- Ingresar a la url que aparece en la terminal desde el navegador

## Instrucciones para crear el proyecto de android y crear la aplicación hibrida

- Instalar las herramientas de [Capacitor JS](https://capacitorjs.com/docs/getting-started) usando npm
- Inicializar el proyecto npx cap init
- Instalar dependencias proyecto android npm i @capacitor/android
- Creación del proyecto npx cap add android
- Sincronización del proyecto, envia los archivos de la carpeta dist a la carpeta assets del proyecto android npx cap sync
- Abrir el proyecto en android studio npx cap open android

## FAQ (9 septiembre 2024 - Actualizado para Android Koala)

- Al cargar o abrir el proyecto en windows aparece un mensaje de windows defender, este mensaje se cierra seleccionando configuración automatica, para que no se relentice la ejecución de los procesos de android studio.
- La primera vez que se abre el proyecto en android studio, se debe esperar a que el programa configure las dependencias y el proyecto en general, por tanto tener presente estar atentos a los mensajes de estado en la parte inferior derecha 
- En la configuración Run/Debug debe aparecer el nombre de la aplicación, si esto no pasa es porque el proyecto no quedo correctamente configurado, se recomiendo por tanto borrar las carpetas: dist, node_modules, .parcel-cache, android. Ya que estos archivos se pueden volver a crear a partir de los scripts que estan configurados en el package.json.
- Cuando se resetee el proyecto se vuelven a generar los archivos y se espera, para esto cree el script setup, que se encarga de generar elproyecto, crear la aplicación hibrida y los siguientes pasos del proceso.

## Configuración de capacitor y ambiente de desarrollo APP híbrida

- [Activar modo desarrollador](https://www.samsung.com/co/support/mobile-devices/galaxy-a5-2017-how-to-enable-the-developer-options/)
- [Activar modo depuración](https://www.wideanglesoftware.es/droidtransfer/help/c%C3%B3mo-conectar-android-utilizando-usb.php)
- [Kies - Samsung](https://www.samsung.com/co/support/kies/)
- [Bluestacks](https://www.bluestacks.com/es/index.html)
- [Photopea](https://www.photopea.com/)
