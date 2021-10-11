import React from 'react'
import Navbar from '../../components/Navbar'
import CrudTable from '../../components/CrudTable/CrudTable'

export default function Index() {
    var title = "Categorias"
    var icon = "nc-bullet-list-67"
    var categorias = {
        thead: ['Id', 'Nome'],
        tname: ['id', 'name'],
        tdata: [
            {id: '1', name:'Geral'},
            {id: '2', name:'Comportamento Positivo'},
            {id: '3', name:'Comportamento Negativo'},
            {id: '4', name:'Convivência'},
            {id: '5', name:'Melhorias'},
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
                                    <CrudTable data={categorias} name="Categoria" plural="Categorias" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
