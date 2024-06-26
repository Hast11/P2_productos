import { useParams, useLocation } from "react-router-dom"; // Importa los hooks useParams y useLocation de react-router-dom

export default function Location(props) {
  let { productId } = useParams(); // Obtiene el parámetro dinámico `productId` de la URL
  const location = useLocation(); // Obtiene el objeto `location` actual de la ruta

  return (
    <div>
      <div id="divlocation">Location es: {location.pathname}</div> {/* Muestra la ruta actual */}
      {productId && <div id="divproductid">ProductId es: {productId}</div>} {/* Muestra productId si está definido */}
    </div>
  );
}
