import React from 'react';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

export default function Rewards() {
    var title = "Recompensas"
    var icon = "nc-diamond"
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