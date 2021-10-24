import React, {useState} from 'react';
import {Modal} from 'react-bootstrap'

export default function DeleteModal(props) {
    const [modalDeleteShow, setModalDeleteShow] = useState(false);
    const handleDeleteClose = () => setModalDeleteShow(false);

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Deseja mesmo deletar esse item?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="row">
                        <div className="col-sm">
                            {props.data.tname.map((item, index) => {
                                return (
                                <div className="col-sm"><strong>{props.data.thead[index]}:</strong> {props.data[item]}
                                    <br/>
                                </div> 
                                )
                            })}
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-right">
                            <button type="submit" className="btn btn-danger" onClick={handleDeleteClose}> <i className="fas fa-trash"></i> Deletar</button>
                            <a href="#" className="btn btn-secondary ml-2"> <i className="fas fa-times"></i> Cancelar</a>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
}