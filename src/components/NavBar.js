import React from 'react';
import Logo from '../img/1.svg';
import '../components/styles/NavBar.css';

class NavBar extends React.Component{
    render(){
        return(
           <div className="navBar">
                <a href="/">
                    <img src={Logo} alt="Logo" />
                    <span className="home">Home</span>
                </a>
           </div>

        );
    }
}

export default NavBar;