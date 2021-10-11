import React from 'react'

export default function CategoryForm(props) {

    var thead = props.thead
    var tname = props.tname

    return(
        tname.map((item, index) => {
            let hidden = item == 'id' ? true : false
            let data = props.data != null ? props.data[item] : ''
            return (
                <div className={"col-sm " + (hidden ? 'hidden' : '')} >
                    <div className="form-group">
                        <label >{thead[index]}</label>
                        <input type="text" className="form-control" autoFocus={index == 0 ? true : false} value={data} id={item} hidden={hidden}/>
                    </div>
                </div>
            );
        })
    )
}