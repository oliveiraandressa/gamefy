import React from 'react';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import StatusCard from '../components/StatusCard'

export default function Home() {
    var title = "Dashboard"
    var icon = "nc-app"
    return (
        <div className="main-panel">
            <Navbar title={title} icon={icon}/>
            <div className="content">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <StatusCard type='warning' icon="nc-vector" title="Testes" subtitle="Texto 1" value="24" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <StatusCard type='danger' icon="nc-vector" title="Errors" subtitle="Texto 2" value="+500" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <StatusCard type='success' icon="nc-vector" title="Coisas" subtitle="Texto 3" value="24" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <StatusCard type='primary' icon="nc-favourite-28" title="Followers" subtitle="Update now" value="+45K" />
                    </div>
                </div>
            </div>
        </div>
    );
}