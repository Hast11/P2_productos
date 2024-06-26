import './Style/Header.css'; // Importa los estilos CSS para el componente Header

export default function Header(props) {
    return ( // Retorna un elemento único
        <div id="cabecera">
            <link href="Header.css" rel="stylesheet"></link> {/* No es necesario, ya se importaron los estilos arriba */}
            <h3 className='mensaje'>Pagina de Andres Gil Oliva</h3> {/* Utiliza CSS para centrar el texto */}
            <center><img className="logo" src="29264.png" width={50} alt="Logo"></img></center> {/* Centro de imagen */}
        </div>
    )
}
