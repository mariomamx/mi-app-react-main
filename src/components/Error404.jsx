// src/components/Error404.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // ¡Importa Link aquí!
import '../styles/Error404.css'; 

export default function Error404() {
  return (
    <div className="error-container">
      <h2 className="error-title">404 NOT FOUND</h2>
      <div className="content-wrapper"> 
      <div className="text-content">
          <h1>I have bad news for you</h1>
          <p>The page you are
             looking for might have been
             deleted or is
             temporarily unavailable.</p>
          {/* Usamos <Link> en lugar de <button> para la navegación en React */}
          <Link to="/" className="btn-homepage">Back to homepage</Link>
        </div>
        <div className="image-content">
          <img src="espantapajaros.jpg" alt="espantapajaros" /> 
        </div>
      </div>
    </div>
  );
}