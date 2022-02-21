import React from 'react';
import '../components/styles/BadgeForm.css';


class BadgeForm extends React.Component {
    state={
        
    };
    // handleChange = (e) =>{
    //     // console.log({
    //     //     name: e.target.name,
    //     //     value: e.target.value});

    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     });
    // }
    handleClick = (e) =>{
        console.log("Button was clicked");
    }

    handleSubmit = (e) =>{
        console.log("Form was Submitted");
        console.log(this.state);
    }


    render(){
        return(
                <form onSubmit={this.props.onSubmit} className="form">
                    <h1>New User</h1>
                    <label className="form-firstName">
                        <p>First Name</p>
                        <input onChange={this.props.onChange} type="text" name="FirstName" value={this.props.valueForm.FirstName}/>
                    </label> 
                    <label className="form-LastName">
                        <p>Last Name</p>
                        <input onChange={this.props.onChange} type="text" name="LastName" value={this.props.valueForm.LastName}/>
                    </label> 
                    <label className="form-Email">
                        <p>Email</p>
                        <input onChange={this.props.onChange} type="email" name="Email" autoComplete="email" value={this.props.valueForm.Email}/>
                    </label>
                    <label className="form-check">
                        <input onChange={this.props.onChange} type="checkbox" name="Checkbox" required/>
                        <span className="form-check-span">He leido las <span><a href="/">Reglas de usuario</a></span> y la <span><a href="/">Politica de seguridad</a></span></span>
                    </label>
                    <button onClick={this.handleClick} className="form-button">Save</button> 
                </form>
        );
    }
}

export default BadgeForm;