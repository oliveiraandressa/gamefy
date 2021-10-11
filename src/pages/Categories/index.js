import React from 'react';
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import CardHeader from '../../components/CardHeader'
import Table from '../../components/Table/Table'

export default function Index() {
    var title = "Categorias"
    var icon = "nc-bullet-list-67"
    var teste = {
        thead: ['Id', 'Nome'],
        tname: ['id', 'name'],
        tdata: [
            {id: '1', name:'João'},
            {id: '2', name:'José'},
            {id: '3', name:'Maria'},
            {id: '4', name:'Ana'},
            {id: '5', name:'Pedro'},
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
                                    <Table data={teste} add={true} name="Categoria" plural="Categorias" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
