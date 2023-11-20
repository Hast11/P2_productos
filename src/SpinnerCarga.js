import Spinner from 'react-bootstrap/Spinner';
import './Style/SpinnerCarga.css'

const spinnerWrapperEl = document.querySelector('.Spinner');

function SpinnerCarga() {
  return (
    <div className='Spinner'>
      <Spinner animation="border" variant="primary" role="status" id="loading" className='Spinner'>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default SpinnerCarga;