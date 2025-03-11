# Usar una imagen base de Node.js
FROM node:18-alpine

# Crear un directorio para la aplicación
WORKDIR /app-sicei

# Copiar el resto del código de la aplicación
COPY . .

# Instalar las dependencias
RUN npm install

# Exponer el puerto en el que corre la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start"]