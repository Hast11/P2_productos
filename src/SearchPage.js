import './Style/SearchPage.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import CardGroup from 'react-bootstrap/CardGroup';

export default function SearchPage (props){ /* Recibe como props theproducts y */ 
    
const [busqueda, setBusqueda] = useState(null);
const [resultados, setResultados] = useState(props.theproducts);

var categorias = props.theproducts.reduce((unique, item) => (unique.includes(item.category) ? unique : [...unique, item.category]),[],); 
/*Anotar esto, es una función que sirve para guardar las categorías en un array */

function filtrarBusqueda(){
    if (busqueda===null){
        setResultados(props.theproducts)
    }else{
        setResultados(props.theproducts.filter(word => word.title.toLowerCase().includes(filtro.toLowerCase())));
    }
}

function selector(){
    var select = document.getElementById('selector');
    var value = select.options[select.selevtedIndex].value;
    if(value !== "All"){
        setResultados(props.theproducts.filter(word=>(word.category===(value))));
    }
    else{
        setResultados(props.theproducts);
    }
}

return(
    <div id="searchPage">
        <h2 id="catalogo">Catálogo</h2>

        <div id="Formulario">
            <div id="buscadorFiltro">
                <div id="buscador"><b>Buscar</b>
                    <input id="inputBusqueda" placeholder="Escriba lo que quiera buscar..." onChange={(e)=>setBusqueda(e.target.value)}></input>
                    <div>
                        <button id="buscador" onClick={filtrarBusqueda()}>Buscar</button>
                    </div>
                </div>
            </div>

            <div className='sel'><b>Seleccionar</b>
                <select id="selector" defaultValue="All" onChange={()=>selector()}>
                    <option value="All" > All </option>
                    {categorias.sort().map((item, index) => 
                    <option key={index} value={item}> {item} </option>
                    )}
                </select>
            </div>
        </div>
        <ul>
            <CardGroup>{resultados.map((item, index) =>
                <li key={index} className="unproducto">
                    <Card style={{ width: '18rem '}} bg="secondary" text="light" border="dark">
                        <Card.Img  variant="top" src={item.thumbnail}/>
                            <Card.Body>
                                <Card.Title className="text1">{item.title}</Card.Title>
                                <Card.Text className="text">{item.description}</Card.Text>
                                <Link to={'/products/'+ index }> <Button variant="primary" onClick={()=>props.funcion(item.id-1)}> VER </Button> </Link>
                            </Card.Body>
                    </Card>
                </li>)}
            </CardGroup>
        </ul>


    </div>
)
}
