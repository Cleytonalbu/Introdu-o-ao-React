import { useState } from 'react';
import './botao.css';

export default function Botao(props) {
    return ( 
        <button onClick={props.msg} >{props.texto}</button> 
    );   
}
