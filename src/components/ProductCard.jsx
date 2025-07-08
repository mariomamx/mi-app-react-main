// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // ¡Importa Link para los botones!
import '../styles/ProductCard.css'; // Asegúrate de que esta ruta es la correcta para tu CSS

export default function ProductCard() {
  return (
    // Opcional: Este wrapper ayuda a centrar la tarjeta si no lo haces globalmente
    <div className="product-card-wrapper"> 
      <div className="product-card">
        {/* Imagen del producto */}
        <img src="/papel.jpg" alt="Toilet Roll" /> 
        
        {/* Título del producto */}
        <h2>SINGLE TOILET ROLL</h2>
        
        {/* Etiqueta / Subtítulo */}
        <span className="label">Popular seller</span>
        
        {/* Precio del producto */}
        <p className="valor">£9.99</p>
        
        {/* Descripción detallada del producto */}
        <p className="descripcion">
          This is a luxury, quilted, 3-ply toilet roll<br />
          with aloe vera for the smoothest wipe<br />
          possible. No animals were harmed in the<br />
          making or testing of this product. Due to<br />
          high demand, limited to 2 per order.
        </p>
        
        {/* Contenedor de botones */}
        <div className="product-buttons"> {/* Usamos la clase 'product-buttons' */}
          {/* Primer botón: LIKE */}
          <Link to="#" className="btn-product btn-like" role="button" aria-label="Me gusta este producto">LIKE</Link>
          {/* Segundo botón: CONTACT */}
          <Link to="#" className="btn-product btn-contact" role="button" aria-label="Contactar vendedor">CONTACT</Link>
        </div>
      </div>
    </div>
  );
}