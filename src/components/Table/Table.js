import React, {useState} from 'react';
import Content from './Content';
import Actions from './Actions';
import AddModal from '../Modal/add'

function Table(props) {

  const [modalShow, setModalShow] = useState(false);

  var jsonData = props.data
  var tname = jsonData.tname
  var thead = jsonData.thead
  var name = props.name
  var plural = props.plural
  
  if(jsonData.tdata.length != 0) {
    return (
      <div className="row">
        <div className="col-sm-6">
          <h5>{plural}</h5>
        </div>
        <div className="col-sm-6 text-right">
          <a href="#" className="btn btn-success" onClick={() => setModalShow(true)}>
              <i className="fas fa-plus"></i>
          </a>
        </div>
        <div className="col-sm-12">
          <table className="table table-hover table-striped">
            <thead>
                <tr>
                  {jsonData.thead.map((item, index) => {
                    return (
                      <th>{item} </th>
                    )
                  })}
                </tr>
            </thead>

            <tbody>
                {jsonData.tdata.map((item, index) => {
                  return ( 
                  <tr>              
                    <Content linedata={item} tname={tname} />
                    <Actions data={item} thead={thead} tname={tname} />
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <AddModal
          show={modalShow} onHide={() => setModalShow(false)}
          data='' thead={thead} tname={tname} name={name} plural={plural} />
      </div>);
  }
  else{
    return (
        <p className="">
          Não existem dados para exibição
        </p>
    );
  }
}

export default Table;




