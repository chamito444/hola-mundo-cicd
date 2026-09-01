// app.js - Aplicación Hola Mundo
// Punto de entrada principal de la aplicación

function saludar(nombre) {
  if (!nombre || nombre.trim() === '') {
    throw new Error('El nombre no puede estar vacío');
  }
  return `Hola ${nombre}`;
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

module.exports = { saludar, despedir, obtenerFecha };

if (require.main === module) {
  console.log(saludar('Mundo'));
  console.log(despedir('Mundo'));
  console.log(`Fecha de ejecución: ${obtenerFecha()}`);
}