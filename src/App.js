import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SpinnerCarga from './SpinnerCarga';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';

function App() {

  const [isLoading, setLoading] = useState(true)

  return (
    <div className="App">
      <Header />
      {(isLoading) && <SpinnerCarga />} {/* Carga SpinnerCarga mientras is loading sea true */}
    </div>
  );
}

export default App;
