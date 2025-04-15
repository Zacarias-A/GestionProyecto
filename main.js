const proyecto = require("./Proyecto");
const { Tarea, TareaCompuesta } = require("./Tareas");

const t1 = new Tarea("1", 3);
const t2 = new TareaCompuesta("2", 5, [
  new Tarea("2.1", 6),
  new TareaCompuesta("2.2", 8, [new Tarea("2.2.1", 3), new Tarea("2.2.2", 4)]),
]);
const t3 = new TareaCompuesta("3", 7, [
  new Tarea("3.1", 6),
  new Tarea("3.2", 3),
]);
const t4 = new TareaCompuesta("4", 14, [
  new Tarea("4.1", 1), 
  new Tarea("4.2", 2), 
  new Tarea("4.3", 3), 
  new Tarea("4.4", 4)
]);

proyecto.agregarTarea(t1);
proyecto.agregarTarea(t2);
proyecto.agregarTarea(t3);
proyecto.agregarTarea(t4);

proyecto.mostrarTareas();
console.log(`Duracion Total: ${proyecto.getDuracion()}`);
