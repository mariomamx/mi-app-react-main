// src/components/NavBar.jsx
import React from 'react';
import { Link } from "react-router-dom";
import "../styles/NavBar.css"; // ¡Ruta del archivo CSS corregida a NavBar.css!

export const NavBar = () => { // Nota: Es una exportación nombrada 'NavBar'
  return (
    <div className="contenedor"> {/* Clase CSS regular */}
      <h1> Barra de Navegación de Aplicaciones Mario</h1> {/* Título más descriptivo */}
      <p>componentes:</p>
      <hr />
      <div className="links"> {/* Clase CSS regular */}
        <Link className="link" to="/error">
          Error 404
        </Link>
        <Link className="link" to="/perfil">
          Perfil
        </Link>
        <Link className="link" to="/producto">
          Producto
        </Link>
        <Link className="link" to="/qr">
          QR
        </Link>
        <Link className="link" to="/cebolla">
          ¡Odio la Cebolla!
        </Link>
        <Link className="link" to="/reloj">
          Reloj
        </Link>
        <Link className="link" to="/album">
          Álbum
        </Link>
        <Link className="link" to="/todo">
          Lista de Tareas
        </Link>
      </div>
    </div>
  );
};
