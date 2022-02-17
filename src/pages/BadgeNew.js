import React from 'react';
import LogoAvatar from '../img/1.svg';
import ContainerAvatar from '../img/2.svg';
import '../pages/styles/BadgeNew.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component{
    state = {form:{
        FirstName:'',
        LastName:'',
        Email:'',
    }};
    handleChange = e =>{
        // const nextForm = this.state.form;
        // nextForm[e.target.name] = e.target.value;

        this.setState({
            form :{
                ...this.state.form,
                [e.target.name]:e.target.value,

            } 
    
        });
       
    }
    render(){
        return(
            <React.Fragment>
                <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <Badge 
                                firstName={this.state.form.FirstName}
                                lastName={this.state.form.LastName} 
                                job="FrontEnd Engineer" 
                                red='@Elvis'
                                avatarLogo={LogoAvatar}
                                avatarContainer={ContainerAvatar}
                                />
                            </div>
                            <div className="col-6">
                                <BadgeForm onChange={this.handleChange} valueForm={this.state.form}/>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;