import React from 'react';

export default function Index(props) {    
    return (
        <div className="card card-stats">
            <div className="card-body ">
                <div className="row">
                    <div className="col-5 col-md-4">
                        <div className="icon-big text-center icon-warning">
                            <i className={"nc-icon " + props.icon + " text-"+ props.type}></i>
                        </div>
                    </div>
                    <div className="col-7 col-md-8">
                        <div className="numbers">
                            <p className="card-category">{props.title}</p>
                            <p className="card-title">{props.value}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer ">
                <hr/>
                <div className="stats">
                    {props.subtitle}
                </div>
            </div>
        </div>        
    ) 
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


