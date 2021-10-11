import React from 'react';
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import CardHeader from '../../components/CardHeader'
import { useLocation } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import CategoryForm from './CategoryForm';

export default function Category(props) {
    var title = "Categorias"
    var icon = "nc-bullet-list-67"

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }
    

    return (
        <div className="main-panel">
            <Navbar title={title} icon={icon}/>
            <div className="content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <CardHeader title="Incluir Categoria"/>
                            <div className="card-body pb-2">
                                <CategoryForm type='new' data='' thead={props.thead} tname={props.tname} />
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function save() { 
   // alert(window.location.pathname)
}
function back(){
    //window.location.href = "/categories/"
    //window.location.replace("/categories/")
   // this.props.history.push('/')
    this.props.history.goBack();
   //this.props.history.goBack()
    alert("oi")
}