import React from 'react';

export default function Index(props) {

    return (
        <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
            <div className="container-fluid">
                <div className="navbar-wrapper">
                    <div className="navbar-toggle">
                        <button type="button" className="navbar-toggler">
                            <span className="navbar-toggler-bar bar1"></span>
                            <span className="navbar-toggler-bar bar2"></span>
                            <span className="navbar-toggler-bar bar3"></span>
                        </button>
                    </div>
                    <i className={props.icon + ' lg nc-icon'}></i>
                    <a className="navbar-brand">&nbsp; {props.title}</a>
                </div>
            </div>
        </nav>
    )
}

