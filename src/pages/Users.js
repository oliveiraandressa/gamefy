import React from 'react';
import Navbar from '../components/Navbar'
import CrudTable from '../components/CrudTable/CrudTable'

export default function Users() {
    var title = "Usuários"
    var icon = "nc-satisfied"
    var usuarios = {
        thead: ['Id', 'Nome'],
        tname: ['id', 'name'],
        type:['input', 'input'],
        tlists: [[],[]],
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
                                    <CrudTable data={usuarios} name="Usuário" plural="Usuários" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}