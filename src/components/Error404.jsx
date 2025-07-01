import '../styles/Error404.css';

export default function Error404() {
  return (
    <div className="error-container">
      <h2>404 NOT FOUND</h2>
      <img src="/scarecrow.png" alt="Scarecrow" />
      <h1>I have bad news for you</h1>
      <p>The page you are looking for might be removed or is temporarily unavailable</p>
      <button>Back to homepage</button>
    </div>
  );
}
