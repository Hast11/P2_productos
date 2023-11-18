import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SpinnerCarga from './SpinnerCarga';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import SearchPage from './SearchPage';
import CONFIG from './config/config';
import Error from './Error';
import { mockdata } from './constants/products';

function App() {

  const [isLoading, setLoading] = useState(true)
  const [productos, setProductos] = useState(null)
  const url = CONFIG.server_url;
  const aux = true;
  const USE_SERVER = CONFIG.use_server;

  const callServer = async (param) => {
    if(USE_SERVER){
      try{
        let queryparams ="";
        queryparams = "";
        const response = await fetch(`${CONFIG.server_url}${queryparams}`);
        if (response.status===200){
          aux = true;
          const data = await response.json(); 
          setProductos(data);
        }
        else{
          const data = await response.json(); 
          setProductos(data);
          aux = false;
          <Error/>
        }
      }
      catch(error){
        <div>
          Error {setProductos({error: {description: error.message}})}
        </div>
      }
    }
    else{
      setProductos(mockdata);
    }
  }


  return (
    <div className="App">
      <Header />
      {(isLoading) && <SpinnerCarga />} {/* Carga SpinnerCarga mientras is loading sea true */}
      {(!isLoading) && <SearchPage theproducts={productos} />}
    </div>
  );
}

export default App;
