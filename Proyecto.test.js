const proyecto = require("./Proyecto");
const { Tarea, TareaCompuesta } = require("./Tareas");

describe("Duracion Proyecto", () => {
  let t1;
  let t2;
  let t3;

  beforeEach(() => {
    t1 = new Tarea("1", 3);
    t1.cambiarComplejidad();
    t1.cambiarComplejidad();
    t2 = new TareaCompuesta("2", 5, [
      new Tarea("2.1", 6),
      new TareaCompuesta("2.2", 8, [
        new Tarea("2.2.1", 3),
        new Tarea("2.2.2", 4),
      ]),
    ]);
    t3 = new TareaCompuesta("3", 7, [new Tarea("3.1", 6), new Tarea("3.2", 3)]);
    t3.cambiarComplejidad();
    t4 = new TareaCompuesta("4", 14, [new Tarea("4.1", 1), new Tarea("4.2", 2), new Tarea("4.3", 3), new Tarea("4.4", 4)]);
    t4.cambiarComplejidad();
    t4.cambiarComplejidad();

    proyecto.agregarTarea(t1);
    proyecto.agregarTarea(t2);
    proyecto.agregarTarea(t3);
    proyecto.agregarTarea(t4);
  });

  afterEach(() => {
    proyecto.cleanTareas();
  });

  test("La duración total de la tarea 1 debería ser 3", () => {
    expect(t1.getDuracion()).toBe(3);
  });

  test("El costo de la tarea 1 debería ser 321 (300 de cargo base + el 7% de complejidad máxima", () => {
    expect(t1.getCostoTotal()).toBe(321);
  });

  test("La duración total de la tarea 2 debería ser 26", () => {
    expect(t2.getDuracion()).toBe(26);
  });

  test("El costo de la tarea 2 debería ser 2600(todas las tareas tienen complejidad mínima)", () => {
    expect(t2.getCostoTotal()).toBe(2600);
  });

  test("La duración total de la tarea 3 debería ser 16", () => {
    expect(t3.getDuracion()).toBe(16);
  });

  test("El costo de la tarea 3 debería ser 1635(La tarea compleja tiene complejidad media((700 + 5%) + costo subtareas))", () => {
    expect(t3.getCostoTotal()).toBe(1635);
  });

  test("El costo de la tarea 4 debería ser((complejidad máxima de más de 10 segundos(total 5498) + subtareas)* 1.04)", () => {
    expect(t4.getCostoTotal()).toBe(6757.92);
  });

  test("La duración total del proyecto debería ser 69", () => {
    expect(proyecto.getDuracion()).toBe(69);
  });

  test("El costo total del proyecto debería ser 11313.92", () => {
    expect(proyecto.getCosto()).toBe(11313.92);
  });
});
