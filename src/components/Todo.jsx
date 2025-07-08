import React, { useState } from "react";
import { Formulario } from "./Formulario.jsx"; // Asegúrate que Formulario.jsx exporta con 'export const'
import Tarea from "./Tarea.jsx"; // Asegúrate que Tarea.jsx exporta con 'export default'
import "../styles/Todo.css"; // ¡Importamos el CSS estándar, no .module.css!

export const Todo = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (texto) => {
    const nuevaTarea = {
      id: Date.now(),
      texto,
      completed: false,
    };
    setTareas([...tareas, nuevaTarea]);
  };

  const actualizarTarea = (id, nuevoTexto) => {
    const actualizadas = tareas.map((t) =>
      t.id === id ? { ...t, texto: nuevoTexto } : t
    );
    setTareas(actualizadas);
  };

  const eliminarTarea = (id) => {
    const filtradas = tareas.filter((t) => t.id !== id);
    setTareas(filtradas);
  };

  const completarTarea = (id) => {
    const actualizadas = tareas.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTareas(actualizadas);
  };

  return (
    <div>
      <Formulario agregarTarea={agregarTarea} />

      <hr />

      {/* Lista de tareas */}
      {/* ¡CAMBIO CLAVE AQUÍ! Usamos "container" directamente, sin 'styles.' */}
      <div className="container">
        {tareas.map((t) => (
          <Tarea
            key={t.id}
            tarea={t}
            onUpdate={actualizarTarea}
            onDelete={eliminarTarea}
            onToggleComplete={completarTarea}
          />
        ))}
      </div>
    </div>
  );
};