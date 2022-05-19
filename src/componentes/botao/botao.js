import { useState } from 'react';
import './botao.css';

export default function Botao(props) {
    return ( 
        <button onClick={()=> alert('dados enviados')} >{props.texto}</button> 
    );   
}
