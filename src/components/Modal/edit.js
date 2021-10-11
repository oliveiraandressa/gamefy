import React, {useState} from 'react';
import {Modal} from 'react-bootstrap'
import CustomForm from '../CustomForm';

export default function EditModal(props) {
    const [modalShow, setModalShow] = useState(false);
    const handleClose = () => setModalShow(false);

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Editar {props.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="row">
                        <CustomForm data={props.data} thead={props.thead} tname={props.tname} />
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-right">
                            <button type="submit" className="btn btn-success" onClick={handleClose}> <i className="fas fa-save"></i> Salvar</button>
                            <a href="#" className="btn btn-secondary ml-2"> <i className="fas fa-times"></i> Cancelar</a>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
}

function save(type) { 
}

function back(){
}