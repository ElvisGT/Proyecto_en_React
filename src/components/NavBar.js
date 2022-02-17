import React from 'react';
import Logo from '../img/1.svg';
import '../components/styles/NavBar.css';
import {Link} from 'react-router-dom';


class NavBar extends React.Component{
    render(){
        return(
            <div>
                <div className="navBar">
                    <Link to="/">
                        <img src={Logo} alt="Logo" />
                        <span className="home">Home</span>
                    </Link>
                </div>
                
           </div>

        );
    }
}

export default NavBar;