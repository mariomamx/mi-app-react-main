import { Routes, Route, Link } from "react-router-dom";
import Error404 from "./components/Error404.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import ProductCard from "./components/ProductCard.jsx";
import QrCard from "./components/QrCard.jsx";
import OnionHater from "./components/OnionHater.jsx";
import Clock from "./components/Clock.jsx";
import Album from "./components/Album.jsx";
import { Todo } from "./components/Todo.jsx"; // ¡Ahora importamos el componente Todo!
import "./App.css";

/**
 * Componente principal de la aplicación.
 * Define las rutas y la navegación para los diferentes componentes.
 */
function App() {
  return (
    // Contenedor principal de la aplicación
    <div className="app">
      {/* Barra de navegación */}
      <nav className="navbar">
        <Link to="/error">Error 404</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/producto">Producto</Link>
        <Link to="/qr">QR</Link>
        <Link to="/cebolla">¡Odio la Cebolla!</Link>
        <Link to="/reloj">Reloj</Link> {/* Corregido: </Kink> a </Link> */}
        <Link to="/album">Álbum</Link>
        <Link to="/todo">Lista de Tareas</Link> {/* Nuevo enlace para la lista de tareas */}
      </nav>

      {/* Contenido principal de la aplicación, donde se renderizan los componentes de las rutas */}
      <main className="main-content">
        <Routes>
          <Route path="/error" element={<Error404 />} />
          <Route path="/perfil" element={<ProfileCard />} />
          <Route path="/producto" element={<ProductCard />} />
          <Route path="/qr" element={<QrCard />} />
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
          <Route path="/todo" element={<Todo />} /> {/* Nueva ruta para el componente Todo */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
