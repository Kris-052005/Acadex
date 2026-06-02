import { layout } from "../layout.js";

export function resumenPage(estadisticas) {
  const contenido = `
    <h1 class="mb-4">
    <i class="bi bi-bar-chart-fill"></i>
    Resumen de tareas
    </h1>

    <div class="row">
    <div class="col-md-3 mb-3">
    <div class="card text-center border-primary">
    <div class="card-body">
    <h5>Total de tareas</h5>
    <h2>${estadisticas.total}</h2>
    </div>
    </div>
    </div>

    <div class="col-md-3 mb-3">
    <div class="card text-center border-danger">
    <div class="card-body">
    <h5>Tareas pendientes</h5>
    <h2>${estadisticas.pendientes}</h2>
    </div>
    </div>
    </div>

    <div class="col-md-3 mb-3">
    <div class="card text-center border-warning">
    <div class="card-body">
    <h5>Tareas en progreso</h5>
    <h2>${estadisticas.enProgreso}</h2>
    </div>
    </div>
    </div>

    <div class="col-md-3 mb-3">
    <div class="card text-center border-success">
    <div class="card-body">
    <h5>Tareas completadas</h5>
    <h2>${estadisticas.completadas}</h2>
    </div>
    </div>
    </div>

    </div>
    `;
  return layout("Resumen", contenido);
}
