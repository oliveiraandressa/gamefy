import React from 'react'

export default function CustomAddForm(props) {

        var thead = props.data.thead
        var tname = props.data.tname
        var type = props.data.type
        var tlists = props.data.tlists

        return(
            tname.map((item, index) => {
                let hidden = false
                if(item == 'id'){
                    hidden = true
                }
    
                return (
                    <div className={"col-sm " + (hidden ? 'hidden' : '')} >
                        <div className="form-group" key={index}>
                            <label >{thead[index]}</label>
                            {renderField(item, index, type, tlists[index])}
                        </div>
                    </div>
                );
            })
        )
        
}

function renderField(item, index, type, list){
    switch(type[index]){
        case 'input':
        return(
            <input type="text" className="form-control" autoFocus={index == 0 ? true : false} value="" id={item} />
        )
        break
        case 'checkbox':
        return(
            <input type="checkbox" className="form-control" autoFocus={index == 0 ? true : false} value="" id={item} />
        )
        break
        case 'select':
        return(
            <select className="custom-select" value="" id={item}>
                {
                    list.map((item, index) => {
                        return (<option value={item +"-"+index}>{item}</option>)
                    })
                }
            </select>
        )
        break
    }
    
    
}