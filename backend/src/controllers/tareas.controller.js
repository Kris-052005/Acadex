import { tareas } from "../data/tareas.data.js";


export function listarTareas(req, res) {
  const estado = req.query.estado;
  const mensaje = req.query.mensaje;

  if (estado) {
    const tareasFiltradas = tareas.filter((tarea) => tarea.estado === estado);
    return res.json(tareasFiltradas);
  }

  res.json(tareas);
}

export function verDetalleTarea(req, res) {
  const id = Number(req.params.id);
  const tarea = tareas.find((tarea) => tarea.id === id);

  if (!tarea) {
    return res.json({eror: "tarea no entrada"});
  }

  res.json(tarea);
}

/*
export function mostrarFormularioNuevaTarea(req, res) {
  res.send(nuevaTareaPage());
}
*/
export function crearTarea(req, res) {
  const nuevaTarea = {
    id: tareas.length + 1,
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    estado: req.body.estado,
    prioridad: req.body.prioridad,
  };

  tareas.push(nuevaTarea);

  res.json({mensaje: "Tarea creada exitosamente"});
}
/*
export function mostrarFormularioEditarTarea(req, res) {
  const id = Number(req.params.id);
  const tarea = tareas.find((tarea) => tarea.id === id);
  if (!tarea) {
    return res.status(404).send(error404Page());
  }

  res.send(editarTareaPage(tarea));
}
*/
export function actualizarTarea(req, res) {
  const id = Number(req.params.id);
  const tarea = tareas.find((tarea) => tarea.id === id);

  if (!tarea) {
    return res.json({eror: "tarea no encontrada"});
  }

  tarea.titulo = req.body.titulo;
  tarea.descripcion = req.body.descripcion;
  tarea.estado = req.body.estado;
  tarea.prioridad = req.body.prioridad;

  res.json({mensaje: "tarea actualizada exitosamente"});
}

export function eliminarTarea(req, res) {
  const id = Number(req.params.id);
  const indice = tareas.findIndex((tarea) => tarea.id === id);

  if (indice !== -1) {
    tareas.splice(indice, 1);
  }

  res.json({mesaje: "tarea eliminada exitosamente"});
}

export function mostrarResumen(req, res) {
  const resumen = tareas.length;
  const pendientes = tareas.filter(tarea => tarea.estado === "pendiente").length;
  const enProgreso = tareas.filter(tarea => tarea.estado === "en progreso").length;
  const completadas = tareas.filter(tarea => tarea.estado === "completada").length;

  res.json(resumen);
}

