import React from 'react';
import Navbar from '../components/Navbar'
import CrudTable from '../components/CrudTable/CrudTable'

export default function Actions() {
    var title = "Ações"
    var icon = "nc-spaceship"
    var acoes = {
        thead: ['Id', 'Nome'],
        tname: ['id', 'name'],
        tdata: [
            {id: '1', name:'Lavar a louça', category:'Tarefas Domésticas', points:'5'},
            {id: '2', name:'Descumprir um combinado', category:'Comportamento Negativo', points:'-25'},
            {id: '3', name:'Propor melhoria', category:'Iniciativas', points:'5'},
            {id: '4', name:'Por o lixo', category:'Tarefas Domésticas', points:'5'},
        ]
    }

    return (
        <div className="main-panel">
            <Navbar title={title} icon={icon}/>
            <div className="content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                    <CrudTable data={acoes} name="Ação" plural="Ações" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}