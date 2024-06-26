import React from 'react'; // Importa React
import ReactDOM from 'react-dom/client'; // Importa ReactDOM para renderizar el componente en el DOM
import './Style/index.css'; // Importa los estilos CSS globales
import App from './App'; // Importa el componente principal App
import reportWebVitals from './reportWebVitals'; // Importa la función para reportar web vitals
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter para manejar rutas en la aplicación

// Crea un nuevo root de ReactDOM en el elemento con id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación dentro de React.StrictMode y BrowserRouter
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Si deseas medir el rendimiento de tu aplicación, pasa una función para registrar resultados
// Por ejemplo: reportWebVitals(console.log)
// O envía a un endpoint de analytics. Más información: https://bit.ly/CRA-vitals
reportWebVitals();
