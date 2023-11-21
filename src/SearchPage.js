import './Style/SearchPage.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

export default function SearchPage (props){ /* Recibe como props theproducts y */ 
    
    const [busqueda, setBusqueda] = useState(null);
    const [resultados, setResultados] = useState(props.theproducts);

    var categorias = props.theproducts.reduce((unique, item) => (unique.includes(item.category) ? unique : [...unique, item.category]),[],); 
    /*Anotar esto, es una función que sirve para guardar las categorías en un array */

    function filtrarBusqueda(){
        if (busqueda===null){ /* Si no tenemos valer que buscar, sacamos todos */
            setResultados(props.theproducts)
        }else{ /** Si tenemos algo en busqueda, el nuevo array sera compuesto por aquellos titulos que tienen el valor buscado */
            setResultados(props.theproducts.filter(word => word.title.toLowerCase().includes(busqueda.toLowerCase())));
        }
    }

    function selector(){
        var select = document.getElementById('selector'); /** Guardamos el selector en una variable para no escribir tanto */
        var value = select.options[select.selectedIndex].value; /**Guardamos el valor del selector en una variable */
        if(value !== "All"){ /**Si el selector es algo distinto de all, guardamos en resultados los productos filtrados por la categoria */
            setResultados(props.theproducts.filter(word=>(word.category===(value))));
        }
        else{ /**Si está puesto a All, no filtramos nada */
            setResultados(props.theproducts);
        }
    }

    return(
        <div id="searchPage">
            <h2 id="catálogo">catálogo</h2>

            <div id="Formulario">
                <div id="buscadorFiltro">
                    <div id="buscadorr"><b>Buscar</b>
                        <input id="filtro" placeholder="Escriba lo que quiera buscar..." onChange={e=>setBusqueda(e.target.value)}></input>
                        <div>
                            <button id="buscador" onClick={()=>filtrarBusqueda()}>Buscar</button>
                        </div>
                    </div>
                </div>

                <div className="SelectorFiltro"><b>Seleccionar</b><div/>
                    <select id="selector" defaultValue="All" onChange={selector}>
                        <option value="All" > All </option>
                        {categorias.sort().map((item, index) => /* Necesito de una vez aprender a usar map */
                        <option key={index} value={item}> {item} </option>
                        )}
                    </select>
                </div>
            </div>
            <div id="productosresultados">
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


        </div>
    )
}
