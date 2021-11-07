import React from 'react';
import Content from './Content';
import Actions from './Actions';

function Body(props) {
  return (
    <tbody>
      {props.data.tdata.map((item, index) => {
        return ( 
        <tr>              
          <Content linedata={item} data={props.data} />
          <Actions item={item} data={props.data}  name={props.name} url={props.url} />
        </tr>
      )
    })}
  </tbody>
  )
}

export default Body;

