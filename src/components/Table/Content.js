import React from 'react';

function Content(props) {
  if( props.tname != null) {
    return(
      props.tname.map((item, index) => {
        return (
          <td>{props.linedata[item]}</td>
        )
      })
    )
  }
  return null
}

export default Content;

