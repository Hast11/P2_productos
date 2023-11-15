import './Header.css'
export default function Header (props){
    return( //Todos los components tienen que tener un return que devuelva un elemento unico
        <div id="cabecera">
            <link href="Header.css" rel="stylesheet"></link>
            <h3 className='mensaje'>Pagina de Andres Gil Oliva</h3> {/* CSS para centrarlo */}
            <center><img className="logo" src="29264.png" width={50} alt="Logo"></img></center>
        </div>
    )
}