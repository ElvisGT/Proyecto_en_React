import React from 'react';
import './styles/Badge.css'

class Badge extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="header">
                <img src={this.props.avatarLogo} alt="Logo"/>
                </div>

                <div className="myself">
                    <img src={this.props.avatarContainer} alt="Avatar"></img>
                    <h1>{this.props.firstName} <br /> {this.props.lastName}</h1>
                </div>

                <div className="about_me">
                    <p>{this.props.job}</p>
                    <p>{this.props.red}</p>
                </div>

                <div className="footer">
                    #ElvisGT
                </div>

            </div>
        )
    }
}

export default Badge;