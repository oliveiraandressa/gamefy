import React from 'react';
import { useLocation } from 'react-router-dom'

export default function Index(props) {    
    return (
        <div className="card-header">
            <h5 className="card-title">{props.title}</h5>
        </div>
    ) 
}




