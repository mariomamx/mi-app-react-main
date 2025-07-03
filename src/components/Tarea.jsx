import React, { useState } from "react";
import "../styles/Tarea.css"; // Importamos el CSS para Tarea

/**
 * Componente Tarea para mostrar una tarea individual en la lista To-Do.
 * Permite marcar la tarea como completada, eliminarla y editar su texto.
 * @param {object} props - Las propiedades del componente.
 * @param {object} props.tarea - El objeto de la tarea con id, texto y estado 'completed'.
 * @param {function} props.onToggleComplete - Función para cambiar el estado de completado de la tarea.
 * @param {function} props.onDelete - Función para eliminar la tarea.
 * @param {function} props.onUpdate - Función para actualizar el texto de la tarea.
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
    setEditedText(tarea.texto); // Revertir a texto original
    setIsEditing(false);
  };

  return (
    // Contenedor de la tarea individual
    <div className={`tarea-item ${tarea.completed ? "completed" : ""}`}>
      {/* Checkbox para marcar/desmarcar la tarea como completada */}
      <input
        type="checkbox"
        checked={tarea.completed}
        onChange={() => onToggleComplete(tarea.id)}
        className="tarea-checkbox"
      />
      {/* Contenido de la tarea: input si está editando, párrafo si no */}
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleSave} // Guardar al perder el foco
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSave();
            } else if (e.key === "Escape") {
              handleCancelEdit();
            }
          }}
          className="tarea-input-editar"
          autoFocus // Enfocar automáticamente al entrar en modo edición
        />
      ) : (
        <p className="tarea-texto" onDoubleClick={handleEdit}>
          {tarea.texto}
        </p>
      )}
      {/* Botones de acción */}
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

export default Tarea;
