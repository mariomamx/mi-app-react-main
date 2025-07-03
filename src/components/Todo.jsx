import React, { useState } from "react";
import { Formulario } from "./Formulario.jsx"; // Importamos el componente Formulario
import Tarea from "./Tarea.jsx"; // Importamos el componente Tarea
import styles from "../styles/Todo.module.css"; // ¡Importamos el CSS Module!

/**
 * Componente principal Todo para gestionar la lista de tareas.
 * Maneja el estado de las tareas (agregar, actualizar, completar, eliminar).
 */
export const Todo = () => {
  // Estado para almacenar la lista de tareas
  const [tareas, setTareas] = useState([]);

  /**
   * Función para agregar una nueva tarea a la lista.
   * @param {string} texto - El texto de la nueva tarea.
   */
  const agregarTarea = (texto) => {
    const nuevaTarea = {
      id: Date.now(), // Genera un ID único basado en la marca de tiempo
      texto, // El texto de la tarea
      completed: false, // Inicialmente la tarea no está completada
    };
    // Actualiza el estado de las tareas añadiendo la nueva tarea
    setTareas((prevTareas) => [...prevTareas, nuevaTarea]);
  };

  /**
   * Función para actualizar el texto de una tarea existente.
   * @param {number} id - El ID de la tarea a actualizar.
   * @param {string} nuevoTexto - El nuevo texto para la tarea.
   */
  const actualizarTarea = (id, nuevoTexto) => {
    setTareas((prevTareas) =>
      prevTareas.map((tarea) =>
        tarea.id === id ? { ...tarea, texto: nuevoTexto } : tarea
      )
    );
  };

  /**
   * Función para eliminar una tarea de la lista.
   * @param {number} id - El ID de la tarea a eliminar.
   */
  const eliminarTarea = (id) => {
    setTareas((prevTareas) => prevTareas.filter((tarea) => tarea.id !== id));
  };

  /**
   * Función para cambiar el estado de completado de una tarea.
   * @param {number} id - El ID de la tarea a completar/descompletar.
   */
  const completarTarea = (id) => {
    setTareas((prevTareas) =>
      prevTareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completed: !tarea.completed } : tarea
      )
    );
  };

  return (
    // Contenedor principal de la aplicación To-Do, usando la clase del CSS Module
    <div className={styles.container}>
      {/* Componente Formulario para añadir nuevas tareas, le pasamos la función agregarTarea */}
      <Formulario agregarTarea={agregarTarea} />

      {/* Contenedor de la lista de tareas */}
      <div className={styles.listaTareas}>
        {tareas.length === 0 ? (
          <p className={styles.noTareasMensaje}>
            No hay tareas pendientes. ¡Añade una!
          </p>
        ) : (
          // Mapeamos el arreglo de tareas para renderizar cada Tarea individual
          tareas.map((tarea) => (
            <Tarea
              key={tarea.id} // La clave única es importante para React
              tarea={tarea}
              onToggleComplete={completarTarea} // Pasamos la función completarTarea
              onDelete={eliminarTarea} // Pasamos la función eliminarTarea
              onUpdate={actualizarTarea} // Pasamos la función actualizarTarea
            />
          ))
        )}
      </div>
    </div>
  );
};
