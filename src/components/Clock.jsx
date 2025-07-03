// src/components/Clock.jsx
import React, { useState, useEffect } from "react";
import "../styles/Clock.css"; // Importamos los estilos para el reloj

function Clock() {
  // Estado para almacenar la hora actual
  const [currentTime, setCurrentTime] = useState(new Date());

  // useEffect para configurar y limpiar el intervalo
  useEffect(() => {
    // Configura un intervalo que se ejecuta cada 5 segundos (5000 ms)
    const timerId = setInterval(() => {
      setCurrentTime(new Date()); // Actualiza el estado con la nueva hora
    }, 5000); // 5000 milisegundos = 5 segundos

    // Función de limpieza que se ejecuta cuando el componente se desmonta
    // Esto es crucial para evitar fugas de memoria y errores
    return () => {
      clearInterval(timerId); // Limpia el intervalo
    };
  }, []); // El array de dependencias vacío [] asegura que el efecto se ejecute solo una vez al montar

  const options = {
    weekday: "long", // día de la semana completo (ej: "lunes")
    year: "numeric", // año (ej: "2025")
    month: "long", // mes completo (ej: "julio")
    day: "numeric", // día del mes (ej: "1")
    hour: "2-digit", // hora en dos dígitos (ej: "08")
    minute: "2-digit", // minuto en dos dígitos (ej: "10")
    second: "2-digit", // segundo en dos dígitos (ej: "05")
    hour12: true, // formato de 12 horas (AM/PM)
  };

  // Convertir la fecha a una cadena de texto localizada
  const formattedTime = currentTime.toLocaleTimeString("es-ES", options);

  return (
    <div className="clock-container">
      <h2>¡Bienvenido a Time actual de mario!</h2>
      <p>Para que no olvides la hora al despertar:</p>
      <div className="current-time">{formattedTime}</div>
      <p className="update-info">Actualizando cada 5 segundos...</p>
    </div>
  );
}

export default Clock;
