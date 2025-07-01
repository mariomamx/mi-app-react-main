import '../styles/QrCard.css';

export default function QrCard() {
  return (
    <div className="qr-card">
      <img src="/qr-code.png" alt="QR Code" />
      <h3>Improve your front-end skills by building projects</h3>
      <p>Scan the QR code to visit Frontend Mentor and take your skills to the next level.</p>
    </div>
  );
}
