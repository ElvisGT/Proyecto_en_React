import React from 'react';
import LogoAvatar from '../img/1.svg';
import ContainerAvatar from '../img/2.svg';
import '../pages/styles/BadgeNew.css';
import NavBar from '../components/NavBar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component{
    render(){
        return(
            <div>
                <NavBar/>
            
                <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <Badge 
                                firstName="Elvis"
                                lastName="Gil" 
                                job="FrontEnd Engineer" 
                                red="@ELvis"
                                avatarLogo={LogoAvatar}
                                avatarContainer={ContainerAvatar}
                                />
                            </div>
                            <div className="col-6">
                                <BadgeForm/>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default BadgeNew;