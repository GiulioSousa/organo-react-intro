import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    // console.log(props.itens);
    
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select 
                onChange={event => 
                    props.aoAlterado(event.target.value)}
                required={props.obrigatorio}
                value={props.valor}
            >
                {/* {props.itens.map(item => {
                    return <option>{item}</option>
                })} */} {/* Forma convencional para escrever a função */}

                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa
