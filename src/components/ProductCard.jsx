import '../styles/ProductCard.css';

export default function ProductCard() {
  return (
    <div className="product-card">
      <img src="/toilet-roll.png" alt="Toilet Roll" />
      <h2>SINGLE TOILET ROLL</h2>
      <span className="label">Popular seller</span>
      <p>£9.99</p>
      <p>
        This is a luxury, quilted, 3-ply toilet roll with aloe vera for the smoothest wipe possible...
      </p>
      <button>Like</button>
    </div>
  );
}
