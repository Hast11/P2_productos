import { Link } from "react-router-dom";

export default function NotFound(props){
    return(<div>
        <h2 id="info">Ruta no encontrada</h2>
        <Link to='/'> <button id="volver"> Inicio </button> </Link>
    </div>

    );
}