import './CampoTexto.css'

const CampoTexto = (props) => {

    // let valor = 'Giulio Sousa'

    // const [valor, setValor] = useState('Giulio Sousa')

    const aoDigitado = (event) => {
        // setValor(event.target.value)
        // console.log(valor)
        props.aoAlterado(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            {/* <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/> */}
            <input 
                value={props.valor} 
                onChange={aoDigitado} 
                required={props.obrigatorio} 
                placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto