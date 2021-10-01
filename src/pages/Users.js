import React from 'react';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

export default function Users() {
    var title = "Usuários"
    var icon = "nc-satisfied"
    return (
        <div className="main-panel">
            <Navbar title={title}  icon={icon}/>
            <div className="content">
                <div className="row">
                </div>
            </div>
        </div>
    );
}