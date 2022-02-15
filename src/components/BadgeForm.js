import React from 'react';
import '../components/styles/BadgeForm.css';


class BadgeForm extends React.Component {
    handleChange = (e) =>{
        console.log({
            name: e.target.name,
            value: e.target.value});
    }
    handleClick = (e) =>{
        console.log("Button was clicked");
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Form was Submitted");
    }


    render(){
        return(
                <form onSubmit={this.handleSubmit} className="form">
                    <h1>New User</h1>
                    <label className="form-firstName">
                        <p>First Name</p>
                        <input onChange={this.handleChange} type="text" name="FirstName"/>
                    </label> 
                    <label className="form-LastName">
                        <p>Last Name</p>
                        <input type="text" name="LastName"/>
                    </label> 
                    <label className="form-Email">
                        <p>Email</p>
                        <input type="email" name="LastName"/>
                    </label>
                    <label className="form-check">
                        <input type="checkbox" />
                        <span className="form-check-span">He leido las <span className="hipervinculos"><a href="/">Reglas de usuario</a></span> y la <span className="hipervinculos"><a href="/">Politica de seguridad</a></span></span>
                    </label>
                    <button onClick={this.handleClick} className="form-button">Save</button> 
                </form>
        );
    }
}

export default BadgeForm;