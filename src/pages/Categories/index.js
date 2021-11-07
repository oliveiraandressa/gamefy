import React, {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar'
import CrudTable from '../../components/CrudTable/CrudTable'


export default function Index() {
    const axios = require('axios');
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    var title = "Categorias"
    var icon = "nc-bullet-list-67"
    var url = "http://localhost:3001/categories"
    var categorias = {
        thead: ['Id', 'Nome'],
        tname: ['id', 'name'],
        type:['input', 'input'],
        tlists: [[],[]],
        tdata: items
    }

    useEffect(() => {
        if(!isLoaded){
            axios.get(url)
            .then(function (response) {
                // handle success
                setItems(response.data)
                setIsLoaded(true)
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
        }
    })

    return (
        <div className="main-panel">
            <Navbar title={title} icon={icon}/>
            <div className="content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                    <CrudTable data={categorias} name="Categoria" plural="Categorias" url={url} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

