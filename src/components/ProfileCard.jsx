import '../styles/ProfileCard.css';

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <img src="/profile.jpg" alt="Pablo Velasquez" className="avatar" />
      <h3>Pablo Velasquez</h3>
      <div className="stars">⭐⭐⭐☆☆</div>
      <p>
        Global Shaper and fullstack developer working at Zebra Technologies and Somos Networks.
        I love mentoring currently working on Make It Real.
      </p>
      <div className="buttons">
        <button className="read">Read More</button>
        <button className="contact">Contact</button>
      </div>
    </div>
  );
}
