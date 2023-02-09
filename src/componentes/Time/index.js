import Colaborador from '../Colaborador'
import './Time.css'

const Time = props => {
    const bgColor = { backgroundColor: props.corSecundaria }

    return (
        // <section className='time' style={{ backgroundColor: props.corSecundaria }} >
        // <section className='time' style={bgColor} >
        props.colaboradores.length > 0 && <section className='time' style={bgColor} >
            <h3 style={{ borderColor: props.corPrimaria }} >{props.titulo}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador =>
                    <Colaborador
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                    />
                )}
            </div>
        </section>
    )
}

export default Time 