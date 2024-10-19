import './Style/SearchPage.css'; // Importa los estilos CSS específicos para SearchPage
import Button from 'react-bootstrap/Button'; // Importa el componente Button de React Bootstrap
import Card from 'react-bootstrap/Card'; // Importa el componente Card de React Bootstrap
import { useState } from "react"; // Importa el hook useState de React
import CardGroup from 'react-bootstrap/CardGroup'; // Importa el componente CardGroup de React Bootstrap
import { Link } from 'react-router-dom'; // Importa el componente Link de react-router-dom

export default function SearchPage(props) {
    // Estado para almacenar la búsqueda del usuario
    const [busqueda, setBusqueda] = useState(null);
    // Estado para almacenar los productos que se mostrarán según la búsqueda y selección de categoría
    const [resultados, setResultados] = useState(props.theproducts);

    // Obtener todas las categorías únicas de los productos usando reduce
    var categorias = props.theproducts.reduce((unique, item) => (
        unique.includes(item.category) ? unique : [...unique, item.category]
    ), []);

    // Función para filtrar productos según la búsqueda del usuario
    function filtrarBusqueda() {
        if (busqueda === null) {
            // Si la búsqueda es null, mostrar todos los productos originales
            setResultados(props.theproducts);
        } else {
            // Filtrar productos cuyo título incluya la cadena de búsqueda, ignorando mayúsculas
            setResultados(props.theproducts.filter(word =>
                word.title.toLowerCase().includes(busqueda.toLowerCase())
            ));
        }
    }

    // Función para filtrar productos por la categoría seleccionada
    function selector() {
        var select = document.getElementById('selector'); // Obtener el elemento select por su id
        var value = select.options[select.selectedIndex].value; // Obtener el valor seleccionado del select

        if (value !== "All") {
            // Si la categoría seleccionada no es "All", filtrar productos por esa categoría
            setResultados(props.theproducts.filter(word =>
                word.category === value
            ));
        } else {
            // Si la categoría seleccionada es "All", mostrar todos los productos originales
            setResultados(props.theproducts);
        }
    }

    return (
        <div id="searchPage">
            <h2 id="catálogo">Catálogo</h2>

            {/* Formulario de búsqueda y filtro */}
            <div id="Formulario">
                {/* Sección para búsqueda */}
                <div id="buscadorFiltro">
                    <div id="buscadorr"><b>Buscar</b>
                        {/* Campo de entrada para la búsqueda */}
                        <input id="filtro" placeholder="Escriba lo que quiera buscar..." onChange={e => setBusqueda(e.target.value)}></input>
                        <div>
                            {/* Botón para activar la función de filtrar búsqueda */}
                            <button id="buscador" onClick={() => filtrarBusqueda()}>Buscar</button>
                        </div>
                    </div>
                </div>

                {/* Sección para selección de categoría */}
                <div className="SelectorFiltro"><b>Seleccionar</b><div />
                    {/* Select para elegir la categoría */}
                    <select id="selector" defaultValue="All" onChange={selector}>
                        {/* Opción para mostrar todos los productos */}
                        <option value="All" > All </option>
                        {/* Mapeo de categorías para generar opciones en el select */}
                        {categorias.sort().map((item, index) =>
                            <option key={index} value={item}> {item} </option>
                        )}
                    </select>
                </div>
            </div>

            {/* Resultados de la búsqueda */}
            <div id="productosresultados">
                <ul>
                    {/* Mapeo de productos filtrados para mostrar cada uno como un Card */}
                    <CardGroup>{resultados.map((item, index) =>
                        <li key={index} className="unproducto">
                            {/* Card de React Bootstrap para mostrar cada producto */}
                            <Card style={{ width: '18rem ' }} bg="secondary" text="light" border="dark">
                                <Card.Img variant="top" src={item.thumbnail} /> {/* Imagen del producto */}
                                <Card.Body>
                                    <Card.Title className="text1">{item.title}</Card.Title> {/* Título del producto */}
                                    <Card.Text className="text">{item.description}</Card.Text> {/* Descripción del producto */}
                                    {/* Botón para ver más detalles del producto, enlazando al detalle del producto */}
                                    <Link to={'/products/' + index}>
                                        <Button variant="primary" onClick={() => props.funcion(item.id - 1)}> VER </Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </li>
                    )}
                    </CardGroup>
                </ul>
            </div>
        </div>
    );
}
