import './CaixaTexto.css';

function CaixaTexto(props){
    return(
        <div className='Input'>
        <input placeholder={props.placeholder} type={props.type}></input>
        </div>
    )
}
export default CaixaTexto;