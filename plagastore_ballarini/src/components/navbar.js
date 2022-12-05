import React from 'react';
import CartWidget from './CartWidget';
import Logo from '../assets/logoblanco.jpeg';
import {Link} from 'react-router-dom';

function Plaganavbar() {
    return (
        <div className='plaganav'>
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <Link to={'/'} class="navbar-brand">
                    <img src={Logo} alt="Logo" className="logo container"/>
                </Link>
                <ul class="navbar-nav">
                <li class="nav-item">
                        <Link to={'/category/:category'} className="nav-link">
                            Lanzamientos
                        </Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Remeras</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Buzos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Shorts</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Plaga Kids</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            Accesorios
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Gorras</a>
                            <a class="dropdown-item" href="#">Medias</a>
                            <a class="dropdown-item" href="#">Mochilas</a>
                            <a class="dropdown-item" href="#">Cerámicas</a>
                            <a class="dropdown-item" href="#">Fanzines</a>
                        </div>
                    </li>
                </ul>
                <CartWidget/>
            </nav>
        </div>
            
    );
}

export default Plaganavbar;

