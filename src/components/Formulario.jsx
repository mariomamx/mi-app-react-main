// src/components/Formulario.jsx
import React, { useState } from 'react';
import '../styles/Formulario.css'; // Asegúrate de que esta ruta sea correcta

export const Formulario = ({ agregarTarea }) => {
  // Estado local para guardar el texto que el usuario escribe en el input
  const [textoInput, setTextoInput] = useState('');

  // Función que se ejecuta cuando el usuario envía el formulario (presiona Enter o el botón)
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página)

    // Si el input está vacío o solo tiene espacios, no agrega la tarea
    if (textoInput.trim() === '') {
      return; 
    }

    // Llama a la función 'agregarTarea' que viene de un componente superior
    // y le pasa el texto del input
    agregarTarea(textoInput);

    // Limpia el input después de agregar la tarea
    setTextoInput(''); 
  };

  return (
    // El formulario con su manejador de envío y su clase CSS
    <form onSubmit={handleSubmit} className="formulario-tarea">
      {/* Input de texto donde el usuario escribe la tarea */}
      <input
        type="text"
        placeholder="Agrega una nueva tarea..." // Texto que aparece cuando el input está vacío
        value={textoInput} // El valor del input está controlado por el estado 'textoInput'
        onChange={(e) => setTextoInput(e.target.value)} // Actualiza el estado cada vez que el input cambia
        className="formulario-input" // Clase CSS para estilizar el input
      />
      {/* Botón para enviar el formulario y agregar la tarea */}
      <button type="submit" className="formulario-boton">
        Agregar Tarea
      </button>
    </form>
  );
};