import React from 'react';
import Form from 'react-bootstrap/Form'

export default function List(props) {
  var chars = props.chars;
  console.log(chars)
  if (chars != null && chars.length !== 0) {
    
    return(
      chars.map((item, index) => {
        return(
        <tr key={item.id}>
          <td>{item.name_singular_fem}</td>
          <td>
            <Form.Check 
              type="switch"
              id={"oposite-" + item.id}
            />
          </td>
          <td>
          <Form.Check 
              type="switch"
              id={"synonym-" + item.id}
            />
          </td>

          <td>
            <Form.Check 
              type="radio"
              id={"positive-" + item.id} name={"status-" + item.id}
            />
          </td>
          <td>
            <Form.Check 
              type="radio"
              id={"negative-" + item.id} name={"status-" + item.id}
            />
            </td>
          <td>
            <Form.Check 
              type="radio" checked
              id={"neutral-" + item.id} name={"status-" + item.id}
            />
          </td>
        </tr>
        )
      })
    )
  }
  else{
    return null
  }
}