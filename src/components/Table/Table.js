import React, {useState} from 'react';
import AddModal from '../Modal/add'
import Head from './Head';
import Body from './Body';

function Table(props) {

  const [modalShow, setModalShow] = useState(false);

  var jsonData = props.data
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
            <Head thead={jsonData.thead} />
            <Body tdata={jsonData.tdata} thead={jsonData.thead} tname={jsonData.tname} name={name} />
          </table>
        </div>

        <AddModal
          show={modalShow} onHide={() => setModalShow(false)}
          data='' thead={jsonData.thead} tname={jsonData.tname} name={name} plural={plural} />
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