import React from 'react';
import Navbar from '../components/Navbar'
import CrudTable from '../components/CrudTable/CrudTable'

export default function Rewards() {
    var title = "Recompensas"
    var icon = "nc-diamond"
    var recompensas = {
        thead: ['Id', 'Nome', 'Preço'],
        tname: ['id', 'name', 'price'],
        tdata: [
            {id: '1', name:'Sessão de filme', price:'5'},
            {id: '2', name:'Passeio no parque', price:'20'},
            {id: '3', name:'Massagem simples', price:'20'},
            {id: '4', name:'Massagem completa', price:'30'},
            {id: '5', name:'Vale ifood', price:'50'},
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
                                    <CrudTable data={recompensas} name="Recompensa" plural="Recompensas" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}