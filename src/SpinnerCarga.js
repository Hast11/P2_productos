import Spinner from 'react-bootstrap/Spinner';
import './SpinnerCarga.css'

function SpinnerCarga() {
  return (
    <div className='Spinner'>
      <link href="SpinnerCarga.css" rel="stylesheet"></link>
      <Spinner animation="border" variant="primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default SpinnerCarga;