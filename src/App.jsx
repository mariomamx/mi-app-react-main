// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import Error404 from './components/Error404';
import ProfileCard from './components/ProfileCard';
import ProductCard from './components/ProductCard';
import QrCard from './components/QrCard';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/error">Error 404</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/producto">Producto</Link>
        <Link to="/qr">QR</Link>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/error" element={<Error404 />} />
          <Route path="/perfil" element={<ProfileCard />} />
          <Route path="/producto" element={<ProductCard />} />
          <Route path="/qr" element={<QrCard />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
