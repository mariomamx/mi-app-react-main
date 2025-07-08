// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import ProductCard from "./components/ProductCard.jsx";
import DynamicQrCard from "./components/DynamicQrCard.jsx";
import OnionHater from "./components/OnionHater.jsx";
import Clock from "./components/Clock.jsx";
import Album from "./components/Album.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { Todo } from "./components/Todo.jsx";
import "./App.css";

/**
 * Componente principal de la aplicación.
 * Define las rutas y la navegación para los diferentes componentes.
 */
function App() {
  return (
    // Contenedor principal de la aplicación
    <div className="app">
      {/* Barra de navegación - ahora es un componente separado */}
      <NavBar />

      {/* Contenido principal de la aplicación, donde se renderizan los componentes de las rutas */}
      <main className="main-content">
        <Routes>
          <Route path="/error" element={<Error404 />} />
          <Route path="/perfil" element={<ProfileCard />} />
          <Route path="/producto" element={<ProductCard />} />

          {/* Rutas para DynamicQrCard, ahora tu único componente de tarjeta QR */}
          <Route
            path="/qr" // Puedes usar solo /qr si es el único
            element={
              <DynamicQrCard
                name="QR para Google"
                texto="Escanea este código para visitar Google."
                linkUrl="https://www.google.com/"
              />
            }
          />
          <Route
            path="/qr-youtube"
            element={
              <DynamicQrCard
                name="QR para YouTube"
                texto="Encuentra videos interesantes escaneando aquí."
                linkUrl="https://www.youtube.com/"
              />
            }
          />

          <Route path="/cebolla" element={<OnionHater />} />
          <Route path="/reloj" element={<Clock />} />
          <Route
            path="/album"
            element={
              <Album
                albumCover="https://res.cloudinary.com/dimyys4op/image/upload/v1751498741/1200x630bb_td6v0s.jpg"
                songTitle="UNDER THE GRAVE"
                artistName="ROZES"
                albumName="Under the Grave"
                year="2018"
                genre="dance"
              />
            }
          />
          <Route path="/todo" element={<Todo />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;