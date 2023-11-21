import Location from "./Location"
import { Routes, Route, Link } from "react-router-dom";
import NotFound from "./NotFound";
import { useHistory, useParams } from 'react-router-dom'

export default function Product(props){

    var indice = props.indice;
    var objetos = props.producto;
    const { productId } = useParams()
    if(props.indice === -1){
        indice = productId;
    }

return(
    <div>
        <Location/>
            <div >
                <img className="img" src={objetos[indice].images[0]} alt="Imagen del producto"/>
                <div className="nombre">
                    <h2 id="titulo" className="esp">Nombre: {objetos[indice].title}</h2>
                    <br></br>
                    <br/>Descripción: {objetos[indice].description}
                    <br/>
                    <br/>Price: {objetos[indice].price}
                    <br/>Rating: {objetos[indice].rating}
                    <br/>Stock: {objetos[indice].stock}
                </div>
            </div>   
        <Link to='/'> <button id="volver"> Inicio </button> </Link>
    </div>
    )
}