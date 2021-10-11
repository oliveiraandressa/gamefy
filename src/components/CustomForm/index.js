import React from 'react'

export default function CategoryForm(props) {

    var thead = props.thead
    var tname = props.tname
    var type = props.type

    return(
        props.tname.map((item, index) => {
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

function save(type) { 
    //alert(type)
}
function back(){
    //window.location.href = "/categories/"
    //window.location.replace("/categories/")
   // this.props.history.push('/')
    this.props.history.goBack();
   //this.props.history.goBack()
    alert("oi")
}