// src/components/DynamicQrCard.jsx
import React from 'react';
import '../styles/DynamicQrCard.css'; // Asegúrate que esta ruta sea correcta para tus estilos

/**
 * Componente DynamicQrCard.
 * Muestra una tarjeta con un código QR generado dinámicamente.
 *
 * @param {object} props - Las propiedades del componente.
 * @param {string} props.name - El nombre o título de la tarjeta QR.
 * @param {string} props.texto - Una descripción o texto adicional para la tarjeta.
 * @param {string} props.linkUrl - La URL que será codificada en el código QR.
 */
const DynamicQrCard = ({ name, texto, linkUrl }) => {
  // Genera la URL de la imagen QR usando un servicio público (api.qrserver.com).
  // 'encodeURIComponent' es crucial para asegurar que la URL sea válida,
  // especialmente si 'linkUrl' contiene caracteres especiales.
  const dynamicQrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(linkUrl)}`;

  return (
    // card-wrapper: Contenedor principal que centra toda la tarjeta en la pantalla.
    <div className="card-wrapper">
      {/* El div con className="card" ha sido eliminado. */}

      {/* Enlace que envuelve la imagen QR, para que sea clickeable */}
      <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="qrLink">
        {/* Contenedor para la imagen QR (con fondo de color) */}
        <div className="imagen">
          <img
            className="qr"
            src={dynamicQrImageUrl} // Usa la URL del QR generada dinámicamente
            alt={`Código QR para ${name}`} // Texto alternativo para accesibilidad
          />
        </div>
      </a>

      {/* Contenedor para el texto (título y párrafo) */}
      {/* Este contenedor es necesario para el diseño de imagen al lado del texto */}
      <div className="text-content">
        {/* Enlace para el nombre de la aplicación (el h1), también clickeable */}
        <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="nameLink">
          <h1>{name}</h1> {/* Título de la tarjeta */}
        </a>

        <p>{texto}</p> {/* Texto descriptivo de la tarjeta */}
      </div>

    </div>
  );
};

export default DynamicQrCard; // Exportación por defecto del componente
