import logo from './logo.svg';
import './Style/App.css';
import Header from './Header';
import SpinnerCarga from './SpinnerCarga';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import SearchPage from './SearchPage';
import CONFIG from './config/config';
import Error from './Error';
import { mockdata } from './constants/products';
import { Routes, Route} from "react-router-dom";
import NotFound from './NotFound';
import Product from './Product';



function App() {

  const [isLoading, setLoading] = useState(true)
  const [productos, setProductos] = useState(null)
  const [indice, setIndice] = useState(-1);
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

  useEffect(() => {
    async function fetchData() {
      await callServer();
        
      setTimeout(()=>{
        setLoading(false);
      },500);		
    }

    fetchData();
  }, []);


  return (
    <div className="App">
      <Header />
      {isLoading ? <SpinnerCarga/> : <Routes>
				<Route path="/products/:productId" element={<Product producto={productos.products} indice={indice}/>}/>
				<Route path="/" element={<SearchPage theproducts={productos.products} variable={indice} funcion={setIndice}/>}/>
				<Route path="*" element={<NotFound />} />
				</Routes>
        }
    </div>
  );
}

export default App;
