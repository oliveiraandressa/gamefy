import React from 'react';

function Content(props) {
  if( props.data.tname != null) {
    return(
      props.data.tname.map((item, index) => {
        return (
          <td>{props.linedata[item]}</td>
        )
      })
    )
  }
  return null
}

export default Content;

