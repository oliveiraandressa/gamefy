import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap'
import CategoryForm from '../../pages/Categories/CategoryForm';

function Actions(props) {
  const [modalShow, setModalShow] = useState(false);

  //url={url} thead={thead} tname={tname}
  var thead = props.thead
  var tname = props.tname

  //index
  if(props.data != null) {
    return (
      <>
      <td className="td-actions text-right">
            <a href="#" className="btn btn-success btn-xs" onClick={() => setModalShow(true)}>
                <i className="fas fa-pen"></i>
            </a>
            <a href={`${props.url}delete/${props.data.id}`} className="btn btn-danger btn-xs ml-1">
                <i className="fas fa-times"></i>
            </a>
      </td>
      <EditModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={props.data}
        thead={thead}
        tname={tname}
      />
      </>
          )
        }
  else{ 
    return null
  }
}

export default Actions;

function EditModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Editar Categoria
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CategoryForm type="edit" data={props.data} thead={props.thead} tname={props.tname}/>
      </Modal.Body>
    </Modal>
  );
}

