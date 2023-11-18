export default function Error(props){
    return <div id="error">
        <h1> Error en la aplicación</h1>
        Descripción: Obtenido error al llamar al API, Código: {props.error.cod}
        <br/> <br/>
        Mensaje del servidor: {props.error.message}
    </div>
}