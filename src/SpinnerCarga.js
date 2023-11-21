import Spinner from 'react-bootstrap/Spinner';
import './Style/SpinnerCarga.css'

const spinnerWrapperEl = document.querySelector('.Spinner');

function SpinnerCarga() {
  return (
    <div className='Spin'>
      <Spinner  id="loading" className="spinner" as="span" animation="border" size="big" variant="light" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default SpinnerCarga;