import React from 'react';
import {Modal} from 'react-bootstrap'
import CategoryForm from '../../pages/Categories/CategoryForm';

export default function AddModal(props) {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Incluir {props.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CategoryForm type="add" data={props.data} thead={props.thead} tname={props.tname}/>
            </Modal.Body>
        </Modal>
    );
}