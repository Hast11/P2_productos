import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SpinnerCarga from './SpinnerCarga';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import SearchPage from './SearchPage';

function App() {

  const [isLoading, setLoading] = useState(true)
  const [productos, setProductos] = useState(null)

  return (
    <div className="App">
      <Header />
      {(isLoading) && <SpinnerCarga />} {/* Carga SpinnerCarga mientras is loading sea true */}
      {(!isLoading) && <SearchPage theproducts={productos} />}
    </div>
  );
}

export default App;
