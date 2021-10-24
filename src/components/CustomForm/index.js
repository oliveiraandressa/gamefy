import React from 'react'

export default function CategoryForm(props) {

    var thead = props.data.thead
    var tname = props.data.tname
    var type = props.data.type

    return(
        tname.map((item, index) => {
            let hidden = item == 'id' ? true : false
            let data = props.item!= null ? props.item : ''
            return (
                <div className={"col-sm " + (hidden ? 'hidden' : '')} >
                    <div className="form-group">
                        <label >{thead[index]}</label>
                        {renderField(item, index, props.item[item], type, props.data.tlists[index])}
                    </div>
                </div>
            );
        })
    )
}

function renderField(item, index, data, type, list){
    switch(type[index]){
        case 'input':
        return(
            <input type="text" className="form-control" autoFocus={index == 0 ? true : false} value={data} id={item} />
        )
        break
        case 'checkbox':
        return(
            <input type="checkbox" className="form-control" autoFocus={index == 0 ? true : false} value={data} id={item} />
        )
        break
        case 'select':
        return(
            <select className="form-control"  value={data} id={item}>
                {
                    list.map((item, index) => {
                        return (<option value={item}>{item}</option>)
                    })
                }

                
                {/* TODO: ver melhor forma de trazer as options */}
                {/* TODO: arrumar o add */}
            </select>
        )
        break
    }
    
    
}