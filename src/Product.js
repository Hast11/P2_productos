import Location from "./Location"; // Importa el componente Location
import { useParams, Link } from "react-router-dom"; // Importa los hooks useParams y Link de react-router-dom

export default function Product(props) {
    let indice = props.indice; // Obtiene el índice del producto pasado por props
    let objetos = props.producto; // Obtiene el array de productos pasado por props
    const { productId } = useParams(); // Obtiene el parámetro dinámico `productId` de la URL

    // Si no se ha pasado un índice específico por props, utiliza `productId`
    if (props.indice === -1) {
        indice = productId;
    }

    return (
        <div>
            <Location /> {/* Renderiza el componente Location */}
            <div>
                <img className="img" src={objetos[indice].images[0]} alt="Imagen del producto" /> {/* Muestra la imagen del producto */}
                <div className="nombre">
                    <h2 id="titulo" className="esp">Nombre: {objetos[indice].title}</h2> {/* Muestra el título del producto */}
                    <br></br>
                    <br />Descripción: {objetos[indice].description} {/* Muestra la descripción del producto */}
                    <br />
                    <br />Price: {objetos[indice].price} {/* Muestra el precio del producto */}
                    <br />Rating: {objetos[indice].rating} {/* Muestra la valoración del producto */}
                    <br />Stock: {objetos[indice].stock} {/* Muestra el stock del producto */}
                </div>
            </div>
            <Link to='/'> <button id="volver"> Inicio </button> </Link> {/* Botón para volver a la página de inicio */}
        </div>
    );
}
