import React, { useState } from 'react';
import {Modal} from 'react-bootstrap'
import EditModal from '../Modal/Edit'
import DeleteModal from '../Modal/Delete'

function Actions(props) {
  const [modalShow, setModalShow] = useState(false);
  const [modalDeleteShow, setModalDeleteShow] = useState(false);

  var thead = props.data.thead
  var tname = props.data.tname
  var name = props.data.name

  //index
  if(props.item != null) {
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
        <EditModal show={modalShow} onHide={() => setModalShow(false)} data={props.data} item={props.item} name={name}/>
        <DeleteModal show={modalDeleteShow} onHide={() => setModalDeleteShow(false)} data={props.data} item={props.item} name={name}/>
      </>
    )
  }
  else{ 
    return null
  }
}

export default Actions;


