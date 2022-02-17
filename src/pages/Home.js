import React from 'react';
import './styles/Home.css';
import Logo from '../img/1.svg';
import {Link} from 'react-router-dom';
 
export default function Home(){
    return (
        <React.Fragment>
            <div className="container_Home">
                <img src={Logo} alt="Logo" className="container_Home_img"/>
                <h1 className="container_Home_h1">Entra en la lista</h1>
                <p className="container_Home_p">Bienvenido a la lista de los usuarios registrados para la conferencia</p>
                    <div className="Links">
                        <Link to="/badges/new" className="container_Home_a">
                            Entrar
                        </Link>
                        <Link to="/badges" className="container_Home_a_list">
                            Listado
                        </Link>
                    </div>
            </div>
        </React.Fragment>

    );
}
