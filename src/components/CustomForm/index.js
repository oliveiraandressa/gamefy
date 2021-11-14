import React, {useEffect} from 'react'

export default function CustomForm(props) {

        return(
            props.data.tname.map((item, index) => {
                let hidden = false
                if(item == 'id'){
                    hidden = true
                }

                return (
                    <div className={"col-sm " + (hidden ? 'hidden' : '')} >
                        <div className="form-group" key={index}>
                            <label >{props.data.thead[index]}</label>
                            {renderField(item, index, props.item[item], props.data.type, props.data.tlists[index])}
                        </div>
                    </div>
                );
            })
        )
    
}

function renderField(item, index, data, type, list){
    if(data == null){
        data = ''
    }
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
            <select className="custom-select"  value={data} id={item}>
                {
                    list.map((item, index) => {
                        return (<option value={item}>{item}</option>)
                    })
                }
            </select>
        )
        break
    }
    
    
}