import React from "react";
// No necesitamos importar Album.css directamente aquí si usamos Tailwind CSS para la mayoría de los estilos
// import "../styles/Album.css"; // Comentado porque usaremos clases de Tailwind

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
  // Usamos la imagen proporcionada o un placeholder si no hay imagen
  const imageUrl =
    albumCover || "https://placehold.co/150x150/cccccc/000000?text=No+Cover";

  return (
    // Contenedor principal de la tarjeta del álbum
    // Flexbox para alinear la imagen y los detalles, con esquinas redondeadas y sombra
    <div className="flex flex-col sm:flex-row items-center bg-white rounded-lg shadow-lg p-4 m-4 max-w-sm sm:max-w-md mx-auto overflow-hidden">
      {/* Imagen de la portada del álbum */}
      <img
        src={imageUrl}
        alt={`${albumName} cover`}
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-md object-cover mr-0 sm:mr-4 mb-4 sm:mb-0 shadow-md"
        // Manejo de error para la imagen: si la imagen no carga, muestra un placeholder
        onError={(e) => {
          e.target.onerror = null; // Evita bucles infinitos de error
          e.target.src =
            "https://placehold.co/150x150/cccccc/000000?text=Error+Loading"; // Placeholder genérico en caso de error
        }}
      />
      {/* Detalles del álbum */}
      <div className="flex flex-col text-center sm:text-left">
        {/* Título de la canción o elemento principal */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
          {songTitle}
        </h3>
        {/* Nombre del artista */}
        <p className="text-md sm:text-lg text-gray-700 mb-1">{artistName}</p>
        {/* Nombre del álbum y año */}
        <p className="text-sm sm:text-base text-gray-600 mb-1">
          {albumName} ({year})
        </p>
        {/* Género musical */}
        <p className="text-sm sm:text-base text-gray-500">{genre}</p>
      </div>
    </div>
  );
}

export default Album;
