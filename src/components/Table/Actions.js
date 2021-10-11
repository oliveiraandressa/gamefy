import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap'
import CategoryForm from '../../pages/Categories/CategoryForm';
import EditModal from '../Modal/edit'

function Actions(props) {
  const [modalShow, setModalShow] = useState(false);

  var thead = props.thead
  var tname = props.tname
  var name = props.name

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
        <EditModal show={modalShow} onHide={() => setModalShow(false)} data={props.data} thead={thead} tname={tname} name={name}/>
      </>
    )
  }
  else{ 
    return null
  }
}

export default Actions;


