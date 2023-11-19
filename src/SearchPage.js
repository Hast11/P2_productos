import App from "./App"
import './Style/SearchPage.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";

export default function SearchPage (props){ /* Recibe como props theproducts y */ 
    
const [busqueda, setBusqueda] = useState(null);
const datos = props.theproducts;
const [resultados, setResultados] = useState(props.theproducts);

function filtrarBusqueda(query) {
    setResultados(datos.filter((el) => el.title.toLowerCase().includes(query.toLowerCase()) /* | el.description.toLowerCase().includes(query.toLowerCase()) */)) ;
  }

return(
        <div id="searchPage">
            <h2 id="catalogo">Catálogo</h2>

            <div id="Formulario">
                <div id="buscadorFiltro">
                    <div id="buscador"><b>Buscar</b>
                        <input id="inputBusqueda" placeholder="Escriba lo que quiera buscar..." value={busqueda} onChange={(e)=>setBusqueda(e.target.value)}></input>
                        <div>
                            <button id="buscador" onClick={filtrarBusqueda(busqueda)}>Buscar</button>
                        </div>
                    </div>
                </div>

                <div id="filter"><b>Filtrar</b>
                    <div><select id="selector"></select></div>
                </div>
            </div>

            {/* <div id="“productosresultados”">
                {props.theproducts.map((product,index) => {
                    <Card style={{ width: '18rem' }} className="unproducto" key={index}>
                    <Card.Img variant="top" src={product.images[0]} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <Button variant="primary">VER</Button>
                    </Card.Body>
                    </Card>
                }
                )}
            </div> */}


        </div>
)}
