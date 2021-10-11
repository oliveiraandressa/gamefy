import React from 'react';
import { useLocation } from 'react-router-dom'

export default function Index(props) {    
    if(props.type == 'new'){
        return (
        <button className="btn btn-success"> <i className="fas fa-plus"></i> Incluir</button>  
        )
    }
    else return null
}

/**
 * Documentação Status Card
 * type: cor do ícone do card
 *      Ex: ['danger', 'warning', 'info', 'success', 'primary']
 * icon: ícone da biblioteca nc 
 *      Ex: "nc-vector" 
 * title: Título principal
 *      Ex: "Errors" 
 * subtitle: Subtitulo
 *      Ex: "Texto 2" 
 * value: Dado a ser mostrado
 *      Ex: "+500" 
 */


