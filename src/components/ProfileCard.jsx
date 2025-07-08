import '../styles/ProfileCard.css';
export default function ProfileCard() {
  
  return (
    
    <>
      <div className="profile-card">
        <img src="/Mario.jpg" alt="Mario Angulo" className="avatar" />
        <h3>Mario Angulo</h3>
        {/* El div.stars y div.rating están duplicados en intención.
            He consolidado a solo uno, asumiendo que quieres el div.rating más interactivo. */}
        <div className="rating">
          <span className="star" data-value="1">&#9733;</span>
          <span className="star" data-value="2">&#9733;</span>
          <span className="star" data-value="3">&#9733;</span>
          <span className="star" data-value="4">&#9733;</span>
          <span className="star" data-value="5">&#9733;</span>
        </div>
        <p className="descripcion">
          Abogado comprometido en ser desarrollador fullstack, trabajando en litigio independiente.<br />
          Me encanta aprender y actualmente estudio en Talento Tech.
        </p>
        <p>
        Global Shaper and fullstack developer working at Zebra Technologies and Somos Networks.
        I love mentoring currently working on Make It Real.
      </p>

        {/* Los botones también estaban duplicados. He dejado una versión clara. */}
        <div className="botones">
          <a href="#" className="btn btn-blanco">Read More</a>
          <a href="#" className="btn btn-lila">Contact</a>
        </div>
      </div>

     
    </>
  );
}
