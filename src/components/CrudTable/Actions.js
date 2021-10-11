import React, { useState } from 'react';
import {Modal} from 'react-bootstrap'
import EditModal from '../Modal/Edit'
import DeleteModal from '../Modal/Delete'

function Actions(props) {
  const [modalShow, setModalShow] = useState(false);
  const [modalDeleteShow, setModalDeleteShow] = useState(false);

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
              <a href="#" className="btn btn-danger btn-xs ml-1" onClick={() => setModalDeleteShow(true)}>
                  <i className="fas fa-times"></i>
              </a>
        </td>
        <EditModal show={modalShow} onHide={() => setModalShow(false)} data={props.data} thead={thead} tname={tname} name={name}/>
        <DeleteModal show={modalDeleteShow} onHide={() => setModalDeleteShow(false)} data={props.data} thead={thead} tname={tname} name={name}/>
      </>
    )
  }
  else{ 
    return null
  }
}

export default Actions;


