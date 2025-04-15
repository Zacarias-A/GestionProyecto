class Proyecto {
  constructor() {
    this.tareas = [];
  }

  agregarTarea(tarea) {
    this.tareas.push(tarea);
  }

  getDuracion() {
    return this.tareas.reduce((acum, tarea) => acum + tarea.getDuracion(), 0);
  }

  getCosto() {
    return this.tareas.reduce((acum, tarea) => acum + tarea.getCostoTotal(), 0);
  }

  mostrarTareas() {
    this.tareas.forEach((tarea) => tarea.mostrarTarea());
  }

  cleanTareas() {
    this.tareas = [];
  }
}

module.exports = new Proyecto();
