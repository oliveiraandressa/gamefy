import React from 'react';

function Head(props) {
  return (
    <thead>
        <tr>
          {props.thead.map((item, index) => {
            return (<th key={index}>{item} </th>)
          })}
        </tr>
    </thead>
  )
}

export default Head;

