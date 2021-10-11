import React from 'react'
import Button from '../../components/Button'
import CustomForm from '../../components/CustomForm';

export default function CategoryForm(props) {
    var type = props.type
    var data = props.data

    return (
        <form>
            <div className="row">
                <CustomForm data={data} thead={props.thead} tname={props.tname} />
            </div>
            <div className="row">
                <div className="col-md-12 text-right">
                    <button type="submit" className="btn btn-success" onClick={save(type)}> <i className="fas fa-save"></i> Salvar</button>
                    <a href="/categories" className="btn btn-secondary ml-2"> <i className="fas fa-times"></i> Cancelar</a>
                </div>
            </div>
        </form>
    );
}

function save(type) { 
}
function back(){
}