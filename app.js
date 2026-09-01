// app.js - Aplicación Hola Mundo
// Punto de entrada principal de la aplicación

function saludar(nombre) {
  if (!nombre || nombre.trim() === '') {
    throw new Error('El nombre no puede estar vacío');
  }
  return `¡Hola, ${nombre}! Bienvenido al mundo de CI/CD con GitHub Actions 🚀`;
}

function despedir(nombre) {
  if (!nombre || nombre.trim() === '') {
    throw new Error('El nombre no puede estar vacío');
  }
  return `¡Hasta luego, ${nombre}! Recuerda: haz commit frecuente 👋`;
}

function obtenerFecha() {
  return new Date().toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function convertirMayusculas(texto) {
  return texto.toUpperCase();
}

function contarCaracteres(texto) {
  return texto.length;
}

module.exports = { saludar, obtenerFecha, despedir, convertirMayusculas, contarCaracteres };

if (require.main === module) {
  console.log(saludar('Mundo'));
  console.log(despedir('Mundo'));
  console.log(`Fecha de ejecución: ${obtenerFecha()}`);
}