import React from 'react';
import Content from './Content';
import Actions from './Actions';

function Body(props) {
  return (
    <tbody>
      {props.tdata.map((item, index) => {
        return ( 
        <tr>              
          <Content linedata={item} tname={props.tname} />
          <Actions data={item} thead={props.thead} tname={props.tname} name={props.name} />
        </tr>
      )
    })}
  </tbody>
  )
}

export default Body;

