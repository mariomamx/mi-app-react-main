// src/components/Tarea.jsx
import React, { useState } from "react";
import "../styles/Tarea.css"; // ¡Asegúrate de que este archivo sea 'Tarea.css' y no 'Tarea.module.css' en tu carpeta styles!

/**
 * Componente Tarea para mostrar y gestionar una tarea individual en la lista To-Do.
 *
 * Este componente maneja su propio estado de edición y se comunica con el componente padre
 * (probablemente Todo.jsx) para actualizar, eliminar o cambiar el estado de completado de la tarea.
 *
 * @param {object} props - Las propiedades del componente.
 * @param {object} props.tarea - El objeto de la tarea con id, texto y estado 'completed'.
 * @param {function} props.onToggleComplete - Callback para cambiar el estado de completado.
 * @param {function} props.onDelete - Callback para eliminar la tarea.
 * @param {function} props.onUpdate - Callback para actualizar el texto de la tarea.
 */
const Tarea = ({ tarea, onToggleComplete, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(tarea.texto);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedText.trim() && editedText !== tarea.texto) {
      onUpdate(tarea.id, editedText);
    }
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedText(tarea.texto);
    setIsEditing(false);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      handleCancelEdit();
    }
  };

  return (
    <div className={`tarea-item ${tarea.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={tarea.completed}
        onChange={() => onToggleComplete(tarea.id)}
        className="tarea-checkbox"
      />
      
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleSave}
          onKeyPress={handleInputKeyPress}
          className="tarea-input-editar"
          autoFocus
        />
      ) : (
        <p className="tarea-texto" onDoubleClick={handleEdit}>
          {tarea.texto}
        </p>
      )}

      <div className="tarea-acciones">
        {isEditing ? (
          <>
            <button onClick={handleSave} className="tarea-boton-guardar">
              Guardar
            </button>
            <button onClick={handleCancelEdit} className="tarea-boton-cancelar">
              Cancelar
            </button>
          </>
        ) : (
          <>
            <button onClick={handleEdit} className="tarea-boton-editar">
              Editar
            </button>
            <button
              onClick={() => onDelete(tarea.id)}
              className="tarea-boton-eliminar"
            >
              Eliminar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Tarea; // Asegúrate de que tenga export default