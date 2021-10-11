import React from 'react';

export default function Index() {
    
    return (
        <div className="sidebar" data-color="white" data-active-color="danger">
            <div className="logo">
                <a href="/" className="simple-text logo-normal text-center">
                    <i className="nc-icon nc-bulb-63 lg"></i>&nbsp;
                    Gamefy
                </a>
            </div>
            <div className="sidebar-wrapper">
                <ul className="nav">
                    <li className={ document.location.pathname === "/" ? "active" : '' }>
                        <a href="/">
                        <i className="nc-icon nc-app"></i>
                        <p>Dashboard</p>
                        </a>
                    </li>
                    <li className={ document.location.pathname === "/actions" ? "active" : '' }>
                        <a href="/actions">
                        <i className="nc-icon nc-spaceship"></i>
                        <p>Ações</p>
                        </a>
                    </li>
                    <li className={ document.location.pathname === "/rewards" ? "active" : '' }>
                        <a href="/rewards">
                        <i className="nc-icon nc-diamond"></i>
                        <p>Recompensas</p>
                        </a>
                    </li>
                    <li className={ document.location.pathname === "/users" ? "active" : '' }> 
                        <a href="/users">
                        <i className="nc-icon nc-satisfied"></i>
                        <p>Usuários</p>
                        </a>
                    </li>
                    <li className={ document.location.pathname === "/categories" ? "active" : '' }>
                    <a href="/categories">
                    <i className="nc-icon nc-bullet-list-67"></i>
                    <p>Categorias</p>
                    </a>
                </li>
                </ul>
            </div>
        </div>
    ) 
}


