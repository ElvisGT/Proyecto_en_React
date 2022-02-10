import React from 'react';
import LogoConf from '../img/2.svg'
import ImgContainer from '../img/1.svg'
import './styles/Badge.css'

class Badge extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="header">
                <img src={LogoConf} alt="Logo"/>
                </div>

                <div className="myself">
                    <img src={ImgContainer} alt="Avatar"></img>
                    <h1>Elvis <br /> Gil</h1>
                </div>

                <div className="about_me">
                    <p>Desarrollador Frontend Engineer</p>
                    <p>@ElvisGilTorres</p>
                </div>

                <div className="footer">
                    #ElvisGT
                </div>

            </div>
        )
    }
}

export default Badge;