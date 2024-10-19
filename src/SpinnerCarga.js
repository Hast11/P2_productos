import Spinner from 'react-bootstrap/Spinner'; // Importa el componente Spinner de React Bootstrap
import './Style/SpinnerCarga.css'; // Importa los estilos CSS específicos para SpinnerCarga

function SpinnerCarga() {
  return (
    <div className='Spin'> {/* Contenedor principal del spinner */}
      <Spinner id="loading" className="spinner" as="span" animation="border" size="big" variant="light" role="status">
        <span className="visually-hidden">Loading...</span> {/* Texto accesible para lectores de pantalla */}
      </Spinner>
    </div>
  );
}

export default SpinnerCarga;
