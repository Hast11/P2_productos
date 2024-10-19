import './Style/App.css'; // Importa los estilos CSS de la aplicación
import Header from './Header'; // Importa el componente Header
import SpinnerCarga from './SpinnerCarga'; // Importa el componente SpinnerCarga
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos CSS de Bootstrap
import React, { useState, useEffect } from 'react'; // Importa React y sus hooks (useState, useEffect)
import SearchPage from './SearchPage'; // Importa el componente SearchPage
import CONFIG from './config/config'; // Importa la configuración de la aplicación desde config/config.js
import { mockdata } from './constants/products'; // Importa datos mock de productos desde constants/products.js
import { Routes, Route } from "react-router-dom"; // Importa componentes necesarios de react-router-dom
import NotFound from './NotFound'; // Importa el componente NotFound
import Product from './Product'; // Importa el componente Product

function App() {
  // Estado para almacenar los productos y controlar el estado de carga
  const [productos, setProductos] = useState(null);
  const [isLoading, setLoading] = useState(true); // Estado para controlar si la aplicación está cargando
  const [indice, setIndice] = useState(-1); // Estado para el índice de producto seleccionado
  const url = CONFIG.server_url; /* "https://dummyjson.com/products" */
  var aux = true; // Variable auxiliar (no utilizada en este código)
  const USE_SERVER = CONFIG.use_server; // Variable para determinar si usar el servidor real o datos mock

  // Función asincrónica para llamar al servidor y obtener datos
  const callServer = async () => {
    if (USE_SERVER === true) {
      let data;
      try {
        const resp = await fetch(url); // Realiza una solicitud fetch al servidor
        data = await resp.json(); // Convierte la respuesta a formato JSON
      } catch (e) {
        alert("No se han podido recuperar los productos"); // Muestra una alerta en caso de error
      }
      setProductos(data); // Establece los productos obtenidos del servidor
    } else {
      setProductos(mockdata); // Si no se usa el servidor real, usa datos mock
    }
  }

  // Efecto secundario para cargar los datos iniciales al montar el componente
  useEffect(() => {
    async function fetchData() {
      await callServer(); // Llama a la función para obtener datos

      // Simula un tiempo de carga antes de mostrar el contenido
      setTimeout(() => {
        setLoading(false); // Cambia el estado de carga a falso después de 500ms
      }, 500); // 500 milisegundos de tiempo de espera antes de cambiar isLoading
    }

    fetchData(); // Ejecuta la función fetchData al montar el componente
  }, []); // El segundo argumento [] indica que solo se ejecuta una vez al montar

  // Componente principal que renderiza la aplicación
  return (
    <div className="App">
      <Header /> {/* Renderiza el componente Header */}
      {isLoading ? <SpinnerCarga /> : ( // Renderiza SpinnerCarga mientras isLoading es true, de lo contrario renderiza Routes
        <Routes>
          {/* Define las rutas para los componentes */}
          <Route path="/products/:productId" element={<Product producto={productos.products} indice={indice} />} />
          <Route path="/" element={<SearchPage theproducts={productos.products} variable={indice} funcion={setIndice} />} />
          <Route path="*" element={<NotFound />} /> {/* Ruta por defecto para NotFound */}
        </Routes>
      )}
    </div>
  );
}

export default App; // Exporta el componente App como componente principal de la aplicación
