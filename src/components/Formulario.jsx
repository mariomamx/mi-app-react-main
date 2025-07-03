import React, { useState } from "react";
import "../styles/Formulario.css"; // Importamos el archivo CSS

/**
 * Componente Formulario para agregar nuevas tareas a una lista To-Do.
 * Permite al usuario escribir una tarea y agregarla.
 */
export const Formulario = () => {
  // Estado para almacenar el texto actual del input de la tarea
  const [texto, setTexto] = useState("");

  /**
   * Manejador para el evento de envío del formulario.
   * Aquí se añadiría la lógica para procesar la tarea (ej. guardarla en una lista).
   * @param {Event} e - El evento de envío del formulario.
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página)
    if (texto.trim()) {
      // Verifica que el texto no esté vacío o solo con espacios
      console.log("Tarea a agregar:", texto);
      // Aquí iría la lógica para agregar la tarea a una lista de tareas
      // Por ejemplo: onAddTask(texto);
      setTexto(""); // Limpia el input después de agregar la tarea
    }
  };

  return (
    // Formulario para ingresar nuevas tareas
    <form onSubmit={handleSubmit} className="formulario-container">
      <h1 className="formulario-titulo">To-Do</h1>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        name="tarea"
        onChange={(e) => setTexto(e.target.value)}
        value={texto}
        className="formulario-input"
      />
      <button type="submit" className="formulario-boton">
        Agregar Tarea
      </button>
    </form>
  );
};
