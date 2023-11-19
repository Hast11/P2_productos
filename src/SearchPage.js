import App from "./App"
import './Style/SearchPage.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function SearchPage (props){ /* Recibe como props theproducts y */ 
    return(
        <div id="searchPage">
            <h2 id="catalogo">Catálogo</h2>

            <div id="Formulario">
                <div id="buscadorFiltro">
                    <div id="buscador"><b>Buscar</b>
                        <input id="input" placeholder="Escriba lo que quiera buscar..." ></input>
                        <div>
                            <button id="buscador">Buscar</button>
                        </div>
                    </div>
                </div>

                <div id="filter"><b>Filtrar</b>
                    <div><select id="selector"></select></div>
                </div>
            </div>

            <div id="“productosresultados”">
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
            </div>


        </div>
)}
