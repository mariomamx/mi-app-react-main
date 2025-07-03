// src/components/OnionHater.jsx
import React, { useState } from "react";
import "../styles/OnionHater.css"; // ¡Ruta de importación corregida!

function OnionHater() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);

    // Convertimos a minúsculas para que la detección sea insensible a mayúsculas
    if (newText.toLowerCase().includes("cebolla")) {
      alert("¡ODIO LA CEBOLLA!");
    }
  };

  return (
    <div className="onion-hater-container">
      {" "}
      {/* Agregamos una clase para estilizar */}
      <label htmlFor="onionText">Escribe algo aquí:</label>
      <textarea
        id="onionText"
        value={text}
        onChange={handleChange}
        rows="5"
        cols="50"
        placeholder="¡No menciones la cebolla si no quieres un susto!"
      />
    </div>
  );
}

export default OnionHater;
