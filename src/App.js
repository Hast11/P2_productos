import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SpinnerCarga from './SpinnerCarga';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SpinnerCarga />
    </div>
  );
}

export default App;
