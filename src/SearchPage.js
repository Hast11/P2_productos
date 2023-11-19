import App from "./App"
import './Style/SearchPage.css';

export default function SearchPage (props){
    return(
        <div id="searchPage">
            <h2 id="catalogo">Catálogo</h2>

            <div id="Centremonos">
                <div id="buscadorFiltro">
                    <div id="buscador">Buscar
                        <input id="input" placeholder="Escriba lo que quiera buscar..." ></input>
                        <div>
                            <button id="buscador">buscar</button>
                        </div>
                    </div>
                </div>

                <div id="filter">
                    <select></select>
                </div>
            </div>
        </div>
)}
