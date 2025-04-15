const{ Minima, Media, Maxima } = require("./Complejidades");
// Valor común para todas las complejidades
const valorComun = 100;
class Tarea {
  constructor(codigo, duracion) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.complejidad = new Minima();
  }
   //Costo de la tarea sin cargos extras
   getCargoBase(){
    return this.duracion * valorComun;
  } 

  getDuracion() {
    return this.duracion;
  }

  getCodigo() {
    return this.codigo;
  }

   //Costo total sumando los cargos extras
   getCostoTotal(){
    return this.getCargoBase() + this.complejidad.cargoExtra(this.getCargoBase(), this.duracion);
  }

  cambiarComplejidad(){
    this.complejidad = this.complejidad.siguiente();
  }

  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion}`);
  }
}

class TareaCompuesta {
  constructor(codigo, duracion, tareas = []) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.tareas = tareas;
    this.complejidad = new Minima();
  }

  getDuracion() {
    return this.tareas.reduce(
      (acum, tarea) => acum + tarea.getDuracion(),
      this.duracion
    );
  }

  getCodigo() {
    return this.codigo;
  }

  getCargoBase(){
    return this.duracion * valorComun;
  } 
 
  getCostoTotal(){
     // Costo de tarea compleja antes de sumar el costo de las subtareas.
    const costoTarea = this.getCargoBase() + this.complejidad.cargoExtra(this.getCargoBase(), this.duracion);
    // Costo total
    const costoTotal = this.tareas.reduce((acum, tarea)=> acum + tarea.getCostoTotal(), costoTarea);
    return this.tareas.length <= 3 ? costoTotal : costoTotal * 1.04
  }

  cambiarComplejidad(){
    this.complejidad = this.complejidad.siguiente();
  }

  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion}`);
    this.tareas.forEach((tarea) => tarea.mostrarTarea());
  }
}

module.exports = { Tarea, TareaCompuesta };
