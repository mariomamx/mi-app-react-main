import React, { useState } from "react"; // Importa useState para manejar el estado del contador
import "../styles/Album.css"; // Importa los estilos CSS

/**
 * Componente Album para mostrar la información de un álbum musical.
 * Recibe props para la portada, título de la canción, nombre del artista,
 * nombre del álbum, año y género.
 * @param {object} props - Las propiedades del componente.
 * @param {string} props.albumCover - URL de la portada del álbum.
 * @param {string} props.songTitle - Título de la canción.
 * @param {string} props.artistName - Nombre del artista.
 * @param {string} props.albumName - Nombre del álbum.
 * @param {string} props.year - Año de lanzamiento del álbum.
 * @param {string} props.genre - Género musical del álbum.
 */
function Album({ albumCover, songTitle, artistName, albumName, year, genre }) {
  // Estado para el contador de "me gusta"
  const [likes, setLikes] = useState(0); // Inicializa los likes en 0

  // Función para incrementar los likes
  const handleLikeClick = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  // Usamos la imagen proporcionada o un placeholder si no hay imagen
  const imageUrl =
    albumCover || "https://placehold.co/150x150/cccccc/000000?text=No+Cover";

  return (
    // Contenedor principal de la tarjeta del álbum.
    <div className="album-card">
      {/* Contenedor para el icono de corazón y el contador */}
      {/* Posicionaremos esto a la izquierda con CSS */}
      <div className="like-container">
        {/* Icono de corazón. Puedes usar un SVG o un icono de librería como Font Awesome */}
        {/* Para Font Awesome, necesitarías añadir la librería en tu index.html o en tu proyecto */}
        {/* Ejemplo de Font Awesome: <i className="fas fa-heart like-icon" onClick={handleLikeClick}></i> */}
        {/* Usaremos un SVG simple por defecto para evitar dependencias externas */}
        <svg
          className="like-icon"
          onClick={handleLikeClick}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 21.35l-1.84-1.84C5.46 16.14 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.46 7.64-8.16 10.9L12 21.35z"/>
        </svg>
        <span className="like-count">{likes}</span>
      </div>

      {/* Imagen de la portada del álbum */}
      <img
        src={imageUrl}
        alt={`${albumName} cover`}
        className="album-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/150x150/cccccc/000000?text=Error+Loading";
        }}
      />
      {/* Contenedor de los detalles del álbum (texto) */}
      <div className="album-details">
        <h3 className="song-title">
          {songTitle}
        </h3>
        <p className="artist-name">{artistName}</p>
        <p className="album-info">
          {albumName} ({year})
        </p>
        <p className="genre">{genre}</p>
      </div>
    </div>
  );
}

export default Album;