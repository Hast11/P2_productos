import Location from "./Location"
import { Routes, Route, Link } from "react-router-dom";
import NotFound from "./NotFound";
import { useHistory, useParams } from 'react-router-dom'

export default function Product(props){

    var indice = props.indice;
    var objetos = props.producto;
    //var objeto = props.producto[window.location.pathname.split('/')[2]];
    const { productId } = useParams()
    //console.log(productId)
    //console.log(props.producto);
   // console.log(objeto);
   if(props.indice === -1){
    indice = productId;
   }
   //console.log(indice)

//


    return(<div>

        <Location/>
                        <div className="pagP">
                         <img className="imA" src={objetos[indice].images[0]} alt="Imagen del producto"/>
                         <div className="nombre">
                         <h2 id="titulo" className="esp">Nombre: {objetos[indice].title}</h2>
                         <br></br>
                         <br></br>Descripción: {objetos[indice].description}
                         <br></br>
                         <br></br>Price: {objetos[indice].price}
                         <br></br>Rating: {objetos[indice].rating}
                         <br></br>Stock: {objetos[indice].stock}
                         </div>
                        </div>   

        <Link to='/'> <button id="volver"> volver </button> </Link>
    </div>

    )
}