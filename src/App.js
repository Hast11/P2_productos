import logo from './logo.svg';
import './Style/App.css';
import Header from './Header';
import SpinnerCarga from './SpinnerCarga';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import SearchPage from './SearchPage';
import CONFIG from './config/config';
import Error from './Error';
import { mockdata } from './constants/products';
import { Routes, Route} from "react-router-dom";



function App() {

  const [isLoading, setLoading] = useState(true)
  const [productos, setProductos] = useState(null)
  const url = CONFIG.server_url; /* "https://dummyjson.com/products" */
  var aux = true;
  const USE_SERVER = CONFIG.use_server;

  const callServer = async ()=>{
    if(USE_SERVER){
      let data;
      try{
        const resp = await fetch(url);
        data = await resp.json();
      }catch(e){
        alert("No se han podido recuperar los productos");
      }
      setProductos(data);
    }else{
      setProductos(mockdata);
    }
  }


  return (
    <div className="App">
      <Header />
      {(!isLoading) && <SpinnerCarga />} {/* Carga SpinnerCarga mientras is loading sea true */}
      {(isLoading && aux) && <SearchPage theproducts={productos} />} {/* La prop theproducts es del enunciado*/}
      {!aux && <Error error={productos}/>}
    </div>
  );
}

export default App;
